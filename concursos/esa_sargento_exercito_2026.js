/**
 * DADOS: ESA — Escola de Sargentos das Armas 2026
 * Banca: Própria (Exército Brasileiro) | Ingresso: carreira de Sargento do Exército
 * Público-alvo: jovens de 17 a 24 anos
 * Inscrições abertas: 30/03/2026
 *
 * 4 disciplinas × 2 módulos × 1 pílula + 2 exercícios cada:
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
    status_edital: 'aberto',
    ano_ultimo_edital: 2026,
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
            },
            {
              titulo: 'Função modular: resolução de equação com módulo',
              nivel_dificuldade: 2,
              pergunta: 'Qual é o conjunto solução da equação |2x − 6| = 4?',
              alternativas: [
                'S = {1, 5}',
                'S = {−1, 5}',
                'S = {1, −5}',
                'S = {5}',
                'S = {−5, −1}'
              ],
              correta: 0,
              explicacao: 'Para resolver |2x − 6| = 4, dividimos em dois casos:\nCaso 1: 2x − 6 = 4 → 2x = 10 → x = 5.\nCaso 2: 2x − 6 = −4 → 2x = 2 → x = 1.\nPortanto S = {1, 5}. Alternativa A.\nArmadilha da ESA: nunca esquecer o caso negativo. O módulo sempre gera dois casos distintos a serem verificados.'
            }
          ]
        },
        {
          nome: 'Progressões Aritméticas e Geométricas',
          descricao: 'Sequências numéricas, definição e propriedades de PA e PG, fórmula do termo geral, soma dos termos e aplicações em contexto militar.',
          pilulas: [
            {
              titulo: 'PA e PG: as fórmulas que o Exército cobra sem dó',
              nivel_profundidade: 2,
              texto: 'A ESA usa PA e PG em contextos de logística, formações e planejamento de missões. Domine as fórmulas com precisão cirúrgica.\n\nPROGRESSÃO ARITMÉTICA (PA): diferença constante entre termos (razão r).\n• Termo geral: aₙ = a₁ + (n−1)·r\n• Soma dos n termos: Sₙ = n·(a₁ + aₙ)/2\n• Propriedade: num trio de termos em PA (a, b, c), o central é a média aritmética dos extremos: b = (a + c)/2. Use isso para descobrir termos desconhecidos na velocidade da luz.\n\nPROGRESSÃO GEOMÉTRICA (PG): razão q constante entre termos consecutivos.\n• Termo geral: aₙ = a₁·qⁿ⁻¹\n• Soma dos n termos (q ≠ 1): Sₙ = a₁·(qⁿ − 1)/(q − 1)\n• Num trio em PG (a, b, c): b² = a·c (o central é a média geométrica dos extremos)\n\nDica ESA: a banca disfarça o tipo de progressão na contextualização. Se o enunciado falar em "acréscimo fixo diário", "aumento de X por etapa" → PA. Se falar em "duplica", "triplica", "multiplica por fator fixo" → PG. Identifique o padrão antes de aplicar fórmula.'
            }
          ],
          exercicios: [
            {
              titulo: 'PA aplicada a planejamento tático de marcha',
              nivel_dificuldade: 2,
              pergunta: 'Uma tropa realiza marcha de treinamento: no 1º dia percorre 12 km, no 2º dia 15 km, no 3º dia 18 km, e assim por diante. Quantos km a tropa percorrerá no total nos primeiros 8 dias?',
              alternativas: [
                '152 km',
                '180 km',
                '124 km',
                '240 km',
                '168 km'
              ],
              correta: 1,
              explicacao: 'PA com a₁ = 12, r = 3, n = 8.\nTermo do 8º dia: a₈ = 12 + 7×3 = 12 + 21 = 33 km.\nSoma: S₈ = 8×(12 + 33)/2 = 8×45/2 = 8×22,5 = 180 km.\nAlternativa B.'
            },
            {
              titulo: 'PG com crescimento de efetivo',
              nivel_dificuldade: 2,
              pergunta: 'Um efetivo de recrutas começa com 4 soldados e dobra a cada fase de treinamento. Qual será o efetivo na 6ª fase?',
              alternativas: [
                '64 soldados',
                '128 soldados',
                '256 soldados',
                '32 soldados',
                '48 soldados'
              ],
              correta: 1,
              explicacao: 'PG com a₁ = 4, q = 2. Fase 6 = 6º termo.\naₙ = a₁·qⁿ⁻¹ → a₆ = 4·2⁵ = 4·32 = 128 soldados.\nAtenção: "6ª fase" é o 6º termo da PG. Não confundir com "após 6 duplicações" (que seria o 7º termo = 256). Alternativa B.'
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
            },
            {
              titulo: 'Crase: uso obrigatório, facultativo e proibido',
              nivel_dificuldade: 2,
              pergunta: 'Assinale a alternativa em que o uso da crase está CORRETO:',
              alternativas: [
                'O comandante referiu-se à regras de conduta.',
                'O sargento aspirava à patente de tenente.',
                'Dirigiu-se à Porto Alegre para a missão.',
                'Entregou o relatório à ele pessoalmente.',
                'Às 6 horas, à tropa estava posicionada.'
              ],
              correta: 1,
              explicacao: '"Aspirar" no sentido de almejar rege preposição "a". Diante de "patente" (substantivo feminino), forma-se a crase: "à patente". Alternativa B.\nA — Erro: "regras" é plural e não admite crase no artigo definido isolado. C — Erro: crase é proibida antes de nomes de cidades (exceto com artigo definido, como "à Bahia"). D — Erro: crase é proibida antes de pronomes pessoais. E — Erro: "tropa" tem artigo, mas a frase está mal construída com crase indevida antes do sujeito. Alternativa B.'
            }
          ]
        },
        {
          nome: 'Interpretação Textual e Coesão',
          descricao: 'Leitura e interpretação de textos militares e jornalísticos. Inferência, pressuposição, coesão por referência e conectivos. Identificação de ideia principal e secundária.',
          pilulas: [
            {
              titulo: 'Interpretação Tática: leia o que está escrito, não o que você acha',
              nivel_profundidade: 2,
              texto: 'A banca da ESA é direta: ela quer saber se você leu o texto ou se você "acha que leu". Há três armadilhas clássicas que eliminam candidatos por falta de atenção:\n\n1. INFERÊNCIA vs. INFORMAÇÃO EXPLÍCITA: o texto diz "o soldado estava cansado". A banca afirma "o soldado dormiu". Você não sabe isso — é uma inferência não autorizada pelo texto. Somente aceite inferências que o texto AUTORIZA (deixa claro sem ambiguidade).\n\n2. PRESSUPOSIÇÃO: certas frases pressupõem informações. "Pedro parou de fumar" pressupõe que Pedro fumava antes. A banca adora cobrar isso com frases como "o texto pressupõe que...".\n\n3. COESÃO POR CONECTIVOS: os conectivos determinam a relação lógica entre as ideias. Adversativos (mas, porém, entretanto, todavia, contudo) indicam oposição. Conclusivos (logo, portanto, assim, por conseguinte) indicam conclusão. Explicativos (porque, pois, que) introduzem causa ou explicação. Uma assertiva que troca o conectivo ou inverte a relação lógica está ERRADA.\n\nDica ESA: nunca extrapole. Se o texto não afirma, você não afirma. A interpretação tática é fria e precisa — como uma ordem de missão.'
            }
          ],
          exercicios: [
            {
              titulo: 'Inferência autorizada pelo texto',
              nivel_dificuldade: 2,
              pergunta: 'Leia: "Apesar do terreno acidentado e das chuvas intensas, o pelotão concluiu a travessia no prazo estabelecido pelo comandante." Com base EXCLUSIVAMENTE no texto, é correto afirmar que:',
              alternativas: [
                'O comandante estava presente durante a travessia.',
                'O terreno plano facilitou a missão do pelotão.',
                'O pelotão enfrentou dificuldades, mas cumpriu o objetivo no tempo previsto.',
                'As chuvas foram o principal obstáculo durante a travessia.',
                'O prazo da missão foi estendido devido às condições climáticas.'
              ],
              correta: 2,
              explicacao: 'A alternativa C reproduz fielmente o que o texto afirma: houve dificuldades (terreno e chuva) e o pelotão concluiu no prazo. Alternativa A extrapola — o texto diz que o prazo foi estabelecido pelo comandante, não que ele estava presente. B contradiz o texto (o terreno era acidentado, não plano). D é uma inferência não autorizada — o texto não hierarquiza os obstáculos. E contradiz o texto (o prazo foi cumprido). Alternativa C.'
            },
            {
              titulo: 'Relação lógica entre orações — conectivos',
              nivel_dificuldade: 1,
              pergunta: 'Assinale a alternativa em que o conectivo estabelece corretamente a relação lógica indicada entre os parênteses:',
              alternativas: [
                '"O recruta treinou bastante; portanto, ficou lesionado." (causa)',
                '"O sargento estava doente; todavia, cumpriu a missão." (oposição)',
                '"A tropa partiu cedo; logo, chegou atrasada." (conclusão)',
                '"O equipamento falhou porque a missão foi cancelada." (consequência)',
                '"Estudou muito; entretanto, foi aprovado." (adição)'
              ],
              correta: 1,
              explicacao: '"Todavia" é conectivo adversativo e indica oposição entre as orações: estar doente versus cumprir a missão — relação correta. Alternativa B.\nA: "portanto" indica conclusão, não causa. C: "logo" indica conclusão, mas a ideia de "chegou atrasada" não é conclusão lógica de "partiu cedo" — inversão de sentido. D: "porque" indica causa, não consequência (a falha causou o cancelamento, não o contrário). E: "entretanto" indica oposição, não adição. Alternativa B.'
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
            },
            {
              titulo: 'Estrutura fundiária brasileira',
              nivel_dificuldade: 2,
              pergunta: 'Sobre a estrutura fundiária do Brasil, é CORRETO afirmar que:',
              alternativas: [
                'A agricultura familiar domina as exportações do agronegócio.',
                'O minifúndio é o modelo predominante nas regiões Centro-Oeste e Norte.',
                'A concentração fundiária é medida pelo Índice de Gini, que indica alto grau de desigualdade na posse da terra no Brasil.',
                'A Reforma Agrária eliminou a concentração fundiária no Nordeste.',
                'O latifúndio é exclusivo do Nordeste brasileiro.'
              ],
              correta: 2,
              explicacao: 'O Índice de Gini fundiário do Brasil é um dos mais altos do mundo, indicando elevada concentração da terra. A alternativa C é a única integralmente correta. A: Falso — a agricultura familiar abastece o mercado interno, não lidera as exportações. B: Falso — Centro-Oeste e Norte são dominados por grandes propriedades. D: Falso — a concentração fundiária persiste no Nordeste. E: Falso — o latifúndio existe em todas as regiões, com maior expansão recente no Centro-Oeste e Norte. Alternativa C.'
            }
          ]
        },
        {
          nome: 'História do Brasil — República e Atualidades',
          descricao: 'Era Vargas, período militar (1964-1985), redemocratização, Constituição de 1988, e conjuntura política contemporânea com foco no papel das Forças Armadas.',
          pilulas: [
            {
              titulo: 'República Brasileira: da Era Vargas ao Regime Militar — o que a ESA cobra',
              nivel_profundidade: 2,
              texto: 'A ESA valoriza a História nacional com ênfase no papel institucional das Forças Armadas. Organize o estudo em blocos:\n\nERA VARGAS (1930–1945 e 1950–1954): Getúlio Vargas chegou ao poder pela Revolução de 30, derrubando a República Velha. O Estado Novo (1937-1945) foi um período ditatorial com centralização de poder, censura e desenvolvimento industrial. O segundo governo (1950-1954) terminou com o suicídio de Vargas, após crise política e pressão militar.\n\nREPÚBLICA POPULISTA (1945–1964): período de alternância democrática, com governos de Dutra, Vargas, JK (Plano de Metas, construção de Brasília), Jânio Quadros e João Goulart. A crise do governo Goulart (reformas de base) levou ao golpe militar de 1964.\n\nREGIME MILITAR (1964–1985): os governos dos generais (Castelo Branco, Costa e Silva, Médici, Geisel, Figueiredo) caracterizaram-se por AI-5, censura, "milagre econômico" e abertura gradual. A Lei da Anistia (1979) e as Diretas Já (1984) marcaram a redemocratização.\n\nNOVA REPÚBLICA: Constituição de 1988 ("Constituição Cidadã"), eleições diretas, Collor, FHC, Lula, Dilma, Temer, Bolsonaro. O Exército é citado na CF/88 como instituição destinada à defesa da Pátria e garantia dos poderes constitucionais.\n\nDica ESA: questões sobre história contemporânea geralmente abordam a Constituição de 1988, o papel das FA e marcos históricos relevantes. Não espere questões sobre governos atuais com viés político — a banca usa contextualização histórica neutra.'
            }
          ],
          exercicios: [
            {
              titulo: 'Era Vargas: Estado Novo e seus marcos',
              nivel_dificuldade: 2,
              pergunta: 'O Estado Novo (1937–1945) foi caracterizado por:',
              alternativas: [
                'Democracia parlamentarista com eleições livres e pluripartidarismo.',
                'Governo ditatorial, outorga de nova Constituição, censura à imprensa e centralização do poder nas mãos de Vargas.',
                'Regime parlamentarista com forte influência do Congresso Nacional.',
                'Abertura política gradual e redução do controle estatal sobre a economia.',
                'Domínio das oligarquias regionais sobre o governo federal.'
              ],
              correta: 1,
              explicacao: 'O Estado Novo foi instaurado por golpe em 1937, quando Vargas fechou o Congresso e outorgou a Constituição de 1937 (a "Polaca"). Caracterizou-se por censura (DIP — Departamento de Imprensa e Propaganda), supressão dos partidos políticos, controle sindical (peleguismo) e centralização total do poder. Alternativa B.'
            },
            {
              titulo: 'Constituição de 1988 e as Forças Armadas',
              nivel_dificuldade: 2,
              pergunta: 'De acordo com a Constituição Federal de 1988, as Forças Armadas brasileiras destinam-se a:',
              alternativas: [
                'Governar o país em situações de crise institucional.',
                'Defender a Pátria, garantir os poderes constitucionais e, por iniciativa de qualquer destes, a lei e a ordem.',
                'Atuar exclusivamente em guerras externas, sem intervenção em assuntos internos.',
                'Subordinar-se diretamente ao Congresso Nacional.',
                'Intervir autonomamente quando julgarem necessário para a manutenção da ordem pública.'
              ],
              correta: 1,
              explicacao: 'O Art. 142 da CF/88 estabelece: "As Forças Armadas, constituídas pelo Exército, pela Marinha e pela Aeronáutica, são instituições nacionais permanentes e regulares, organizadas com base na hierarquia e na disciplina, sob a autoridade suprema do Presidente da República, e destinam-se à defesa da Pátria, à garantia dos poderes constitucionais e, por iniciativa de qualquer destes, da lei e da ordem." Alternativa B.'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 4. INGLÊS
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Inglês',
      modulos: [
        {
          nome: 'Reading Comprehension — Interpretação de Textos em Inglês',
          descricao: 'Leitura e interpretação de textos em inglês: identificação da ideia principal, inferência de vocabulário pelo contexto, reconhecimento de gênero textual e estrutura argumentativa.',
          pilulas: [
            {
              titulo: 'Reading Tático: como atacar um texto em inglês sem travar',
              nivel_profundidade: 2,
              texto: 'A ESA não exige inglês fluente — exige leitura estratégica. Siga o protocolo tático de 4 passos:\n\nPASSO 1 — SKIMMING (varredura rápida): leia o título, o primeiro parágrafo e as primeiras frases de cada parágrafo seguinte. Você terá o mapa do texto em 30 segundos sem ler palavra por palavra.\n\nPASSO 2 — SCANNING (busca por alvo): leia as perguntas antes de mergulhar no texto. Identifique as palavras-chave de cada questão e vá direto ao trecho relevante.\n\nPASSO 3 — VOCABULÁRIO POR CONTEXTO: encontrou uma palavra desconhecida? Não entre em pânico. Analise o contexto ao redor. O texto diz "the soldiers were exhausted after the long march" — mesmo sem saber "exhausted", o contexto ("after the long march") diz que estavam cansados.\n\nPASSO 4 — COGNATOS E FALSOS COGNATOS: cognatos são aliados — "military", "operation", "discipline", "hierarchy" são iguais ou muito parecidos em português. Falsos cognatos são inimigos: "actually" = na verdade (não "atualmente"); "eventually" = no final (não "eventualmente"); "pretend" = fingir (não "pretender"); "parents" = pais/genitores (não "parentes").\n\nVocabulário ESA essencial: rank (patente), duty (dever/serviço), headquarters (quartel-general), recruit (recruta), deployment (destacamento/implantação), mission (missão), threat (ameaça), training (treinamento), weapons (armas), troop (tropa).'
            }
          ],
          exercicios: [
            {
              titulo: 'Interpretação de texto militar em inglês',
              nivel_dificuldade: 2,
              pergunta: 'Read the excerpt: "The platoon was ordered to advance at dawn. Despite heavy rain and difficult terrain, the soldiers completed their mission successfully, demonstrating exceptional discipline and physical endurance." According to the text, which statement is CORRECT?',
              alternativas: [
                'The soldiers failed to complete their mission due to the weather.',
                'The mission was canceled because of the difficult terrain.',
                'The platoon showed great discipline and physical resistance while accomplishing the mission.',
                'The soldiers advanced at night to avoid being seen.',
                'The rain made the terrain easier to cross.'
              ],
              correta: 2,
              explicacao: 'O texto afirma que os soldados completaram a missão com sucesso ("completed their mission successfully"), demonstrando disciplina excepcional e resistência física ("exceptional discipline and physical endurance"). A alternativa C traduz corretamente o conteúdo do texto.\nA — Contradiz o texto (missão foi cumprida). B — Contradiz (missão foi completada). D — O texto diz "at dawn" (ao amanhecer), não à noite. E — Contradiz (a chuva e o terreno eram dificuldades, não facilitadores). Alternativa C.'
            },
            {
              titulo: 'Falsos cognatos e vocabulário em contexto',
              nivel_dificuldade: 1,
              pergunta: 'Choose the alternative in which the underlined word is correctly translated: "The general was actually in command of three different battalions."',
              alternativas: [
                '"Actually" significa "atualmente" — o general estava atualmente no comando.',
                '"Actually" significa "na verdade" — o general estava, na verdade, no comando de três batalhões.',
                '"Actually" significa "ativo" — o general estava em serviço ativo.',
                '"Actually" significa "eventualmente" — o general eventualmente assumiu o comando.',
                '"Actually" significa "facilmente" — o general facilmente comandou os batalhões.'
              ],
              correta: 1,
              explicacao: '"Actually" é um falso cognato clássico. Em inglês, significa "na verdade", "de fato", "realmente" — não "atualmente" (que em inglês é "currently" ou "nowadays"). A frase correta: "O general estava, na verdade, no comando de três batalhões diferentes." Alternativa B.\nDica ESA: memorize os falsos cognatos que mais caem: actually (na verdade), eventually (no final das contas), pretend (fingir), sensible (sensato), assist (auxiliar), realize (perceber).'
            }
          ]
        },
        {
          nome: 'Grammar Essentials — Gramática para a Prova da ESA',
          descricao: 'Tempos verbais essenciais (Present Simple, Past Simple, Present Perfect, Future), verbos modais (can, could, must, should, will, would), voz passiva e pronomes.',
          pilulas: [
            {
              titulo: 'Tempos Verbais e Modais: o armamento gramatical da ESA',
              nivel_profundidade: 2,
              texto: 'A gramática da ESA foca nos padrões que mais caem em contextos militares e formais. Domine estes blocos:\n\nTEMPOS VERBAIS ESSENCIAIS:\n• Present Simple: ações habituais, fatos gerais. "The army trains soldiers daily." Terceira pessoa: acrescenta -s/-es (he trains, she goes).\n• Past Simple: ação concluída no passado. "The platoon marched 20 km yesterday." Verbos regulares: + -ed (trained, marched). Irregulares: go→went, do→did, have→had, see→saw, give→gave.\n• Present Perfect: ação passada com resultado presente. "The soldiers have completed the mission." Formado com have/has + particípio passado.\n• Future (will): decisões imediatas e previsões. "The general will announce the mission tomorrow."\n\nVERBOS MODAIS (os mais cobrados):\n• CAN / COULD: capacidade (can = presente, could = passado ou pedido formal).\n• MUST: obrigação forte ou dedução lógica. "Soldiers must follow orders." / "He must be tired."\n• SHOULD: recomendação ou conselho. "You should study the manual."\n• WILL / WOULD: futuro (will) e condicional/pedido educado (would).\n\nVOZ PASSIVA: sujeito + to be (conjugado) + particípio passado + (by + agente).\n"The order was given by the commander." (ativa: "The commander gave the order.")\n\nDica ESA: questões de gramática quase sempre trazem uma frase com lacuna para completar. Identifique o tempo verbal pelo marcador de tempo no enunciado: yesterday → Past Simple; already/yet/just/ever → Present Perfect; tomorrow/next week → Future.'
            }
          ],
          exercicios: [
            {
              titulo: 'Tempo verbal: escolha correta na lacuna',
              nivel_dificuldade: 2,
              pergunta: 'Choose the alternative that correctly completes the sentence: "The sergeant _______ the training report before the inspection started yesterday."',
              alternativas: [
                'has finished',
                'finishes',
                'had finished',
                'will finish',
                'is finishing'
              ],
              correta: 2,
              explicacao: 'A frase descreve uma ação (terminar o relatório) que ocorreu ANTES de outra ação passada (a inspeção começar). Quando uma ação passada precede outra ação passada, usamos o Past Perfect (had + particípio): "had finished". A alternativa C é a correta.\n• "Has finished" (Present Perfect) indicaria resultado no presente, não uma sequência passada.\n• "Finishes" (Present Simple) não se encaixa no contexto de "yesterday".\n• "Will finish" é futuro — incompatível.\n• "Is finishing" é Present Continuous — ação em andamento no momento, não antes de algo passado. Alternativa C.'
            },
            {
              titulo: 'Verbo modal: obrigação e recomendação',
              nivel_dificuldade: 1,
              pergunta: 'Choose the sentence in which the modal verb is used CORRECTLY according to its meaning:',
              alternativas: [
                '"Soldiers can follow all direct orders without question." (obrigação forte)',
                '"You should report to the base immediately." (recomendação/conselho)',
                '"The recruit must be tired" indicates a strong order given to the recruit.',
                '"Would you like some water?" is incorrect because "would" only expresses future actions.',
                '"She could speak three languages" means she is currently able to speak three languages.'
              ],
              correta: 1,
              explicacao: '"Should" expressa recomendação ou conselho — "You should report to the base immediately" está correto para esse uso. Alternativa B.\nA — Erro: "can" expressa capacidade/permissão, não obrigação forte (que seria "must").\nC — Erro: "must be tired" não é ordem ao recruta — é dedução lógica ("ele deve estar cansado").\nD — Erro: "would" também expressa pedidos educados e condicionais, não apenas futuro.\nE — Erro: "could speak" indica capacidade no passado, não no presente (presente seria "can speak"). Alternativa B.'
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
