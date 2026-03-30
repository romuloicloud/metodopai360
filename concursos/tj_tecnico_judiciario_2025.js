/**
 * DADOS: Tribunal de Justiça — Técnico Judiciário (área administrativa) 2025
 * Banca: FCC / VUNESP | Múltipla escolha com 5 alternativas | Estilo formal/jurídico
 * Referência: Editais de TJs estaduais (SP, RJ, MG) — conteúdo estável entre edições
 *
 * 3 disciplinas × 2 módulos × 1 pílula + 2 exercícios:
 *  1. Língua Portuguesa
 *  2. Direito Constitucional
 *  3. Direito Administrativo
 */

const { executarIngestion } = require('../engine_ingestao');

const CONFIG = {
  orgao_match: 'Tribunal de Justiça - Técnico',
  concurso_nome: 'TJ - Técnico Judiciário 2025',
  concurso_banca: 'FCC',

  concurso_gps: {
    orgao: 'Tribunal de Justiça - Técnico',
    cargo: 'Técnico Judiciário - Área Administrativa',
    banca: 'FCC',
    status_edital: 'previsto',
    vagas: 200,
    remuneracao: 'R$ 7.591,37'
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
          nome: 'Interpretação de Texto Jurídico',
          descricao: 'Leitura e interpretação de textos normativos, acórdãos, portarias e resoluções; identificação de sentido técnico-jurídico de expressões; estrutura argumentativa de textos do Direito.',
          pilulas: [
            {
              titulo: 'Como ler textos jurídicos em prova de concurso: acórdão, portaria e lei',
              nivel_profundidade: 1,
              texto: `Textos jurídicos têm vocabulário técnico e estrutura própria. Reconhecer o tipo de documento é o primeiro passo para interpretar corretamente.

ACÓRDÃO: decisão colegiada de tribunal (proferida por mais de um julgador). Estrutura típica: ementa (resumo da decisão), relatório (histórico do caso), voto do relator, resultado do julgamento. Expressões frequentes: "nego provimento", "dou provimento", "cassada a sentença", "de ofício", "reformo a decisão a quo" (a quo = instância inferior).

PORTARIA: ato administrativo interno, editado por autoridades (ministros, diretores, presidentes de tribunais) para regulamentar procedimentos internos. Não cria direitos para o cidadão comum, salvo exceções expressas.

LEI / RESOLUÇÃO: norma jurídica. Resolução em tribunais é editada pelo órgão pleno ou especial e tem força normativa interna (ex: Resolução CNJ nº 185/2013 — processo judicial eletrônico).

DICAS DE INTERPRETAÇÃO PARA A FCC/VUNESP:
1. Atenção ao conectivo: "salvo", "exceto", "ressalvado" invertem a regra geral — leia o que vem depois como exceção.
2. "Poderá" = faculdade; "deverá" / "deve" = obrigação; "é vedado" = proibição.
3. Prazos em lei: dias corridos ou úteis? A questão sempre deixa a informação — não assuma.
4. Substantivos jurídicos: "legitimidade" (quem pode agir), "competência" (qual órgão decide), "tempestividade" (dentro do prazo), "preclusão" (perda da faculdade processual pelo não exercício no prazo).`
            }
          ],
          exercicios: [
            {
              titulo: 'Interpretação de texto normativo — conectivo de exceção',
              nivel_dificuldade: 2,
              pergunta: `Leia o trecho de resolução de tribunal: "Os servidores do quadro efetivo farão jus ao adicional de insalubridade, salvo aqueles em exercício exclusivo de atividades administrativas internas sem contato com agentes nocivos."

De acordo com o texto, o adicional de insalubridade:`,
              alternativas: [
                'É devido a todos os servidores do quadro efetivo, sem exceção.',
                'É vedado a todos os servidores que exerçam atividades administrativas.',
                'É devido aos servidores do quadro efetivo, exceto àqueles que exercem atividades administrativas internas sem contato com agentes nocivos.',
                'Somente é devido aos servidores que tiveram contato com agentes nocivos no passado.',
                'É opcional, cabendo ao servidor solicitar o benefício mediante requerimento.'
              ],
              correta: 2,
              explicacao: `O conectivo "salvo" introduz uma exceção à regra geral. A regra é: servidores do quadro efetivo têm direito ao adicional. A exceção (introduzida por "salvo") são aqueles em atividades administrativas internas SEM contato com agentes nocivos. A alternativa C reproduz corretamente essa estrutura lógica de regra + exceção. A alternativa A ignora a exceção; B generaliza indevidamente; D e E introduzem condições não previstas no texto.`
            },
            {
              titulo: 'Vocabulário técnico-jurídico em contexto',
              nivel_dificuldade: 2,
              pergunta: `Em um acórdão, consta a seguinte passagem: "Conheço do recurso, pois tempestivo e devidamente instruído, mas nego-lhe provimento, mantendo incólume a sentença de primeiro grau."

A expressão "nego-lhe provimento" significa que o tribunal:`,
              alternativas: [
                'Aceitou o recurso e reformou a decisão anterior.',
                'Não conheceu o recurso por intempestividade.',
                'Julgou o recurso, mas manteve a decisão da instância inferior.',
                'Devolveu o processo ao juiz de origem para nova decisão.',
                'Declarou o recurso prejudicado por perda de objeto.'
              ],
              correta: 2,
              explicacao: `"Negar provimento" ao recurso significa que o tribunal analisou o mérito do recurso (o conheceu — tanto que diz "conheço do recurso") e decidiu manter a decisão recorrida. "Dar provimento" seria o contrário: reformar (mudar) a decisão. O texto reforça essa interpretação com "mantendo incólume a sentença de primeiro grau" (incólume = intacta, sem alteração). A alternativa B confunde com o "não conhecimento" do recurso, que ocorre por vícios formais, não pelo mérito.`
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Redação Oficial — Manual de Redação da Presidência da República',
          descricao: 'Manual de Redação da Presidência da República (4ª edição, 2018): princípios da redação oficial; estrutura e emprego do ofício, memorando e e-mail oficial; formalidade, clareza e concisão.',
          pilulas: [
            {
              titulo: 'Redação Oficial: estrutura do ofício, formalidade e os erros que a FCC penaliza',
              nivel_profundidade: 1,
              texto: `O Manual de Redação da Presidência da República (4ª ed., 2018) unificou os documentos oficiais. As principais mudanças e o que a FCC/VUNESP cobra:

DOCUMENTO PADRÃO: o "ofício" passou a ser o documento padrão para comunicações externas e internas na Administração Pública Federal. O memorando e o aviso foram absorvidos pelo ofício (4ª edição). Estados e municípios podem manter denominações próprias — verificar o edital.

ESTRUTURA DO OFÍCIO (elementos obrigatórios):
1. Tipo e número do expediente / ano (Ex: Ofício nº 12/2025)
2. Local e data por extenso (Ex: São Paulo, 15 de março de 2025)
3. Endereçamento (destinatário: cargo/função + órgão)
4. Assunto (resumo do conteúdo)
5. Vocativo (Ex: "Senhor Presidente,")
6. Texto (introdução, desenvolvimento, conclusão)
7. Fecho ("Atenciosamente," — para autoridades de mesma hierarquia ou inferior; "Respeitosamente," — para autoridades superiores)
8. Assinatura e identificação do signatário

PRINCÍPIOS DA REDAÇÃO OFICIAL:
— Clareza: texto imediatamente compreensível, sem ambiguidade.
— Concisão: dizer o necessário sem prolixidade. Evitar "tendo em vista o fato de que" quando "porque" basta.
— Formalidade e padronização: tratamento impessoal; não usar primeira pessoa do singular ("eu acho") — usar terceira pessoa ou voz passiva.
— Impessoalidade: o documento representa o órgão, não a pessoa que o assina.

PRONOMES DE TRATAMENTO:
— "Vossa Excelência" (V. Exa.): chefes do Poder Executivo, membros do Legislativo, ministros, governadores, magistrados.
— "Vossa Senhoria" (V. Sa.): demais autoridades e particulares.
— NUNCA usar "Vossa Excelência" com verbo na segunda pessoa (erro clássico de prova).`
            }
          ],
          exercicios: [
            {
              titulo: 'Fecho de documento oficial conforme Manual de Redação da Presidência',
              nivel_dificuldade: 2,
              pergunta: 'Um Técnico Judiciário redige um ofício em nome do Tribunal de Justiça endereçado ao Presidente do Supremo Tribunal Federal. Qual fecho deve ser utilizado, conforme o Manual de Redação da Presidência da República?',
              alternativas: [
                '"Atenciosamente,", pois é o fecho padrão para todos os documentos oficiais.',
                '"Respeitosamente,", pois o destinatário é autoridade de hierarquia superior.',
                '"Cordialmente,", pois expressa urbanidade no trato entre tribunais.',
                '"Com estima e consideração,", pois é exigido em correspondência entre órgãos do Judiciário.',
                '"Abraços," ou "Saudações,", pois o e-mail oficial permite linguagem menos formal.'
              ],
              correta: 1,
              explicacao: `O Manual de Redação da Presidência da República estabelece dois fechos oficiais: "Respeitosamente," para autoridades superiores e "Atenciosamente," para autoridades de mesma hierarquia ou de hierarquia inferior. O Presidente do STF ocupa posição hierárquica superior ao TJ, portanto o fecho correto é "Respeitosamente,". Fechos como "Cordialmente," e "Com estima e consideração," não constam no Manual e não devem ser usados em documentos oficiais.`
            },
            {
              titulo: 'Princípio da concisão na redação oficial',
              nivel_dificuldade: 2,
              pergunta: 'Qual das alternativas substitui CORRETAMENTE o trecho "tendo em vista o fato de que o prazo já foi encerrado" por uma redação mais concisa, sem perda de sentido?',
              alternativas: [
                '"visto que o prazo já foi encerrado, portanto sendo necessário"',
                '"porque o prazo encerrou"',
                '"dado o encerramento do prazo"',
                '"em face da situação fática do encerramento do referido prazo"',
                '"considerando-se o fato relativo ao término do prazo já ocorrido"'
              ],
              correta: 2,
              explicacao: `"Dado o encerramento do prazo" é a forma mais concisa e formal: usa substantivo ("encerramento") em lugar de oração inteira, eliminando palavras desnecessárias. "Porque o prazo encerrou" é conciso, mas informal demais para redação oficial. As alternativas D e E são ainda mais prolixas que o original — usam linguagem rebuscada ("face da situação fática", "referido prazo já ocorrido") que viola o princípio da clareza. A alternativa A tem erro de construção ("portanto sendo").`
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 2. DIREITO CONSTITUCIONAL
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Direito Constitucional',
      modulos: [

        // ── Módulo 1 ──────────────────────────────────────────
        {
          nome: 'Princípios Constitucionais e Direitos Fundamentais',
          descricao: 'CF/88: princípios fundamentais (arts. 1º a 4º); princípio LIMPE (art. 37, caput); direitos e garantias fundamentais (art. 5º); dignidade da pessoa humana; igualdade formal e material.',
          pilulas: [
            {
              titulo: 'Princípio LIMPE e direitos fundamentais do art. 5º: o que a FCC e VUNESP cobram',
              nivel_profundidade: 1,
              texto: `PRINCÍPIO LIMPE (art. 37, caput, CF/88) — os cinco princípios expressos da Administração Pública:
— LEGALIDADE: o administrador só pode fazer o que a lei expressamente autoriza (diferente do particular, que pode fazer tudo que a lei não proíbe).
— IMPESSOALIDADE: a atuação é do órgão, não da pessoa do agente; vedação de promoção pessoal às custas de atos públicos (art. 37, §1º).
— MORALIDADE: o ato administrativo deve ser ético e honesto, não apenas legal. Desvio de finalidade viola a moralidade.
— PUBLICIDADE: os atos administrativos devem ser divulgados oficialmente, salvo sigilo legal (segurança nacional, intimidade). Requisito de eficácia do ato.
— EFICIÊNCIA: incluído pela EC nº 19/1998. Exige resultado de qualidade com menor custo. Fundamento das avaliações periódicas de desempenho.

DIGNIDADE DA PESSOA HUMANA (art. 1º, III, CF/88): fundamento da República. Valor supremo que permeia todos os direitos fundamentais. Não é apenas um princípio — é o núcleo irredutível dos direitos humanos. Proibição de tratamento degradante, tortura e discriminação arbitrária derivam diretamente desse fundamento.

IGUALDADE FORMAL × MATERIAL:
— Igualdade formal (art. 5º, caput): todos são iguais perante a lei — a lei não pode criar distinções arbitrárias entre pessoas em situação igual.
— Igualdade material (substancial): tratar desigualmente os desiguais na medida de suas desigualdades (Aristóteles, reiterado pelo STF). Fundamento das ações afirmativas (cotas raciais, reserva de vagas para PCDs), que o STF declarou constitucionais.

A FCC gosta de cobrar: qual princípio foi violado em determinada situação? Saiba identificar:
— Nepotismo → viola impessoalidade e moralidade (Súmula Vinculante 13).
— Ato não publicado no Diário Oficial → viola publicidade (e não produz efeitos).
— Servidor reprovado em avaliação de desempenho e mantido sem justificativa → viola eficiência.`
            }
          ],
          exercicios: [
            {
              titulo: 'Identificação do princípio LIMPE violado',
              nivel_dificuldade: 2,
              pergunta: 'O Presidente de um Tribunal nomeou sua sobrinha para cargo em comissão de assessoria diretamente subordinado a ele. Com base na CF/88 e na Súmula Vinculante nº 13 do STF, quais princípios foram violados?',
              alternativas: [
                'Apenas o princípio da legalidade, pois o ato não tem fundamento em lei.',
                'Os princípios da impessoalidade e da moralidade administrativa.',
                'Apenas o princípio da eficiência, pois a nomeada pode não ter qualificação.',
                'Os princípios da publicidade e da legalidade, pois o ato não foi publicado.',
                'Nenhum princípio foi violado, pois cargos em comissão são de livre nomeação.'
              ],
              correta: 1,
              explicacao: `A Súmula Vinculante nº 13 do STF veda a prática de nepotismo na Administração Pública, declarando-a inconstitucional por violar os princípios da impessoalidade (o ato beneficiou um particular em razão de relação pessoal com o administrador) e da moralidade (a conduta, ainda que não expressamente proibida em lei ordinária, é eticamente reprovável). A alternativa E está errada: a livre nomeação de cargos em comissão não afasta os princípios constitucionais — o STF firmou que o nepotismo é inconstitucional independentemente de lei proibitória específica.`
            },
            {
              titulo: 'Igualdade material e ações afirmativas',
              nivel_dificuldade: 2,
              pergunta: 'A reserva de 20% das vagas de concurso público para candidatos negros, prevista na Lei nº 12.990/2014, fundamenta-se constitucionalmente em qual concepção de igualdade?',
              alternativas: [
                'Igualdade formal, pois a lei trata todos os candidatos com as mesmas regras processuais.',
                'Igualdade material, pois busca reduzir desigualdades históricas tratando desigualmente os desiguais.',
                'Princípio da eficiência, pois diversidade no serviço público melhora os resultados.',
                'Princípio da legalidade, pois a lei expressamente autoriza a diferenciação.',
                'Princípio da publicidade, pois as cotas foram divulgadas oficialmente no edital.'
              ],
              correta: 1,
              explicacao: `As ações afirmativas (cotas) têm fundamento na igualdade material ou substancial: reconhecendo que grupos historicamente marginalizados se encontram em posição desfavorável, o Estado adota medidas que criam desigualdades formais temporárias para promover igualdade real de oportunidades. O STF, no julgamento da ADC 41/2017, declarou constitucional a Lei nº 12.990/2014 exatamente com esse fundamento. A alternativa A descreve igualdade formal, que não justifica tratamento diferenciado, mas exige tratamento igual.`
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Poder Judiciário — Organização e Competências',
          descricao: 'CF/88 arts. 92 a 126: órgãos do Poder Judiciário; competências do STF, STJ e TJs estaduais; Conselho Nacional de Justiça (CNJ); garantias da magistratura.',
          pilulas: [
            {
              titulo: 'Estrutura do Judiciário brasileiro: STF, STJ, TJ e CNJ — o que cai na prova',
              nivel_profundidade: 1,
              texto: `ÓRGÃOS DO PODER JUDICIÁRIO (art. 92, CF/88):
STF → STJ → TST / TSE / STM → TRFs / TRTs / TREs / TJMs → Juízes Federais / Trabalhistas / Eleitorais / Militares / Estaduais.

SUPREMO TRIBUNAL FEDERAL (STF) — art. 101/102:
— 11 Ministros, indicados pelo Presidente da República e aprovados pelo Senado (maioria absoluta).
— Guardião da Constituição: julga ADI, ADC, ADPF (controle concentrado de constitucionalidade).
— Competência originária principal: julga Presidente da República, Vice, membros do Congresso Nacional e seus próprios Ministros.
— Súmula Vinculante: tem efeito obrigatório para todo o Judiciário e Administração Pública (art. 103-A).

SUPERIOR TRIBUNAL DE JUSTIÇA (STJ) — art. 104/105:
— Mínimo 33 Ministros. Tribunal da cidadania: uniformiza a interpretação da lei federal (não da Constituição — isso é o STF).
— Recurso especial (REsp): cabível quando decisão de TRF ou TJ viola lei federal ou diverge de outro tribunal.
— Competência originária: governadores de estado, conselheiros dos TCEs, membros dos TRFs e TJs.

TRIBUNAIS DE JUSTIÇA (TJ) — arts. 125/126:
— Organização definida pela Constituição Estadual, observadas as normas da CF/88.
— Competência: julgar, em segunda instância, os recursos das decisões dos juízes estaduais de primeira instância.
— Originariamente: julga Prefeitos (art. 29, X, CF/88), Deputados Estaduais, membros do MP estadual.

CONSELHO NACIONAL DE JUSTIÇA (CNJ) — art. 103-B:
— 15 membros, mandato de 2 anos (máximo 2 mandatos).
— Função: controle administrativo e financeiro do Poder Judiciário e fiscalização do cumprimento dos deveres funcionais dos juízes. NÃO tem função jurisdicional — não julga causas.
— Presidido pelo Presidente do STF.`
            }
          ],
          exercicios: [
            {
              titulo: 'Competência do STF versus STJ',
              nivel_dificuldade: 2,
              pergunta: 'Um acórdão do Tribunal de Justiça de São Paulo negou vigência a dispositivo da Lei Federal nº 13.105/2015 (Código de Processo Civil). Qual recurso deve ser interposto e para qual tribunal?',
              alternativas: [
                'Recurso extraordinário para o STF, pois envolve lei federal de repercussão geral.',
                'Recurso especial para o STJ, pois a questão envolve violação de lei federal pelo TJ.',
                'Apelação para o próprio TJ, pois o recurso é de competência interna.',
                'Mandado de segurança para o STF, pois a decisão viola direito líquido e certo.',
                'Recurso ordinário constitucional para o STJ, pois envolve decisão de TJ estadual.'
              ],
              correta: 1,
              explicacao: `O art. 105, III, "a", da CF/88 atribui ao STJ a competência para julgar o recurso especial quando o acórdão recorrido "contrariar tratado ou lei federal, ou negar-lhes vigência". O CPC é lei federal — a competência é do STJ, não do STF. O STF julgaria recurso extraordinário se houvesse violação da Constituição Federal (art. 102, III). A distinção STF (Constituição) × STJ (lei federal) é uma das mais cobradas em provas de Judiciário.`
            },
            {
              titulo: 'Natureza e competência do CNJ',
              nivel_dificuldade: 2,
              pergunta: 'Um jurisdicionado, insatisfeito com a demora de um juiz em proferir sentença em processo que tramita há 3 anos, apresenta reclamação ao Conselho Nacional de Justiça. Com base na CF/88, o CNJ poderá:',
              alternativas: [
                'Avocar o processo e proferir a sentença no lugar do juiz omisso.',
                'Instaurar procedimento disciplinar e aplicar sanções administrativas ao magistrado pela demora injustificada.',
                'Anular a sentença do juiz caso ela seja contrária à jurisprudência do STF.',
                'Julgar o recurso interposto pelo jurisdicionado contra a decisão do juiz.',
                'Reformar a decisão do juiz se verificar que ela viola lei federal.'
              ],
              correta: 1,
              explicacao: `O CNJ tem competência administrativa e disciplinar sobre magistrados (art. 103-B, §4º, CF/88), podendo instaurar sindicâncias, processos disciplinares e aplicar sanções. Contudo, o CNJ NÃO tem função jurisdicional: não pode avocar processos, proferir sentenças, anular decisões judiciais ou reformar decisões de juízes — essas atividades são de exclusividade do Poder Judiciário no exercício da jurisdição. A alternativa B descreve corretamente o âmbito de atuação do CNJ: controle da conduta funcional do magistrado, não das suas decisões judiciais.`
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 3. DIREITO ADMINISTRATIVO
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Direito Administrativo',
      modulos: [

        // ── Módulo 1 ──────────────────────────────────────────
        {
          nome: 'Atos Administrativos — Elementos e Atributos',
          descricao: 'Elementos (requisitos de validade) do ato administrativo: competência, finalidade, forma, motivo e objeto. Atributos: autoexecutoriedade, imperatividade e presunção de legitimidade/veracidade.',
          pilulas: [
            {
              titulo: 'Elementos e atributos dos atos administrativos: o que a FCC cobra e como cobrar de volta',
              nivel_profundidade: 2,
              texto: `ELEMENTOS DO ATO ADMINISTRATIVO (requisitos de validade) — mnemônico: CO-FI-FOR-MO-OB:

1. COMPETÊNCIA: poder legal atribuído ao agente para praticar o ato. É o único elemento que pode ser DELEGADO ou AVOCADO. Vício: incompetência (ato praticado por agente sem atribuição legal).

2. FINALIDADE: todo ato deve visar ao interesse público. Finalidade específica = a que a lei prevê para aquele tipo de ato. Vício: desvio de finalidade (ato legal na forma, mas com propósito diverso do previsto em lei — ex: remoção disciplinar disfarçada de necessidade de serviço).

3. FORMA: modo de exteriorização do ato (escrito, publicação em DO, decreto). Regra: a forma é obrigatória apenas quando a lei a exige. Vício: forma ilegal.

4. MOTIVO: situação de fato e de direito que justifica o ato. Teoria dos motivos determinantes: se o agente declara o motivo, mesmo que não fosse obrigado, fica vinculado a ele — ato é inválido se o motivo declarado for falso ou inexistente.

5. OBJETO (conteúdo): efeito jurídico imediato que o ato produz (ex: no ato de demissão, o objeto é a extinção do vínculo funcional). Deve ser lícito, possível, certo e moral.

ATRIBUTOS DO ATO ADMINISTRATIVO:

— PRESUNÇÃO DE LEGITIMIDADE (e veracidade): todo ato administrativo presume-se legal e verdadeiro até prova em contrário. Inversão do ônus da prova: quem alega a ilegalidade deve provar. Permite que o ato produza efeitos imediatamente.

— IMPERATIVIDADE (coercibilidade): o ato é obrigatório independentemente da concordância do particular. A Administração impõe unilateralmente obrigações. Exceção: atos que não criam obrigações (certidões, atestados) não têm imperatividade.

— AUTOEXECUTORIEDADE: a Administração pode executar o ato por conta própria, sem necessidade de autorização judicial prévia. Ex: demolição de obra irregular, apreensão de mercadorias adulteradas. ATENÇÃO: não é todo ato que tem esse atributo — só os expressamente previstos em lei ou em casos de urgência. Cobrança de multa NÃO é autoexecutória (exige execução judicial — Fazenda Pública executa via ação de execução fiscal).`
            }
          ],
          exercicios: [
            {
              titulo: 'Teoria dos motivos determinantes',
              nivel_dificuldade: 2,
              pergunta: 'Um servidor público estável foi removido de cargo pelo Diretor-Geral com a justificativa de "necessidade de serviço na unidade de destino". Posteriormente, comprovou-se que a unidade não tinha qualquer carência de pessoal. Com base na teoria dos motivos determinantes, o ato de remoção é:',
              alternativas: [
                'Válido, pois o Diretor-Geral tem competência discricionária para remover servidores.',
                'Inválido, pois o motivo declarado mostrou-se falso, vinculando e invalidando o ato.',
                'Válido, pois a remoção de servidor estável independe de motivação.',
                'Inválido apenas se o servidor provar que houve desvio de finalidade.',
                'Válido, pois o vício de motivo só invalida atos vinculados, não discricionários.'
              ],
              correta: 1,
              explicacao: `A teoria dos motivos determinantes, amplamente adotada pelo STJ e STF, estabelece que, uma vez declarado o motivo do ato, a Administração fica vinculada a ele. Se o motivo declarado for inexistente ou falso (no caso, não havia carência de pessoal), o ato é inválido — ainda que a autoridade tivesse competência para praticá-lo e não fosse obrigada a motivá-lo. A alternativa D está errada porque não se exige prova do desvio de finalidade: a simples comprovação da falsidade do motivo declarado é suficiente para a invalidade.`
            },
            {
              titulo: 'Atributo da autoexecutoriedade — limites',
              nivel_dificuldade: 2,
              pergunta: 'Um Município, após regular processo administrativo, aplicou multa a um estabelecimento comercial por infração às normas de vigilância sanitária. Para cobrar o valor da multa não paga, a Administração:',
              alternativas: [
                'Pode executar a cobrança diretamente, bloqueando os bens do infrator, pois os atos administrativos são autoexecutórios.',
                'Deve inscrever o débito em dívida ativa e ajuizar ação de execução fiscal, pois a cobrança de multa não é autoexecutória.',
                'Pode intimar o devedor e, em caso de descumprimento, efetuar a penhora administrativa sem ordem judicial.',
                'Deve solicitar ao Poder Judiciário uma liminar de bloqueio de bens antes de iniciar qualquer cobrança.',
                'Pode determinar o fechamento imediato do estabelecimento como forma de coerção para pagamento da multa.'
              ],
              correta: 1,
              explicacao: `A autoexecutoriedade NÃO se aplica à cobrança de multas administrativas. Esse é o exemplo clássico de ato sem autoexecutoriedade: a Administração não pode bloquear bens ou penhorar diretamente. O caminho correto é: inscrição em dívida ativa → extração de Certidão de Dívida Ativa (CDA) → ajuizamento de execução fiscal (Lei nº 6.830/1980). A alternativa E configura sanção diversa da multa aplicada, o que violaria os princípios da legalidade e proporcionalidade.`
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Licitações — Lei 14.133/2021 (Nova Lei de Licitações)',
          descricao: 'Lei nº 14.133/2021: modalidades licitatórias (pregão, concorrência, concurso, leilão, diálogo competitivo); critérios de julgamento; dispensa e inexigibilidade; princípios; fases do processo licitatório.',
          pilulas: [
            {
              titulo: 'Lei 14.133/2021: modalidades, critérios de julgamento e o que mudou em relação à lei anterior',
              nivel_profundidade: 2,
              texto: `A Lei nº 14.133/2021 (Nova Lei de Licitações e Contratos — NLLC) revogou a Lei nº 8.666/1993, a Lei do Pregão (10.520/2002) e o RDC (12.462/2011), unificando-os.

MODALIDADES LICITATÓRIAS (art. 28):
1. PREGÃO: para aquisição de bens e serviços COMUNS (especificações usuais de mercado). Critério de julgamento: menor preço ou maior desconto. É a modalidade mais utilizada. Obrigatório na forma eletrônica como regra (art. 17, §2º).

2. CONCORRÊNCIA: para contratações acima dos limites do pregão; obras e serviços de engenharia de grande vulto; concessões e PPPs. Critérios de julgamento variados (menor preço, melhor técnica, técnica e preço, maior retorno econômico etc.).

3. CONCURSO: para escolha de trabalho técnico, científico ou artístico. O vencedor recebe PRÊMIO ou REMUNERAÇÃO — não é contrato de obra/serviço. Ex: concurso de projetos arquitetônicos.

4. LEILÃO: para alienação de bens imóveis ou móveis inservíveis ao poder público, ou de produtos legalmente apreendidos ou penhorados. Vence quem oferece o MAIOR LANCE (critério: maior oferta).

5. DIÁLOGO COMPETITIVO (novidade da NLLC): para contratações que envolvam inovação tecnológica ou técnica, impossibilidade de definição prévia das especificações. A Administração realiza diálogos com licitantes pré-qualificados antes de definir a solução e o edital final.

ATENÇÃO — o que FIM com a NLLC:
— Não existem mais "convite", "tomada de preços" e "concorrência" para todos os casos pela Lei 8.666. Essas modalidades foram substituídas.

CRITÉRIOS DE JULGAMENTO (art. 33):
— Menor preço; maior desconto; melhor técnica ou conteúdo artístico; técnica e preço; maior retorno econômico; maior lance (leilão).

DISPENSA DE LICITAÇÃO × INEXIGIBILIDADE:
— Dispensa (art. 75): licitação É possível, mas a lei autoriza dispensá-la. Ex: valor abaixo dos limites (R$ 50.000 para obras; R$ 50.000 para outros bens/serviços — verificar atualização por decreto); emergência ou calamidade; compra de imóvel para serviço público.
— Inexigibilidade (art. 74): licitação É INVIÁVEL por ausência de competição. Hipóteses: fornecedor exclusivo; serviços técnicos especializados de natureza singular com profissional notório; artistas consagrados.`
            }
          ],
          exercicios: [
            {
              titulo: 'Identificação da modalidade licitatória correta',
              nivel_dificuldade: 2,
              pergunta: 'Um Tribunal de Justiça deseja contratar uma empresa para fornecer material de expediente (papel, canetas, grampos) de uso corrente. Qual modalidade licitatória é mais adequada, conforme a Lei nº 14.133/2021?',
              alternativas: [
                'Concorrência, por se tratar de contratação realizada por tribunal.',
                'Concurso, pois envolve escolha entre fornecedores concorrentes.',
                'Leilão, pois o critério de julgamento será o maior lance.',
                'Pregão, pois os bens são comuns e têm especificações usuais de mercado.',
                'Diálogo competitivo, pois é necessário definir as especificações com o mercado.'
              ],
              correta: 3,
              explicacao: `Material de expediente é bem comum por excelência — suas especificações técnicas são padronizadas e amplamente encontradas no mercado, o que se enquadra perfeitamente na definição do pregão (art. 6º, XIII e art. 28, I, da Lei 14.133/2021). O pregão é obrigatório para bens e serviços comuns. A concorrência se aplica a contratações de maior complexidade ou valor. O concurso serve para trabalhos técnicos/artísticos. O leilão é para alienação de bens. O diálogo competitivo pressupõe inovação tecnológica ou impossibilidade de especificação prévia.`
            },
            {
              titulo: 'Distinção entre dispensa e inexigibilidade de licitação',
              nivel_dificuldade: 2,
              pergunta: 'Um Tribunal de Justiça necessita contratar o único escritório habilitado no país para desenvolver um sistema de inteligência artificial juridicamente certificado para triagem de processos, sem qualquer concorrente no mercado. Trata-se de hipótese de:',
              alternativas: [
                'Dispensa de licitação por valor, pois contratos de tecnologia têm limite diferenciado.',
                'Dispensa de licitação em razão de emergência, pois o sistema é urgente.',
                'Inexigibilidade de licitação, pois a competição é inviável em razão de fornecedor exclusivo.',
                'Concorrência, pois envolve serviço técnico de grande valor.',
                'Pregão eletrônico, pois serviços de tecnologia da informação são comuns.'
              ],
              correta: 2,
              explicacao: `Inexigibilidade de licitação (art. 74, I, da Lei 14.133/2021) ocorre quando a licitação é inviável por ausência de competição — o caso clássico é o de fornecedor exclusivo. Se existe apenas um fornecedor no mercado capaz de prestar aquele serviço, não há como realizar uma competição. A dispensa pressupõe que a licitação SERIA possível, mas a lei autoriza dispensá-la por outras razões (valor, emergência etc.). A distinção fundamental: dispensa = licitação possível mas dispensada; inexigibilidade = licitação impossível.`
            }
          ]
        }
      ]
    }
  ]
};

executarIngestion(CONFIG)
  .then(id => {
    console.log('GPS ID:', id);
  })
  .catch(err => {
    console.error('\nERRO FATAL:', err.message);
    process.exit(1);
  });
