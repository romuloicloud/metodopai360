// api/cron_funil.js — Cron Job do funil de carrinho abandonado
// Roda todo dia às 10h via Vercel Cron
// Busca leads que fizeram diagnóstico há 24h e não pagaram → dispara template WhatsApp

const SUPABASE_URL  = process.env.SUPABASE_URL;
const SUPABASE_KEY  = process.env.SUPABASE_ANON_KEY;
const WA_TOKEN      = process.env.WHATSAPP_TOKEN;
const PHONE_ID      = process.env.WHATSAPP_PHONE_ID;

export default async function handler(req, res) {
    // Segurança: só aceita chamadas do Vercel Cron
    if (req.headers['authorization'] !== `Bearer ${process.env.CRON_SECRET}`) {
        return res.status(401).json({ error: 'Não autorizado' });
    }

    try {
        // Busca leads cadastrados entre 23h e 25h atrás que não pagaram
        const agora    = new Date();
        const de       = new Date(agora.getTime() - 25 * 60 * 60 * 1000).toISOString();
        const ate      = new Date(agora.getTime() - 23 * 60 * 60 * 1000).toISOString();

        const resp = await fetch(
            `${SUPABASE_URL}/rest/v1/usuarios?created_at=gte.${de}&created_at=lte.${ate}&select=nome_guerra,whatsapp`,
            {
                headers: {
                    'apikey': SUPABASE_KEY,
                    'Authorization': `Bearer ${SUPABASE_KEY}`
                }
            }
        );

        const leads = await resp.json();
        console.log(`[CRON] ${leads.length} leads elegíveis para o funil`);

        const resultados = [];
        for (const lead of leads) {
            const numero   = lead.whatsapp?.replace(/\D/g, '');
            const primeiro = lead.nome_guerra?.split(' ')[0] || 'Candidato';

            if (!numero || numero.length < 10) continue;

            // Intervalo de 3 minutos entre disparos para não acionar bloqueio
            await delay(3 * 60 * 1000);

            const msgId = await enviarTemplate(numero, primeiro);

            if (msgId) {
                // Apaga a mensagem após 30 segundos (gatilho de curiosidade)
                setTimeout(() => apagarMensagem(msgId), 30 * 1000);
                resultados.push({ numero, status: 'enviado' });
                console.log(`[CRON] Disparado para ${numero}`);
            }
        }

        return res.status(200).json({ disparados: resultados.length, resultados });
    } catch (err) {
        console.error('[CRON] Erro:', err);
        return res.status(500).json({ error: err.message });
    }
}

async function enviarTemplate(para, nome) {
    const resp = await fetch(`https://graph.facebook.com/v22.0/${PHONE_ID}/messages`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${WA_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: `55${para}`,
            type: 'template',
            template: {
                name: 'carrinho_abandonado_pai360',
                language: { code: 'pt_BR' },
                components: [{
                    type: 'body',
                    parameters: [{ type: 'text', parameter_name: 'nome', text: nome }]
                }]
            }
        })
    });

    const data = await resp.json();
    return data?.messages?.[0]?.id || null;
}

async function apagarMensagem(messageId) {
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

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
