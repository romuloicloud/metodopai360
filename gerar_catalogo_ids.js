/**
 * GERADOR DE IDs DO CATÁLOGO
 * ===========================
 * Lê todos os registros de concursos_gps e imprime os IDs prontos para
 * colar no tela_catalogo_concursos.html.
 *
 * Uso: node gerar_catalogo_ids.js
 */

require('dotenv').config({ path: require('path').join(__dirname, '.env.local') });

const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const headers = {
    'apikey': SUPA_KEY,
    'Authorization': `Bearer ${SUPA_KEY}`
};

async function main() {
    const res = await fetch(
        `${SUPA_URL}/rest/v1/concursos_gps?select=id,orgao,concurso_ref_id&order=orgao`,
        { headers }
    );
    const data = await res.json();

    console.log('\n' + '='.repeat(70));
    console.log('MAPA DE IDs — concursos_gps (cole no tela_catalogo_concursos.html)');
    console.log('='.repeat(70));

    data.forEach(g => {
        const status = g.concurso_ref_id ? '✅ COM CONTEÚDO' : '⚠️  SEM CONTEÚDO';
        console.log(`\n${status}`);
        console.log(`  Órgão : ${g.orgao}`);
        console.log(`  Ponte : ${g.concurso_ref_id || 'SEM CONTEÚDO'}`);
        console.log(`  GPS ID: ${g.id}`);
        console.log(`  onclick: direcionarCatalogo('...', '...', '...', '${g.orgao}', '${g.id}')`);
    });

    console.log('\n' + '='.repeat(70));
    console.log(`Total: ${data.length} concursos no GPS`);
    console.log('='.repeat(70) + '\n');
}

main().catch(console.error);
