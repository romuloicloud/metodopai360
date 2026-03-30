require('dotenv').config({ path: require('path').join(__dirname, '.env.local') });
const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const h = { apikey: SUPA_KEY, Authorization: 'Bearer ' + SUPA_KEY };
const get = async (p) => (await fetch(SUPA_URL + '/rest/v1/' + p, { headers: h })).json();

async function run() {
  // Schema de concursos
  const c1 = await get('concursos?select=*&limit=1');
  console.log('=== concursos (colunas):', Object.keys(c1[0] || {}));
  console.log('=== concursos (todos):', JSON.stringify(
    await get('concursos?select=id,nome,banca'), null, 2)
  );

  // Schema de concursos_gps
  const c2 = await get('concursos_gps?select=*&limit=1');
  console.log('\n=== concursos_gps (colunas):', Object.keys(c2[0] || {}));

  // IDs dos concursos_gps que precisam de ponte
  console.log('\n=== concursos_gps (id + orgao, todos):');
  const gps = await get('concursos_gps?select=id,orgao,status_edital&limit=100');
  gps.forEach(g => console.log(' ', g.id, '|', g.orgao));
}
run().catch(console.error);
