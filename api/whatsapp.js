// api/whatsapp.js — Webhook WhatsApp Business API

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'pai360webhook';
const WA_TOKEN     = process.env.WHATSAPP_TOKEN;
const PHONE_ID     = process.env.WHATSAPP_PHONE_ID;

export default async function handler(req, res) {
    // Verificação do webhook (GET) — exigida pelo Meta
    if (req.method === 'GET') {
        const mode      = req.query['hub.mode'];
        const token     = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            return res.status(200).send(challenge);
        }
        return res.status(403).json({ error: 'Token inválido' });
    }

    // Recebimento de mensagens (POST)
    if (req.method === 'POST') {
        try {
            const body = req.body;

            if (body.object !== 'whatsapp_business_account') {
                return res.status(200).json({ status: 'ignored' });
            }

            const msgs  = body.entry?.[0]?.changes?.[0]?.value?.messages;
            if (!msgs || msgs.length === 0) {
                return res.status(200).json({ status: 'no_messages' });
            }

            const msg   = msgs[0];
            const from  = msg.from;
            const nome  = body.entry?.[0]?.changes?.[0]?.value?.contacts?.[0]?.profile?.name || 'Candidato';
            const primeiro = nome.split(' ')[0];

            // Funil: responde ao candidato que retornou
            const resposta = `Oi ${primeiro}! 👋\n\nVi que você fez o diagnóstico e ficou bem próximo da sua aprovação...\n\nSó que travou no último passo. O que aconteceu?\n\nPosso te ajudar a destrancar o acesso agora com uma condição especial. 🎯`;

            await enviarMensagem(from, resposta);

            return res.status(200).json({ status: 'ok' });
        } catch (err) {
            console.error('[WEBHOOK] Erro:', err);
            return res.status(200).json({ status: 'error' });
        }
    }

    return res.status(405).json({ error: 'Método não permitido' });
}

async function enviarMensagem(para, texto) {
    if (!WA_TOKEN || !PHONE_ID) return;
    await fetch(`https://graph.facebook.com/v22.0/${PHONE_ID}/messages`, {
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
}
