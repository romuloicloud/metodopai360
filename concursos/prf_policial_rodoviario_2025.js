/**
 * DADOS: Polícia Rodoviária Federal — Policial Rodoviário Federal 2025
 * Banca: CEBRASPE | Questões objetivas e julgamento de assertivas
 * Referência: Edital PRF 2021 (CEBRASPE) — conteúdo estável entre edições
 *
 * 3 disciplinas × 2 módulos × 1 pílula + 2 exercícios:
 *  1. Língua Portuguesa
 *  2. Legislação de Trânsito (CTB)
 *  3. Direito Penal
 */

const { executarIngestion } = require('../engine_ingestao');

const CONFIG = {
  orgao_match: 'Polícia Rodoviária Federal (PRF)',
  concurso_nome: 'PRF - Policial Rodoviário Federal 2025',
  concurso_banca: 'CEBRASPE',

  concurso_gps: {
    orgao: 'Polícia Rodoviária Federal (PRF)',
    cargo: 'Policial Rodoviário Federal',
    banca: 'CEBRASPE',
    status_edital: 'previsto',
    vagas: 500,
    remuneracao: 'R$ 9.899,88'
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
          nome: 'Interpretação de Texto — Estilo CEBRASPE',
          descricao: 'Leitura e interpretação de textos com foco em inferência, pressuposto, implicatura e julgamento de assertivas no estilo CEBRASPE.',
          pilulas: [
            {
              titulo: 'Inferência e pressuposto: as duas camadas do texto que o CEBRASPE explora',
              nivel_profundidade: 2,
              texto: `Na prova de Língua Portuguesa da PRF, o CEBRASPE trabalha intensamente com dois níveis de significado que vão além do que está literalmente escrito: a inferência e o pressuposto. Compreender a distinção entre esses dois conceitos é decisivo para acertar questões de interpretação que parecem subjetivas, mas têm resposta objetiva fundamentada no texto.

A inferência é uma conclusão que pode ser logicamente deduzida a partir das informações do texto, mesmo não estando explicitamente afirmada. Um texto que diz "o número de acidentes nas rodovias federais caiu 18% após a ampliação da fiscalização eletrônica" permite inferir que a fiscalização eletrônica teve algum efeito na redução dos acidentes — mas não permite afirmar que foi a única causa, nem que o resultado se repetirá em anos seguintes. O CEBRASPE frequentemente apresenta assertivas que extrapolam a inferência possível, usando termos como "demonstra definitivamente", "prova que" ou "assegura que", quando o texto apenas "sugere", "indica" ou "aponta que".

O pressuposto, por sua vez, é a informação que o texto toma como verdadeira de antemão, sem afirmá-la diretamente. Na frase "o policial rodoviário parou novamente a fiscalização de peso nos caminhões", o pressuposto é que houve fiscalização anteriormente — o advérbio "novamente" carrega essa informação implicitamente. Identificar os pressupostos ajuda o candidato a reconhecer quando uma assertiva está correta porque retoma uma informação pressuposta e não dita. O CEBRASPE usa isso tanto para criar alternativas corretas quanto para criar distratores que "parecem certos" mas invertem o pressuposto ou o confundem com afirmação explícita.`
            }
          ],
          exercicios: [
            {
              titulo: 'Inferência legítima em texto sobre trânsito',
              nivel_dificuldade: 2,
              pergunta: 'Leia o trecho: "O aumento da velocidade máxima permitida em determinados trechos de rodovias federais foi seguido, nos dois anos subsequentes, por elevação significativa nos índices de acidentes com vítimas fatais nesses mesmos trechos, segundo dados do Departamento Nacional de Infraestrutura de Transportes."\n\nAssinale a alternativa que apresenta uma inferência VÁLIDA com base no texto:',
              alternativas: [
                'O texto comprova de forma definitiva que o aumento do limite de velocidade causa acidentes fatais.',
                'Os dados do DNIT são imprecisos e não devem ser utilizados em políticas públicas de trânsito.',
                'O texto permite inferir que há uma associação entre o aumento do limite de velocidade e o crescimento dos acidentes fatais nos trechos mencionados.',
                'O aumento dos acidentes fatais ocorreu em todas as rodovias federais do Brasil após a mudança do limite.',
                'Reduzir o limite de velocidade seria suficiente para eliminar os acidentes fatais nas rodovias.'
              ],
              correta: 2,
              explicacao: 'A alternativa C representa uma inferência legítima: o texto descreve uma sequência temporal (aumento do limite → elevação dos acidentes nos mesmos trechos) que permite inferir associação entre os fenômenos. A alternativa A exagera ao dizer "comprova de forma definitiva" — o texto descreve correlação, não causalidade provada. A alternativa B traz informação externa ao texto. A alternativa D extrapola para "todas as rodovias", enquanto o texto fala em "determinados trechos". A alternativa E é uma prescrição de política pública que o texto não sustenta.'
            },
            {
              titulo: 'Identificação de pressuposto em texto técnico',
              nivel_dificuldade: 2,
              pergunta: 'Analise o período: "A PRF retomou as blitze educativas nas rodovias da região Sul após o período de recesso."\n\nQual informação está PRESSUPOSTA nesse enunciado?',
              alternativas: [
                'As blitze educativas são mais eficazes do que as blitze punitivas.',
                'A região Sul é a que apresenta maior índice de acidentes no Brasil.',
                'As blitze educativas já haviam sido realizadas antes e foram interrompidas.',
                'O período de recesso durou mais do que o previsto inicialmente.',
                'A PRF é o único órgão responsável pela fiscalização de rodovias no Sul do país.'
              ],
              correta: 2,
              explicacao: 'O verbo "retomou" pressupõe que a ação já havia ocorrido e foi interrompida. É uma informação que o texto toma como dada, sem precisar afirmá-la diretamente. Esse é o pressuposto: a existência prévia das blitze educativas e sua interrupção. As demais alternativas trazem informações que não são pressupostas pelo enunciado — são afirmações externas que precisariam ser explicitamente ditas para constar no texto.'
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Gramática Aplicada — Concordância e Regência',
          descricao: 'Concordância verbal e nominal, regência verbal e nominal, uso de crase. Casos práticos com foco nas bancas CEBRASPE.',
          pilulas: [
            {
              titulo: 'Concordância verbal e nominal: os casos que o CEBRASPE mais explora',
              nivel_profundidade: 2,
              texto: `A concordância verbal e nominal é uma das áreas de gramática com maior frequência de cobrança nas provas do CEBRASPE para a PRF. A regra geral da concordância verbal é simples — o verbo concorda em número e pessoa com o sujeito —, mas os casos especiais são os mais cobrados. O candidato precisa dominar especialmente: sujeito composto com núcleos ligados por "ou" (o verbo pode ir para o plural ou para o singular, dependendo se a relação é de exclusão ou de soma); sujeito com expressões partitivas como "a maioria de", "parte de", "a maior parte de" (o verbo pode concordar com o núcleo da expressão ou com o substantivo que a segue — ambas as formas são aceitas, mas o CEBRASPE testa qual é a opção formalmente mais adequada no contexto).

Para a concordância nominal, os casos mais críticos envolvem: adjetivos que se referem a mais de um substantivo (o adjetivo posposto concorda com o mais próximo ou vai para o plural masculino); a palavra "mesmo" usada como pronome (varia em gênero e número) versus como advérbio de realce (invariável); e as expressões "é proibido", "é necessário", "é permitido" — quando não há artigo antes do substantivo, essas expressões são invariáveis ("é proibido entrada"); quando há artigo, concordam ("é proibida a entrada").

No campo da regência, os verbos mais cobrados na prova da PRF incluem: "avisar" (pode ser transitivo direto e indireto — "avisar alguém de algo"); "informar" (informar algo a alguém — exige preposição "a" para a pessoa); "assistir" no sentido de "ver" (exige "a" — assistir ao acidente); "obedecer" (exige "a" — obedecer à lei de trânsito); "implicar" no sentido de resultar (exige "em" — implica em multa). Dominar esses verbos permite acertar uma categoria específica de questões que aparece regularmente nas provas.`
            }
          ],
          exercicios: [
            {
              titulo: 'Concordância verbal com sujeito composto',
              nivel_dificuldade: 2,
              pergunta: 'Assinale a frase em que a concordância verbal está CORRETA segundo a norma culta:',
              alternativas: [
                'O policial e o perito chegou ao local do acidente ao mesmo tempo.',
                'Tanto a velocidade excessiva quanto o estado da pista contribuíram para o acidente.',
                'A maioria dos motoristas foram multados na operação de fiscalização.',
                'Os dados do radar e a filmagem da câmera foi apresentado como prova.',
                'Nenhum dos condutores abordado apresentou documentação irregular.'
              ],
              correta: 1,
              explicacao: 'Na alternativa B, o sujeito é composto ("a velocidade excessiva" e "o estado da pista") com a correlação "tanto... quanto", que exige verbo no plural — "contribuíram" está correto. Na alternativa A, o sujeito composto "o policial e o perito" exige plural — "chegaram". Na alternativa C, "a maioria" como sujeito admite tanto singular quanto plural, mas "foram multados" (plural) ao usar "a maioria" como núcleo seria aceitável em uma variante; contudo, o uso de "a maioria" + verbo no plural é a forma mais prescrita. Na alternativa D, o sujeito composto pede plural — "foram apresentados". Na alternativa E, "abordado" deveria concordar com "condutores" — "abordados".'
            },
            {
              titulo: 'Regência verbal na norma culta — contexto de trânsito',
              nivel_dificuldade: 2,
              pergunta: 'Assinale a frase com regência verbal CORRETA de acordo com a norma culta:',
              alternativas: [
                'O policial rodoviário avisou os motoristas sobre a interdição da pista.',
                'Os condutores devem obedecer os sinais de trânsito sem exceção.',
                'O agente assistiu o acidente sem poder intervir a tempo.',
                'A imprudência do motorista implicou danos materiais ao veículo da vítima.',
                'O condutor informou o agente sobre sua habilitação vencida.'
              ],
              correta: 0,
              explicacao: 'Na alternativa A, "avisar alguém sobre/de algo" é uma das construções aceitas pela norma culta — o verbo "avisar" admite objeto direto (a pessoa) e objeto indireto (o assunto), ou pode usar a preposição "sobre/de" para a coisa. A alternativa B está errada: "obedecer" exige preposição "a" — "obedecer aos sinais". A alternativa C está errada: "assistir" no sentido de "ver/presenciar" exige "a" — "assistiu ao acidente". A alternativa D está errada: "implicar" no sentido de "acarretar" exige "em" — "implicou em danos". A alternativa E tem construção ambígua: "informou o agente sobre" é aceitável, mas "informar algo a alguém" é a regência padrão — "informou ao agente".'
            }
          ]
        }

      ]
    },

    // ══════════════════════════════════════════════════════════
    // 2. LEGISLAÇÃO DE TRÂNSITO (CTB)
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Legislação de Trânsito (CTB)',
      modulos: [

        // ── Módulo 1 ──────────────────────────────────────────
        {
          nome: 'Normas Gerais de Circulação — Lei 9.503/97',
          descricao: 'Regras fundamentais do Código de Trânsito Brasileiro: velocidade máxima permitida, preferência de passagem, ultrapassagem, sinalização e conduta dos condutores.',
          pilulas: [
            {
              titulo: 'Velocidade, preferência e ultrapassagem no CTB: o que o Policial Rodoviário precisa dominar',
              nivel_profundidade: 2,
              texto: `O Código de Trânsito Brasileiro (Lei 9.503/97) é o principal diploma legal cobrado na prova da PRF. Seu domínio vai além da memorização: o candidato precisa compreender a lógica sistêmica das normas de circulação para responder corretamente às situações hipotéticas apresentadas pelo CEBRASPE.

Sobre velocidades máximas permitidas (Art. 61 CTB): em rodovias, o limite geral para automóveis é 110 km/h nas pistas simples e 110 km/h nas pistas duplas (salvo sinalização específica). Para caminhões e ônibus em rodovias, o limite é 90 km/h. Em vias de trânsito rápido urbanas, o limite é 80 km/h. O Art. 61, § 1º estabelece que o órgão ou entidade de trânsito com circunscrição sobre a via pode fixar velocidades máximas diferentes mediante sinalização — e é essa velocidade sinalizada que prevalece. A velocidade mínima não pode ser inferior à metade da máxima. Conduzir abaixo da velocidade mínima (salvo por razão de segurança) constitui infração.

Preferência de passagem (Art. 29 CTB): nas interseções não sinalizadas, tem preferência o veículo que vem pela direita. Veículos sobre trilhos têm preferência sobre os demais. Veículos de emergência em serviço (com sirene e luz intermitente) têm preferência absoluta — os demais devem parar e dar passagem. Nas ultrapassagens (Art. 38 e seguintes), é obrigação do condutor sinalizar com antecedência, verificar se a distância e a visibilidade são suficientes e retornar à faixa original o mais rapidamente possível. É proibida a ultrapassagem em: faixas de pedestres, interseções, pontes, viadutos, curvas e nas proximidades de cumes de aclives sem visibilidade suficiente.`
            }
          ],
          exercicios: [
            {
              titulo: 'Velocidade máxima em rodovia federal — CTB',
              nivel_dificuldade: 1,
              pergunta: 'De acordo com o Art. 61 do Código de Trânsito Brasileiro, em uma rodovia federal de pista simples sem sinalização específica de velocidade, qual é o limite máximo de velocidade para automóveis de passeio?',
              alternativas: [
                '80 km/h',
                '90 km/h',
                '100 km/h',
                '110 km/h',
                '120 km/h'
              ],
              correta: 3,
              explicacao: 'O Art. 61, I, "a" do CTB estabelece 110 km/h como velocidade máxima para automóveis em rodovias de pista simples, na ausência de sinalização específica. Para veículos de carga e ônibus, o limite nessa mesma via é 90 km/h (Art. 61, I, "b"). A velocidade de 80 km/h se aplica a vias de trânsito rápido urbanas. É importante memorizar que a velocidade sinalizada sempre prevalece sobre os limites gerais do CTB.'
            },
            {
              titulo: 'Proibição de ultrapassagem — situações previstas no CTB',
              nivel_dificuldade: 2,
              pergunta: 'Conforme o Código de Trânsito Brasileiro, é PROIBIDO efetuar ultrapassagem:',
              alternativas: [
                'Somente em rodovias com pista simples e tráfego intenso.',
                'Apenas quando há sinalização horizontal de faixa contínua proibindo a manobra.',
                'Em faixas de pedestres, interseções, pontes, curvas sem visibilidade suficiente e nas proximidades de cumes de aclives.',
                'Em qualquer trecho de rodovia federal, independentemente da sinalização, durante o período noturno.',
                'Apenas quando o veículo a ser ultrapassado está acima da velocidade permitida.'
              ],
              correta: 2,
              explicacao: 'O CTB proíbe a ultrapassagem em situações que comprometem a segurança: faixas de pedestres (risco de atropelamento), interseções (conflito de fluxos), pontes e viadutos (espaço reduzido), curvas e cumes de aclives sem visibilidade suficiente (impossibilidade de ver veículos vindos em sentido contrário). A alternativa B é parcialmente correta — a sinalização de proibição é uma das hipóteses, mas não a única. As alternativas A, D e E descrevem restrições que não têm respaldo no CTB nessa forma.'
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Infrações, Penalidades e Medidas Administrativas',
          descricao: 'Sistema de pontuação da CNH, classificação das infrações, multas, medidas administrativas (apreensão, retenção, remoção) e processo administrativo de trânsito.',
          pilulas: [
            {
              titulo: 'Sistema de infrações, pontos na CNH e medidas administrativas no CTB',
              nivel_profundidade: 2,
              texto: `O sistema punitivo do CTB é estruturado em duas dimensões paralelas e independentes: a administrativa (aplicação de multa, pontos na CNH, apreensão de veículo) e a penal (para condutas tipificadas como crime, como embriaguez ao volante com determinado nível de alcoolemia ou homicídio culposo na direção). O Policial Rodoviário Federal precisa dominar ambas as dimensões e saber quando cada uma se aplica.

As infrações administrativas são classificadas em quatro níveis de gravidade (Art. 258 CTB): leves (3 pontos), médias (4 pontos), graves (5 pontos) e gravíssimas (7 pontos). Algumas infrações gravíssimas têm multiplicador: embriaguez ao volante acima de 0,34 mg/l no etilômetro (Art. 165-A) resulta em multa multiplicada por 10, além de suspensão imediata do direito de dirigir. Disputar corrida, racha (Art. 173), excesso de velocidade acima de 50% do limite permitido e usar celular ao dirigir são exemplos de infrações gravíssimas.

A suspensão do direito de dirigir ocorre quando o condutor acumula 20 pontos no período de 12 meses (Art. 261 CTB), ou de forma imediata em casos específicos previstos em lei. A CNH é cassada em situações de reincidência na embriaguez ou em determinadas infrações gravíssimas. As medidas administrativas (Art. 269 CTB) incluem: retenção do veículo (irregularidade sanável no local), remoção ao depósito (irregularidade que impede continuidade da viagem), recolhimento do documento, apreensão do veículo e interdição da via. A remoção ao depósito gera cobrança de taxa de remoção e diária, que são ônus do proprietário.`
            }
          ],
          exercicios: [
            {
              titulo: 'Classificação de infração e pontuação na CNH',
              nivel_dificuldade: 2,
              pergunta: 'De acordo com o Código de Trânsito Brasileiro, um condutor que avançar o sinal vermelho do semáforo comete infração classificada como:',
              alternativas: [
                'Leve, com penalidade de advertência por escrito e 3 pontos na CNH.',
                'Média, com multa e 4 pontos na CNH.',
                'Grave, com multa e 5 pontos na CNH.',
                'Gravíssima, com multa (valor multiplicado), suspensão imediata do direito de dirigir e 7 pontos na CNH.',
                'Gravíssima, com multa e 7 pontos na CNH, sem suspensão imediata do direito de dirigir.'
              ],
              correta: 4,
              explicacao: 'Avançar o sinal vermelho é infração gravíssima (Art. 208 CTB), com penalidade de multa e 7 pontos na CNH. Não há previsão de suspensão imediata do direito de dirigir nessa infração — a suspensão imediata é reservada para casos específicos como embriaguez ao volante. A alternativa D está errada porque acrescenta a suspensão imediata, que não é automática nesse caso. O candidato precisa distinguir entre infrações gravíssimas simples (multa + 7 pontos) e infrações gravíssimas com agravamento especial (multiplicador de multa ou suspensão imediata).'
            },
            {
              titulo: 'Medidas administrativas — retenção versus remoção',
              nivel_dificuldade: 2,
              pergunta: 'Um Policial Rodoviário Federal aborda um veículo e constata que o condutor está com o licenciamento do veículo vencido. Qual medida administrativa é adequada nessa situação, conforme o CTB?',
              alternativas: [
                'Apreensão definitiva do veículo, com posterior leilão.',
                'Remoção imediata ao depósito, com cobrança de taxa de remoção e diária.',
                'Retenção do veículo no local até a regularização ou apresentação de condutor habilitado com documento regular do veículo.',
                'Cassação da CNH do condutor por infração administrativa grave.',
                'Interdição total da via até que todos os documentos sejam apresentados.'
              ],
              correta: 2,
              explicacao: 'O licenciamento vencido é uma irregularidade que, em regra, não impede a continuidade da viagem por si só — mas o veículo pode ser retido (Art. 269, II CTB) até que a situação seja regularizada ou que o proprietário pague a taxa de regularização. A retenção é a medida cabível para irregularidades passíveis de saneamento no local ou mediante pagamento. A remoção ao depósito é para situações que impedem a continuidade da viagem com segurança (ex: veículo com defeito mecânico grave, condutor sem habilitação). A cassação da CNH exige processo administrativo específico, não é medida de campo imediata.'
            }
          ]
        }

      ]
    },

    // ══════════════════════════════════════════════════════════
    // 3. DIREITO PENAL
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Direito Penal',
      modulos: [

        // ── Módulo 1 ──────────────────────────────────────────
        {
          nome: 'Teoria Geral do Crime — Elementos do Tipo Penal',
          descricao: 'Conceito analítico de crime, fato típico (conduta, resultado, nexo causal, tipicidade), ilicitude e culpabilidade. Dolo, culpa e preterdolo. Tentativa e consumação.',
          pilulas: [
            {
              titulo: 'O conceito analítico de crime: tipicidade, ilicitude e culpabilidade',
              nivel_profundidade: 2,
              texto: `O Direito Penal adotado no Brasil utiliza o conceito analítico de crime: para que um fato seja considerado crime, deve ser típico, ilícito (antijurídico) e culpável. Cada um desses elementos é uma etapa de análise independente, e a ausência de qualquer deles exclui o crime ou a pena. O CEBRASPE cobra esse tripé tanto em questões teóricas quanto em casos práticos, exigindo que o candidato identifique qual elemento está presente ou ausente em determinada situação.

O fato típico é composto por quatro elementos: conduta (ação ou omissão voluntária e consciente), resultado (no crime material, é a modificação do mundo exterior causada pela conduta), nexo causal (relação de causalidade entre conduta e resultado — art. 13 CP: "o resultado, de que depende a existência do crime, somente é imputável a quem lhe deu causa") e tipicidade (adequação formal e material do fato à descrição legal). A ilicitude pode ser afastada pelas excludentes do Art. 23 do CP: estado de necessidade, legítima defesa, estrito cumprimento do dever legal e exercício regular de direito. A culpabilidade envolve imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa.

Dolo e culpa são as formas de culpabilidade em sentido amplo. O dolo (Art. 18, I CP) é a vontade consciente de realizar o tipo penal: dolo direto (quer o resultado) e dolo eventual (assume o risco de produzi-lo — o agente prevê o resultado possível e, mesmo assim, não se importa, age). A culpa (Art. 18, II CP) está presente quando o agente dá causa ao resultado por imprudência (ação sem cuidado), negligência (omissão de cuidado) ou imperícia (falta de aptidão técnica). O preterdolo ocorre quando há dolo no antecedente (conduta) e culpa no consequente (resultado mais grave) — exemplo clássico: lesão corporal seguida de morte (Art. 129, § 3º CP).`
            }
          ],
          exercicios: [
            {
              titulo: 'Dolo eventual versus culpa consciente — distinção prática',
              nivel_dificuldade: 3,
              pergunta: 'João trafega em rodovia federal a 180 km/h, em trechos com limite de 110 km/h, ultrapassando veículos em curva e em situações de visibilidade reduzida. Em determinado momento, colide frontalmente com outro veículo, causando a morte do motorista. O Ministério Público denunciou João por homicídio doloso (dolo eventual). A defesa sustenta que houve apenas culpa consciente. Qual é a distinção correta entre dolo eventual e culpa consciente nesse contexto?',
              alternativas: [
                'No dolo eventual, o agente não previu o resultado; na culpa consciente, previu e tentou evitá-lo.',
                'No dolo eventual, o agente previu o resultado e assumiu o risco de produzi-lo, aceitando a possibilidade; na culpa consciente, o agente previu o resultado mas acreditou, sinceramente, que ele não ocorreria.',
                'A distinção entre dolo eventual e culpa consciente é irrelevante para a tipificação, pois ambos resultam em homicídio culposo.',
                'No dolo eventual, o agente quer diretamente o resultado morte; na culpa consciente, age por imprudência sem prever qualquer resultado.',
                'O dolo eventual só se aplica a crimes de trânsito quando há embriaguez do condutor comprovada.'
              ],
              correta: 1,
              explicacao: 'A distinção entre dolo eventual e culpa consciente reside no elemento volitivo diante da previsão do resultado. Em ambos, o agente prevê o resultado possível. No dolo eventual, o agente assume o risco — age com indiferença quanto à ocorrência do resultado ("aconteça o que acontecer, vou agir assim"). Na culpa consciente, o agente prevê o resultado mas acredita sinceramente que ele não vai ocorrer ("estou com pressa, mas tenho habilidade suficiente — não vai acontecer nada"). O STJ e STF utilizam as circunstâncias do caso concreto (velocidade, condições da pista, comportamento anterior do agente) para distinguir os dois institutos em casos de homicídio em direção de veículo.'
            },
            {
              titulo: 'Excludentes de ilicitude — estrito cumprimento do dever legal',
              nivel_dificuldade: 2,
              pergunta: 'Um Policial Rodoviário Federal, em abordagem a um veículo com suspeita de tráfico de drogas, utiliza a força necessária para imobilizar o condutor que reagiu agressivamente à abordagem, ferindo-o levemente. Posteriormente, comprova-se que havia drogas no veículo. Quanto à conduta do policial:',
              alternativas: [
                'Configura crime de lesão corporal dolosa, pois o policial sabia que causaria ferimento.',
                'Configura crime de lesão corporal culposa, por excesso na abordagem.',
                'É atípica, pois policiais não podem responder por lesões causadas em serviço.',
                'É ilícita, porém a culpabilidade é afastada por inexigibilidade de conduta diversa.',
                'É lícita por estrito cumprimento do dever legal, desde que a força usada seja proporcional e necessária para a execução do ato de ofício.'
              ],
              correta: 4,
              explicacao: 'O estrito cumprimento do dever legal (Art. 23, III CP) é a excludente de ilicitude aplicável quando o agente pratica o fato típico no exercício de obrigação imposta por lei. O policial tem o dever legal de efetuar abordagens e pode usar força física proporcional e necessária para cumprir suas funções. Se a força for a mínima necessária para conter a resistência, a ilicitude é excluída. A alternativa C está errada porque não é que a conduta seja atípica — ela é típica (lesão corporal), mas lícita pela excludente. As alternativas A e B implicam crime. A alternativa D aplica a culpabilidade equivocadamente — a resolução correta é na ilicitude, não na culpabilidade.'
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Crimes contra a Administração Pública',
          descricao: 'Peculato (Art. 312 CP), corrupção passiva (Art. 317 CP), corrupção ativa (Art. 333 CP), prevaricação (Art. 319 CP), concussão (Art. 316 CP). Sujeitos, elementares e distinções.',
          pilulas: [
            {
              titulo: 'Crimes funcionais: peculato, corrupção e prevaricação — distincões essenciais',
              nivel_profundidade: 2,
              texto: `Os crimes contra a Administração Pública praticados por funcionário público são chamados de crimes funcionais próprios (exigem a qualidade de funcionário público para configurar o crime — ex: peculato, prevaricação) e impróprios (a qualidade de funcionário apenas agrava a pena, mas o crime existiria sem ela). O CEBRASPE cobra as elementares de cada tipo penal e as distinções práticas entre eles.

Peculato (Art. 312 CP): o funcionário público se apropria ou desvia dinheiro, valor ou outro bem móvel, público ou particular, que possui em razão do cargo. Modalidades: peculato-apropriação (se apossa do bem — "toma para si"); peculato-desvio (dá destinação diversa do interesse público — "desvia em proveito próprio ou alheio"); peculato-furto (subtrai ou concorre para que terceiro subtraia, valendo-se da facilidade do cargo — § 1º); peculato culposo (§ 2º — concorre culposamente para que terceiro subtraia). Pena: 2 a 12 anos (doloso); 3 meses a 1 ano (culposo, com extinção da punibilidade se reparado o dano antes da sentença).

Corrupção passiva (Art. 317 CP): o funcionário público solicita, recebe ou aceita a promessa de vantagem indevida para si ou para outrem, em razão da função. A vantagem deve ser indevida — se for devida, configura outro tipo. Corrupção ativa (Art. 333 CP): praticada pelo particular que oferece ou promete a vantagem ao funcionário. Os dois crimes são autônomos: a corrupção passiva pode ser configurada mesmo sem corrupção ativa (se o agente apenas solicita sem que o particular ofereça). Prevaricação (Art. 319 CP): o funcionário retarda ou deixa de praticar ato de ofício, ou pratica contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal. A prevaricação exige o dolo específico de satisfazer interesse pessoal — sem esse elemento subjetivo, o ato pode ser ilegal, mas não configura prevaricação.`
            }
          ],
          exercicios: [
            {
              titulo: 'Distinção entre peculato-apropriação, peculato-desvio e concussão',
              nivel_dificuldade: 2,
              pergunta: 'Analise as situações e assinale a que configura PECULATO-DESVIO (Art. 312, caput, segunda parte, CP):\n\nI. Um servidor público desvia verbas destinadas à manutenção de rodovias para contratar empresa de um familiar.\nII. Um agente público exige dinheiro de motoristas em troca de não aplicar multas.\nIII. Um policial, valendo-se do cargo, subtrai combustível do depósito da corporação para uso pessoal.\nIV. Um funcionário público se apodera de equipamentos da repartição que estavam sob sua guarda.',
              alternativas: [
                'Situação I',
                'Situação II',
                'Situação III',
                'Situação IV',
                'Situações I e III'
              ],
              correta: 0,
              explicacao: 'O peculato-desvio ocorre quando o funcionário desvia bem público (dinheiro, valor ou outro bem) que possui em razão do cargo, em proveito próprio ou alheio. Na situação I, o servidor desvia verbas públicas (que administra em razão do cargo) para contratar empresa de familiar — há desvio de recurso para proveito de terceiro (familiar). A situação II configura concussão (Art. 316 CP) — exigir vantagem indevida em razão da função. A situação III configura peculato-furto (§ 1º) — policial que subtrai valendo-se do cargo, mas sem ter os bens sob custódia direta. A situação IV configura peculato-apropriação — o funcionário se apodera de bens que possui em razão do cargo.'
            },
            {
              titulo: 'Prevaricação — elemento subjetivo específico',
              nivel_dificuldade: 2,
              pergunta: 'Um Policial Rodoviário Federal se recusa a lavrar o auto de infração de trânsito de um motorista porque se compadeceu da situação financeira precária que o motorista relatou. Esse fato pode configurar:',
              alternativas: [
                'Corrupção passiva, pois o policial deixou de cumprir o ato de ofício.',
                'Prevaricação, pois o policial deixou de praticar ato de ofício para satisfazer sentimento pessoal (compadecimento).',
                'Peculato, pois o policial abriu mão de bem público (a multa) em favor de terceiro.',
                'Concussão, pois o policial condicionou a atuação funcional a uma contrapartida emocional.',
                'Nenhum crime, pois o policial agiu por humanidade, o que afasta o dolo.'
              ],
              correta: 1,
              explicacao: 'A prevaricação (Art. 319 CP) é configurada quando o funcionário público retarda ou deixa de praticar ato de ofício para satisfazer interesse ou sentimento pessoal. O compadecimento (sentimento pessoal de piedade) é exatamente o elemento subjetivo especial que tipifica a prevaricação — "sentimento pessoal". O policial tinha o dever de lavrar o auto e deixou de fazê-lo. Não configura corrupção passiva porque não houve solicitação, recebimento ou promessa de vantagem indevida. Não configura peculato porque não houve apropriação ou desvio de bem. A alternativa E está errada porque o "sentimento pessoal" é justamente o dolo específico da prevaricação, não causa excludente.'
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
