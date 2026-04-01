// api/whatsapp.js — Webhook WhatsApp Business API

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const mode      = req.query['hub.mode'];
        const token     = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];
        const verify    = process.env.WHATSAPP_VERIFY_TOKEN || 'pai360webhook';

        if (mode === 'subscribe' && token === verify) {
            return res.status(200).send(challenge);
        }
        return res.status(403).json({ error: 'Token inválido' });
    }

    if (req.method === 'POST') {
        const body = req.body || {};
        if (body.object !== 'whatsapp_business_account') {
            return res.status(200).json({ status: 'ignored' });
        }

        const msgs     = body.entry?.[0]?.changes?.[0]?.value?.messages;
        if (!msgs || msgs.length === 0) {
            return res.status(200).json({ status: 'no_messages' });
        }

        const from  = msgs[0].from;
        const nome  = body.entry?.[0]?.changes?.[0]?.value?.contacts?.[0]?.profile?.name || 'Candidato';
        const primeiro = nome.split(' ')[0];

        const texto = `Oi ${primeiro}! 👋\n\nVi que você fez o diagnóstico e ficou bem próximo da sua aprovação...\n\nSó que travou no último passo. O que aconteceu?\n\nPosso te ajudar a destrancar o acesso agora com uma condição especial. 🎯`;

        const waToken = process.env.WHATSAPP_TOKEN;
        const phone   = process.env.WHATSAPP_PHONE_ID;

        if (waToken && phone) {
            await fetch(`https://graph.facebook.com/v22.0/${phone}/messages`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${waToken}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ messaging_product: 'whatsapp', to: from, type: 'text', text: { body: texto } })
            });
        }

        return res.status(200).json({ status: 'ok' });
    }

    return res.status(405).json({ error: 'Método não permitido' });
}
