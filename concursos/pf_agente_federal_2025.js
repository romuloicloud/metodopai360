/**
 * DADOS: Polícia Federal — Agente de Polícia Federal 2025
 * Banca: CEBRASPE | Questões estilo certo/errado e múltipla escolha
 * Referência: Edital PF 2021 (última edição com CEBRASPE) — conteúdo estável entre edições
 *
 * 3 disciplinas × 2 módulos × 1 pílula + 2 exercícios:
 *  1. Língua Portuguesa
 *  2. Raciocínio Lógico
 *  3. Direito Constitucional
 */

const { executarIngestion } = require('../engine_ingestao');

const CONFIG = {
  orgao_match: 'Polícia Federal - Agente',
  concurso_nome: 'PF - Agente Federal 2025',
  concurso_banca: 'CEBRASPE',

  concurso_gps: {
    orgao: 'Polícia Federal - Agente',
    cargo: 'Agente de Polícia Federal',
    banca: 'CEBRASPE',
    status_edital: 'previsto',
    vagas: 1500,
    remuneracao: 'R$ 13.994,78'
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
          nome: 'Interpretação e Compreensão de Textos (CEBRASPE)',
          descricao: 'Leitura e interpretação de textos jornalísticos e técnicos no estilo CEBRASPE: inferência, paráfrase, pressupostos e julgamento de assertivas.',
          pilulas: [
            {
              titulo: 'A lógica da armadilha CEBRASPE em interpretação de textos',
              nivel_profundidade: 2,
              texto: `O CEBRASPE adota um modelo de questão que parece simples à primeira vista, mas exige precisão cirúrgica na leitura. O enunciado apresenta um trecho de texto — geralmente jornalístico, científico ou técnico — e solicita que o candidato julgue se determinada afirmação está "certa" ou "errada" em relação ao que foi dito. A armadilha central está nos modificadores linguísticos: termos como "somente", "exclusivamente", "sempre", "nunca", "todos", "nenhum" são inseridos nas assertivas para transformar uma afirmação verdadeira em falsa — ou vice-versa.

Para dominar esse estilo, o candidato precisa treinar duas competências simultâneas: a leitura literal e a leitura inferencial. Na leitura literal, o objetivo é identificar o que o texto afirma de forma direta, sem acréscimos ou interpretações. Na leitura inferencial, trata-se de reconhecer o que o texto permite concluir com base nas informações apresentadas, mesmo que não esteja escrito de forma explícita. O CEBRASPE frequentemente testa a distinção entre o que está "implícito no texto" e o que é "externo ao texto" — assertivas que trazem conhecimento de fora do trecho são, em regra, erradas.

Uma estratégia eficaz é a técnica da ancoragem: antes de analisar a assertiva, localize no texto o parágrafo ou período de onde ela foi extraída. Sublinhe mentalmente as palavras-chave e compare termo a termo com a afirmação da questão. Se a assertiva usar um quantificador absoluto (como "todos os policiais"), verifique se o texto realmente diz isso ou se diz "a maioria" ou "muitos". A diferença entre "pode" e "deve", entre "é" e "pode ser", entre "implica" e "sugere" define o gabarito. Nos textos técnico-jurídicos, que são os mais frequentes nas provas da PF, a precisão do vocabulário é ainda mais determinante.`
            }
          ],
          exercicios: [
            {
              titulo: 'Inferência em texto jornalístico — PF estilo CEBRASPE',
              nivel_dificuldade: 2,
              pergunta: 'Leia o trecho: "A crescente digitalização dos processos criminosos exige que as forças de segurança pública adotem protocolos de investigação adaptados ao ambiente virtual, sob pena de perderem eficácia operacional frente às novas modalidades delitivas."\n\nCom base no texto, é correto afirmar que:',
              alternativas: [
                'A digitalização dos processos criminosos tornou ineficazes todos os métodos tradicionais de investigação policial.',
                'A adaptação dos protocolos investigativos ao ambiente virtual é apresentada como condição para a manutenção da eficácia das forças de segurança.',
                'O texto defende que apenas forças federais de segurança devem atuar em investigações de crimes digitais.',
                'A eficácia operacional das forças de segurança independe dos protocolos de investigação adotados.',
                'O ambiente virtual é mencionado como o único fator de transformação das modalidades delitivas contemporâneas.'
              ],
              correta: 1,
              explicacao: 'A alternativa B parafraseia com precisão o argumento central do texto: adaptar os protocolos ao ambiente virtual é apresentado como condição necessária para que as forças de segurança não percam eficácia. A alternativa A distorce ao usar "todos os métodos tradicionais" — o texto não diz isso. A alternativa C acrescenta informação sobre "apenas forças federais", que não está no texto. A alternativa D contradiz diretamente o texto. A alternativa E usa o quantificador "único fator", que não tem respaldo no trecho.'
            },
            {
              titulo: 'Pressupostos e implicações em texto técnico',
              nivel_dificuldade: 2,
              pergunta: 'Leia o trecho: "Embora a legislação brasileira preveja mecanismos de controle sobre o uso de dados pessoais, a implementação efetiva dessas normas ainda enfrenta resistências institucionais e déficit de capacitação técnica nos órgãos responsáveis pela fiscalização."\n\nAssinale a alternativa que apresenta uma conclusão corretamente inferida do texto:',
              alternativas: [
                'A legislação brasileira sobre proteção de dados pessoais é inexistente ou insuficiente em seus mecanismos de controle.',
                'Os órgãos responsáveis pela fiscalização de dados pessoais cumprem plenamente suas atribuições legais.',
                'A existência de normas legais não garante, por si só, a proteção efetiva dos dados pessoais no Brasil.',
                'A resistência institucional é o único obstáculo à implementação das normas de proteção de dados no país.',
                'O déficit de capacitação técnica é um problema exclusivo dos órgãos de fiscalização federal.'
              ],
              correta: 2,
              explicacao: 'A alternativa C captura a tensão central do texto: há legislação (mecanismos previstos), mas a implementação enfrenta obstáculos. Isso implica que a norma legal, por si só, não é suficiente para garantir a proteção. A alternativa A contradiz o texto, que afirma haver mecanismos previstos. A alternativa B contradiz o texto, que menciona resistências e déficit. A alternativa D usa "único obstáculo" — o texto menciona dois obstáculos (resistências institucionais e déficit técnico). A alternativa E insere "federal" sem qualquer amparo no trecho.'
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Coesão e Coerência Textual',
          descricao: 'Mecanismos de coesão referencial e sequencial: pronomes, elipses, substituições lexicais, conectivos e progressão temática.',
          pilulas: [
            {
              titulo: 'Coesão referencial e sequencial: o fio condutor do texto',
              nivel_profundidade: 2,
              texto: `A coesão textual é o conjunto de recursos linguísticos que garantem a ligação entre as partes de um texto. O CEBRASPE cobra coesão principalmente em dois eixos: referencial e sequencial. A coesão referencial diz respeito à forma como elementos são retomados ou antecipados no texto. Quando um pronome ou uma expressão nominal faz referência a algo já dito, temos a anáfora; quando antecipa algo que será dito, temos a catáfora. O ponto crítico nas questões da PF é verificar se a substituição proposta mantém a mesma referência sem ambiguidade.

A coesão sequencial é responsável pela progressão lógica do texto. Os conectivos são o principal instrumento: conjunções causais (porque, pois, já que), concessivas (embora, ainda que, apesar de), adversativas (mas, porém, contudo, todavia, no entanto), aditivas (e, além disso, ademais) e conclusivas (logo, portanto, assim, por conseguinte). O CEBRASPE frequentemente apresenta questões em que um conectivo é trocado por outro, e o candidato deve julgar se a relação lógica se mantém. Trocar "embora" por "porque" inverte completamente o sentido: o primeiro é concessivo (admite a ressalva), o segundo é causal (indica causa).

Para o tipo de questão mais recorrente — "o pronome X retoma o termo Y" — o candidato deve identificar o gênero e o número do pronome e todos os substantivos do período que poderiam ser o antecedente. Em muitos casos há mais de um candidato gramaticalmente possível. Nesses casos, o critério semântico é decisivo: qual das retomadas faz sentido no contexto? A interpretação que gera coerência com o restante do texto é a correta. Treinar esse mecanismo é fundamental para não perder questões que parecem triviais mas têm armadilha de ambiguidade construída propositalmente.`
            }
          ],
          exercicios: [
            {
              titulo: 'Retomada anafórica — identificação do referente',
              nivel_dificuldade: 2,
              pergunta: 'Leia o trecho: "A Polícia Federal deflagrou a operação após meses de monitoramento. Ela culminou na prisão de doze suspeitos em três estados diferentes, o que demonstrou a eficiência do trabalho de inteligência."\n\nO pronome "Ela" retoma:',
              alternativas: [
                'A Polícia Federal',
                'A operação',
                'O monitoramento',
                'A prisão de doze suspeitos',
                'O trabalho de inteligência'
              ],
              correta: 1,
              explicacao: 'O pronome "Ela" (feminino singular) retoma "a operação" (feminino singular), o referente mais próximo com o qual há concordância de gênero e número e que faz sentido semântico: foi a operação que culminou nas prisões, não a Polícia Federal em si nem o monitoramento. "A Polícia Federal" também é feminino singular, mas semanticamente é a agente, não o evento que culminou em prisões — o conectivo "culminou" aponta para um evento (a operação), não para a instituição.'
            },
            {
              titulo: 'Substituição de conectivo e manutenção do sentido',
              nivel_dificuldade: 2,
              pergunta: 'Analise o período: "Embora os indícios fossem robustos, o delegado optou por aguardar a perícia antes de solicitar o mandado de prisão."\n\nAssinale a alternativa em que o conectivo sublinhado pode substituir "Embora" sem alterar a relação lógica estabelecida no período:',
              alternativas: [
                'Porque',
                'Visto que',
                'Apesar de que',
                'Já que',
                'Portanto'
              ],
              correta: 2,
              explicacao: '"Embora" é uma conjunção concessiva: introduz uma ressalva que contraria a expectativa gerada pela oração principal. "Apesar de que" tem exatamente a mesma função concessiva e pode substituí-lo sem alterar o sentido. "Porque", "Visto que" e "Já que" são causais — transformariam o período: os indícios robustos passariam a ser a causa da espera, o que inverte o sentido. "Portanto" é conclusivo e não cabe aqui sintaticamente nem semanticamente.'
            }
          ]
        }

      ]
    },

    // ══════════════════════════════════════════════════════════
    // 2. RACIOCÍNIO LÓGICO
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Raciocínio Lógico',
      modulos: [

        // ── Módulo 1 ──────────────────────────────────────────
        {
          nome: 'Proposições e Conectivos Lógicos',
          descricao: 'Proposições simples e compostas, tabelas-verdade, negação de proposições, contrapositiva, equivalências lógicas fundamentais.',
          pilulas: [
            {
              titulo: 'Tabela-verdade, negações e a contrapositiva: o núcleo do CEBRASPE',
              nivel_profundidade: 2,
              texto: `A lógica proposicional é a base de toda a seção de Raciocínio Lógico nas provas do CEBRASPE para a Polícia Federal. Uma proposição é um enunciado declarativo que pode ser classificado como verdadeiro (V) ou falso (F). Proposições compostas são formadas pela combinação de proposições simples por meio de conectivos: conjunção (p ∧ q — "e"), disjunção (p ∨ q — "ou"), condicional (p → q — "se p, então q"), bicondicional (p ↔ q — "p se e somente se q") e negação (¬p — "não p").

As tabelas-verdade são ferramentas para determinar o valor lógico de proposições compostas. Os valores críticos a memorizar são: a conjunção (∧) é verdadeira somente quando ambas as componentes são verdadeiras; a disjunção (∨) é falsa somente quando ambas são falsas; o condicional (p → q) é falso somente quando p é verdadeiro e q é falso — este é o ponto mais cobrado e mais errado. A negação de p → q não é "p → ¬q"; a negação correta é p ∧ ¬q (p é verdadeiro E q é falso).

A contrapositiva é uma equivalência lógica fundamental: p → q é logicamente equivalente a ¬q → ¬p. Isso significa que se "Se chover, a pista estará molhada" é verdadeiro, então "Se a pista não estiver molhada, não choveu" também é verdadeiro. O CEBRASPE usa isso para testar se o candidato sabe que o inverso (¬p → ¬q) e o recíproco (q → p) NÃO são equivalentes ao condicional original, mas a contrapositiva sim. Dominar esse ponto elimina uma categoria inteira de erros comuns nas provas da PF.`
            }
          ],
          exercicios: [
            {
              titulo: 'Valor lógico do condicional e sua negação',
              nivel_dificuldade: 2,
              pergunta: 'Considere a proposição: "Se o suspeito estava no local do crime (p), então suas impressões digitais foram encontradas (q)."\n\nSabendo que as impressões digitais do suspeito NÃO foram encontradas, mas ele estava no local do crime, qual é o valor lógico da proposição p → q e qual é a negação correta de p → q?',
              alternativas: [
                'p → q é verdadeira; negação: ¬p → ¬q',
                'p → q é falsa; negação: p ∧ ¬q',
                'p → q é verdadeira; negação: p ∧ ¬q',
                'p → q é falsa; negação: ¬p ∨ q',
                'p → q é verdadeira; negação: ¬p → q'
              ],
              correta: 1,
              explicacao: 'p é verdadeiro (estava no local) e q é falso (impressões não encontradas). O condicional p → q é falso somente quando p é V e q é F — portanto, a proposição é FALSA. A negação lógica de p → q é p ∧ ¬q: "o suspeito estava no local E suas impressões não foram encontradas" — exatamente o caso descrito. As demais alternativas apresentam negações incorretas do condicional.'
            },
            {
              titulo: 'Contrapositiva e equivalência lógica',
              nivel_dificuldade: 2,
              pergunta: 'A proposição "Se o agente obteve o mandado judicial (p), então a busca e apreensão é legal (q)" é verdadeira. Com base nas equivalências lógicas, qual das seguintes proposições é necessariamente verdadeira?',
              alternativas: [
                'Se a busca e apreensão não é legal, então o agente não obteve o mandado judicial. (¬q → ¬p)',
                'Se o agente não obteve o mandado judicial, então a busca e apreensão é legal. (¬p → q)',
                'Se a busca e apreensão é legal, então o agente obteve o mandado judicial. (q → p)',
                'O agente obteve o mandado judicial e a busca e apreensão é legal. (p ∧ q)',
                'O agente não obteve o mandado judicial ou a busca e apreensão é legal. (¬p ∨ q)'
              ],
              correta: 0,
              explicacao: 'A contrapositiva de p → q é ¬q → ¬p, e ambas são logicamente equivalentes — se uma é verdadeira, a outra também é. Portanto, se "p → q" é verdadeira, "¬q → ¬p" (alternativa A) é necessariamente verdadeira. O recíproco (q → p, alternativa C) e o inverso (¬p → q, alternativa B) não são equivalentes ao condicional original — podem ser verdadeiros ou falsos independentemente. A alternativa E (¬p ∨ q) também é equivalente a p → q, mas a questão pede qual é "necessariamente verdadeira" entre as opções, e a alternativa A é a contrapositiva clássica.'
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Silogismos e Inferências Válidas',
          descricao: 'Raciocínio dedutivo, silogismo categórico, modus ponens, modus tollens e validade de argumentos.',
          pilulas: [
            {
              titulo: 'Dedução lógica: quando uma conclusão é válida ou inválida',
              nivel_profundidade: 2,
              texto: `Um argumento é válido quando, se todas as premissas forem verdadeiras, a conclusão necessariamente será verdadeira. A validade é uma propriedade formal: não depende do conteúdo das proposições, mas da estrutura lógica. O CEBRASPE cobra principalmente dois padrões de argumento válido: o modus ponens e o modus tollens.

Modus ponens: Premissa 1: p → q. Premissa 2: p. Conclusão: q. Exemplo: "Se houver indício de crime organizado, a PF tem jurisdição (p → q). Há indício de crime organizado (p). Logo, a PF tem jurisdição (q)." Esse argumento é válido. Modus tollens: Premissa 1: p → q. Premissa 2: ¬q. Conclusão: ¬p. Exemplo: "Se houve arrombamento, haverá dano à fechadura (p → q). Não há dano à fechadura (¬q). Logo, não houve arrombamento (¬p)." Também válido.

Os erros clássicos que o CEBRASPE usa para criar conclusões inválidas são: afirmação do consequente ("p → q; q; logo, p" — INVÁLIDO) e negação do antecedente ("p → q; ¬p; logo, ¬q" — INVÁLIDO). Para o silogismo categórico ("Todo A é B; Todo B é C; logo, todo A é C"), o candidato deve verificar se o termo médio (B) funciona como elo. Se o termo médio não está distribuído em nenhuma das premissas, o silogismo é inválido. Praticar a identificação da estrutura formal antes de julgar o conteúdo é a chave para não ser induzido a erro por premissas que parecem verdadeiras.`
            }
          ],
          exercicios: [
            {
              titulo: 'Validade de argumento dedutivo — modus tollens',
              nivel_dificuldade: 2,
              pergunta: 'Analise o argumento:\nPremissa 1: "Se o investigado utilizou o sistema bancário para movimentar os recursos (p), então haverá registros eletrônicos da transação (q)."\nPremissa 2: "Não há registros eletrônicos da transação (¬q)."\nConclusão proposta: "O investigado não utilizou o sistema bancário para movimentar os recursos (¬p)."\n\nEsse argumento é:',
              alternativas: [
                'Inválido, pois a ausência de registros pode ter outras causas.',
                'Inválido, pois nega o antecedente sem justificativa.',
                'Válido, pois corresponde ao modus tollens: p → q; ¬q; logo ¬p.',
                'Válido, pois corresponde ao modus ponens: p → q; p; logo q.',
                'Inválido, pois afirma o consequente para chegar à conclusão.'
              ],
              correta: 2,
              explicacao: 'A estrutura do argumento é: p → q; ¬q; portanto ¬p. Isso é exatamente o modus tollens, um esquema de inferência válido. A validade é formal: se as premissas fossem verdadeiras, a conclusão seria necessariamente verdadeira. A alternativa A apresenta uma objeção de conteúdo (outras causas para ausência de registros), mas isso não afeta a validade formal do argumento — afeta apenas sua solidez se a premissa 1 não for verdadeira.'
            },
            {
              titulo: 'Silogismo categórico — validade da conclusão',
              nivel_dificuldade: 3,
              pergunta: 'Considere o seguinte silogismo:\nPremissa 1: "Todo crime hediondo é inafiançável."\nPremissa 2: "O crime cometido por Marcos é inafiançável."\nConclusão: "O crime cometido por Marcos é hediondo."\n\nEsse argumento é:',
              alternativas: [
                'Válido, pois se o crime é inafiançável, é hediondo.',
                'Válido, pois ambas as premissas são verdadeiras conforme a CF/88.',
                'Inválido, pois afirma o consequente: de "todo hediondo é inafiançável" não se pode concluir que "todo inafiançável é hediondo".',
                'Inválido, pois a premissa 1 está errada — nem todo crime hediondo é inafiançável.',
                'Válido, pois o termo médio "inafiançável" aparece nas duas premissas.'
              ],
              correta: 2,
              explicacao: 'O argumento comete o erro de afirmação do consequente: p → q (todo hediondo é inafiançável); q (o crime de Marcos é inafiançável); logo p (é hediondo) — INVÁLIDO. Há crimes inafiançáveis que não são hediondos (ex: tráfico de drogas em certas legislações, racismo). O fato de as premissas parecerem verdadeiras não torna o argumento válido — a conclusão não decorre necessariamente das premissas. Seria válido apenas se a premissa 1 fosse uma bicondicional: "um crime é hediondo se e somente se é inafiançável".'
            }
          ]
        }

      ]
    },

    // ══════════════════════════════════════════════════════════
    // 3. DIREITO CONSTITUCIONAL
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Direito Constitucional',
      modulos: [

        // ── Módulo 1 ──────────────────────────────────────────
        {
          nome: 'Direitos e Garantias Fundamentais — Art. 5º CF/88',
          descricao: 'Direitos individuais e coletivos do Art. 5º da Constituição Federal. Incisos mais cobrados na prova da PF. Pegadinhas típicas do CEBRASPE com termos absolutos.',
          pilulas: [
            {
              titulo: 'Art. 5º CF/88 na prova da PF: os incisos críticos e as armadilhas do CEBRASPE',
              nivel_profundidade: 2,
              texto: `O Art. 5º da Constituição Federal de 1988 é, sem dúvida, o dispositivo mais cobrado nas provas de Direito Constitucional para a Polícia Federal. Com 78 incisos, ele concentra os direitos e garantias fundamentais e exige do candidato não apenas a memorização dos textos, mas a capacidade de identificar distorções sutis inseridas pelo CEBRASPE nas assertivas.

Os incisos mais recorrentes para o cargo de Agente PF são: inciso XI (inviolabilidade do domicílio — a casa é asilo inviolável, admitindo entrada sem mandado apenas em flagrante delito, desastre ou para prestar socorro, e durante o dia por determinação judicial); inciso XII (sigilo das comunicações telefônicas, quebrado apenas por ordem judicial para fins de investigação criminal ou instrução processual penal); inciso LVII (presunção de inocência — ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória); inciso LXI (a prisão somente ocorre em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente); inciso LXIII (o preso tem direito ao silêncio e de ser informado sobre seus direitos).

A estratégia mais eficaz para não cair nas armadilhas do CEBRASPE é identificar os "modificadores absolutos": quando a assertiva usa "somente", "apenas", "sempre", "nunca", "em qualquer hipótese", "independentemente de" ou "exclusivamente", o candidato deve redobrar a atenção. Esses termos quase sempre transformam uma afirmação parcialmente correta em errada, porque a maioria dos direitos constitucionais admite exceções ou condições. Por exemplo: "A inviolabilidade do domicílio é absoluta" — FALSA. "A comunicação das prisões à família deve ser feita somente após a lavratura do auto de prisão em flagrante" — FALSA, pois o inciso LXII determina que seja feita imediatamente.`
            }
          ],
          exercicios: [
            {
              titulo: 'Inviolabilidade domiciliar — exceções constitucionais',
              nivel_dificuldade: 2,
              pergunta: 'Com base no Art. 5º, XI da CF/88, julgue a seguinte afirmativa: "A entrada em domicílio alheio sem o consentimento do morador somente é permitida durante o dia, mediante ordem judicial, não sendo admitida a entrada noturna em nenhuma hipótese."\n\nA afirmativa é:',
              alternativas: [
                'Correta, pois a CF/88 proíbe qualquer entrada noturna sem consentimento do morador.',
                'Correta, pois a determinação judicial é o único fundamento para entrada em domicílio.',
                'Errada, pois a entrada é também permitida, a qualquer hora, em caso de flagrante delito, desastre ou para prestar socorro, independentemente de ordem judicial.',
                'Errada, pois a ordem judicial pode ser cumprida tanto de dia quanto de noite, sem restrição.',
                'Correta, mas apenas no que se refere à ordem judicial, que de fato é restrita ao período diurno.'
              ],
              correta: 2,
              explicacao: 'A assertiva usa o modificador "somente" e "em nenhuma hipótese" para restringir as exceções apenas à ordem judicial diurna, o que é incorreto. O Art. 5º, XI da CF/88 prevê que, sem consentimento do morador, é possível entrar na residência: (a) em caso de flagrante delito — a qualquer hora, dia ou noite; (b) em caso de desastre — a qualquer hora; (c) para prestar socorro — a qualquer hora; (d) por determinação judicial — somente durante o dia. As três primeiras hipóteses dispensam mandado e podem ocorrer à noite, tornando a assertiva falsa.'
            },
            {
              titulo: 'Presunção de inocência — conteúdo e limites',
              nivel_dificuldade: 2,
              pergunta: 'Sobre o princípio da presunção de inocência previsto no Art. 5º, LVII da CF/88, assinale a alternativa CORRETA:',
              alternativas: [
                'Ninguém pode ser preso antes do trânsito em julgado de sentença penal condenatória, em nenhuma hipótese.',
                'O princípio impede que o réu seja considerado culpado antes do trânsito em julgado, mas não proíbe a prisão cautelar fundamentada durante o processo.',
                'A presunção de inocência aplica-se apenas a crimes hediondos, conforme entendimento do STF.',
                'O trânsito em julgado ocorre com a primeira decisão condenatória, após a qual cessa a presunção de inocência.',
                'A presunção de inocência é um direito absoluto e não admite qualquer restrição pelo legislador ordinário.'
              ],
              correta: 1,
              explicacao: 'O Art. 5º, LVII veda que alguém seja CONSIDERADO CULPADO antes do trânsito em julgado — é uma regra de tratamento, não uma proibição absoluta de prisão. A prisão cautelar (preventiva, temporária, em flagrante) pode ocorrer durante o processo com fundamentação legal adequada, sem violar a presunção de inocência. A alternativa A usa "em nenhuma hipótese", o que é errado. A alternativa C é absurda — o princípio é universal. A alternativa D confunde "primeira condenação" com "trânsito em julgado". A alternativa E usa "absoluto", mas os direitos fundamentais podem ser ponderados em casos concretos.'
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Organização do Estado Brasileiro',
          descricao: 'Separação e harmonia dos poderes. Competências da União, estados e municípios. Funções essenciais à Justiça. Segurança pública na CF/88.',
          pilulas: [
            {
              titulo: 'Separação dos poderes, competências e segurança pública na CF/88',
              nivel_profundidade: 2,
              texto: `A organização do Estado brasileiro está estruturada sobre dois pilares fundamentais presentes nos Títulos III e IV da Constituição Federal: a repartição de competências entre os entes federativos e a separação e harmonia entre os Poderes. Para o cargo de Agente PF, o CEBRASPE frequentemente testa o conhecimento sobre as competências exclusivas da União (Art. 21), as competências privativas para legislar (Art. 22), as competências comuns (Art. 23) e as concorrentes (Art. 24), além da estrutura dos órgãos de segurança pública (Art. 144).

O Art. 144 da CF/88 é especialmente relevante: define os órgãos de segurança pública e delimita as competências de cada um. A Polícia Federal tem atribuição para investigar infrações penais contra a ordem política e social, contra bens, serviços e interesses da União, crimes com repercussão interestadual ou internacional, tráfico de drogas, contrabando e descaminho, além de exercer funções de polícia marítima, aeroportuária e de fronteiras. É importante distinguir: a PF não é a polícia do Distrito Federal — esse papel cabe à PCDF, custeada pela União mas com atribuições estaduais.

Quanto à separação dos poderes (Art. 2º CF/88), o CEBRASPE cobra o princípio da harmonia e independência: cada poder tem funções típicas (primárias) e atípicas (secundárias). O Executivo administra (típica), mas também legisla por medidas provisórias (atípica) e julga processos administrativos (atípica). O Legislativo legisla (típica) e fiscaliza (típica), mas também administra seus órgãos internos (atípica). O Judiciário julga (típica), mas também administra e edita atos normativos internos (atípica). Confundir função típica com atípica é um erro frequentemente explorado nas questões.`
            }
          ],
          exercicios: [
            {
              titulo: 'Competências da Polícia Federal — Art. 144 CF/88',
              nivel_dificuldade: 2,
              pergunta: 'Com base no Art. 144 da Constituição Federal, é atribuição EXCLUSIVA da Polícia Federal:',
              alternativas: [
                'Realizar o policiamento ostensivo fardado nas vias públicas das capitais dos estados.',
                'Investigar infrações penais praticadas exclusivamente por servidores estaduais.',
                'Apurar infrações penais contra a ordem política e social e contra bens, serviços e interesses da União ou de suas entidades autárquicas e empresas públicas.',
                'Exercer as funções de polícia judiciária dos estados em substituição às polícias civis.',
                'Investigar crimes de competência estadual quando houver pedido formal do governador.'
              ],
              correta: 2,
              explicacao: 'O Art. 144, § 1º, I da CF/88 atribui à Polícia Federal a apuração de infrações penais contra a ordem política e social e contra bens, serviços e interesses da União. O policiamento ostensivo fardado é função da Polícia Militar (§ 5º). A PF exerce polícia judiciária da União, não dos estados (§ 1º, IV). Não há previsão de substituição das polícias civis estaduais pela PF. A competência da PF decorre da Constituição, não de pedido de governadores.'
            },
            {
              titulo: 'Funções típicas e atípicas dos Poderes',
              nivel_dificuldade: 2,
              pergunta: 'Sobre as funções típicas e atípicas dos Poderes da República, é correto afirmar que:',
              alternativas: [
                'O exercício de funções atípicas por um Poder viola o princípio da separação dos poderes previsto no Art. 2º da CF/88.',
                'Somente o Poder Executivo exerce funções atípicas, por meio das medidas provisórias e decretos regulamentares.',
                'O Poder Judiciário exerce função atípica de natureza administrativa quando organiza seus serviços internos e concede licenças a seus membros.',
                'O Poder Legislativo perde sua função típica de legislar sempre que o Executivo edita medida provisória.',
                'As funções atípicas são vedadas pela Constituição e só se tornaram práticas aceitas por força de costume constitucional.'
              ],
              correta: 2,
              explicacao: 'A função atípica é aquela exercida por um Poder fora de sua atividade principal, mas autorizada pela própria Constituição, sem violar a separação de poderes (que exige harmonia, não rigidez absoluta). O Poder Judiciário exerce função administrativa típica quando organiza seus serviços, concede licenças, realiza concursos e edita regimentos internos. A alternativa A é errada — a CF/88 expressamente autoriza as funções atípicas. A alternativa B é errada — os três poderes exercem funções atípicas. A alternativa D é errada — a MP não afasta a função legislativa do Congresso, que pode rejeitá-la. A alternativa E é falsa — as funções atípicas têm previsão constitucional expressa.'
            }
          ]
        }

      ]
    }

  ]
};

executarIngestion(CONFIG).catch(err => {
  console.error('\nERRO FATAL:', err.message);
  process.exit(1);
});
