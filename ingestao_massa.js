/**
 * INGESTÃO EM MASSA — Squad da Vitória
 * =====================================
 * Executa todos os scripts de concursos em sequência, com intervalo
 * entre cada um para não estrangular a API do Supabase.
 *
 * Uso: node ingestao_massa.js
 *      node ingestao_massa.js pf prf        ← só esses dois
 *      node ingestao_massa.js --dry-run     ← lista sem executar
 */

require('dotenv').config({ path: require('path').join(__dirname, '.env.local') });

// ── Registro de todos os concursos disponíveis ─────────────────────────────
const CONCURSOS = [
  { key: 'pmerj',    label: 'PMERJ - Soldado',               arquivo: './concursos/pmerj_soldado_2026'        },
  { key: 'pedro2',   label: 'Pedro II - 6º Ano EF 2026',     arquivo: './concursos/pedro_ii_6ano_ef_2026'     },
  { key: 'faetec',   label: 'FAETEC - EF Integral 2026',     arquivo: './ingestao_faetec_2026_ef_integral'    },
  { key: 'pf',       label: 'PF - Agente Federal 2025',      arquivo: './concursos/pf_agente_federal_2025'    },
  { key: 'prf',      label: 'PRF - Policial Rodoviário 2025', arquivo: './concursos/prf_policial_rodoviario_2025' },
  { key: 'bb',       label: 'BB - Escriturário 2023',        arquivo: './concursos/bb_escriturario_2023'      },
  { key: 'caixa',    label: 'Caixa - Técnico Bancário 2024', arquivo: './concursos/caixa_tecnico_bancario_2024' },
  { key: 'correios', label: 'Correios - Carteiro 2025',      arquivo: './concursos/correios_carteiro_2025'    },
  { key: 'tj',       label: 'TJ - Técnico Judiciário 2025',  arquivo: './concursos/tj_tecnico_judiciario_2025' },
];

const PAUSA_MS = 2000; // 2s entre cada concurso

// ── Filtro por args da linha de comando ────────────────────────────────────
const args = process.argv.slice(2).map(a => a.toLowerCase());
const dryRun = args.includes('--dry-run');
const filtro = args.filter(a => !a.startsWith('--'));

const fila = filtro.length > 0
  ? CONCURSOS.filter(c => filtro.includes(c.key))
  : CONCURSOS;

// ── Helpers ────────────────────────────────────────────────────────────────
const esperar = ms => new Promise(r => setTimeout(r, ms));

function formatarDuracao(ms) {
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

// ── Runner Principal ───────────────────────────────────────────────────────
async function main() {
  console.log('\n' + '█'.repeat(60));
  console.log('  INGESTÃO EM MASSA — SQUAD DA VITÓRIA');
  console.log('█'.repeat(60));

  if (dryRun) {
    console.log('\n[DRY RUN] Concursos que seriam executados:\n');
    fila.forEach((c, i) => console.log(`  ${i + 1}. [${c.key}] ${c.label}`));
    console.log(`\nTotal: ${fila.length} concursos\n`);
    return;
  }

  if (fila.length === 0) {
    console.error('\n[ERRO] Nenhuma key válida encontrada. Keys disponíveis:');
    CONCURSOS.forEach(c => console.error(`  --  ${c.key}`));
    process.exit(1);
  }

  console.log(`\nFila: ${fila.length} concurso(s)\n`);

  const resultados = [];
  const inicio = Date.now();

  for (let i = 0; i < fila.length; i++) {
    const c = fila[i];
    console.log(`\n[${ i + 1}/${fila.length}] ${c.label}`);
    console.log('─'.repeat(50));

    const t0 = Date.now();
    try {
      const mod = require(c.arquivo);
      // Módulos podem exportar via module.exports ou executar diretamente
      // Se o script usa executarIngestion internamente, o require já dispara
      const duracao = formatarDuracao(Date.now() - t0);
      resultados.push({ label: c.label, status: 'OK', duracao });
    } catch (err) {
      const duracao = formatarDuracao(Date.now() - t0);
      console.error(`  [FALHA] ${err.message}`);
      resultados.push({ label: c.label, status: 'FALHA', erro: err.message, duracao });
    }

    if (i < fila.length - 1) {
      console.log(`\n  Aguardando ${PAUSA_MS / 1000}s antes do próximo...`);
      await esperar(PAUSA_MS);
    }
  }

  // ── Relatório Final ──────────────────────────────────────────────────────
  const totalDuracao = formatarDuracao(Date.now() - inicio);
  console.log('\n\n' + '█'.repeat(60));
  console.log('  RELATÓRIO FINAL');
  console.log('█'.repeat(60));
  resultados.forEach(r => {
    const icone = r.status === 'OK' ? '✅' : '❌';
    console.log(`  ${icone} ${r.label} (${r.duracao})`);
    if (r.erro) console.log(`     └─ ${r.erro}`);
  });
  const ok = resultados.filter(r => r.status === 'OK').length;
  const falha = resultados.filter(r => r.status === 'FALHA').length;
  console.log(`\n  Total: ${ok} OK, ${falha} falha(s) — ${totalDuracao}`);
  console.log('█'.repeat(60));

  if (ok > 0) {
    console.log('\n  Execute agora para ver os IDs do catálogo:');
    console.log('  node gerar_catalogo_ids.js\n');
  }
}

main().catch(err => {
  console.error('\n[FATAL]', err.message);
  process.exit(1);
});
