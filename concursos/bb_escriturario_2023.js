/**
 * DADOS: Banco do Brasil — Escriturário (Agente Comercial) 2023
 * Banca: CESGRANRIO | Múltipla escolha com 5 alternativas
 * Referência: Edital BB 2023 (CESGRANRIO) — 4.480 vagas nacionais
 *
 * 3 disciplinas × 2 módulos × 1 pílula + 2 exercícios:
 *  1. Língua Portuguesa
 *  2. Matemática Financeira
 *  3. Conhecimentos Bancários
 */

const { executarIngestion } = require('../engine_ingestao');

const CONFIG = {
  orgao_match: 'Banco do Brasil - Escriturário',
  concurso_nome: 'BB - Escriturário 2023',
  concurso_banca: 'CESGRANRIO',

  concurso_gps: {
    orgao: 'Banco do Brasil - Escriturário',
    cargo: 'Escriturário (Agente Comercial)',
    banca: 'CESGRANRIO',
    status_edital: 'encerrado',
    vagas: 4480,
    remuneracao: 'R$ 3.622,23'
  },

  disciplinas: [

    // ══════════════════════════════════════════════════════════
    // 1. LÍNGUA PORTUGUESA
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Língua Portuguesa',
      modulos: [

        // ── Módulo 1 ──────────────────────────────────────────
        {
          nome: 'Interpretação de Texto Bancário',
          descricao: 'Leitura, compreensão e interpretação de textos relacionados ao universo bancário e financeiro. Identificação de tema, intenção comunicativa, inferência e paráfrase.',
          pilulas: [
            {
              titulo: 'Como a CESGRANRIO testa interpretação em textos do mundo bancário',
              nivel_profundidade: 1,
              texto: `A CESGRANRIO utiliza, nos concursos bancários, textos extraídos de relatórios anuais, comunicados ao mercado, matérias jornalísticas financeiras e normativos do Banco Central. O candidato que não conhece o vocabulário do setor perde tempo valioso na leitura, pois o léxico especializado (spread, inadimplência, liquidez, hedge, compulsório) aparece de forma natural no enunciado.

A estratégia central para interpretação é a paráfrase crítica: após ler cada parágrafo, reformule mentalmente a ideia com suas próprias palavras. As alternativas corretas da CESGRANRIO quase sempre são reescritas da ideia original com vocabulário diferente. As alternativas erradas costumam cair em três armadilhas: (1) informação parcial apresentada como total — o texto diz "alguns clientes" e a alternativa diz "todos os clientes"; (2) causa e consequência invertidas; (3) informação verdadeira sobre o setor bancário, mas não mencionada no texto.

Técnica prática: leia o texto inteiro uma vez sem olhar as questões. Depois releia os trechos que fundamentam cada pergunta. Marque a alternativa que reproduz fielmente o que está escrito, sem acrescentar nem suprimir informação. Em textos bancários, atenção especial aos dados numéricos — percentuais, prazos e valores são armadilhas frequentes em questões de "o texto afirma que...".`
            }
          ],
          exercicios: [
            {
              titulo: 'Interpretação: relatório de inadimplência',
              nivel_dificuldade: 2,
              pergunta: 'Leia o trecho: "O índice de inadimplência do banco recuou 0,3 ponto percentual no trimestre, reflexo da política de concessão de crédito mais seletiva adotada no semestre anterior, que priorizou clientes com histórico positivo de pagamento." Com base no texto, é CORRETO afirmar que:',
              alternativas: [
                'O banco passou a recusar todos os pedidos de crédito de novos clientes no semestre anterior.',
                'A queda na inadimplência foi consequência de uma mudança na política de análise de crédito realizada anteriormente.',
                'O índice de inadimplência caiu 0,3% em relação ao mesmo período do ano anterior.',
                'A política de crédito mais seletiva aumentou o volume total de empréstimos concedidos.',
                'O banco priorizou clientes com histórico negativo para renegociar dívidas em atraso.'
              ],
              correta: 1,
              explicacao: 'A alternativa B parafraseia com precisão o texto: a redução da inadimplência (efeito) decorre da política de crédito mais seletiva adotada anteriormente (causa). A A distorce ao generalizar "todos os pedidos". A C confunde "ponto percentual" com "%" e altera o período de comparação. A D contradiz a ideia de seletividade. A E inverte o perfil de cliente priorizado.'
            },
            {
              titulo: 'Inferência em comunicado bancário',
              nivel_dificuldade: 2,
              pergunta: 'Leia: "Em resposta à elevação da taxa Selic pelo Copom, o banco ajustou as taxas de seus produtos de crédito pessoal, alinhando-as ao novo patamar do custo de captação." Com base nessa informação, infere-se que:',
              alternativas: [
                'O banco reduziu as taxas de juros cobradas dos clientes.',
                'A taxa Selic foi reduzida pelo Copom na última reunião.',
                'O custo dos empréstimos para os clientes pessoas físicas provavelmente aumentou.',
                'Somente os produtos de crédito empresarial foram afetados pelo ajuste.',
                'O banco agiu de forma independente das decisões do Banco Central.'
              ],
              correta: 2,
              explicacao: 'Se a Selic subiu e o banco ajustou suas taxas ao novo custo de captação, a inferência direta é que o crédito pessoal ficou mais caro para o cliente. A A contradiz a lógica do ajuste descrito. A B inverte o sentido: o texto diz "elevação". A D restringe ao crédito empresarial, mas o texto fala em crédito pessoal. A E contradiz o próprio texto, que afirma o alinhamento ao custo de captação.'
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Redação Oficial e Correspondência Empresarial',
          descricao: 'Normas do Manual de Redação da Presidência da República (3ª edição). Características da redação oficial: clareza, concisão, impessoalidade e formalidade. Tipos documentais: ofício, memorando, e-mail institucional.',
          pilulas: [
            {
              titulo: 'Redação oficial bancária: princípios e documentos mais cobrados pela CESGRANRIO',
              nivel_profundidade: 1,
              texto: `A redação oficial no contexto bancário obedece ao Manual de Redação da Presidência da República (3ª edição, 2018), que estabelece quatro princípios fundamentais: (1) Impessoalidade — o texto representa a instituição, não o redator; evita-se uso de "eu" e opiniões pessoais; (2) Clareza — o destinatário deve compreender a mensagem sem ambiguidade; uso de linguagem direta e precisa; (3) Concisão — comunicar o necessário sem redundâncias; cada palavra deve ter função; (4) Formalidade — tratamento respeitoso, vocabulário adequado ao registro público ou corporativo.

O documento padrão unificado é o ofício, que substituiu o memorando nas comunicações internas federais a partir da 3ª edição do Manual. No ambiente corporativo bancário, o e-mail institucional segue as mesmas regras de formalidade: vocativo com nome e cargo, texto objetivo, despedida formal e assinatura com cargo e ramal. A CESGRANRIO cobra especialmente identificação de desvios: tom informal em documento oficial, uso da 1ª pessoa do singular, subjetividade, prolixidade e uso incorreto de pronome de tratamento.

Pronomes de tratamento: "Vossa Excelência" para altos cargos da República (Presidente, Ministros, parlamentares, magistrados); "Vossa Senhoria" para demais autoridades e correspondências formais. Em documentos internos bancários, o padrão é "Prezado(a) Senhor(a)" ou o nome seguido do cargo.`
            }
          ],
          exercicios: [
            {
              titulo: 'Identificação de desvio na redação oficial',
              nivel_dificuldade: 2,
              pergunta: 'Um gerente de agência elaborou o seguinte trecho de ofício interno: "Eu acho que a medida proposta pelo setor de compliance é um exagero e vai prejudicar bastante o nosso relacionamento com os clientes VIP." Esse trecho apresenta qual desvio em relação às normas de redação oficial?',
              alternativas: [
                'Uso incorreto de pronome de tratamento.',
                'Ausência de vocativo e fecho.',
                'Violação dos princípios de impessoalidade e concisão, com uso de linguagem subjetiva e coloquial.',
                'Erro de concordância verbal entre sujeito e predicado.',
                'Ausência de data e local no cabeçalho do documento.'
              ],
              correta: 2,
              explicacao: 'O trecho viola a impessoalidade ("Eu acho") e usa linguagem informal e subjetiva ("um exagero", "bastante", "nossos clientes VIP"). Redação oficial exige linguagem impessoal, objetiva e formal. Não há erros gramaticais evidentes no trecho que justifiquem as demais alternativas.'
            },
            {
              titulo: 'Pronome de tratamento adequado em correspondência bancária',
              nivel_dificuldade: 1,
              pergunta: 'Um banco precisa enviar um ofício ao Presidente do Banco Central do Brasil. O pronome de tratamento correto a ser utilizado no vocativo e ao longo do texto é:',
              alternativas: [
                'Vossa Magnificência',
                'Vossa Senhoria',
                'Vossa Excelência',
                'Vossa Reverendíssima',
                'Ilustríssimo Senhor'
              ],
              correta: 2,
              explicacao: '"Vossa Excelência" é o pronome de tratamento adequado para altas autoridades do Poder Executivo Federal, incluindo o Presidente do Banco Central, que exerce mandato com status equivalente a ministro de Estado. "Vossa Senhoria" aplica-se a autoridades de menor escalão. "Vossa Magnificência" é exclusivo para reitores de universidades. "Vossa Reverendíssima" é uso religioso.'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 2. MATEMÁTICA FINANCEIRA
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Matemática Financeira',
      modulos: [

        // ── Módulo 1 ──────────────────────────────────────────
        {
          nome: 'Juros Simples e Compostos',
          descricao: 'Cálculo de montante e juros no regime de capitalização simples (J = C·i·t) e composto (M = C·(1+i)ⁿ). Conversão de taxas. Aplicações em investimentos e financiamentos.',
          pilulas: [
            {
              titulo: 'Juros simples e compostos: fórmulas, diferenças e quando cada um é cobrado',
              nivel_profundidade: 2,
              texto: `Juros simples e compostos são os dois regimes de capitalização mais cobrados em concursos bancários. A diferença fundamental está na base de cálculo: no regime simples, os juros incidem sempre sobre o capital inicial (C); no regime composto, os juros de cada período são incorporados ao saldo, gerando "juros sobre juros".

JUROS SIMPLES: Fórmula dos juros: J = C × i × t. Fórmula do montante: M = C × (1 + i × t). Onde C = capital inicial, i = taxa de juros no mesmo período de t, t = número de períodos. Exemplo: R$ 5.000 aplicados a 2% a.m. por 6 meses. J = 5.000 × 0,02 × 6 = R$ 600,00. M = 5.000 + 600 = R$ 5.600,00. Atenção: a taxa e o tempo devem estar na MESMA unidade. Se a taxa é 2% a.m. e o tempo está em anos, converta: 6 meses = 0,5 anos, OU use i = 2% e t = 6 (meses).

JUROS COMPOSTOS: Fórmula do montante: M = C × (1 + i)ⁿ. Onde n = número de períodos. Mesmo exemplo: R$ 5.000 a 2% a.m. por 6 meses. M = 5.000 × (1,02)⁶. (1,02)⁶ ≈ 1,1262. M ≈ R$ 5.631,00. Observe que no regime composto o montante é MAIOR que no simples (R$ 5.631 > R$ 5.600) porque os juros se acumulam a cada mês. Na CESGRANRIO, fique atento: se a questão pede "regime de capitalização simples", use J = C·i·t. Se pedir "capitalização composta" ou "a juros compostos", use M = C·(1+i)ⁿ. Muitos candidatos erram porque aplicam a fórmula errada.`
            }
          ],
          exercicios: [
            {
              titulo: 'Montante em juros simples com taxa mensal',
              nivel_dificuldade: 1,
              pergunta: 'Um cliente do Banco do Brasil aplicou R$ 5.000,00 em um CDB prefixado a juros simples de 2% ao mês por 6 meses. Qual será o montante resgatado ao final do período?',
              alternativas: [
                'R$ 5.060,00',
                'R$ 5.300,00',
                'R$ 5.600,00',
                'R$ 5.631,00',
                'R$ 6.000,00'
              ],
              correta: 2,
              explicacao: 'Regime de juros simples: J = C × i × t = 5.000 × 0,02 × 6 = R$ 600,00. Montante: M = 5.000 + 600 = R$ 5.600,00. A alternativa D (R$ 5.631,00) seria o resultado em juros compostos — armadilha clássica da CESGRANRIO. A E não corresponde a nenhum cálculo correto.'
            },
            {
              titulo: 'Montante em juros compostos — 4 períodos',
              nivel_dificuldade: 2,
              pergunta: 'Um financiamento de R$ 10.000,00 é contratado a juros compostos de 5% ao mês. Qual é o montante da dívida após 2 meses? (Considere (1,05)² = 1,1025)',
              alternativas: [
                'R$ 11.000,00',
                'R$ 10.500,00',
                'R$ 11.025,00',
                'R$ 11.050,00',
                'R$ 10.250,00'
              ],
              correta: 2,
              explicacao: 'Regime composto: M = C × (1 + i)ⁿ = 10.000 × (1,05)² = 10.000 × 1,1025 = R$ 11.025,00. Em juros simples, seria 10.000 × (1 + 0,05 × 2) = 10.000 × 1,10 = R$ 11.000,00 — alternativa A, que é a armadilha do regime errado. No regime composto, o 1º mês gera R$ 500 de juros; no 2º mês os juros incidem sobre R$ 10.500, gerando R$ 525 adicionais.'
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Porcentagem, Desconto e Acréscimo',
          descricao: 'Cálculo de percentuais, variação percentual, descontos comerciais e acréscimos. Fator multiplicador. Aplicações em tarifas bancárias, reajustes salariais e simulações de crédito.',
          pilulas: [
            {
              titulo: 'Porcentagem e fator multiplicador: o caminho mais rápido na prova',
              nivel_profundidade: 1,
              texto: `Percentagem é uma das ferramentas mais cobradas nos concursos do BB. A maioria dos candidatos calcula por "regra de três", o que consome tempo. O caminho profissional é o FATOR MULTIPLICADOR: em vez de calcular 15% de R$ 840 separadamente, multiplique diretamente por 0,15 (para achar o percentual) ou por 1,15 (para acréscimo de 15%) ou por 0,85 (para desconto de 15%).

ACRÉSCIMO: novo valor = V × (1 + p/100). Exemplo: salário de R$ 2.800 com aumento de 12% → 2.800 × 1,12 = R$ 3.136,00. DESCONTO: novo valor = V × (1 − p/100). Exemplo: produto de R$ 450 com 20% de desconto → 450 × 0,80 = R$ 360,00.

VARIAÇÕES CONSECUTIVAS — ponto crítico: dois acréscimos/descontos sequenciais NÃO se somam aritmeticamente. Para calcular o efeito total, multiplique os fatores. Exemplo: aumento de 10% seguido de redução de 10% → fator = 1,10 × 0,90 = 0,99 → perda líquida de 1%. Esse tipo de questão aparece disfarçado em tarifas bancárias, reajustes e IOF. DESCOBRIR O VALOR ORIGINAL após variação: se R$ 660 representa um valor após aumento de 10%, o original era 660 ÷ 1,10 = R$ 600,00. Sempre divida pelo fator, nunca subtraia o percentual diretamente.`
            }
          ],
          exercicios: [
            {
              titulo: 'Desconto e acréscimo consecutivo em tarifa bancária',
              nivel_dificuldade: 2,
              pergunta: 'Uma tarifa de manutenção de conta cobrava R$ 25,00 por mês. Em janeiro sofreu acréscimo de 20% e em julho recebeu desconto de 20%. Qual é o valor final da tarifa?',
              alternativas: [
                'R$ 25,00',
                'R$ 24,00',
                'R$ 26,00',
                'R$ 23,00',
                'R$ 27,00'
              ],
              correta: 1,
              explicacao: 'Janeiro: 25,00 × 1,20 = R$ 30,00. Julho: 30,00 × 0,80 = R$ 24,00. Aumento e desconto iguais consecutivos NÃO se anulam — o fator combinado é 1,20 × 0,80 = 0,96, representando redução líquida de 4% sobre o valor original. A alternativa A (R$ 25,00) é a armadilha para quem acredita que os percentuais se cancelam.'
            },
            {
              titulo: 'Recuperar valor original após variação percentual',
              nivel_dificuldade: 2,
              pergunta: 'Após um reajuste de 25%, o valor de uma cesta de serviços bancários passou a ser R$ 187,50. Qual era o valor original antes do reajuste?',
              alternativas: [
                'R$ 140,00',
                'R$ 150,00',
                'R$ 156,25',
                'R$ 162,50',
                'R$ 175,00'
              ],
              correta: 1,
              explicacao: 'Após reajuste de 25%: novo valor = original × 1,25. Para encontrar o original: 187,50 ÷ 1,25 = R$ 150,00. Erro comum: calcular 25% de 187,50 e subtrair — isso daria 187,50 − 46,875 = R$ 140,63, que não está entre as alternativas. Sempre divida pelo fator multiplicador para reverter a variação.'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 3. CONHECIMENTOS BANCÁRIOS
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Conhecimentos Bancários',
      modulos: [

        // ── Módulo 1 ──────────────────────────────────────────
        {
          nome: 'Sistema Financeiro Nacional — CMN, BACEN e CVM',
          descricao: 'Estrutura do SFN: órgãos normativos, supervisores e operadores. Atribuições do Conselho Monetário Nacional (CMN), do Banco Central do Brasil (BACEN) e da Comissão de Valores Mobiliários (CVM). Política monetária e cambial.',
          pilulas: [
            {
              titulo: 'CMN, BACEN e CVM: funções, composição e o que cai na CESGRANRIO',
              nivel_profundidade: 2,
              texto: `O Sistema Financeiro Nacional (SFN) é organizado em três camadas: órgãos normativos (fixam as regras), supervisores (fiscalizam o cumprimento) e operadores (executam as operações). A CESGRANRIO cobra especialmente a distinção entre os três principais órgãos da cúpula.

CONSELHO MONETÁRIO NACIONAL (CMN): Órgão normativo máximo do SFN. NÃO executa operações — apenas normatiza. Composição: Ministro da Fazenda (presidente), Ministro do Planejamento e Orçamento e Presidente do Banco Central. Atribuições principais: fixar diretrizes da política monetária, cambial e de crédito; regulamentar o mercado de capitais e de câmbio; estabelecer metas para a inflação (junto com o BACEN). O CMN NÃO tem poder executivo, NÃO realiza fiscalização direta e NÃO emite moeda.

BANCO CENTRAL DO BRASIL (BACEN): Órgão supervisor e executor da política monetária. É uma autarquia federal independente (desde 2021 — Lei Complementar 179/2021). Atribuições: emitir papel-moeda e moeda metálica; controlar o crédito e os meios de pagamento; administrar as reservas internacionais; fiscalizar as instituições financeiras; recolher o compulsório; operacionalizar o Pix e o SPB (Sistema de Pagamentos Brasileiro). O BACEN implementa as decisões do CMN.

COMISSÃO DE VALORES MOBILIÁRIOS (CVM): Supervisora do mercado de capitais. Autarquia vinculada ao Ministério da Fazenda. Regula e fiscaliza: bolsa de valores, fundos de investimento, debêntures, ações, derivativos. NÃO cuida de crédito bancário nem de câmbio — essa é uma distinção que a CESGRANRIO explora frequentemente. Mnemônico: CMN normatiza → BACEN executa a política monetária → CVM supervisiona o mercado de capitais.`
            }
          ],
          exercicios: [
            {
              titulo: 'Atribuição exclusiva do BACEN',
              nivel_dificuldade: 2,
              pergunta: 'Assinale a atribuição que é de competência EXCLUSIVA do Banco Central do Brasil:',
              alternativas: [
                'Fixar as diretrizes e normas da política cambial nacional.',
                'Regular o funcionamento das bolsas de valores e do mercado de capitais.',
                'Emitir papel-moeda e moeda metálica em território nacional.',
                'Autorizar o funcionamento de consórcios e seguradoras.',
                'Estabelecer as metas de inflação para o ano corrente.'
              ],
              correta: 2,
              explicacao: 'Emitir papel-moeda e moeda metálica é atribuição exclusiva do BACEN (Art. 10, I da Lei 4.595/64). A A é atribuição do CMN (que normatiza a política cambial). A B é atribuição da CVM. A D é compartilhada com outros supervisores (SUSEP para seguradoras). A E é decisão do CMN com base em proposta do BACEN, mas a definição formal cabe ao CMN.'
            },
            {
              titulo: 'Distinção CMN versus BACEN em questão de atribuição',
              nivel_dificuldade: 2,
              pergunta: 'O Conselho Monetário Nacional (CMN) se diferencia do Banco Central do Brasil (BACEN) porque o CMN:',
              alternativas: [
                'É responsável por fiscalizar diretamente as instituições financeiras e aplicar penalidades.',
                'Emite as cédulas e moedas colocadas em circulação no país.',
                'Administra as reservas internacionais do Brasil.',
                'É órgão normativo que estabelece regras gerais para o SFN, sem executar operações financeiras.',
                'É responsável por autorizar a abertura de capital de empresas na Bolsa de Valores.'
              ],
              correta: 3,
              explicacao: 'O CMN é órgão exclusivamente normativo — define as diretrizes e regras do SFN, mas não executa operações, não fiscaliza diretamente e não emite moeda. Quem executa é o BACEN. A A, B e C são atribuições do BACEN. A E é atribuição da CVM. A distinção normativo/executor é o ponto mais cobrado sobre o CMN.'
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Produtos e Serviços Bancários',
          descricao: 'Características, rentabilidade, riscos e garantias dos principais produtos: Poupança, CDB, LCI/LCA, Conta Corrente, Cartão de Crédito. Fundo Garantidor de Créditos (FGC). Tarifas bancárias — Resolução CMN.',
          pilulas: [
            {
              titulo: 'CDB, LCI, Poupança e Conta Corrente: o que o escriturário precisa saber para vender e para a prova',
              nivel_profundidade: 2,
              texto: `O escriturário do BB é um agente comercial — precisa conhecer os produtos que vai oferecer. A CESGRANRIO explora especialmente as diferenças de tributação, garantia e rentabilidade entre os produtos.

POUPANÇA: rendimento de 70% da Selic quando a Selic estiver acima de 8,5% a.a. (Resolução CMN 3.048/2013); 0,5% a.m. + TR quando a Selic for igual ou inferior a 8,5% a.a. Isenção de IR para pessoa física. Liquidez diária (aniversário mensal). Garantida pelo FGC até R$ 250.000 por CPF por instituição. Sem taxa de administração.

CDB — Certificado de Depósito Bancário: título de renda fixa emitido por bancos para captar recursos. Rentabilidade prefixada (taxa fixa contratada), pós-fixada (% do CDI) ou híbrida (IPCA + taxa). Tributação regressiva de IR: 22,5% (até 180 dias), 20% (181–360 dias), 17,5% (361–720 dias), 15% (acima de 720 dias). Garantia FGC: até R$ 250.000 por CPF por instituição. Ideal para quem busca rentabilidade superior à poupança com segurança semelhante.

LCI — Letra de Crédito Imobiliário | LCA — Letra de Crédito do Agronegócio: títulos emitidos por bancos para financiar, respectivamente, o setor imobiliário e o agronegócio. Principal vantagem: ISENÇÃO DE IR para pessoa física. Carência mínima de 90 dias (LCI) e 90 dias (LCA). Garantia FGC: R$ 250.000. Rentabilidade geralmente atrelada ao CDI, porém com percentual levemente inferior ao CDB — compensado pela isenção de imposto.

CONTA CORRENTE: produto de transação, não de investimento. Serviços essenciais gratuitos (Resolução CMN 3.919/2010): cartão de débito, 4 saques/mês, 2 TED/mês, 2 extratos/mês, consultas ilimitadas por internet banking. Cheque especial: crédito rotativo com as maiores taxas do mercado (limitadas a 8% a.m. pelo BACEN desde 2020). FGC cobre saldo em conta corrente até R$ 250.000.

FGC — FUNDO GARANTIDOR DE CRÉDITOS: garante depósitos e aplicações em bancos em caso de intervenção, liquidação extrajudicial ou falência. Limite: R$ 250.000 por CPF por conglomerado financeiro, com teto global de R$ 1.000.000 por CPF a cada 4 anos. Produtos cobertos: poupança, CDB, LCI, LCA, conta corrente, RDB, LH. NÃO cobertos: fundos de investimento, debêntures, ações, COE, títulos do Tesouro Direto (garantidos pelo Governo Federal, não pelo FGC).`
            }
          ],
          exercicios: [
            {
              titulo: 'Comparativo de produtos: tributação e garantia',
              nivel_dificuldade: 2,
              pergunta: 'Um cliente pergunta ao escriturário do BB qual produto de renda fixa é isento de Imposto de Renda para pessoa física e está coberto pelo Fundo Garantidor de Créditos. A resposta CORRETA é:',
              alternativas: [
                'CDB com vencimento superior a 720 dias, pois a alíquota de IR cai a zero.',
                'Fundos de Investimento em Renda Fixa, pois são regulados pela CVM.',
                'LCI ou LCA, pois são isentos de IR para pessoa física e cobertos pelo FGC.',
                'Poupança, pois é o único produto bancário com isenção de IR para qualquer investidor.',
                'Tesouro Direto IPCA+, pois o risco é zero e não há cobrança de IR.'
              ],
              correta: 2,
              explicacao: 'LCI e LCA são isentos de IR para pessoa física (Lei 11.033/2004) e cobertos pelo FGC até R$ 250.000 por CPF por instituição. A A está errada: o CDB nunca é isento de IR — a alíquota mínima é 15% (acima de 720 dias). A B está errada: fundos não são cobertos pelo FGC. A D está parcialmente certa (poupança tem isenção de IR), mas ignora que a pergunta pede os dois critérios simultaneamente. A E está errada: Tesouro Direto tem IR e não é coberto pelo FGC (tem garantia soberana).'
            },
            {
              titulo: 'Regras do FGC — cobertura por instituição',
              nivel_dificuldade: 2,
              pergunta: 'Mônica possui R$ 180.000,00 em poupança no Banco Alfa e R$ 200.000,00 em CDB no Banco Beta. Se ambas as instituições entrassem em liquidação extrajudicial simultaneamente, quanto o FGC garantiria a Mônica no total?',
              alternativas: [
                'R$ 250.000,00, pois esse é o limite total do FGC.',
                'R$ 380.000,00, pois o FGC cobre até R$ 250.000 por CPF em cada instituição separadamente.',
                'R$ 430.000,00, pois o FGC cobre o valor integral de ambas as contas.',
                'R$ 200.000,00, pois apenas o CDB é coberto pelo FGC.',
                'R$ 500.000,00, pois o FGC dobra a cobertura em caso de liquidação simultânea.'
              ],
              correta: 1,
              explicacao: 'O FGC garante até R$ 250.000 por CPF por conglomerado financeiro. No Banco Alfa: R$ 180.000 (valor integral, pois está abaixo do limite). No Banco Beta: R$ 200.000 (valor integral, pois está abaixo do limite). Total garantido: R$ 180.000 + R$ 200.000 = R$ 380.000. A A confunde o limite por instituição com o limite global. A C aplicaria se os valores fossem menores. O teto global de R$ 1.000.000 a cada 4 anos ainda não é atingido neste cenário.'
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
