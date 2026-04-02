// api/whatsapp.js — Webhook WhatsApp Business + Funil de Fechamento
//
// ESTÁGIOS DA CONVERSA:
//   CONTATO_INICIAL  → bot envia abertura de relacionamento
//   OFERTA_ENVIADA   → bot envia link Kiwify + condição especial
//   AGUARDANDO       → lead não respondeu a oferta (silêncio)
//   CONVERTIDO       → pagou (marcado manualmente ou via webhook Kiwify)
//   ARQUIVADO        → desistiu / bloqueou / pós-prazo

const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
const WA_TOKEN = process.env.WHATSAPP_TOKEN;
const PHONE_ID = process.env.WHATSAPP_PHONE_ID;

// ── Supabase helpers ──────────────────────────────────────────────────────────
async function buscarConversa(telefone) {
    const res = await fetch(
        `${SUPA_URL}/rest/v1/whatsapp_conversas?telefone=eq.${telefone}&limit=1`,
        { headers: { apikey: SUPA_KEY, Authorization: `Bearer ${SUPA_KEY}` } }
    );
    const data = await res.json();
    return data?.[0] || null;
}

async function salvarConversa(telefone, nome, estagio) {
    await fetch(`${SUPA_URL}/rest/v1/whatsapp_conversas`, {
        method: 'POST',
        headers: {
            apikey: SUPA_KEY,
            Authorization: `Bearer ${SUPA_KEY}`,
            'Content-Type': 'application/json',
            Prefer: 'resolution=merge-duplicates'
        },
        body: JSON.stringify({
            telefone,
            nome,
            estagio,
            updated_at: new Date().toISOString()
        })
    });
}

// ── WhatsApp helper ───────────────────────────────────────────────────────────
async function enviarMensagem(para, texto) {
    if (!WA_TOKEN || !PHONE_ID) return;
    await fetch(`https://graph.facebook.com/v22.0/${PHONE_ID}/messages`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${WA_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: para,
            type: 'text',
            text: { body: texto }
        })
    });
}

// ── Mensagens do funil ────────────────────────────────────────────────────────
function msgContato(nome) {
    return `Oi ${nome}! 👋

Vi que você fez o diagnóstico e ficou bem próximo da sua aprovação...

Só que travou no último passo. O que aconteceu?

Posso te ajudar a destrancar o acesso agora com uma condição especial. 🎯`;
}

function msgOferta(nome) {
    return `${nome}, preparei algo especial pra você. 🔓

Como você já conhece o método, vou liberar o acesso completo com um desconto que não aparece no site:

✅ Diagnóstico de DNA já feito (você está na frente)
✅ Rota personalizada pela sua banca
✅ Teoria em áudio — estude onde estiver
✅ Questões reais filtradas pelo que cai

👉 Acesse agora com condição especial:
https://pay.kiwify.com.br/PkM1Eae

Esse link com desconto fica disponível por 24h. Qualquer dúvida é só falar aqui. 💪`;
}

function msgAguardando(nome) {
    return `${nome}, só passando pra avisar que o link especial vence hoje. ⏰

Se tiver alguma dúvida antes de finalizar — sobre o método, sobre seu concurso, sobre o que vai cair — é só me perguntar agora que respondo na hora.`;
}

// ── Handler principal ─────────────────────────────────────────────────────────
export default async function handler(req, res) {

    // Verificação do webhook (GET)
    if (req.method === 'GET') {
        const mode      = req.query['hub.mode'];
        const tok       = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];
        const verify    = process.env.WHATSAPP_VERIFY_TOKEN || 'pai360webhook';
        if (mode === 'subscribe' && tok === verify) return res.status(200).send(challenge);
        return res.status(403).json({ error: 'Token inválido' });
    }

    // Recebe mensagem (POST)
    if (req.method === 'POST') {
        const body = req.body || {};

        if (body.object !== 'whatsapp_business_account') {
            return res.status(200).json({ status: 'ignored' });
        }

        const msgs = body.entry?.[0]?.changes?.[0]?.value?.messages;
        if (!msgs || msgs.length === 0) {
            return res.status(200).json({ status: 'no_messages' });
        }

        const msg      = msgs[0];
        const telefone = msg.from;
        const nome     = body.entry?.[0]?.changes?.[0]?.value
                             ?.contacts?.[0]?.profile?.name || 'Candidato';
        const primeiro = nome.split(' ')[0];

        // Ignora mensagens do próprio bot (loop prevention)
        if (msg.from_me) return res.status(200).json({ status: 'self_ignored' });

        console.log(`[WA] Mensagem de ${telefone} (${primeiro})`);

        try {
            const conversa = await buscarConversa(telefone);
            const estagio  = conversa?.estagio || null;

            if (!estagio || estagio === 'CONTATO_INICIAL') {
                // Primeira mensagem — envia abertura e avança para oferta na próxima
                await enviarMensagem(telefone, msgContato(primeiro));
                await salvarConversa(telefone, primeiro, 'OFERTA_PENDENTE');
                console.log(`[WA] ${primeiro} → OFERTA_PENDENTE`);

            } else if (estagio === 'OFERTA_PENDENTE') {
                // Lead respondeu a abertura — envia o link
                await enviarMensagem(telefone, msgOferta(primeiro));
                await salvarConversa(telefone, primeiro, 'OFERTA_ENVIADA');
                console.log(`[WA] ${primeiro} → OFERTA_ENVIADA`);

            } else if (estagio === 'OFERTA_ENVIADA') {
                // Lead voltou sem converter — envia urgência
                await enviarMensagem(telefone, msgAguardando(primeiro));
                await salvarConversa(telefone, primeiro, 'AGUARDANDO');
                console.log(`[WA] ${primeiro} → AGUARDANDO`);

            } else if (estagio === 'AGUARDANDO') {
                // Já recebeu tudo — não envia mais (evita spam)
                // Aqui você pode assumir a conversa manualmente pelo app
                console.log(`[WA] ${primeiro} em AGUARDANDO — sem disparo automático`);

            } else if (estagio === 'CONVERTIDO') {
                // Já pagou — mensagem de boas-vindas
                await enviarMensagem(telefone,
                    `Olá ${primeiro}! Seja bem-vindo ao Método do Pai 360°! 🎖️\n\nSeu acesso está ativo em app.metododopai.com\n\nQualquer dúvida pode falar aqui. Bons estudos! 💪`
                );
            }

        } catch (err) {
            console.error('[WA] Erro no funil:', err.message);
        }

        return res.status(200).json({ status: 'ok' });
    }

    return res.status(405).json({ error: 'Método não permitido' });
}
