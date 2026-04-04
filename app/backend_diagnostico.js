const { createClient } = require('@supabase/supabase-js');

// Usando as credenciais públicas que já temos
const supabaseUrl = (window.ENV && window.ENV.SUPABASE_URL) || '';
const supabaseKey = (window.ENV && window.ENV.SUPABASE_ANON_KEY) || '';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchDiagnosticoQuestions(nivel) {
  // Puxar 5 questões aleatórias do Core360 que casam com o nível
  const { data, error } = await supabase
    .from('questoes_diagnostico')
    .select(`
      id, texto_questao, opcao_a, opcao_b, opcao_c, opcao_d, resposta_correta,
      base_conhecimento!inner(nivel, is_core_360)
    `)
    .eq('base_conhecimento.nivel', nivel)
    .eq('base_conhecimento.is_core_360', true)
    .limit(5);

  if (error) {
    console.error("Erro ao buscar questões:", error);
    return [];
  }
  
  return data;
}

module.exports = { fetchDiagnosticoQuestions };

// Teste de chamada
if (require.main === module) {
  fetchDiagnosticoQuestions('Médio').then(res => console.log('Questões:', JSON.stringify(res, null, 2)));
}
