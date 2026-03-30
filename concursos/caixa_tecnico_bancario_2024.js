/**
 * DADOS: Caixa Econômica Federal — Técnico Bancário Novo 2024
 * Banca: CESGRANRIO | Múltipla escolha com 5 alternativas
 * Referência: Edital CEF 2024 (CESGRANRIO) — 2.000 vagas nacionais
 *
 * 3 disciplinas × 2 módulos × 1 pílula + 2 exercícios:
 *  1. Língua Portuguesa
 *  2. Matemática Financeira
 *  3. Vendas e Negociação Bancária
 */

const { executarIngestion } = require('../engine_ingestao');

const CONFIG = {
  orgao_match: 'Caixa Econômica Federal - Técnico Bancário',
  concurso_nome: 'Caixa - Técnico Bancário 2024',
  concurso_banca: 'CESGRANRIO',

  concurso_gps: {
    orgao: 'Caixa Econômica Federal - Técnico Bancário',
    cargo: 'Técnico Bancário Novo',
    banca: 'CESGRANRIO',
    status_edital: 'encerrado',
    vagas: 2000,
    remuneracao: 'R$ 3.520,00'
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
          nome: 'Leitura e Interpretação Textual',
          descricao: 'Leitura estratégica de textos formais e técnicos. Identificação de informações explícitas e implícitas. Inferência, pressuposto e subentendido. Distinção entre o que o texto diz e o que o leitor acrescenta.',
          pilulas: [
            {
              titulo: 'Inferência e pressuposto: o que o texto diz sem dizer explicitamente',
              nivel_profundidade: 2,
              texto: `A CESGRANRIO distingue com precisão três tipos de leitura: a literal (o que o texto diz de forma direta), a inferencial (o que se pode concluir logicamente a partir do texto) e a pressuposta (o que o texto assume como verdadeiro sem afirmar diretamente). Confundir esses três níveis é a principal fonte de erro nas questões de interpretação.

INFORMAÇÃO EXPLÍCITA: está declarada no texto sem necessidade de interpretação adicional. Exemplo: "A Caixa possui mais de 4.000 agências." — essa informação pode ser localizada e transcrita.

INFERÊNCIA: conclusão lógica que o leitor tira a partir de informações do texto, mesmo que não esteja escrita. Exemplo: se o texto diz "a inadimplência cresceu e os lucros caíram", infere-se que há relação causal entre os dois fenômenos, embora o texto não use a palavra "portanto" ou "por isso". A CESGRANRIO pede inferências válidas — aquelas que NÃO contradizem o texto e são sustentadas por ele. Inferências que exigem conhecimento externo ao texto são consideradas inválidas.

PRESSUPOSTO: informação que o texto trata como verdadeira sem precisar provar. Está embutida na estrutura da frase. Exemplo: "Após a modernização do sistema, os clientes passaram a acessar sua conta mais rapidamente." — pressuposto: o sistema foi modernizado (isso não é afirmado como novidade, é dado como fato). Outro exemplo: "Quando o banco voltou a crescer..." — pressuposto: o banco havia parado de crescer antes. Em questões sobre pressuposto, procure verbos aspectuais (voltar a, parar de, continuar) e expressões de tempo (depois que, quando, desde que) — eles sempre carregam pressupostos.

SUBENTENDIDO: mensagem implícita que depende do contexto e da intenção comunicativa, não apenas da estrutura linguística. Diferente do pressuposto (que é estrutural), o subentendido é pragmático. A CESGRANRIO raramente usa o termo "subentendido" explicitamente, mas avalia a habilidade por meio de questões sobre "intenção do autor" ou "o que o autor quer dizer com...".`
            }
          ],
          exercicios: [
            {
              titulo: 'Distinção entre inferência válida e inválida',
              nivel_dificuldade: 2,
              pergunta: 'Leia: "A Caixa Econômica Federal registrou crescimento de 18% na carteira de crédito habitacional no primeiro semestre, impulsionado pelo programa Minha Casa Minha Vida e pela queda nas taxas de juros." Qual alternativa apresenta uma inferência VÁLIDA com base exclusivamente no texto?',
              alternativas: [
                'O programa Minha Casa Minha Vida foi criado no primeiro semestre do ano em questão.',
                'A carteira de crédito habitacional da Caixa é a maior do Brasil.',
                'A expansão do crédito habitacional esteve relacionada, entre outros fatores, ao ambiente de juros mais baixos.',
                'A queda nas taxas de juros ocorreu por decisão exclusiva do Banco Central.',
                'O crescimento de 18% no crédito habitacional gerou aumento equivalente no lucro da Caixa.'
              ],
              correta: 2,
              explicacao: 'A C é inferência válida: o texto menciona a queda nas taxas de juros como um dos fatores impulsionadores, logo é correto inferir que o ambiente de juros baixos contribuiu para a expansão. A A extrapola (o texto não diz quando o programa foi criado). A B traz informação externa não presente no texto. A D atribui causa exclusiva ao BACEN, informação que o texto não fornece. A E cria relação entre crédito e lucro que o texto não estabelece.'
            },
            {
              titulo: 'Pressuposto em texto institucional',
              nivel_dificuldade: 2,
              pergunta: 'Na frase "Após retomar o protagonismo no crédito habitacional, a Caixa voltou a liderar o ranking de financiamentos imobiliários no país.", qual é o pressuposto linguístico presente?',
              alternativas: [
                'A Caixa nunca havia perdido a liderança no crédito habitacional.',
                'Em algum momento anterior, a Caixa havia deixado de liderar o ranking de financiamentos imobiliários.',
                'O crédito habitacional é o único segmento em que a Caixa atua.',
                'A liderança da Caixa é permanente e não pode ser contestada por outros bancos.',
                'O ranking de financiamentos imobiliários é elaborado anualmente pelo Banco Central.'
              ],
              correta: 1,
              explicacao: 'O verbo "voltar a" (voltou a liderar) pressupõe que houve um período em que o sujeito NÃO exercia a ação — ou seja, a Caixa deixou de liderar em algum momento antes de retomar. Da mesma forma, "retomar o protagonismo" pressupõe que ele havia sido perdido. Esse é o mecanismo clássico de pressuposto via verbo aspectual, muito cobrado pela CESGRANRIO.'
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Argumentação e Coesão',
          descricao: 'Mecanismos de coesão textual: referência, substituição, elipse, conjunção. Conectivos e valor semântico. Progressão temática e coerência argumentativa. Articuladores de causa, consequência, concessão, oposição e adição.',
          pilulas: [
            {
              titulo: 'Conectivos e progressão textual: como a CESGRANRIO testa coesão',
              nivel_profundidade: 2,
              texto: `Coesão textual é o conjunto de mecanismos linguísticos que garantem a unidade do texto — as "costuras" entre frases e parágrafos. A CESGRANRIO avalia especialmente o uso correto dos conectivos (conjunções e locuções conjuntivas) e a manutenção da progressão temática.

CONECTIVOS POR VALOR SEMÂNTICO — os mais cobrados:
• ADIÇÃO: e, além disso, também, bem como, não só... mas também. Acrescenta informação.
• OPOSIÇÃO/CONCESSÃO: mas, porém, contudo, entretanto, todavia, no entanto (oposição direta); embora, apesar de, ainda que, mesmo que (concessão — admite a premissa contrária antes de afirmar a tese).
• CAUSA: porque, pois (explicativo), visto que, uma vez que, já que, dado que.
• CONSEQUÊNCIA: portanto, logo, assim, de modo que, tanto... que.
• CONDIÇÃO: se, caso, desde que, a menos que, contanto que.
• FINALIDADE: para, a fim de que, com o intuito de, para que.
• TEMPO: quando, enquanto, assim que, logo que, depois que, antes que.
• EXPLICAÇÃO: ou seja, isto é, a saber, por exemplo.

Armadilha clássica da CESGRANRIO: substituir "embora" (concessão) por "porque" (causa) ou "portanto" (consequência) e perguntar se o sentido foi preservado. Não foi — cada conectivo carrega um valor lógico diferente. Outra armadilha: "mas" (oposição) não pode ser substituído por "e" (adição) sem alterar o sentido.

PROGRESSÃO TEMÁTICA: um texto bem construído mantém um tópico central (tema) e vai acrescentando predicados novos a ele (rema). A violação da progressão ocorre quando um parágrafo introduz um assunto sem relação com o anterior, gerando incoerência. Em questões de reescrita, escolha sempre a alternativa que mantém a relação lógica original entre as ideias, mesmo que use palavras diferentes.`
            }
          ],
          exercicios: [
            {
              titulo: 'Valor semântico de conectivo em contexto argumentativo',
              nivel_dificuldade: 2,
              pergunta: 'Leia: "O banco ampliou sua rede de correspondentes bancários; _______, muitos clientes em municípios remotos passaram a ter acesso a serviços financeiros básicos." O conectivo que preenche a lacuna de forma COERENTE, indicando consequência, é:',
              alternativas: [
                'Entretanto',
                'Embora',
                'Contudo',
                'Consequentemente',
                'Visto que'
              ],
              correta: 3,
              explicacao: '"Consequentemente" indica relação de consequência — a ampliação da rede (causa) gerou o acesso dos clientes remotos (efeito). "Entretanto", "Contudo" e "Embora" indicam oposição ou concessão, o que contradiz a lógica do trecho. "Visto que" indica causa, mas está na posição errada (viria antes da causa, não depois). A progressão lógica do trecho é claramente causal-consequencial.'
            },
            {
              titulo: 'Substituição de conectivo com preservação de sentido',
              nivel_dificuldade: 2,
              pergunta: 'Na frase "Embora as taxas de juros estivessem elevadas, o volume de crédito imobiliário cresceu no semestre.", o conectivo "Embora" expressa relação de concessão. Assinale a alternativa em que o conectivo substituto PRESERVA esse mesmo valor semântico:',
              alternativas: [
                '"Porque as taxas de juros estavam elevadas, o volume de crédito imobiliário cresceu no semestre."',
                '"Portanto, as taxas de juros estavam elevadas e o crédito imobiliário cresceu no semestre."',
                '"Apesar de as taxas de juros estarem elevadas, o volume de crédito imobiliário cresceu no semestre."',
                '"Como as taxas de juros estavam elevadas, o volume de crédito imobiliário cresceu no semestre."',
                '"Se as taxas de juros estiverem elevadas, o volume de crédito imobiliário crescerá no semestre."'
              ],
              correta: 2,
              explicacao: '"Apesar de" é locução concessiva equivalente a "embora" — admite a premissa adversa (juros altos) para em seguida afirmar o fato contrário ao esperado (crédito cresceu). A A usa "porque" (causa), alterando completamente o sentido lógico. A B usa "portanto" (consequência) e une as frases como se uma derivasse da outra. A D usa "como" no sentido causal. A E transforma a frase em período hipotético condicional.'
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
          nome: 'Juros Compostos e Capitalização',
          descricao: 'Regime de capitalização composta: fórmula M = C(1+i)ⁿ. Cálculo de montante, capital, taxa e prazo. Taxa efetiva versus taxa nominal. Equivalência de taxas. Aplicações em financiamentos habitacionais e investimentos de renda fixa.',
          pilulas: [
            {
              titulo: 'Capitalização composta: fórmula M = C(1+i)ⁿ e suas variações na prova',
              nivel_profundidade: 2,
              texto: `O regime de juros compostos é o padrão do mercado financeiro brasileiro. Em toda operação bancária real — financiamentos habitacionais, CDB, LCI, cartão de crédito — os juros compostos estão presentes. A CESGRANRIO explora a fórmula M = C × (1 + i)ⁿ em quatro abordagens distintas, e o candidato precisa dominar todas.

ABORDAGEM 1 — Calcular o Montante (M): M = C × (1 + i)ⁿ. Dado: C = R$ 8.000, i = 3% a.m., n = 3 meses. M = 8.000 × (1,03)³. (1,03)³ = 1,092727. M ≈ R$ 8.741,82. Atenção: a prova fornece o valor de (1+i)ⁿ quando o expoente é alto — use o dado fornecido no enunciado.

ABORDAGEM 2 — Calcular o Capital Inicial (C): C = M ÷ (1 + i)ⁿ. Isso é o valor presente (VP). Exemplo: qual capital gera R$ 12.000 em 2 anos a 10% a.a.? C = 12.000 ÷ (1,10)² = 12.000 ÷ 1,21 ≈ R$ 9.917,36.

ABORDAGEM 3 — Calcular a taxa: isolando i da fórmula. Em concursos, a CESGRANRIO raramente pede o cálculo algébrico da taxa — prefere perguntas conceituais sobre taxa efetiva versus nominal.

TAXA NOMINAL versus TAXA EFETIVA: a taxa nominal é declarada em um período mas capitalizada em período menor. Exemplo: 12% a.a. capitalizado mensalmente → taxa nominal anual. A taxa efetiva mensal correspondente é 12% ÷ 12 = 1% a.m. (somente no regime simples ou como aproximação). No regime composto, a conversão é feita pela equivalência: (1 + i_efetiva_anual) = (1 + i_mensal)¹². Se a taxa mensal efetiva é 1%, a taxa anual efetiva é (1,01)¹² − 1 ≈ 12,68% a.a. — sempre maior que a nominal de 12%. Esse conceito é cobrado em questões sobre "custo real do financiamento" e é relevante para produtos da Caixa (especialmente o crédito habitacional).`
            }
          ],
          exercicios: [
            {
              titulo: 'Cálculo de montante com fórmula M = C(1+i)ⁿ',
              nivel_dificuldade: 2,
              pergunta: 'Um cliente contrata um empréstimo pessoal de R$ 12.000,00 junto à Caixa a juros compostos de 4% ao mês. Após 3 meses sem nenhum pagamento, qual é o saldo devedor? (Considere (1,04)³ = 1,1249)',
              alternativas: [
                'R$ 13.440,00',
                'R$ 13.498,80',
                'R$ 13.200,00',
                'R$ 14.400,00',
                'R$ 13.920,00'
              ],
              correta: 1,
              explicacao: 'M = C × (1 + i)ⁿ = 12.000 × (1,04)³ = 12.000 × 1,1249 = R$ 13.498,80. A alternativa A (R$ 13.440,00) seria o resultado em juros simples: 12.000 × (1 + 0,04 × 3) = 12.000 × 1,12 = R$ 13.440,00. A diferença de R$ 58,80 representa exatamente o efeito dos "juros sobre juros" do regime composto. A D seria 4% × 3 × 10.000 + base errada.'
            },
            {
              titulo: 'Taxa nominal versus taxa efetiva em financiamento habitacional',
              nivel_dificuldade: 2,
              pergunta: 'Um financiamento habitacional da Caixa é contratado com "taxa nominal de 12% ao ano, capitalização mensal". A taxa efetiva mensal cobrada é de:',
              alternativas: [
                '12% ao mês',
                '1,5% ao mês',
                '1% ao mês',
                '0,95% ao mês',
                '1,12% ao mês'
              ],
              correta: 2,
              explicacao: 'Taxa nominal de 12% a.a. com capitalização mensal: divide-se a taxa pelo número de períodos de capitalização. Taxa efetiva mensal = 12% ÷ 12 = 1% a.m. Atenção: essa divisão direta é válida para converter taxa nominal em taxa efetiva do período de capitalização. A taxa efetiva anual correspondente seria (1,01)¹² − 1 ≈ 12,68% a.a. — sempre superior à nominal. A alternativa B (1,5%) corresponderia a 18% a.a. nominal.'
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Análise de Crédito e Risco',
          descricao: 'Conceitos de risco de crédito: inadimplência, scoring, capacidade de pagamento, comprometimento de renda. Políticas de crédito: critérios de concessão, garantias, renegociação e recuperação de créditos. Provisão para Devedores Duvidosos (PDD). Resolução CMN 2.682/1999.',
          pilulas: [
            {
              titulo: 'Análise de crédito bancário: scoring, inadimplência e renegociação segundo a regulação brasileira',
              nivel_profundidade: 2,
              texto: `A análise de crédito é um dos processos centrais da atividade bancária. O técnico bancário da Caixa participa diretamente da concessão de crédito habitacional e pessoal, devendo conhecer os critérios regulatórios e as ferramentas de avaliação de risco.

SCORING DE CRÉDITO: modelo estatístico que atribui uma pontuação ao cliente com base em seu histórico de pagamentos, nível de endividamento, tempo de relacionamento com a instituição, renda declarada e dados cadastrais. Quanto maior o score, menor o risco percebido e melhores as condições de crédito oferecidas (taxa menor, prazo maior). O uso de scoring é regulamentado pela Lei 12.414/2011 (Cadastro Positivo) e pelo Código de Defesa do Consumidor. O cliente tem direito a conhecer os critérios utilizados na avaliação.

INADIMPLÊNCIA: considera-se inadimplente o devedor que não cumpre obrigação contratual no prazo. A Resolução CMN 2.682/1999 classifica as operações de crédito em nove níveis de risco (AA, A, B, C, D, E, F, G, H), com provisionamento crescente: AA = 0%; A = 0,5%; B = 1%; C = 3%; D = 10%; E = 30%; F = 50%; G = 70%; H = 100%. Operações com atraso superior a 15 dias devem ser reclassificadas progressivamente. O risco H indica impossibilidade de recuperação e exige provisão de 100% do valor.

COMPROMETIMENTO DE RENDA: o Banco Central recomenda que o total de parcelas mensais de crédito não ultrapasse 30% da renda bruta do tomador. Esse limite é orientativo para o crédito consignado (desconto em folha) e mandatório em alguns programas habitacionais (Minha Casa Minha Vida). A análise da capacidade de pagamento leva em conta renda líquida, despesas fixas, dependentes e outros compromissos financeiros.

RENEGOCIAÇÃO DE DÍVIDAS: operação em que a instituição financeira e o devedor acordam novas condições para dívidas em atraso (prazo maior, taxa reduzida, desconto no saldo devedor). A renegociação pode ser: (1) refinanciamento — novo contrato que incorpora a dívida original; (2) acordo extrajudicial — quitação com desconto; (3) portabilidade de crédito — migração da dívida para outra instituição a custo menor (direito garantido pela Resolução CMN 4.292/2013). Renegociações que resultam em aumento do saldo devedor devem ser transparentes sobre o custo total.`
            }
          ],
          exercicios: [
            {
              titulo: 'Classificação de risco conforme Resolução CMN 2.682/1999',
              nivel_dificuldade: 2,
              pergunta: 'Conforme a Resolução CMN 2.682/1999, uma operação de crédito classificada como nível "D" exige que o banco constitua provisão equivalente a qual percentual do valor do crédito?',
              alternativas: [
                '1%',
                '3%',
                '10%',
                '30%',
                '50%'
              ],
              correta: 2,
              explicacao: 'A Resolução CMN 2.682/1999 estabelece: AA = 0%, A = 0,5%, B = 1%, C = 3%, D = 10%, E = 30%, F = 50%, G = 70%, H = 100%. Nível D exige 10% de Provisão para Devedores Duvidosos (PDD). Essa provisão representa o reconhecimento contábil de que parte do crédito pode não ser recuperada, impactando diretamente o resultado do banco.'
            },
            {
              titulo: 'Comprometimento de renda e capacidade de pagamento',
              nivel_dificuldade: 2,
              pergunta: 'Cláudia tem renda bruta mensal de R$ 4.000,00 e já possui parcelas mensais de empréstimos totalizando R$ 800,00. Aplicando o critério de comprometimento máximo de 30% da renda bruta, qual é o valor máximo de parcela mensal adicional que a Caixa poderia conceder a ela?',
              alternativas: [
                'R$ 1.200,00',
                'R$ 600,00',
                'R$ 400,00',
                'R$ 200,00',
                'R$ 0,00 — ela já atingiu o limite máximo.'
              ],
              correta: 2,
              explicacao: 'Limite de comprometimento: 30% de R$ 4.000 = R$ 1.200,00 por mês. Cláudia já comprometeu R$ 800,00. Capacidade adicional: R$ 1.200 − R$ 800 = R$ 400,00. A A seria o limite bruto sem descontar o compromisso existente. A E seria incorreta pois Cláudia ainda tem margem disponível (comprometimento atual: 800 ÷ 4.000 = 20%, abaixo dos 30%).'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 3. VENDAS E NEGOCIAÇÃO BANCÁRIA
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Vendas e Negociação Bancária',
      modulos: [

        // ── Módulo 1 ──────────────────────────────────────────
        {
          nome: 'Técnicas de Vendas e Relacionamento com Cliente',
          descricao: 'Ciclo de vendas bancárias. Necessidades e perfil do cliente. Cross-selling e up-selling. CRM (Customer Relationship Management). Segmentação de clientes. Satisfação, fidelização e NPS. Atendimento consultivo versus transacional.',
          pilulas: [
            {
              titulo: 'Cross-selling, up-selling e CRM: a base do atendimento comercial bancário',
              nivel_profundidade: 2,
              texto: `O técnico bancário da Caixa não é apenas um operador de caixa — é um consultor financeiro de primeiro atendimento. A CESGRANRIO cobra o conhecimento técnico das ferramentas e estratégias de vendas bancárias, exigindo que o candidato compreenda os conceitos e saiba aplicá-los em situações práticas.

CROSS-SELLING (venda cruzada): oferta de produto ou serviço complementar ao que o cliente já contratou ou está contratando. Exemplo: cliente que abre uma conta corrente recebe oferta de seguro de vida, cartão de crédito e previdência privada. O cross-selling é eficiente porque o custo de aquisição do cliente já foi pago — basta ampliar o relacionamento. Para ser ético, o produto ofertado deve atender a uma necessidade real do cliente, identificada no atendimento.

UP-SELLING: oferta de versão superior ou premium do produto que o cliente já utiliza ou está adquirindo. Exemplo: cliente com conta corrente básica é convidado a migrar para conta premium com mais benefícios (milhas aéreas, seguro, acesso a salas VIP). Ou cliente de CDB 90% CDI é apresentado a LCI isenta de IR com rendimento líquido superior. O up-selling aumenta o ticket médio por cliente.

CRM — CUSTOMER RELATIONSHIP MANAGEMENT: sistema de gestão de relacionamento com clientes que centraliza histórico de interações, produtos contratados, perfil comportamental, oportunidades de negócio e agenda de contatos. O CRM permite ao gerente identificar: (1) clientes com produtos próximos do vencimento (oportunidade de renovação); (2) clientes com renda aumentada (oportunidade de up-selling); (3) clientes com parcelas em dia e margem de crédito disponível (oportunidade de novo crédito). O uso correto do CRM transforma o atendimento reativo em atendimento proativo.

ATENDIMENTO CONSULTIVO: o banco deixa de ser apenas fornecedor de produtos e passa a atuar como assessor financeiro do cliente. O técnico bancário consultivo faz perguntas sobre objetivos financeiros (aposentadoria, compra de imóvel, educação dos filhos) antes de oferecer produtos. A venda resultante é mais assertiva, gera mais satisfação e reduz cancelamentos (churn). NPS (Net Promoter Score): métrica que mede a lealdade do cliente pela pergunta "De 0 a 10, o quanto você recomendaria nossa instituição?". Promotores (9–10), Neutros (7–8) e Detratores (0–6). NPS = % Promotores − % Detratores.`
            }
          ],
          exercicios: [
            {
              titulo: 'Cross-selling versus up-selling em situação prática',
              nivel_dificuldade: 1,
              pergunta: 'Uma cliente que acabou de contratar um financiamento habitacional na Caixa recebe a oferta de um seguro residencial que protege o imóvel financiado contra incêndio, roubo e danos elétricos. Essa estratégia comercial corresponde a:',
              alternativas: [
                'Up-selling, pois o seguro é um produto de maior valor agregado que o financiamento.',
                'Cross-selling, pois é a oferta de um produto complementar ao que a cliente acabou de contratar.',
                'Churn reduction, pois visa manter a cliente na base ativa da Caixa.',
                'NPS positivo, pois demonstra preocupação com a satisfação da cliente.',
                'Up-selling, pois o seguro residencial tem custo mensal menor que a parcela do financiamento.'
              ],
              correta: 1,
              explicacao: 'Cross-selling é a venda cruzada de produto complementar ao que o cliente já adquiriu. O seguro residencial complementa o financiamento habitacional (ambos relacionados ao imóvel) — é uma venda cruzada típica. Up-selling seria oferecer um produto superior na mesma categoria (ex: financiamento com taxa menor e prazo maior) ou uma versão premium. Churn reduction e NPS são métricas/estratégias de retenção, não de venda.'
            },
            {
              titulo: 'Uso do CRM para atendimento proativo',
              nivel_dificuldade: 2,
              pergunta: 'Um técnico bancário da Caixa utiliza o sistema CRM e identifica que uma cliente possui um CDB que vence em 15 dias, renda mensal de R$ 8.000,00 e nenhum produto de previdência privada contratado. Qual abordagem representa o uso IDEAL do CRM para atendimento consultivo?',
              alternativas: [
                'Aguardar a cliente entrar em contato espontaneamente para evitar constrangimento.',
                'Ligar para a cliente, informar o vencimento do CDB e apresentar opções de reinvestimento, incluindo a previdência privada como alternativa para objetivos de longo prazo.',
                'Enviar apenas um SMS automático informando o vencimento do CDB, sem oferecer novos produtos.',
                'Transferir a cliente imediatamente para o gerente de conta, pois o técnico bancário não deve abordar temas de investimento.',
                'Registrar no CRM que a cliente tem perfil conservador e não deve receber ofertas de novos produtos.'
              ],
              correta: 1,
              explicacao: 'O uso ideal do CRM é transformar dados em oportunidade de atendimento proativo e consultivo. A abordagem correta combina: (1) uso da informação de vencimento para criar o contato; (2) apresentação de opções de reinvestimento (renovação do CDB); (3) oferta consultiva de previdência privada alinhada ao perfil de renda elevada e ausência do produto. A A representa atendimento reativo (passivo). A C é automação sem relacionamento. A D subutiliza o técnico bancário. A E registra informação que não está fundamentada nos dados disponíveis.'
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Ética no Atendimento e Compliance Bancário',
          descricao: 'Sigilo bancário: Lei Complementar 105/2001. Quebra de sigilo: hipóteses legais e autorização judicial. Conflito de interesses. Código de Conduta e Ética do setor bancário. Prevenção à lavagem de dinheiro: Lei 9.613/1998 e obrigações do funcionário.',
          pilulas: [
            {
              titulo: 'Sigilo bancário (LC 105/2001), conflito de interesses e prevenção à lavagem de dinheiro',
              nivel_profundidade: 2,
              texto: `A ética bancária e o compliance são temas obrigatórios nos concursos da Caixa. O técnico bancário lida diariamente com informações sigilosas dos clientes e deve conhecer as normas que regem seu uso, proteção e as exceções legais.

SIGILO BANCÁRIO — LEI COMPLEMENTAR 105/2001: as instituições financeiras são obrigadas a manter sigilo sobre as operações realizadas pelos clientes (Art. 1º). Essa obrigação se estende a todos os funcionários, mesmo após o desligamento da instituição. QUEBRA DE SIGILO é permitida nas seguintes hipóteses: (1) por ordem judicial — juiz pode determinar a quebra em processo criminal ou civil; (2) para a Receita Federal — autorizada diretamente pelas autoridades fiscais em procedimento fiscal regular, sem necessidade de ordem judicial (RE 601.314/SP, STF, 2016 — tema 225); (3) para o BACEN, CVM e SUSEP no exercício da atividade fiscalizatória; (4) para CPI do Congresso Nacional (STF ADI 2.466); (5) para o Ministério Público em ações penais públicas. O compartilhamento entre instituições do mesmo conglomerado financeiro para fins de análise de crédito também é permitido, desde que o cliente seja informado.

CONFLITO DE INTERESSES: ocorre quando o interesse pessoal do funcionário pode influenciar, ou aparentar influenciar, sua conduta profissional em detrimento do cliente ou da instituição. Exemplos: recomendar produto que paga maior comissão ao funcionário em vez do mais adequado ao cliente; conceder crédito a familiar sem seguir os critérios de alçada; usar informação privilegiada de cliente para benefício próprio. O Código de Conduta Ética da Caixa proíbe essas práticas e exige que o funcionário declare e se abstenha de situações de conflito.

PREVENÇÃO À LAVAGEM DE DINHEIRO — LEI 9.613/1998: lavagem de dinheiro é o processo de ocultar ou dissimular a origem ilícita de recursos. O funcionário bancário tem obrigações legais: (1) identificar e registrar operações suspeitas; (2) comunicar ao COAF (Conselho de Controle de Atividades Financeiras) operações incomuns que possam indicar lavagem; (3) manter registros por 5 anos (prazo mínimo de guarda dos dados). Sinais de alerta: transações em dinheiro vivo acima de R$ 50.000,00, fracionamento de depósitos para evitar registro (smurfing), movimentação incompatível com a renda declarada. O funcionário que comunica de boa-fé ao COAF não pode ser responsabilizado civil ou criminalmente pela comunicação.`
            }
          ],
          exercicios: [
            {
              titulo: 'Hipóteses de quebra de sigilo bancário conforme LC 105/2001',
              nivel_dificuldade: 2,
              pergunta: 'Conforme a Lei Complementar 105/2001, o sigilo bancário de um cliente pode ser quebrado, sem necessidade de ordem judicial, a pedido de:',
              alternativas: [
                'Qualquer órgão público que comprove interesse legítimo na informação.',
                'O cônjuge do cliente, em caso de divórcio litigioso.',
                'A Receita Federal do Brasil, no exercício regular do procedimento fiscal.',
                'O advogado do cliente, com procuração por instrumento público.',
                'O Ministério Público estadual, em qualquer inquérito civil.'
              ],
              correta: 2,
              explicacao: 'O STF, no RE 601.314 (Tema 225, 2016), consolidou o entendimento de que a Receita Federal pode requisitar dados bancários diretamente às instituições financeiras, sem necessidade de ordem judicial, no âmbito de procedimento fiscal regular. A A está errada: nem todo órgão público tem esse poder. A B exige decisão judicial. A C (advogado) exige ação judicial ou procedimento formal. A D requer decisão judicial ou lei específica para cada caso do MP estadual.'
            },
            {
              titulo: 'Obrigação do funcionário bancário na prevenção à lavagem de dinheiro',
              nivel_dificuldade: 2,
              pergunta: 'Um técnico bancário da Caixa percebe que um cliente realiza, diariamente ao longo de duas semanas, depósitos em dinheiro vivo de R$ 9.000,00 cada — sempre abaixo do limite de R$ 10.000,00 que exige registro automático. Considerando a Lei 9.613/1998 e as normas de prevenção à lavagem de dinheiro, o técnico deve:',
              alternativas: [
                'Ignorar, pois cada operação individualmente está dentro do limite legal.',
                'Recusar todos os depósitos e encerrar a conta do cliente imediatamente.',
                'Informar ao cliente que ele deve parcelar os depósitos em valores ainda menores.',
                'Registrar a operação como suspeita de fracionamento (smurfing) e comunicar ao COAF por meio dos canais internos da instituição.',
                'Consultar o Banco Central antes de qualquer ação, aguardando autorização formal.'
              ],
              correta: 3,
              explicacao: 'O comportamento descrito é um sinal clássico de smurfing — fracionamento proposital de valores para evitar os limiares de comunicação obrigatória. A Lei 9.613/1998 e as normas do BACEN (Circular 3.978/2020) obrigam as instituições a reportar operações incomuns ao COAF, independentemente do valor individual, quando o padrão indica tentativa de dissimulação. A A viola a obrigação legal de monitoramento. A B é desproporcional e não está prevista como conduta automática. A C configuraria cumplicidade com a lavagem. A E não existe como procedimento — a comunicação ao COAF é feita pela própria instituição via sistema.'
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
