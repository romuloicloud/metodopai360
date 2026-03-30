require('dotenv').config({ path: require('path').join(__dirname, '.env.local') });
const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const h = { apikey: SUPA_KEY, Authorization: 'Bearer ' + SUPA_KEY };

const get = async (path) => {
  const r = await fetch(SUPA_URL + '/rest/v1/' + path, { headers: h });
  return r.json();
};

async function run() {
  const concursos = await get('concursos?select=id,nome,banca');
  const gps = await get('concursos_gps?select=id,orgao,status_edital,banca_ultimo_edital');

  console.log('\n📋 TABELA concursos_gps (' + gps.length + ' registros):');
  gps.forEach(g => console.log('  -', g.orgao, '|', g.status_edital, '| banca:', g.banca_ultimo_edital));

  console.log('\n📋 TABELA concursos (' + concursos.length + ' registros):');

  for (const c of concursos) {
    const discs = await get('disciplinas?concurso_id=eq.' + c.id + '&select=id,nome');
    let totalMod = 0, totalPil = 0, totalEx = 0;

    for (const d of discs) {
      const mods = await get('modulos?disciplina_id=eq.' + d.id + '&select=id');
      totalMod += mods.length;
      for (const m of mods) {
        const pils = await get('pilulas_forja?modulo_id=eq.' + m.id + '&select=id');
        const exs  = await get('exercicios_forja?modulo_id=eq.' + m.id + '&select=id');
        totalPil += pils.length;
        totalEx  += exs.length;
      }
    }

    const status = totalPil > 0 && totalEx > 0 ? '✅ COMPLETO' : totalMod > 0 ? '⚠️  SEM CONTEÚDO' : '❌ VAZIO';
    console.log(`  ${status} | ${c.nome} (${c.banca})`);
    console.log(`           ${discs.length} disciplinas · ${totalMod} módulos · ${totalPil} pílulas · ${totalEx} exercícios`);
  }
}

run().catch(console.error);
