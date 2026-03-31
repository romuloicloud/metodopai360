/**
 * DADOS: EEAR — Escola de Especialistas da Aeronáutica 2026
 * Banca: CEBRASPE / Própria | Ingresso: Sargento Especialista da FAB
 * Público-alvo: jovens de 17 a 25 anos que desejam ser Sargentos da Força Aérea Brasileira
 *
 * 3 disciplinas × 2 módulos × 1 pílula + 2 exercícios:
 *  1. Matemática
 *  2. Física (peso alto na EEAR)
 *  3. Língua Portuguesa
 */

const { executarIngestion } = require('../engine_ingestao');

const CONFIG = {
  orgao_match: 'EEAr',
  concurso_nome: 'EEAR - Sargento da Aeronáutica 2026',
  concurso_banca: 'CEBRASPE / Própria',

  concurso_gps: {
    orgao: 'EEAr',
    familia: 'militar',
    esfera: 'federal',
    uf: 'BR',
    link_matriz_pedagogica: 'https://www.eear.aer.mil.br/index.php/concursos',
    status_edital: 'previsto',
    ano_ultimo_edital: 2025,
    banca_ultimo_edital: 'CEBRASPE / Própria',
    data_prova: null,
    idade_alvo: 'Jovem (17-25)',
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
          nome: 'Funções — 1º e 2º Grau, Análise Gráfica',
          descricao: 'Conceito de função, domínio, contradomínio e imagem. Função afim (1º grau): gráfico, crescimento e decrescimento. Função quadrática (2º grau): vértice, raízes e análise do gráfico (parábola).',
          pilulas: [
            {
              titulo: 'Funções na EEAR: do gráfico à equação e vice-versa',
              nivel_profundidade: 2,
              texto: 'A EEAR cobra funções de forma direta e aplicada. Organize o estudo em dois blocos:\n\nFUNÇÃO DO 1º GRAU (afim): f(x) = ax + b. O gráfico é uma reta. O coeficiente "a" determina o crescimento (a > 0) ou decrescimento (a < 0). O coeficiente "b" é o valor de f(0), ou seja, onde a reta corta o eixo y. A raiz (zero da função) é o ponto onde f(x) = 0 → x = −b/a. Aplicação típica na EEAR: problemas de velocidade constante, custo fixo + variável, temperatura ao longo do tempo.\n\nFUNÇÃO DO 2º GRAU (quadrática): f(x) = ax² + bx + c, com a ≠ 0. O gráfico é uma parábola: abre para cima se a > 0, para baixo se a < 0. O VÉRTICE V(x_v, y_v) indica o ponto de mínimo ou máximo: x_v = −b/(2a) e y_v = −Δ/(4a), onde Δ = b² − 4ac. As raízes (x₁ e x₂) existem quando Δ ≥ 0 e são calculadas pela fórmula de Bhaskara: x = (−b ± √Δ) / 2a.\n\nDica CEBRASPE: as questões da EEAR sobre funções frequentemente mostram o gráfico e pedem que você identifique os coeficientes, o ponto de máximo/mínimo ou o intervalo de crescimento. Treine a leitura visual do gráfico — não apenas os cálculos algébricos. Uma questão CERTO/ERRADO sobre funções exige atenção especial ao domínio e à imagem declarados.'
            }
          ],
          exercicios: [
            {
              titulo: 'Função do 2º grau: encontrar o valor máximo',
              nivel_dificuldade: 2,
              pergunta: 'A altitude de um projétil (em metros) ao longo do tempo é dada por f(t) = −5t² + 40t + 20, onde t é o tempo em segundos. Qual é a altitude máxima atingida pelo projétil?',
              alternativas: [
                '80 metros',
                '100 metros',
                '100 metros no instante t = 4s',
                'A função não possui máximo, pois a < 0.',
                '180 metros'
              ],
              correta: 1,
              explicacao: 'Como a = −5 < 0, a parábola abre para baixo e o vértice é o ponto de máximo. x_v = −b/(2a) = −40/(2×(−5)) = −40/(−10) = 4 segundos. f(4) = −5(16) + 40(4) + 20 = −80 + 160 + 20 = 100 metros. A altitude máxima é 100 metros, atingida em t = 4s. Alternativa B (o enunciado pede apenas o valor da altitude máxima).'
            },
            {
              titulo: 'Função do 1º grau: análise de crescimento e zero',
              nivel_dificuldade: 1,
              pergunta: 'A função f(x) = −3x + 9 é crescente ou decrescente? Qual é o seu zero (raiz)?',
              alternativas: [
                'Crescente; zero em x = −3.',
                'Decrescente; zero em x = 3.',
                'Crescente; zero em x = 3.',
                'Decrescente; zero em x = 9.',
                'Decrescente; zero em x = −9.'
              ],
              correta: 1,
              explicacao: 'O coeficiente angular é a = −3 < 0, portanto a função é DECRESCENTE. Para encontrar o zero: −3x + 9 = 0 → 3x = 9 → x = 3. A função decresce e cruza o eixo x no ponto (3, 0). Alternativa B.'
            }
          ]
        },
        {
          nome: 'Progressões Aritméticas e Geométricas',
          descricao: 'Sequências numéricas, definição e propriedades de PA e PG, fórmula do termo geral, soma dos termos e aplicações práticas.',
          pilulas: [
            {
              titulo: 'PA e PG: fórmulas, macetes e armadilhas da EEAR',
              nivel_profundidade: 2,
              texto: 'Progressões são sequências com padrão fixo — a EEAR adora aplicá-las em contextos de aviação, comunicações e missões sequenciais.\n\nPROGRESSÃO ARITMÉTICA (PA): sequência onde a diferença entre termos consecutivos é constante (razão r). Fórmula do termo geral: aₙ = a₁ + (n−1)·r. Soma dos n primeiros termos: Sₙ = n·(a₁ + aₙ)/2 = n·(2a₁ + (n−1)·r)/2. Propriedade central: em qualquer PA, o termo do meio é a média aritmética dos termos equidistantes (aₖ = (aₖ₋₁ + aₖ₊₁)/2). Use isso para encontrar termos desconhecidos rapidamente.\n\nPROGRESSÃO GEOMÉTRICA (PG): a razão q é o fator de multiplicação entre termos. Fórmula do termo geral: aₙ = a₁·qⁿ⁻¹. Soma dos n primeiros termos (q ≠ 1): Sₙ = a₁·(qⁿ − 1)/(q − 1). Soma da PG infinita com |q| < 1: S∞ = a₁/(1 − q). Atenção: q nunca pode ser zero em uma PG.\n\nDica CEBRASPE: na EEAR, os problemas de PG frequentemente envolvem crescimento exponencial — dobragem de frequência de rádio, potência de sinal, ganho em decibéis. Se o enunciado falar em "dobrar", "triplicar" ou "multiplicar por um fator fixo", é PG. Se falar em "aumentar em X por período", é PA. Identifique o padrão antes de aplicar as fórmulas.'
            }
          ],
          exercicios: [
            {
              titulo: 'Soma de PA com contexto de missões',
              nivel_dificuldade: 2,
              pergunta: 'Um esquadrão de aeronaves realiza voos de treinamento: no 1º dia, voa 50 km; no 2º dia, 80 km; no 3º dia, 110 km; e assim por diante, sempre com acréscimo de 30 km por dia. Quantos quilômetros o esquadrão terá voado ao total nos primeiros 10 dias?',
              alternativas: [
                '1.250 km',
                '1.850 km',
                '1.550 km',
                '320 km',
                '2.100 km'
              ],
              correta: 1,
              explicacao: 'PA com a₁ = 50, r = 30 e n = 10. Termo geral do 10º dia: a₁₀ = 50 + (10−1)×30 = 50 + 270 = 320 km. Soma: S₁₀ = 10×(50 + 320)/2 = 10×370/2 = 10×185 = 1.850 km. Alternativa B.'
            },
            {
              titulo: 'Termo geral de PG com crescimento exponencial',
              nivel_dificuldade: 2,
              pergunta: 'Um sinal de rádio é amplificado em cada estação retransmissora, triplicando sua potência. Se a potência inicial é de 2 watts, qual será a potência após passar por 5 estações retransmissoras?',
              alternativas: [
                '30 watts',
                '243 watts',
                '486 watts',
                '162 watts',
                '96 watts'
              ],
              correta: 2,
              explicacao: 'PG com a₁ = 2, q = 3. Após 5 amplificações, o sinal estará no 6º termo: a₆ = 2·3⁵ = 2·243 = 486 watts. Atenção: "passar por 5 estações" significa 5 amplificações, logo n = 6 (o sinal inicial + 5 multiplicações). Alternativa C.'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 2. FÍSICA — Peso altíssimo na EEAR
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Física',
      modulos: [
        {
          nome: 'Cinemática — MRU, MRUV e Queda Livre',
          descricao: 'Movimento Retilíneo Uniforme (MRU), Movimento Retilíneo Uniformemente Variado (MRUV), queda livre e lançamento vertical. Gráficos de posição, velocidade e aceleração.',
          pilulas: [
            {
              titulo: 'Cinemática na EEAR: as equações que definem o movimento',
              nivel_profundidade: 2,
              texto: 'A Física é o diferencial da EEAR — candidatos fortes em Física saem à frente. A cinemática é a base de tudo. Domine este conjunto de equações:\n\nMRU (velocidade constante, aceleração = 0):\n• Posição: S = S₀ + v·t\n• Velocidade: v = constante\n• Gráfico S×t: reta inclinada | Gráfico V×t: reta horizontal\n\nMRUV (aceleração constante ≠ 0):\n• Velocidade: v = v₀ + a·t\n• Posição (Equação de Torricelli): v² = v₀² + 2·a·ΔS\n• Posição no tempo: S = S₀ + v₀·t + (a·t²)/2\n• Gráfico V×t: reta inclinada | Gráfico S×t: parábola\n\nQUEDA LIVRE (caso especial do MRUV com v₀ = 0 e a = g ≈ 10 m/s²):\n• v = g·t\n• h = g·t²/2 (altura percorrida)\n• v² = 2·g·h\n\nLANÇAMENTO VERTICAL PARA CIMA (v₀ > 0, a = −g):\n• Tempo para atingir o topo: t_topo = v₀/g\n• Altura máxima: h_máx = v₀²/(2g)\n• O tempo de subida é igual ao tempo de descida (em queda livre)\n\nDica EEAR: os enunciados frequentemente trazem aeronaves, projéteis ou paraquedistas — identifique se o movimento é uniforme ou variado, e se há lançamento horizontal ou vertical. Lançamento oblíquo combina MRU (horizontal) com MRUV (vertical) — decomponha sempre em dois eixos independentes.'
            }
          ],
          exercicios: [
            {
              titulo: 'Queda livre: tempo e velocidade de impacto',
              nivel_dificuldade: 2,
              pergunta: 'Um equipamento é lançado de uma aeronave que voa a 80 metros de altitude em voo nivelado. Considerando g = 10 m/s² e desprezando a resistência do ar, qual é o tempo que o equipamento leva para atingir o solo e qual é sua velocidade no momento do impacto?',
              alternativas: [
                't = 4 s e v = 40 m/s',
                't = 8 s e v = 80 m/s',
                't = 4 s e v = 80 m/s',
                't = 2 s e v = 40 m/s',
                't = 4 s e v = 20 m/s'
              ],
              correta: 0,
              explicacao: 'Queda livre: h = g·t²/2 → 80 = 10·t²/2 = 5t² → t² = 16 → t = 4 s. Velocidade de impacto: v = g·t = 10×4 = 40 m/s. Ou pela Torricelli: v² = 2·g·h = 2×10×80 = 1600 → v = 40 m/s. Alternativa A.'
            },
            {
              titulo: 'MRUV: distância de frenagem de aeronave',
              nivel_dificuldade: 2,
              pergunta: 'Uma aeronave toca a pista com velocidade de 90 m/s e desacelera uniformemente a 6 m/s². Qual é a distância percorrida até a parada completa?',
              alternativas: [
                '675 metros',
                '1350 metros',
                '540 metros',
                '810 metros',
                '450 metros'
              ],
              correta: 0,
              explicacao: 'Usando a Equação de Torricelli com v_final = 0, v₀ = 90 m/s e a = −6 m/s²: v² = v₀² + 2·a·ΔS → 0 = 90² + 2·(−6)·ΔS → 0 = 8100 − 12·ΔS → ΔS = 8100/12 = 675 metros. Alternativa A.'
            }
          ]
        },
        {
          nome: 'Dinâmica — Leis de Newton e Aplicações',
          descricao: 'Primeira, Segunda e Terceira Leis de Newton. Força resultante, massa e aceleração. Atrito, plano inclinado, tração e peso. Aplicações em sistemas de corpos.',
          pilulas: [
            {
              titulo: 'Leis de Newton na EEAR: força, massa, aceleração e sistemas',
              nivel_profundidade: 2,
              texto: 'A dinâmica é a Física do "por que" o movimento acontece — e a EEAR cobra os três pilares de Newton com situações práticas de aviação, lançamentos e veículos.\n\n1ª LEI (Inércia): "Todo corpo permanece em repouso ou em movimento retilíneo uniforme, a menos que uma força resultante não nula atue sobre ele." Aplicação: por que os passageiros são projetados para frente quando o avião freia bruscamente.\n\n2ª LEI (Força e Aceleração): F_resultante = m·a. Unidade: Newton (N). Importante: F_res é a SOMA VETORIAL de todas as forças. Para encontrar a aceleração de um sistema, divida a força resultante pela massa total do sistema. Em planos inclinados: decompor o peso em componentes paralela (P·sen θ) e perpendicular (P·cos θ) ao plano.\n\n3ª LEI (Ação e Reação): "Para toda ação existe uma reação de mesma intensidade, mesma direção e sentido oposto." Atenção: o par ação-reação atua em corpos DIFERENTES — nunca no mesmo corpo. Aplicação clássica: propulsão do avião a jato (gases para trás → avião para frente).\n\nFORÇA DE ATRITO: f = μ·N, onde μ é o coeficiente de atrito e N é a força normal. Em superfície horizontal: N = P = m·g. Em plano inclinado: N = m·g·cos θ.\n\nDica EEAR: nos problemas de sistemas com dois ou mais blocos, aplique a 2ª Lei ao sistema todo para encontrar a aceleração, e depois analise cada bloco individualmente para encontrar a tensão nos cabos ou cordas.'
            }
          ],
          exercicios: [
            {
              titulo: 'Segunda Lei de Newton em sistema com atrito',
              nivel_dificuldade: 2,
              pergunta: 'Um carrinho de manutenção de 20 kg é empurrado com força horizontal de 80 N numa superfície com coeficiente de atrito cinético μ = 0,2. Considerando g = 10 m/s², qual é a aceleração do carrinho?',
              alternativas: [
                '4 m/s²',
                '2 m/s²',
                '6 m/s²',
                '3 m/s²',
                '1 m/s²'
              ],
              correta: 1,
              explicacao: 'Força Normal: N = m·g = 20×10 = 200 N. Força de atrito: f = μ·N = 0,2×200 = 40 N. Força resultante: F_res = 80 − 40 = 40 N. Aceleração: a = F_res/m = 40/20 = 2 m/s². Alternativa B.'
            },
            {
              titulo: 'Terceira Lei de Newton: identificar o par ação-reação',
              nivel_dificuldade: 1,
              pergunta: 'Um avião a jato expele gases para trás e se move para frente. Com base na Terceira Lei de Newton, o par ação-reação correto é:',
              alternativas: [
                'O motor empurra os gases para trás (ação) e os gases empurram o avião para frente (reação).',
                'O avião empurra o ar para baixo e o ar empurra o avião para cima.',
                'Os gases empurram o avião para frente (ação) e o avião empurra os gases para trás (reação).',
                'A propulsão ocorre porque não há resistência do ar na altitude de cruzeiro.',
                'A ação é a aceleração do avião e a reação é a inércia dos passageiros.'
              ],
              correta: 0,
              explicacao: 'Na 3ª Lei, o par ação-reação é: o motor expele os gases para trás (força aplicada pelo avião nos gases — ação) e os gases, por reação, empulsam o avião para frente com a mesma intensidade. As forças atuam em corpos diferentes (avião e gases). Alternativas C descreve o mesmo par mas invertido — a nomenclatura "ação" e "reação" é relativa, mas A descreve corretamente o fenômeno. Alternativa A.'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 3. LÍNGUA PORTUGUESA
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Língua Portuguesa',
      modulos: [
        {
          nome: 'Interpretação Textual — Tipos e Gêneros',
          descricao: 'Tipos textuais (narrativo, descritivo, argumentativo, expositivo, injuntivo) e gêneros textuais. Coerência, coesão, intenção comunicativa e leitura crítica.',
          pilulas: [
            {
              titulo: 'Tipos e gêneros textuais: a base que a EEAR cobra com o CEBRASPE',
              nivel_profundidade: 1,
              texto: 'A EEAR utiliza o estilo CEBRASPE: assertivas curtas como CERTO ou ERRADO sobre um texto-base. Isso exige leitura precisa e atenção a detalhes.\n\nTIPOS TEXTUAIS (estrutura interna do texto):\n• NARRATIVO: conta eventos com personagens, tempo e espaço. Verbos de ação no passado. Presente nas crônicas e contos.\n• DESCRITIVO: caracteriza seres, objetos, lugares. Verbos de estado (ser, estar, parecer). Adjetivos abundantes.\n• ARGUMENTATIVO: defende uma tese com argumentos e conclusão. Presente em artigos de opinião e editoriais.\n• EXPOSITIVO: explica, informa sem tomar partido. Presente em enciclopédias e manuais técnicos.\n• INJUNTIVO: dá instruções, ordens. Verbos no imperativo. Presente em regulamentos e bulas.\n\nGÊNEROS TEXTUAIS (suporte social do texto): crônica, conto, editorial, reportagem, regulamento, e-mail, ofício, ata. Um texto pode ter um tipo predominante mas pertencer a vários gêneros.\n\nDica CEBRASPE: as assertivas frequentemente afirmam "o texto é do tipo X" — verifique se há mistura de tipos (um texto argumentativo pode ter trechos descritivos). A assertiva só está errada se o tipo predominante for identificado incorretamente ou se uma característica exclusiva de um tipo for atribuída ao tipo errado.'
            }
          ],
          exercicios: [
            {
              titulo: 'Identificação do tipo textual predominante',
              nivel_dificuldade: 1,
              pergunta: 'Leia: "Para garantir a segurança das operações, todos os pilotos devem completar o checklist antes da decolagem, verificar os instrumentos em sequência e confirmar as coordenadas com a torre de controle." O tipo textual predominante nesse trecho é:',
              alternativas: [
                'Narrativo, pois descreve ações de pilotos.',
                'Descritivo, pois apresenta características das operações.',
                'Argumentativo, pois defende a segurança operacional.',
                'Injuntivo, pois fornece instruções e ordens a serem seguidas.',
                'Expositivo, pois explica o funcionamento de um avião.'
              ],
              correta: 3,
              explicacao: 'O trecho usa verbos no imperativo ou infinitivo com valor imperativo ("devem completar", "verificar", "confirmar"), transmitindo instruções diretas. Característica central do texto injuntivo. Não é argumentativo (não há tese para defender) nem expositivo (não explica conceitos). Alternativa D.'
            },
            {
              titulo: 'Coesão e coerência textual',
              nivel_dificuldade: 1,
              pergunta: 'Assinale a alternativa que apresenta PROBLEMA DE COESÃO que compromete a clareza do texto:',
              alternativas: [
                '"O sargento recebeu a missão. Ele a cumpriu com precisão."',
                '"A aeronave decolou cedo. Entretanto, chegou no horário previsto."',
                '"O piloto pousou com habilidade. Mas ele pousou com habilidade de forma habilidosa novamente."',
                '"O voo foi tranquilo. Todavia, houve turbulência na descida."',
                '"Os recrutas treinaram bastante. Portanto, estavam preparados para a missão."'
              ],
              correta: 2,
              explicacao: 'A alternativa C apresenta repetição desnecessária e redundante de "pousou com habilidade" e "de forma habilidosa" — problema de coesão por redundância excessiva que prejudica a fluidez e clareza. As demais alternativas usam corretamente conectivos e pronomes para garantir a coesão. Alternativa C.'
            }
          ]
        },
        {
          nome: 'Ortografia, Acentuação e Pontuação',
          descricao: 'Acordo Ortográfico de 2009: emprego de letras, dígrafo, hífen. Acentuação gráfica: proparoxítonas, paroxítonas e oxítonas. Emprego da vírgula, ponto-e-vírgula e dois-pontos.',
          pilulas: [
            {
              titulo: 'Ortografia e acentuação na EEAR: as regras que mais caem',
              nivel_profundidade: 1,
              texto: 'Ortografia e acentuação são certeiros na EEAR/CEBRASPE — geralmente uma questão de CERTO/ERRADO sobre a grafia de uma palavra ou a presença/ausência de acento. Organize em três frentes:\n\nACENTUAÇÃO (regras fundamentais):\n• PROPAROXÍTONAS: todas levam acento (pátria, médico, exército, última).\n• PAROXÍTONAS: levam acento quando terminam em: l, n, r, x, ps, ã(s), ão(s), um/uns, i(s), us, ei(s) (táxi, tórax, álbum, júri, vírus).\n• OXÍTONAS: levam acento quando terminam em: a(s), e(s), o(s), em/ens (sofá, café, avô, também).\n• Hiato com i ou u tônico: acento quando o i ou u formam sílaba sozinhos e não são seguidos de nh (saúde, país, raízes — mas não: faixa, muito).\n\nORTOGRAFIA (pontos críticos do Acordo 2009):\n• Trema: eliminado nas palavras de origem portuguesa (aguentar, linguiça — sem trema).\n• Hífen com prefixos: sem hífen quando o prefixo termina em vogal e a palavra começa com consoante diferente de r e s (anteprojeto, superinteressante). Com hífen quando a palavra seguinte começa com h, r ou s idêntica à final do prefixo (anti-herói, sub-ramo, inter-regional).\n\nPONTUAÇÃO:\n• Vírgula PROIBIDA entre sujeito e predicado e entre verbo e seus complementos.\n• Vírgula OBRIGATÓRIA para isolar aposto, vocativo, adjunto adverbial deslocado e orações coordenadas.\n• Dois-pontos introduzem enumeração, explicação ou citação.\n\nDica: na EEAR, uma única palavra mal acentuada torna a assertiva ERRADA. Cuidado com palavras como "exéquias" (proparoxítona), "ênfase", "idôneo" — todas proparoxítonas que levam acento.'
            }
          ],
          exercicios: [
            {
              titulo: 'Acentuação gráfica: paroxítona com terminação especial',
              nivel_dificuldade: 1,
              pergunta: 'Assinale a alternativa em que TODAS as palavras estão acentuadas corretamente:',
              alternativas: [
                'táxi, ônibus, júri, álbum',
                'taxí, onibus, juri, album',
                'táxi, ônibus, júri, album',
                'taxi, ônibus, júri, álbum',
                'táxi, onibus, juri, álbum'
              ],
              correta: 0,
              explicacao: '"Táxi" — paroxítona terminada em i, recebe acento. "Ônibus" — proparoxítona, sempre acentuada. "Júri" — paroxítona terminada em i, recebe acento. "Álbum" — paroxítona terminada em um, recebe acento. Todas corretas na alternativa A.'
            },
            {
              titulo: 'Emprego da vírgula: presença e ausência obrigatórias',
              nivel_dificuldade: 1,
              pergunta: 'Assinale a alternativa com uso CORRETO da vírgula segundo a norma culta:',
              alternativas: [
                'O sargento, recebeu a ordem e executou a missão.',
                'Soldado, o seu equipamento está pronto para a inspeção.',
                'A aeronave decolou, e o piloto fechou o trem de pouso.',
                'Todos os recrutas precisam, comparecer ao treinamento.',
                'O comandante deu, a ordem de retirada imediata.'
              ],
              correta: 1,
              explicacao: 'Alternativa B: a vírgula isola o vocativo "Soldado" — uso obrigatório e correto. Alternativa A: vírgula incorreta entre sujeito ("sargento") e predicado — proibida. Alternativa C: vírgula antes do "e" coordenativo é dispensável e discutível nesse contexto. Alternativas D e E: vírgulas incorretas separando verbo de seus complementos. Alternativa B.'
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
