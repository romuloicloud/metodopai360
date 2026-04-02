/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TEMPLATE OBRIGATÓRIO — INGESTÃO DE CONCURSO                ║
 * ║  Antigravity DEVE preencher TODOS os campos marcados [REQ]  ║
 * ║  Campos [OPC] são opcionais se não disponíveis no edital    ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * CHECKLIST DE ENTREGA (marcar com ✅ antes de enviar):
 *  [ ] Cabeçalho lista TODAS as disciplinas do edital
 *  [ ] Cada disciplina tem MÍNIMO 2 módulos
 *  [ ] Cada módulo tem MÍNIMO 1 pílula + 2 exercícios
 *  [ ] status_edital correto: 'previsto' | 'aberto' | 'encerrado'
 *  [ ] node concursos/ARQUIVO.js rodou sem erros de sintaxe
 *  [ ] correta: índice correto (0-based) verificado manualmente
 */

const { executarIngestion } = require('../engine_ingestao');

const CONFIG = {
  // ── [REQ] Identificadores ──────────────────────────────────────
  orgao_match:     'SIGLA_DO_ORGAO',          // ex: 'ESA', 'PMERJ', 'EEAr'
  concurso_nome:   'NOME COMPLETO 2026',      // ex: 'ESA - Sargento do Exército 2026'
  concurso_banca:  'Banca Organizadora',      // ex: 'CEBRASPE', 'FGV', 'Própria'

  // ── [REQ] GPS do Concurso ──────────────────────────────────────
  concurso_gps: {
    orgao:               'SIGLA',             // [REQ] igual ao orgao_match
    familia:             'civil',             // [REQ] 'civil' | 'militar' | 'policial'
    esfera:              'estadual',          // [REQ] 'federal' | 'estadual' | 'municipal'
    uf:                  'RJ',               // [REQ] 'BR' para federal
    link_matriz_pedagogica: null,             // [OPC] URL do edital
    status_edital:       'previsto',          // [REQ] 'previsto' | 'aberto' | 'encerrado'
    ano_ultimo_edital:   2026,               // [REQ]
    banca_ultimo_edital: 'Banca',            // [REQ]
    data_prova:          null,               // [OPC] 'YYYY-MM-DD' se divulgada
    idade_alvo:          'Adulto (18-40)',    // [OPC] 'Jovem (17-24)' | 'Adulto (18-40)'
    tipo_instituicao:    'Estadual Civil'     // [OPC]
  },

  // ── [REQ] Disciplinas ──────────────────────────────────────────
  // REGRA: listar TODAS as disciplinas do edital. Mínimo 2 módulos cada.
  disciplinas: [

    // ══════════════════════════════════════════════════════════
    // [REQ] DISCIPLINA 1 — (substituir pelo nome real)
    // ══════════════════════════════════════════════════════════
    {
      nome: '[REQ] Nome da Disciplina 1',
      modulos: [

        // ── Módulo 1.1 ─────────────────────────────────────────
        {
          nome:     '[REQ] Nome do Módulo',
          descricao:'[REQ] Descrição do conteúdo abordado neste módulo.',
          pilulas: [
            {
              titulo:           '[REQ] Título da Pílula',
              nivel_profundidade: 2,           // 1=básico, 2=intermediário, 3=avançado
              texto:            '[REQ] Texto explicativo completo. Mínimo 300 palavras. Inclua regras, macetes e dicas específicas desta banca.'
            }
          ],
          exercicios: [
            {
              titulo:         '[REQ] Título do Exercício 1',
              nivel_dificuldade: 2,            // 1=fácil, 2=médio, 3=difícil
              pergunta:       '[REQ] Enunciado completo da questão.',
              alternativas: [
                '[REQ] Alternativa A',         // índice 0
                '[REQ] Alternativa B',         // índice 1
                '[REQ] Alternativa C',         // índice 2
                '[REQ] Alternativa D',         // índice 3
                '[REQ] Alternativa E'          // índice 4
              ],
              correta:    0,                   // [REQ] índice 0-based da alternativa correta
              explicacao: '[REQ] Explicação detalhada do gabarito. Explique por que a correta é certa E por que as outras estão erradas.'
            },
            {
              titulo:         '[REQ] Título do Exercício 2',
              nivel_dificuldade: 1,
              pergunta:       '[REQ] Enunciado completo da questão.',
              alternativas: [
                '[REQ] Alternativa A',
                '[REQ] Alternativa B',
                '[REQ] Alternativa C',
                '[REQ] Alternativa D',
                '[REQ] Alternativa E'
              ],
              correta:    1,
              explicacao: '[REQ] Explicação detalhada.'
            }
          ]
        },

        // ── Módulo 1.2 — [REQ] MÍNIMO 2 MÓDULOS POR DISCIPLINA ──
        {
          nome:     '[REQ] Nome do Módulo 2',
          descricao:'[REQ] Descrição.',
          pilulas: [
            {
              titulo:           '[REQ] Título',
              nivel_profundidade: 2,
              texto:            '[REQ] Texto completo.'
            }
          ],
          exercicios: [
            {
              titulo: '[REQ] Exercício 1', nivel_dificuldade: 2,
              pergunta: '[REQ]',
              alternativas: ['[REQ]','[REQ]','[REQ]','[REQ]','[REQ]'],
              correta: 0, explicacao: '[REQ]'
            },
            {
              titulo: '[REQ] Exercício 2', nivel_dificuldade: 2,
              pergunta: '[REQ]',
              alternativas: ['[REQ]','[REQ]','[REQ]','[REQ]','[REQ]'],
              correta: 2, explicacao: '[REQ]'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // [REQ] DISCIPLINA 2 — copiar bloco acima e preencher
    // ══════════════════════════════════════════════════════════
    // ... repetir para CADA disciplina listada no edital

  ]
};

executarIngestion(CONFIG).catch(err => {
  console.error('\n❌ ERRO FATAL:', err.message);
  process.exit(1);
});
