import { createClient } from '@supabase/supabase-js';
import axios from 'axios'; // Simulação para webhook do bot/ads

const supabaseUrl = window.ENV.SUPABASE_URL;
const supabaseKey = window.ENV.SUPABASE_ANON_KEY; 
const supabase = createClient(supabaseUrl, supabaseKey);

// Webhook simulado do N8N / Chatbot / Meta Conversions API
const WEBHOOK_BOT_WHATSAPP = 'https://n8n.metododopai.com/webhook/resgate-24h';
const WEBHOOK_META_ADS = 'https://n8n.metododopai.com/webhook/pixel-retargeting';

export async function processarFunil24h() {
  console.log("Iniciando varredura de Leads Pendentes (24h+)...");

  // Busca recálculo de banco onde tempo de criação > 24h e status = pendente
  const vinteQuatroHorasAtras = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  const { data: leads, error } = await supabase
    .from('diagnosticos_resultados')
    .select('*')
    .eq('status_pagamento', 'pendente')
    .eq('funil_status', 'nao_acionado')
    .lte('data_conclusao', vinteQuatroHorasAtras);

  if (error) {
    console.error("Erro banco de dados:", error);
    return;
  }

  if (!leads || leads.length === 0) {
    console.log("Nenhum lead pendente na janela de 24h hoje.");
    return;
  }

  console.log(`Encontrados ${leads.length} leads para resgate. Iniciando disparos...`);

  for (const lead of leads) {
    // 1. Disparo para o Closer Vendas (WhatsApp Bot)
    const payloadWhatsApp = {
      lead_id: lead.id,
      nome_responsavel: lead.nome_responsavel,
      telefone: lead.telefone_whatsapp,
      meta: lead.meta_objetivo,
      pontuacao: lead.pontuacao_geral,
      gatilho: 'toque_1_empatia' 
    };

    // 2. Disparo para o Estrategista 20k (Público Personalizado Facebook Ads)
    const payloadAds = {
      event_name: 'Lead_Diagnostico_Concluido_Pendente',
      phone: lead.telefone_whatsapp,
      value: 0
    };

    try {
      // Envia para o workflow do WhatsApp
      await axios.post(WEBHOOK_BOT_WHATSAPP, payloadWhatsApp);
      
      // Envia para popular o público de Remarketing no Meta Ads
      await axios.post(WEBHOOK_META_ADS, payloadAds);

      // Atualiza status no banco para não re-enviar amanhã
      await supabase
        .from('diagnosticos_resultados')
        .update({ funil_status: 'mensagem_1_enviada' })
        .eq('id', lead.id);

      console.log(`Lead ${lead.nome_responsavel} enviado para resgate e remarketing com sucesso.`);
    } catch (err) {
      console.error(`Falha ao processar lead ${lead.id}:`, err.message);
    }
  }
}
