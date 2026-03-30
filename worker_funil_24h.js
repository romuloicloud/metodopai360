require('dotenv').config(); 
require('dotenv').config({ path: '.env.local', override: true }); // Blindagem absoluta
const { createClient } = require('@supabase/supabase-js');
const cron = require('node-cron');

// 1. CONEXÃO COM A BASE 360 (Ignorando qualquer ou projeto)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Usamos a Role Key para não precisar de Auth
const supabase = createClient(supabaseUrl, supabaseKey);

// 2. CONEXÃO COM A EVOLUTION API - MÉTODO DO PAI
const WPP_API_URL = process.env.MDP_WPP_API_URL || 'http://localhost:8080'; // Substituir pela URL real da Evolution do O Pai
const WPP_API_KEY = process.env.MDP_WPP_API_KEY || 'SUA_CHAVE_EVOLUTION_AQUI';
const WPP_SESSION = process.env.MDP_WPP_SESSION || 'metododopai';

// 3. O CORAÇÃO DO SNIPER (VARREDURA)
async function processarFunil24h() {
    console.log(`[RADAR FUNIL] Patrulhando candidatos pendentes há exatas 24h...`);
    
    // Calcula o marcador temporal exato de 24 horas atrás
    const vinteQuatroHorasAtras = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    
    const { data: leads, error } = await supabase
        .from('diagnosticos_resultados')
        .select('*')
        .eq('status_pagamento', 'pendente')
        .eq('funil_status', 'diagnostico_concluido')
        .lte('data_conclusao', vinteQuatroHorasAtras); // Pega apenas os que bateram e congelaram a 24h
        
    if (error) {
        console.error("❌ [ERRO DE BD] Falha ao tentar sondar a trincheira:", error.message);
        return;
    }
    
    if (!leads || leads.length === 0) {
        console.log(`[RADAR] Nenhum recruta cruzou a linha de corte das 24h agora.`);
        return;
    }
    
    for (const lead of leads) {
        if (!lead.telefone_whatsapp) continue;
        
        console.log(`\n🎯 [ALVO TRAVADO] Disparando Tática Psicológica para: ${lead.nome_responsavel.split(' ')[0]} - (${lead.telefone_whatsapp})`);
        
        let zapFormatado = lead.telefone_whatsapp.replace(/\D/g, '');
        if (!zapFormatado.startsWith('55')) zapFormatado = '55' + zapFormatado;
        
        // MENSAGEM DO GATILHO
        const msgTexto = `Fala, ${lead.nome_responsavel.split(' ')[0]}! Aqui é a equipe Método do Pai. O comandante analisou o seu Diagnóstico de Nivelamento. Tivemos uma surpresa com aquele seu gap final. Cadê você aqui na base pra gente resolver isso?`;

        // Atira
        const msgId = await enviarMensagemWhatsApp(zapFormatado, msgTexto);
        
        if (msgId) {
            console.log(`⏳ Aguardando 10 segundos para deletar a mensagem...`);
            // Aguarda para o Push do celular acender e a pessoa ler a Preview
            setTimeout(async () => {
                await apagarMensagemWhatsApp(zapFormatado, msgId);
                
                // Grava o sucesso do "Ghosting" no banco
                await supabase.from('diagnosticos_resultados')
                    .update({ funil_status: 'gatilho_24h_apagado' })
                    .eq('id', lead.id);

                console.log(`👻 [GHOSTING APLICADO] Mensagem removida com sucesso. Gatilho plantado no banco.`);
            }, 10000); // 10 Segundos: Tempo exato para a notificação cair e o curioso não ver o chat.
        }
    }
}

// 4. MÚSCULOS DE DESPACHO EVOLUTION API
async function enviarMensagemWhatsApp(numero, texto) {
    try {
        const response = await fetch(`${WPP_API_URL}/message/sendText/${WPP_SESSION}`, {
            method: 'POST',
            headers: {
                'apikey': WPP_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                number: numero, 
                text: texto,
                delay: 2000 // digita por 2 segundos
            })
        });

        const json = await response.json();
        if (response.ok && json.key) {
            console.log(`✅ [EVOLUTION] Push enviado com sucesso! msgId: ${json.key.id}`);
            return json.key; // Retorna a key inteira pra deletar depois
        } else {
            console.error(`❌ [EVOLUTION] Falha no disparo. Resposta:`, json);
            return null;
        }
    } catch (e) {
        console.error(`💥 [EVOLUTION] Queda de comunicação na API:`, e.message);
        return null;
    }
}

async function apagarMensagemWhatsApp(numero, keyProtocol) {
    try {
        // Rota de deletar na Evolution v2 requer o array messages que repassa as keys
        const response = await fetch(`${WPP_API_URL}/chat/revokeMessage/${WPP_SESSION}`, {
            method: 'POST',
            headers: {
                'apikey': WPP_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                number: numero, 
                messageCode: keyProtocol.id // Dependendo da versão, usa revokeMessage ou deleteMessage
            })
        });

        if (response.ok) {
            console.log(`✅ [EVOLUTION] Mensagem "Apagada para todos". Gatilho Ativado!`);
        } else {
            console.log(`⚠️ [EVOLUTION] Falha no Revoc. Resposta:`, await response.json());
        }
    } catch (e) {
        console.error(`💥 [EVOLUTION] Erro na rede térmica ao apagar:`, e.message);
    }
}

// 5. CRONÔMETRO (O SOLDADO QUE NUNCA DORME)
console.log("\n==============================================");
console.log("🔥 THE GHOST SNIPER - FUNIL MÉTODO DO PAI 360");
console.log("==============================================");
console.log("Ativando varredura termal no banco Supabase...");
// A cada 5 minutos na fase de Testes e Ajustes:
cron.schedule('*/5 * * * *', () => {
    processarFunil24h();
});
console.log(">> AGUARDANDO CRON (Intervalo: 5 minutos)...\n");

// Roda 1 vez agora só para ver se pega poeira acumulada:
processarFunil24h();
