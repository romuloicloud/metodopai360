require('dotenv').config({ path: require('path').join(__dirname, '.env.local') });
const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const h = { apikey: SUPA_KEY, Authorization: 'Bearer ' + SUPA_KEY };
const get = async (path) => (await fetch(SUPA_URL + '/rest/v1/' + path, { headers: h })).json();

async function run() {
  const conc = await get('concursos?nome=eq.PMERJ&select=id,nome,banca');
  console.log('concurso:', JSON.stringify(conc));
  const id = conc[0].id;

  const discs = await get('disciplinas?concurso_id=eq.' + id + '&select=id,nome');
  for (const d of discs) {
    console.log('\nDISCIPLINA:', d.nome);
    const mods = await get('modulos?disciplina_id=eq.' + d.id + '&select=id,nome,descricao');
    for (const m of mods) {
      const p = await get('pilulas_forja?modulo_id=eq.' + m.id + '&select=id,titulo');
      const e = await get('exercicios_forja?modulo_id=eq.' + m.id + '&select=id,titulo');
      console.log('  MOD:', m.nome);
      console.log('    pilulas:', JSON.stringify(p.map(x => x.titulo)));
      console.log('    exercicios:', JSON.stringify(e.map(x => x.titulo)));
    }
  }

  // Duplicatas GPS
  console.log('\n--- GPS duplicatas PMERJ ---');
  const gps = await get('concursos_gps?orgao=ilike.*PMERJ*&select=id,orgao,status_edital');
  gps.forEach(g => console.log(' ', g.id, '|', g.orgao, '|', g.status_edital));
}
run().catch(console.error);
