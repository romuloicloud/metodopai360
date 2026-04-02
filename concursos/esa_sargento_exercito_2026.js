/**
 * DADOS: ESA — Escola de Sargentos das Armas 2026
 * Banca: Própria (Exército Brasileiro) | Ingresso: carreira de Sargento do Exército
 * Público-alvo: jovens de 17 a 24 anos (ou 26 áreas específicas)
 *
 * Disciplinas principais:
 *  1. Matemática
 *  2. Língua Portuguesa
 *  3. História e Geografia do Brasil
 *  4. Inglês
 */

const { executarIngestion } = require('../engine_ingestao');

const CONFIG = {
  orgao_match: 'ESA',
  concurso_nome: 'ESA - Sargento do Exército 2026',
  concurso_banca: 'Própria (Exército)',

  concurso_gps: {
    orgao: 'ESA',
    familia: 'militar',
    esfera: 'federal',
    uf: 'BR',
    link_matriz_pedagogica: 'https://www.esa.eb.mil.br/index.php/pt/concurso',
    status_edital: 'previsto',
    ano_ultimo_edital: 2025,
    banca_ultimo_edital: 'Exército',
    data_prova: null,
    idade_alvo: 'Jovem (17-24)',
    tipo_instituicao: 'Federal Militar'
  },

  disciplinas: [

    // ══════════════════════════════════════════════════════════
    // 1. MATEMÁTICA
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Matemática',
      modulos: [
        {
          nome: 'Funções — 1º Grau, 2º Grau e Modular',
          descricao: 'Estudo das funções polinomiais de 1º e 2º grau, suas raízes, gráficos e função modular aplicados ao concurso de Sargento.',
          pilulas: [
            {
              titulo: 'Função do 2º Grau: Enxergando o Vértice e Maximizando o Dano',
              nivel_profundidade: 2,
              texto: 'Na ESA, a parábola matemática é como a trajetória de um morteiro. A Função do 2º Grau f(x) = ax² + bx + c dita as regras. Se o (a) for positivo, a concavidade é para cima. Se for negativo, é para baixo, e isso é crucial porque dita se você terá um Ponto de Mínimo ou um Ponto de Máximo absoluto!\n\nRegra Tática de Ouro: O x do vértice (xv) é onde ocorre o pico ou o fundo do poço, calculado por -b/(2a). O y do vértice (yv) é o valor MÁXIMO ou MÍNIMO da função, obtido por -Delta/(4a). A banca não quer que você calcule aleatoriamente; ela vai criar uma historinha sobre o "alcance máximo" ou o "lucro máximo". Viu a palavra MÁXIMO? Pare tudo. Calcule o Vértice! Não tente chutar caminhos alternativos.'
            }
          ],
          exercicios: [
            {
              titulo: 'Alcance máximo do Vértice em lançamento parabólico',
              nivel_dificuldade: 2,
              pergunta: 'A trajetória de um projétil é descrita pela função h(t) = -5t² + 40t, onde h é a altura em metros e t é o tempo em segundos. Qual é a altura MÁXIMA atingida pelo projétil?',
              alternativas: [
                '40 metros',
                '60 metros',
                '80 metros',
                '100 metros',
                '4 metros'
              ],
              correta: 2,
              explicacao: 'A banca canta a pedra: pediu o valor "MÁXIMO", você saca a fórmula do Y do Vértice (-Delta/4a). Aqui, a=-5, b=40, c=0. Primeiro ache o Xv: -b/2a = -40/(2 × -5) = 4 segundos. Para achar a altura máxima (Yv), basta jogar o 4 na função: h(4) = -5(4)² + 40(4) = -5(16) + 160 = -80 + 160 = 80 metros. Caiu no erro de calcular apenas o Xv e marcar 4? Você seria punido. O soldado tem que saber a diferença entre QUANDO atinge o máximo (t=4) e QUAL é o máximo (h=80). Alternativa C.'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 2. LÍNGUA PORTUGUESA
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Língua Portuguesa',
      modulos: [
        {
          nome: 'Sintaxe e Regência Punitiva',
          descricao: 'Estudo aprofundado dos complementos verbais, regência verbal e nominal, e o uso da crase focado nas exigências gramaticais das Forças Armadas.',
          pilulas: [
            {
              titulo: 'Regência e Crase: A Armadilha Clássica do Verbo Assistir e Aspirar',
              nivel_profundidade: 2,
              texto: 'A ESA detesta quem lê de forma amadora. Na Sintaxe Tática, o Verbo é a arma. "Assistir" e "Aspirar" têm dois modos de disparo (significados). Assistir no sentido de ver, presenciar, exige a preposição "a" (Assistiu ao cerco). No sentido de ajudar, dar assistência, não leva preposição e recusa crase (Assistiu o ferido).\n\nA mesma doutrina serve para "Aspirar": aspirar no sentido de respirar ar vai seco, objeto direto (Aspirou o pó). Mas aspirar no sentido de ALMEJAR, desejar, puxa a preposição "a" e exibe crase diante de palavras femininas (Ele aspirava à divisa de sargento). Errar isso numa prova militar é letal, pois a banca usa exatamente essas exceções para eliminar a massa despreparada.'
            }
          ],
          exercicios: [
            {
              titulo: 'Identificação da regência armada',
              nivel_dificuldade: 2,
              pergunta: 'Assinale a alternativa em que há ERRO de regência verbal, segundo a norma-padrão:',
              alternativas: [
                'O pelotão assistiu o resgate.',
                'O recruta sempre aspirou à carreira militar.',
                'A tropa assistiu ao treinamento noturno.',
                'O médico da divisão assistiu o paciente sem demora.',
                'Ele visava ao posto de Comando.'
              ],
              correta: 0,
              explicacao: 'Viu "assistir" com sentido de VER/PRESENCIAR? É Obrigatória a preposição "A"! O certo seria "O pelotão assistiu AO resgate". Na alternativa A, está sem a preposição (objeto direto), quebrando a regra padrão. As demais alternativas respeitam a regra militar de crase (C) e regência de Visar/Aspirar no sentido de almejar.'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 3. HISTÓRIA E GEOGRAFIA
    // ══════════════════════════════════════════════════════════
    {
      nome: 'História e Geografia',
      modulos: [
        {
          nome: 'Geografia do Brasil — Espaços Agrários',
          descricao: 'Estudo da organização territorial, complexos agrícolas, estruturas fundiárias e geopolítica econômica brasileira.',
          pilulas: [
            {
              titulo: 'Espaço Agrário: Domínio Territorial e Fronteira Agrícola',
              nivel_profundidade: 2,
              texto: 'A Geografia da ESA exige que você entenda o Brasil como o grande tabuleiro global de commodities. O Exército não quer decoreba, quer entendimento estratégico: A expansão da "Fronteira Agrícola" ocorre principalmente nas áreas de transição e Centro-Oeste / Norte através do bioma Cerrado.\n\nO que cai na prova? Concentreção Fundiária. O Brasil tem uma economia historicamente agroexportadora (latifúndio, monocultura). Entenda o conceito de MATOPIBA (Maranhão, Tocantins, Piauí e Bahia), que é a mais forte frente de invasão moderna de grãos (soja). A banca brincará com termos técnicos tentando enganar você de que "agricultura familiar" lidera as exportações. Falso! A agricultura familiar alimenta a mesa do brasileiro, mas é o latifúndio (agronegócio patronal) que preenche a balança comercial e domina a nossa exportação estratégica.'
            }
          ],
          exercicios: [
            {
              titulo: 'Geopolítica e MATOPIBA',
              nivel_dificuldade: 2,
              pergunta: 'A região agrícola altamente produtiva, localizada a partir da expansão da fronteira moderna e formada pelo Cerrado em estados nordestinos e do norte, atende pelo acrônimo de:',
              alternativas: [
                'Pampa Sulista.',
                'Complexo Nordestino.',
                'MATOPIBA.',
                'Quadrilátero Ferrífero.',
                'Zona Franca de Manaus.'
              ],
              correta: 2,
              explicacao: 'É tiro curto: MATOPIBA (Maranhão, Tocantins, Piauí, Bahia). O recruta não foca em alternativas distratoras. Matopiba é o grande fronteiro de alta tecnologia do centro-norte. Quadrilátero Ferrífero é minério em MG. Zona Franca é polo industrial no Norte. Alternativa C é a escolha impiedosa do aprovado.'
            }
          ]
        }
      ]
    }
  ]
};

executarIngestion(CONFIG).catch(err => {
  console.error('\n❌ ERRO FATAL:', err.message);
  process.exit(1);
});
