/**
 * ENGINE DE INGESTÃO UNIVERSAL — Squad da Vitória
 * ================================================
 * Motor genérico de 5 níveis para ingestão de qualquer concurso no Supabase.
 * Uso: const { executarIngestion } = require('./engine_ingestao');
 *      await executarIngestion(config);
 *
 * Hierarquia: concursos_gps + concursos → disciplinas → modulos → pilulas_forja → exercicios_forja
 */

require('dotenv').config({ path: require('path').join(__dirname, '.env.local') });

const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPA_URL || !SUPA_KEY) {
  throw new Error('SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY devem estar no .env.local');
}

const headers = {
  'apikey': SUPA_KEY,
  'Authorization': `Bearer ${SUPA_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation'
};

// ── Helpers REST ──────────────────────────────────────────────

async function supaInsert(tabela, payload) {
  const res = await fetch(`${SUPA_URL}/rest/v1/${tabela}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`[${tabela}] Erro ${res.status}: ${JSON.stringify(data)}`);
  return Array.isArray(data) ? data[0] : data;
}

async function supaSelect(tabela, filtros = {}) {
  const params = new URLSearchParams(filtros);
  const res = await fetch(`${SUPA_URL}/rest/v1/${tabela}?${params}`, { headers });
  const data = await res.json();
  if (!res.ok) throw new Error(`[${tabela}] Erro ${res.status}: ${JSON.stringify(data)}`);
  return data;
}

// ── Engine Principal ──────────────────────────────────────────

/**
 * @param {Object} config
 * @param {Object} config.concurso_gps   - Payload completo para concursos_gps
 * @param {string} config.concurso_nome  - Nome curto para tabela concursos (ex: "Pedro II 6º ano EF 2026")
 * @param {string} config.concurso_banca - Banca organizadora
 * @param {string} config.orgao_match    - Valor exato do campo orgao para busca de duplicatas em concursos_gps
 * @param {Array}  config.disciplinas    - [{ nome, modulos: [{ nome, descricao, pilulas: [...], exercicios: [...] }] }]
 */
async function executarIngestion(config) {
  const { concurso_gps, concurso_nome, concurso_banca, orgao_match, disciplinas } = config;

  console.log(`\n🔥 INGESTÃO: ${concurso_nome}`);
  console.log('='.repeat(60));

  // ── NÍVEL 1: Concurso ────────────────────────────────────────
  console.log('\n[N1] Concurso...');

  // 1a. Garante registro em concursos (FK principal da hierarquia)
  const concExist = await supaSelect('concursos', { nome: `eq.${concurso_nome}`, select: 'id,nome' });
  let concursoId;
  if (concExist.length > 0) {
    concursoId = concExist[0].id;
    console.log(`  ✅ concursos: já existe. ID: ${concursoId}`);
  } else {
    const novo = await supaInsert('concursos', { nome: concurso_nome, banca: concurso_banca });
    concursoId = novo.id;
    console.log(`  ✅ concursos: criado. ID: ${concursoId}`);
  }

  // 1b. Garante registro em concursos_gps com ponte concurso_ref_id preenchida
  const gpsExist = await supaSelect('concursos_gps', { orgao: `eq.${orgao_match}`, select: 'id,concurso_ref_id' });
  if (gpsExist.length === 0) {
    // Apenas colunas que existem em concursos_gps (cargo, vagas, remuneracao, banca não existem)
    const gpsPayloadSafe = {
      orgao:        concurso_gps.orgao,
      familia:      concurso_gps.familia      || 'geral',
      esfera:       concurso_gps.esfera       || 'federal',
      uf:           concurso_gps.uf           || 'BR',
      status_edital: concurso_gps.status_edital || 'previsto',
      concurso_ref_id: concursoId
    };
    await supaInsert('concursos_gps', gpsPayloadSafe);
    console.log('  ✅ concursos_gps: criado com ponte.');
  } else if (!gpsExist[0].concurso_ref_id) {
    // Preenche a ponte se ainda estiver vazia (registros legados)
    await fetch(`${SUPA_URL}/rest/v1/concursos_gps?id=eq.${gpsExist[0].id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ concurso_ref_id: concursoId })
    });
    console.log(`  ✅ concursos_gps: ponte preenchida. gps_id=${gpsExist[0].id} → concurso_id=${concursoId}`);
  } else {
    console.log('  ✅ concursos_gps: já existe com ponte.');
  }

  // ── NÍVEL 2: Disciplinas ─────────────────────────────────────
  console.log('\n[N2] Disciplinas...');
  for (const disc of disciplinas) {
    const discExist = await supaSelect('disciplinas', {
      concurso_id: `eq.${concursoId}`,
      nome: `eq.${disc.nome}`,
      select: 'id'
    });
    let discId;
    if (discExist.length > 0) {
      discId = discExist[0].id;
      console.log(`  ✅ "${disc.nome}" já existe.`);
    } else {
      const nova = await supaInsert('disciplinas', { concurso_id: concursoId, nome: disc.nome });
      discId = nova.id;
      console.log(`  ✅ "${disc.nome}" criada. ID: ${discId}`);
    }

    // ── NÍVEL 3: Módulos ───────────────────────────────────────
    console.log(`\n[N3] Módulos de "${disc.nome}"...`);
    for (const mod of disc.modulos) {
      const modExist = await supaSelect('modulos', {
        disciplina_id: `eq.${discId}`,
        nome: `eq.${mod.nome}`,
        select: 'id'
      });
      let modId;
      if (modExist.length > 0) {
        modId = modExist[0].id;
        console.log(`  ✅ "${mod.nome}" já existe.`);
      } else {
        const novo = await supaInsert('modulos', {
          disciplina_id: discId,
          nome: mod.nome,
          descricao: mod.descricao
        });
        modId = novo.id;
        console.log(`  ✅ "${mod.nome}" criado. ID: ${modId}`);
      }

      // ── NÍVEL 4: Pílulas ─────────────────────────────────────
      let primeirapilulaId = null;
      for (const pilula of (mod.pilulas || [])) {
        const pilExist = await supaSelect('pilulas_forja', {
          modulo_id: `eq.${modId}`,
          titulo: `eq.${pilula.titulo}`,
          select: 'id'
        });
        let pilulaId;
        if (pilExist.length > 0) {
          pilulaId = pilExist[0].id;
        } else {
          const nova = await supaInsert('pilulas_forja', {
            modulo_id: modId,
            nivel_profundidade: pilula.nivel_profundidade || 1,
            titulo: pilula.titulo,
            texto: pilula.texto
          });
          pilulaId = nova.id;
          console.log(`    ✅ Pílula "${pilula.titulo}" criada.`);
        }
        if (!primeirapilulaId) primeirapilulaId = pilulaId;
      }

      // ── NÍVEL 5: Exercícios ───────────────────────────────────
      for (const ex of (mod.exercicios || [])) {
        const exExist = await supaSelect('exercicios_forja', {
          modulo_id: `eq.${modId}`,
          titulo: `eq.${ex.titulo}`,
          select: 'id'
        });
        if (exExist.length > 0) continue;

        await supaInsert('exercicios_forja', {
          pilula_id: primeirapilulaId,
          modulo_id: modId,
          nivel_dificuldade: ex.nivel_dificuldade || 1,
          titulo: ex.titulo,
          pergunta: ex.pergunta,
          alternativas: ex.alternativas,
          correta: ex.correta,
          explicacao: ex.explicacao
        });
        console.log(`    ✅ Exercício "${ex.titulo}" criado.`);
      }
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`🎯 CONCLUÍDO: ${concurso_nome}`);
  console.log(`   concurso_id: ${concursoId}`);
  console.log('='.repeat(60) + '\n');

  return concursoId;
}

module.exports = { executarIngestion };
