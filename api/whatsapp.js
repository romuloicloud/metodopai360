// api/whatsapp.js — Webhook WhatsApp Business API
// Recebe mensagens dos candidatos e dispara funil de carrinho abandonado

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'pai360webhook';
const WA_TOKEN    = process.env.WHATSAPP_TOKEN;
const PHONE_ID    = process.env.WHATSAPP_PHONE_ID;

export default async function handler(req, res) {
    // ── Verificação do webhook (GET) ──────────────────────────────────────
    if (req.method === 'GET') {
        const mode      = req.query['hub.mode'];
        const token     = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log('[WEBHOOK] Verificação OK');
            return res.status(200).send(challenge);
        }
        return res.status(403).json({ error: 'Token inválido' });
    }

    // ── Recebimento de mensagens (POST) ───────────────────────────────────
    if (req.method === 'POST') {
        try {
            const body = req.body;

            // Valida estrutura da mensagem
            if (body.object !== 'whatsapp_business_account') {
                return res.status(200).json({ status: 'ignored' });
            }

            const entry   = body.entry?.[0];
            const changes = entry?.changes?.[0];
            const value   = changes?.value;
            const msgs    = value?.messages;

            if (!msgs || msgs.length === 0) {
                return res.status(200).json({ status: 'no_messages' });
            }

            const msg   = msgs[0];
            const from  = msg.from;   // número do candidato
            const tipo  = msg.type;
            const texto = tipo === 'text' ? msg.text?.body : `[${tipo}]`;
            const nome  = value?.contacts?.[0]?.profile?.name || 'Candidato';

            console.log(`[WEBHOOK] Mensagem de ${nome} (${from}): ${texto}`);

            // ── Funil: candidato respondeu após mensagem apagada ──────────
            await tratarResposta(from, nome, texto);

            return res.status(200).json({ status: 'ok' });
        } catch (err) {
            console.error('[WEBHOOK] Erro:', err);
            return res.status(200).json({ status: 'error' }); // sempre 200 para Meta
        }
    }

    return res.status(405).json({ error: 'Método não permitido' });
}

// ── Lógica do funil ───────────────────────────────────────────────────────
async function tratarResposta(from, nome, texto) {
    const primeiroNome = nome.split(' ')[0];
    const textoLower   = (texto || '').toLowerCase();

    // Detecta interesse (qualquer resposta após mensagem apagada)
    const mensagem = montarMensagemFunil(primeiroNome);
    await enviarMensagem(from, mensagem);
}

function montarMensagemFunil(nome) {
    return `Oi ${nome}! 👋

Vi que você fez o diagnóstico e ficou bem próximo da sua aprovação...

Só que travou no último passo. O que aconteceu?

Posso te ajudar a destrancar o acesso agora com uma condição especial. 🎯`;
}

// ── Envio de mensagem via API ────────────────────────────────────────────
async function enviarMensagem(para, texto) {
    if (!WA_TOKEN || !PHONE_ID) {
        console.warn('[WEBHOOK] Credenciais não configuradas');
        return;
    }

    const resp = await fetch(`https://graph.facebook.com/v22.0/${PHONE_ID}/messages`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${WA_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: para,
            type: 'text',
            text: { body: texto }
        })
    });

    const data = await resp.json();
    console.log('[WEBHOOK] Mensagem enviada:', JSON.stringify(data));
    return data;
}

// ── Apagar mensagem (estratégia do gatilho de curiosidade) ───────────────
export async function apagarMensagem(messageId) {
    if (!WA_TOKEN || !PHONE_ID) return;

    await fetch(`https://graph.facebook.com/v22.0/${PHONE_ID}/messages`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${WA_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messaging_product: 'whatsapp',
            message_id: messageId,
            status: 'deleted'
        })
    });
}
