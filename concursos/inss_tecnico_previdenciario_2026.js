/**
 * INSS — Técnico do Seguro Social 2026
 * Banca: CEBRASPE (histórico)
 * 8.500 vagas previstas · Nível Médio · Nacional
 * Referência: Edital INSS/CEBRASPE 2022
 */

const { executarIngestion } = require('../engine_ingestao');

const CONFIG = {
  orgao_match: 'INSS - Técnico do Seguro Social',
  concurso_nome: 'INSS - Técnico do Seguro Social 2026',
  concurso_banca: 'CEBRASPE',

  concurso_gps: {
    orgao: 'INSS - Técnico do Seguro Social',
    familia: 'previdenciario',
    esfera: 'federal',
    uf: 'BR',
    status_edital: 'previsto'
  },

  disciplinas: [

    // ══════════════════════════════════════════════════════════
    // 1. LÍNGUA PORTUGUESA
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Língua Portuguesa',
      modulos: [

        {
          nome: 'Interpretação e Compreensão de Textos',
          descricao: 'Leitura de textos formais e previdenciários no estilo CEBRASPE: palavras restritivas, inferência e paráfrase.',
          pilulas: [{
            titulo: 'A armadilha do CEBRASPE: palavras restritivas e leitura ativa',
            nivel_profundidade: 1,
            texto: `A interpretação de textos nas provas do INSS/CEBRASPE exige precisão técnica acima da média. A banca não testa apenas fluência — testa sua "malícia" diante de assertivas que parecem certas mas carregam uma palavra que inverte tudo.\n\nAtente-se às palavras restritivas e absolutas: "somente", "apenas", "sempre", "nunca", "impreterivelmente". Em textos legislativos e previdenciários, essas palavras quase sempre sinalizam uma armadilha, pois a lei real costuma ter exceções que a assertiva ignora.\n\nA técnica mais eficaz é a Leitura Ativa: leia o comando da questão ANTES do texto. Seu cérebro passa a funcionar como radar, varrendo os parágrafos em busca exata do trecho que confirma ou nega a assertiva. Isso reduz em 30% o tempo por questão e aumenta a precisão.`
          }],
          exercicios: [
            {
              titulo: 'Armadilha de palavra restritiva em texto previdenciário',
              pergunta: 'Em relação à compreensão e interpretação de textos formais no estilo CEBRASPE, assinale a alternativa correta:',
              alternativas: [
                'O CEBRASPE evita o uso de palavras restritivas em questões de interpretação literal.',
                'A compreensão exige que o candidato tire conclusões além do que está escrito no texto.',
                'A leitura passiva do texto antes do comando da questão é a técnica mais eficaz.',
                'Palavras como "somente" e "apenas" costumam ser armadilhas que alteram a veracidade das assertivas.',
                'Interpretar e compreender são processos textuais idênticos sem distinção prática.'
              ],
              correta: 3,
              explicacao: 'O CEBRASPE usa "somente", "apenas", "sempre" e "nunca" para criar assertivas falsas em textos que têm exceções. Identificar essas palavras é o primeiro filtro tático na prova.',
              nivel_dificuldade: 1
            },
            {
              titulo: 'Distinção entre compreensão e interpretação',
              pergunta: 'Qual a diferença primária entre compreender e interpretar um texto em provas previdenciárias?',
              alternativas: [
                'Compreender requer conhecimentos externos ao texto; interpretar, não.',
                'Compreender é entender o que está expresso literalmente; interpretar é inferir a partir das pistas do autor.',
                'Ambos são processos idênticos — a banca usa os termos indistintamente.',
                'Interpretar baseia-se em memorização gramatical; compreender, na velocidade de leitura.',
                'Compreender aplica-se a textos literários; interpretar, a textos legais.'
              ],
              correta: 1,
              explicacao: 'Compreensão está DENTRO do texto ("O texto afirma que..."). Interpretação está FORA ("Deduz-se que..."). O CEBRASPE mistura as duas formas — saber distingui-las evita marcações erradas.',
              nivel_dificuldade: 1
            }
          ]
        },

        {
          nome: 'Coesão e Coerência Textual',
          descricao: 'Referência anafórica e catafórica, conectivos e progressão temática.',
          pilulas: [{
            titulo: 'Coesão referencial: anáfora, catáfora e substituição',
            nivel_profundidade: 1,
            texto: `Coesão é o fio que costura o texto. Sem ela, as frases seriam ilhas isoladas. O CEBRASPE cobra especialmente dois mecanismos: a anáfora (retomada de algo já dito) e a catáfora (antecipação de algo que ainda será dito).\n\nAnáfora aponta para trás: "O INSS publicou o edital. Ele prevê 8.500 vagas." — o pronome "ele" retoma "edital". Catáfora aponta para frente: "É o seguinte: o edital sai em agosto." — "o seguinte" antecipa a informação que vem depois.\n\nConectivos são outra arma do CEBRASPE. Trocar "embora" por "porque" muda completamente o sentido de uma oração. Na prova, sempre identifique o valor semântico do conectivo (adição, oposição, causalidade, concessão) antes de marcar.`
          }],
          exercicios: [
            {
              titulo: 'Identificação de referência anafórica',
              pergunta: 'No trecho "O INSS suspendeu o benefício. Esse ato gerou contestação judicial.", o termo "esse ato" exerce a função de:',
              alternativas: [
                'Catáfora — antecipa informação que ainda será apresentada.',
                'Elipse — omite um termo recuperável pelo contexto.',
                'Anáfora — retoma o termo "a suspensão do benefício" já mencionado.',
                'Conjunção — liga as duas orações indicando causa.',
                'Predicativo — caracteriza o sujeito da segunda oração.'
              ],
              correta: 2,
              explicacao: '"Esse ato" recupera de forma coesa a oração anterior (a suspensão do benefício). É anáfora porque aponta para trás, evitando repetição e mantendo a progressão textual.',
              nivel_dificuldade: 1
            },
            {
              titulo: 'Valor semântico de conectivo',
              pergunta: 'Assinale a alternativa em que a substituição do conectivo preserva o sentido original da frase: "O candidato estudou muito, porém não foi aprovado."',
              alternativas: [
                '"O candidato estudou muito, portanto não foi aprovado."',
                '"O candidato estudou muito, assim não foi aprovado."',
                '"O candidato estudou muito, todavia não foi aprovado."',
                '"O candidato estudou muito, pois não foi aprovado."',
                '"O candidato estudou muito, logo não foi aprovado."'
              ],
              correta: 2,
              explicacao: '"Porém" e "todavia" são conjunções adversativas — indicam oposição. Preservam o sentido original. As demais opções usam conectivos de conclusão (portanto, assim, logo) ou causalidade (pois), que invertem a lógica.',
              nivel_dificuldade: 1
            }
          ]
        },

        {
          nome: 'Gramática Aplicada — Concordância, Regência e Crase',
          descricao: 'Os pontos mais cobrados pelo CEBRASPE: concordância verbal com sujeito composto e regência de verbos-chave.',
          pilulas: [{
            titulo: 'Concordância verbal, regência e crase: os três pilares gramaticais do INSS',
            nivel_profundidade: 1,
            texto: `O CEBRASPE cobra gramática de forma aplicada — não quer que você recite a regra, quer que você identifique o erro em uma frase do mundo real, frequentemente do contexto previdenciário.\n\nNa concordância verbal, o ponto crítico é o verbo HAVER no sentido de existir: é impessoal e fica sempre no singular. "Havia muitos segurados aguardando" é correto. "Haviam muitos segurados" é erro clássico de prova.\n\nNa regência, os verbos mais cobrados são: INFORMAR (informa algo A alguém), OBEDECER (obedece À lei, com preposição), PREFERIR (prefere algo A outro, nunca "do que"). Na crase, a regra de ouro: só ocorre diante de palavra feminina que exige preposição "a". Antes de verbos, pronomes masculinos e nomes de cidades sem artigo: crase proibida.`
          }],
          exercicios: [
            {
              titulo: 'Concordância verbal com HAVER impessoal',
              pergunta: 'Assinale a alternativa que apresenta concordância verbal correta conforme a norma culta:',
              alternativas: [
                'Haviam inúmeros processos de auxílio-doença aguardando perícia médica.',
                'Havia inúmeros processos de auxílio-doença aguardando perícia médica.',
                'Houveram muitas contestações ao cancelamento do benefício.',
                'Hão de existir soluções para os problemas previdenciários levantados.',
                'Existiram, no período analisado, diversos erros no cadastro dos segurados.'
              ],
              correta: 1,
              explicacao: 'O verbo HAVER no sentido de existir é impessoal — fica sempre no singular. "Havia inúmeros processos" é a forma correta. "Haviam" e "Houveram" são erros comuns e favoritos do CEBRASPE.',
              nivel_dificuldade: 1
            },
            {
              titulo: 'Emprego da crase',
              pergunta: 'Assinale a alternativa em que o uso da crase está correto:',
              alternativas: [
                'O servidor referiu-se à suspender o benefício imediatamente.',
                'O técnico obedeceu à portaria ministerial sem questionamentos.',
                'Encaminhei o requerimento à Brasília para apreciação.',
                'Ele preferiu à esperar a perícia do que recorrer administrativamente.',
                'À pedido do segurado, o processo foi reaberto.'
              ],
              correta: 1,
              explicacao: '"Obedecer à portaria" — o verbo obedecer exige preposição "a" + artigo feminino "a" = crase obrigatória. Antes de verbos (à suspender), pronomes (à pedido) e cidades sem artigo (à Brasília): crase proibida.',
              nivel_dificuldade: 1
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 2. RACIOCÍNIO LÓGICO E QUANTITATIVO
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Raciocínio Lógico e Quantitativo',
      modulos: [

        {
          nome: 'Lógica Proposicional — Conectivos e Tabelas-Verdade',
          descricao: 'Proposições, conectivos lógicos, negação, contrapositiva e equivalências.',
          pilulas: [{
            titulo: 'Tabela-verdade e negação: o núcleo do raciocínio lógico no CEBRASPE',
            nivel_profundidade: 1,
            texto: `O CEBRASPE adora proposições condicionais (SE...ENTÃO) e suas equivalências. A regra mais importante: a negação do condicional "Se P então Q" não é "Se não-P então não-Q" — é "P e não-Q". Grave isso.\n\nA contrapositiva é a ferramenta-chave: "Se P então Q" equivale logicamente a "Se não-Q então não-P". Essa equivalência aparece direta nas questões — se você souber usar, resolve em 20 segundos o que o candidato despreparado demora 3 minutos.\n\nNa tabela-verdade, o único caso que torna o condicional FALSO é: premissa verdadeira + conclusão falsa (V → F = F). Todos os outros combinações resultam em VERDADEIRO. Esse é o ponto onde 60% dos candidatos erram.`
          }],
          exercicios: [
            {
              titulo: 'Negação do condicional',
              pergunta: 'A negação lógica da proposição "Se o segurado comprovar carência, então receberá o benefício" é:',
              alternativas: [
                'Se o segurado não comprovar carência, então não receberá o benefício.',
                'O segurado comprova carência e não recebe o benefício.',
                'O segurado não comprova carência ou recebe o benefício.',
                'Se o segurado receber o benefício, então comprovou carência.',
                'O segurado comprova carência ou não recebe o benefício.'
              ],
              correta: 1,
              explicacao: 'A negação de "Se P então Q" é sempre "P e não-Q". Portanto: "O segurado comprova carência E não recebe o benefício". Nunca negue o condicional trocando só os termos — é a pegadinha clássica do CEBRASPE.',
              nivel_dificuldade: 1
            },
            {
              titulo: 'Contrapositiva e equivalência lógica',
              pergunta: 'Qual das proposições abaixo é logicamente equivalente a "Se há contribuição, há direito ao benefício"?',
              alternativas: [
                'Se não há contribuição, não há direito ao benefício.',
                'Há contribuição e não há direito ao benefício.',
                'Se não há direito ao benefício, não há contribuição.',
                'Há direito ao benefício se e somente se há contribuição.',
                'Não há contribuição ou há direito ao benefício.'
              ],
              correta: 2,
              explicacao: 'A contrapositiva de "Se P → Q" é "Se ~Q → ~P", que é logicamente equivalente. Logo: "Se não há direito ao benefício → não há contribuição". A alternativa A é a inversa — não equivalente.',
              nivel_dificuldade: 1
            }
          ]
        },

        {
          nome: 'Raciocínio Numérico — Razão, Proporção e Porcentagem',
          descricao: 'Porcentagem aplicada ao contexto previdenciário: reajuste de benefícios, alíquotas e variações.',
          pilulas: [{
            titulo: 'Porcentagem no INSS: reajuste de benefícios e alíquotas de contribuição',
            nivel_profundidade: 1,
            texto: `No contexto do INSS, porcentagem aparece em situações reais: reajuste do salário mínimo (que é o piso de benefícios), alíquota de contribuição previdenciária e variação do teto do RGPS.\n\nO método do fator multiplicador elimina o cálculo em duas etapas. Para acréscimo de 12%: multiplique por 1,12. Para desconto de 15%: multiplique por 0,85. Para dois reajustes consecutivos (ex: 10% e depois 5%): multiplique por 1,10 × 1,05 = 1,155 — o resultado é 15,5%, não 15%.\n\nPara encontrar o valor original após variação: se após aumento de 20% o benefício é R$ 1.800, o valor original é 1.800 ÷ 1,20 = R$ 1.500. Nunca subtraia a porcentagem diretamente do valor final — esse erro custa pontos.`
          }],
          exercicios: [
            {
              titulo: 'Reajuste consecutivo de benefício previdenciário',
              pergunta: 'Um benefício de R$ 1.200,00 foi reajustado em 8% em janeiro e em 5% em julho do mesmo ano. Qual o valor final do benefício após os dois reajustes?',
              alternativas: [
                'R$ 1.356,00',
                'R$ 1.360,80',
                'R$ 1.350,00',
                'R$ 1.363,20',
                'R$ 1.380,00'
              ],
              correta: 1,
              explicacao: 'Reajustes consecutivos multiplicam os fatores: 1.200 × 1,08 × 1,05 = 1.200 × 1,134 = R$ 1.360,80. O erro comum é somar 8% + 5% = 13% e calcular diretamente, resultando em R$ 1.356,00 — resposta errada.',
              nivel_dificuldade: 1
            },
            {
              titulo: 'Recuperação do valor original após reajuste',
              pergunta: 'Após um reajuste de 25%, a aposentadoria de um segurado passou a ser R$ 2.500,00. Qual era o valor do benefício antes do reajuste?',
              alternativas: [
                'R$ 1.875,00',
                'R$ 2.000,00',
                'R$ 1.950,00',
                'R$ 2.125,00',
                'R$ 1.800,00'
              ],
              correta: 1,
              explicacao: 'Para encontrar o valor original: 2.500 ÷ 1,25 = R$ 2.000,00. O erro clássico é subtrair 25% de R$ 2.500 (= R$ 625), obtendo R$ 1.875 — incorreto. Sempre divida pelo fator.',
              nivel_dificuldade: 1
            }
          ]
        },

        {
          nome: 'Probabilidade e Estatística Básica',
          descricao: 'Média, mediana, moda e probabilidade simples aplicados a dados previdenciários.',
          pilulas: [{
            titulo: 'Média, mediana e moda: como o CEBRASPE usa estatística no contexto do INSS',
            nivel_profundidade: 1,
            texto: `O CEBRASPE apresenta tabelas de dados previdenciários (número de benefícios por estado, valores pagos por categoria) e pede interpretação estatística. Os três pilares: média (soma ÷ quantidade), mediana (valor central após ordenar) e moda (valor que mais se repete).\n\nA armadilha clássica é confundir média com mediana em distribuições assimétricas. Em uma série como {1.200, 1.200, 1.300, 1.500, 8.000}, a média é alta por causa do valor extremo (8.000), mas a mediana é 1.300 — muito mais representativa.\n\nPara probabilidade simples: P(evento) = casos favoráveis ÷ casos possíveis. O CEBRASPE apresenta situações como "de 500 segurados, 120 têm auxílio-doença — qual a probabilidade de sortear um beneficiário de auxílio?" → 120/500 = 0,24 = 24%.`
          }],
          exercicios: [
            {
              titulo: 'Média aritmética de benefícios',
              pergunta: 'Em uma agência do INSS, os valores pagos em cinco benefícios foram: R$ 1.320, R$ 1.412, R$ 1.518, R$ 1.320 e R$ 2.430. Qual é a média aritmética dos benefícios pagos?',
              alternativas: [
                'R$ 1.412,00',
                'R$ 1.600,00',
                'R$ 1.320,00',
                'R$ 1.572,00',
                'R$ 1.518,00'
              ],
              correta: 3,
              explicacao: 'Soma: 1.320 + 1.412 + 1.518 + 1.320 + 2.430 = 8.000. Média: 8.000 ÷ 5 = R$ 1.572,00. A moda (1.320) e a mediana (1.412) são diferentes da média — atenção ao enunciado que pede especificamente a média.',
              nivel_dificuldade: 1
            },
            {
              titulo: 'Probabilidade simples em contexto previdenciário',
              pergunta: 'De 800 segurados atendidos em uma agência, 240 recebem aposentadoria por idade e 160 recebem auxílio-doença. Qual a probabilidade de um atendimento aleatório ser de beneficiário de auxílio-doença?',
              alternativas: [
                '20%',
                '24%',
                '30%',
                '40%',
                '16%'
              ],
              correta: 0,
              explicacao: 'P(auxílio-doença) = 160 ÷ 800 = 0,20 = 20%. Os dados sobre aposentadoria por idade são informação de distração — leia o enunciado com atenção e use apenas o numerador correto.',
              nivel_dificuldade: 1
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 3. LEGISLAÇÃO PREVIDENCIÁRIA (coração do concurso INSS)
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Legislação Previdenciária',
      modulos: [

        {
          nome: 'Seguridade Social — CF/88 Arts. 194 a 204',
          descricao: 'Conceito de seguridade, princípios constitucionais e distinção entre Previdência, Saúde e Assistência.',
          pilulas: [{
            titulo: 'Seguridade Social na CF/88: princípios e a distinção fatal entre os três pilares',
            nivel_profundidade: 1,
            texto: `A Seguridade Social (Art. 194 CF/88) é o tripé: Previdência Social + Saúde + Assistência Social. O ponto mais cobrado: cada pilar tem uma lógica diferente de acesso.\n\nPrevidência Social: contributiva e filiação obrigatória. Só recebe quem contribui (e cumpre carência). Saúde: universal, independe de contribuição — é direito de todos. Assistência Social: não contributiva, direcionada a quem necessitar — independe de contribuição.\n\nOs 8 princípios do Art. 194 (objetivos da seguridade): universalidade da cobertura, uniformidade e equivalência, seletividade e distributividade, irredutibilidade do valor dos benefícios, equidade na forma de participação no custeio, diversidade da base de financiamento, caráter democrático e descentralizado da administração, preexistência do custeio em relação ao benefício (regra da contrapartida).`
          }],
          exercicios: [
            {
              titulo: 'Distinção entre os três pilares da Seguridade',
              pergunta: 'Com base nos Arts. 194 a 204 da CF/88, assinale a afirmativa correta:',
              alternativas: [
                'A Previdência Social independe de contribuição, sendo garantida a todos os cidadãos.',
                'A Assistência Social exige contribuição prévia para concessão de benefícios.',
                'A Saúde e a Assistência Social independem de prévia contribuição do beneficiário.',
                'Os três pilares da Seguridade Social exigem filiação obrigatória e contribuição.',
                'Somente a Saúde é financiada exclusivamente pelo Estado, sem participação dos trabalhadores.'
              ],
              correta: 2,
              explicacao: 'Saúde é universal (Art. 196: direito de todos). Assistência Social é para quem necessitar, sem contribuição (Art. 203). Apenas a Previdência é contributiva e de filiação obrigatória (Art. 201). Essa distinção é a questão mais repetida no histórico do INSS/CEBRASPE.',
              nivel_dificuldade: 2
            },
            {
              titulo: 'Princípio da equidade no custeio',
              pergunta: 'O princípio da equidade na forma de participação no custeio da Seguridade Social significa que:',
              alternativas: [
                'Todos os contribuintes pagam a mesma alíquota independentemente de sua renda ou atividade.',
                'O custeio é exclusivo do Poder Público, sem participação dos trabalhadores e empregadores.',
                'Quem tem maior capacidade econômica ou gera maior risco social contribui proporcionalmente mais.',
                'A contribuição é voluntária, podendo o trabalhador optar por não participar do custeio.',
                'O financiamento da seguridade é igualmente dividido entre União, estados e municípios.'
              ],
              correta: 2,
              explicacao: 'Equidade no custeio: quem tem maior capacidade contributiva (maior salário) ou gera maior risco (empresa com alto índice de acidentes paga SAT maior) contribui mais. É a lógica da balança: o peso da contribuição é proporcional à capacidade e ao risco.',
              nivel_dificuldade: 2
            }
          ]
        },

        {
          nome: 'Benefícios da Previdência Social — Lei 8.213/1991',
          descricao: 'Aposentadorias, auxílios e salário-maternidade: carência, DIB, RMI e pegadinhas do CEBRASPE.',
          pilulas: [{
            titulo: 'Lei 8.213/91: benefícios, carência e os pontos que o CEBRASPE sempre cobra',
            nivel_profundidade: 2,
            texto: `A Lei 8.213/91 rege os benefícios do RGPS. Os principais benefícios e seus requisitos de carência:\n\nAposentadoria por Incapacidade Permanente (antiga invalidez): 12 meses de carência. EXCEÇÃO CRÍTICA: acidentes de qualquer natureza e doenças listadas pelo Ministério da Saúde dispensam carência — questão campeã de prova.\n\nAuxílio por Incapacidade Temporária (antigo auxílio-doença): 12 meses de carência. Também dispensada em casos de acidente. Pago a partir do 16º dia de afastamento (empregado) ou do 1º dia (demais segurados).\n\nSalário-Maternidade: 10 meses de carência para contribuinte individual e facultativa; empregada e trabalhadora avulsa: sem carência. Duração: 120 dias (regra geral), 180 dias para empregada (Lei 11.770 — empresa cidadã).\n\nAposentadoria por Idade: 180 meses de carência. Idade mínima pós-EC 103/2019: 65 anos (homem) e 62 anos (mulher).`
          }],
          exercicios: [
            {
              titulo: 'Carência para aposentadoria por incapacidade — exceção de acidente',
              pergunta: 'Segurado do RGPS sofre acidente de trabalho no 3º mês de filiação. Com base na Lei 8.213/91, assinale a alternativa correta:',
              alternativas: [
                'Não terá direito a nenhum benefício por não cumprir a carência mínima de 12 meses.',
                'Terá direito ao auxílio por incapacidade temporária, mas não à aposentadoria por incapacidade permanente.',
                'Terá direito à aposentadoria por incapacidade permanente, pois acidente de qualquer natureza dispensa carência.',
                'Terá direito ao benefício somente se a incapacidade durar mais de 180 dias consecutivos.',
                'Somente terá direito se o acidente ocorrer durante o horário de trabalho e nas dependências da empresa.'
              ],
              correta: 2,
              explicacao: 'Art. 26, II da Lei 8.213/91: independe de carência a concessão de benefício decorrente de acidente de qualquer natureza. Portanto, mesmo com apenas 3 meses de contribuição, o segurado tem direito pleno à aposentadoria por incapacidade permanente.',
              nivel_dificuldade: 2
            },
            {
              titulo: 'Carência do salário-maternidade por categoria de segurada',
              pergunta: 'Assinale a alternativa que apresenta corretamente o período de carência para o salário-maternidade conforme a Lei 8.213/91:',
              alternativas: [
                'Empregada: 12 meses; contribuinte individual: 12 meses; facultativa: sem carência.',
                'Empregada: sem carência; trabalhadora avulsa: 10 meses; contribuinte individual: sem carência.',
                'Empregada: sem carência; contribuinte individual: 10 meses; facultativa: 10 meses.',
                'Todas as categorias de seguradas: 10 meses de carência uniformemente.',
                'Empregada: 6 meses; contribuinte individual: 12 meses; facultativa: 12 meses.'
              ],
              correta: 2,
              explicacao: 'Lei 8.213/91, Art. 26, VI: empregada e trabalhadora avulsa — sem carência. Art. 25, III: contribuinte individual e segurada facultativa — 10 contribuições mensais. Diferenciar por categoria é exatamente o que o CEBRASPE cobra.',
              nivel_dificuldade: 2
            }
          ]
        },

        {
          nome: 'Custeio da Previdência Social — Lei 8.212/1991',
          descricao: 'Segurados obrigatórios, alíquotas, salário-de-contribuição e teto do RGPS.',
          pilulas: [{
            titulo: 'Lei 8.212/91: quem financia, quanto paga e qual é o teto',
            nivel_profundidade: 2,
            texto: `A Lei 8.212/91 regula o custeio. Os segurados obrigatórios do RGPS são cinco categorias: empregado, empregado doméstico, trabalhador avulso, contribuinte individual e segurado especial.\n\nO segurado facultativo (aquele que não exerce atividade remunerada mas quer se filiar, como o estudante) é o único que NÃO é obrigatório — ele opta por contribuir. O segurado especial (produtor rural em regime de economia familiar) tem regra de custeio diferenciada: contribui sobre a receita bruta da comercialização da produção rural, não sobre o salário.\n\nO salário-de-contribuição tem um teto (atualizado anualmente) — valores acima do teto não integram a base de cálculo. A alíquota do empregado é progressiva (tabela escalonada pós-EC 103/2019). O empregador contribui com 20% sobre a folha de salários (CPSS), além do SAT/RAT (acidente de trabalho) e contribuições a terceiros.`
          }],
          exercicios: [
            {
              titulo: 'Identificação da categoria de segurado',
              pergunta: 'Um estudante universitário que não exerce nenhuma atividade remunerada decide filiar-se ao RGPS para garantir cobertura previdenciária. Essa pessoa enquadra-se como:',
              alternativas: [
                'Segurado especial, por não auferir renda de atividade urbana.',
                'Contribuinte individual, pois presta serviços de forma autônoma.',
                'Segurado facultativo, pois não está obrigado a contribuir por lei.',
                'Empregado, pois está subordinado à instituição de ensino.',
                'Trabalhador avulso, por não ter vínculo empregatício formal.'
              ],
              correta: 2,
              explicacao: 'O segurado facultativo (Art. 13 da Lei 8.212/91) é a pessoa física maior de 16 anos que não exerce atividade remunerada que a filie obrigatoriamente ao RGPS, mas opta por contribuir. O estudante universitário é o exemplo clássico.',
              nivel_dificuldade: 2
            },
            {
              titulo: 'Base de custeio do segurado especial',
              pergunta: 'O segurado especial (produtor rural em regime de economia familiar) contribui para a Previdência Social com base em:',
              alternativas: [
                'Um salário mínimo mensal, independentemente da produção.',
                'O mesmo percentual aplicado ao empregado urbano, sobre o salário mínimo.',
                'A receita bruta proveniente da comercialização da sua produção rural.',
                'O lucro líquido apurado anualmente na declaração de imposto de renda.',
                'A contribuição patronal de 20% sobre o valor de mercado dos produtos.'
              ],
              correta: 2,
              explicacao: 'Art. 25 da Lei 8.212/91: o segurado especial contribui com alíquota incidente sobre a receita bruta da comercialização da produção. Não há salário fixo como base — a contribuição é proporcional ao que vende, o que reconhece a sazonalidade da atividade rural.',
              nivel_dificuldade: 2
            }
          ]
        },

        {
          nome: 'Regras de Transição da Reforma da Previdência — EC 103/2019',
          descricao: 'As 5 regras de transição para quem já estava filiado antes de 13/11/2019.',
          pilulas: [{
            titulo: 'EC 103/2019: as 5 regras de transição e como o CEBRASPE vai cobrar cada uma',
            nivel_profundidade: 2,
            texto: `A Emenda Constitucional 103/2019 criou 5 regras de transição para proteger quem já contribuía antes de 13/11/2019. Cada regra tem sua lógica — o CEBRASPE vai colocar um caso prático e pedir qual regra é mais vantajosa.\n\n1. Pedágio de 50%: para quem faltava até 2 anos. Exige cumprir 50% do tempo restante como pedágio extra, sem idade mínima.\n\n2. Pedágio de 100%: sem limite de tempo faltante. Exige cumprir 100% do tempo restante como pedágio + ter 57 anos (mulher) ou 60 anos (homem).\n\n3. Pontos progressivos: soma de Idade + Tempo de Contribuição. Começa em 86/96 (F/M) e vai subindo até 100/105 (F/M) em 2031. Tempo mínimo: 30 anos (F) / 35 anos (M).\n\n4. Idade mínima + Tempo de Contribuição: mulher 57 anos + 30 anos de contribuição; homem 60 anos + 35 anos. Benefício com redutor de 2% ao ano.\n\n5. Aposentadoria por Idade (transição): redução gradual da idade ao longo dos anos até atingir 62/65 anos (F/M) em 2023.`
          }],
          exercicios: [
            {
              titulo: 'Aplicação da regra de pontos progressivos',
              pergunta: 'Uma servidora do RGPS, em 2025, tem 58 anos de idade e 31 anos de contribuição. Considerando os pontos progressivos (EC 103/2019), assinale a alternativa correta:',
              alternativas: [
                'Pode se aposentar imediatamente, pois atingiu 89 pontos e o limite em 2025 é 88.',
                'Ainda não pode se aposentar pela regra de pontos, pois necessita de 30 anos de contribuição mínimo e 90 pontos em 2025.',
                'Pode se aposentar, pois com 58 + 31 = 89 pontos supera o mínimo exigido em 2025 (88 pontos) e cumpriu os 30 anos mínimos.',
                'Precisa esperar completar 62 anos de idade antes de solicitar qualquer aposentadoria.',
                'Deve usar a regra do pedágio de 50%, pois é mais vantajosa nesse caso.'
              ],
              correta: 2,
              explicacao: 'Em 2025, a regra de pontos exige 88 pontos (F) — 86 em 2019 + 1 ponto/ano. A servidora tem 58 + 31 = 89 pontos, superando os 88 exigidos, e cumpriu os 30 anos mínimos de contribuição. Pode se aposentar.',
              nivel_dificuldade: 2
            },
            {
              titulo: 'Distinção entre as regras de pedágio 50% e 100%',
              pergunta: 'Sobre as regras de pedágio da EC 103/2019, assinale a alternativa correta:',
              alternativas: [
                'O pedágio de 50% se aplica a todos os segurados, independentemente do tempo faltante para a aposentadoria.',
                'O pedágio de 100% não exige idade mínima, apenas o cumprimento do tempo adicional.',
                'O pedágio de 50% aplica-se a quem faltava até 2 anos para se aposentar em 13/11/2019, sem exigência de idade mínima.',
                'Ambas as regras de pedágio exigem idade mínima de 60 anos para homens e 55 para mulheres.',
                'O pedágio de 100% só se aplica a empregados com vínculo formal registrado em CTPS.'
              ],
              correta: 2,
              explicacao: 'Pedágio de 50%: exclusivo para quem faltava até 2 anos em 13/11/2019. Não exige idade mínima — é o mais vantajoso para quem estava prestes a se aposentar. Pedágio de 100%: sem limite de tempo faltante, mas exige 57/60 anos (F/M).',
              nivel_dificuldade: 2
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 4. NOÇÕES DE DIREITO ADMINISTRATIVO
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Noções de Direito Administrativo',
      modulos: [

        {
          nome: 'Princípios da Administração Pública — LIMPE e outros',
          descricao: 'Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência e princípios implícitos.',
          pilulas: [{
            titulo: 'LIMPE e os princípios implícitos: o que o CEBRASPE cobra no INSS',
            nivel_profundidade: 1,
            texto: `O Art. 37 da CF/88 consagra os cinco princípios explícitos da Administração Pública: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (LIMPE). No INSS, todos aparecem na prática diária.\n\nLegalidade: o servidor só pode fazer o que a lei autoriza (diferente do particular, que pode fazer tudo que a lei não proíbe). Impessoalidade: o ato administrativo não pode favorecer ou prejudicar pessoas determinadas — o INSS não pode conceder benefício por amizade. Moralidade: além de legal, o ato deve ser ético. Publicidade: os atos devem ser publicados para que produzam efeitos (regra) — a exceção é o sigilo para proteger a segurança e intimidade. Eficiência: obrigação de fazer mais com menos, com qualidade e celeridade.\n\nPrincípios implícitos cobrados: razoabilidade (proibição do excesso), proporcionalidade, autotutela (a Administração pode anular seus próprios atos ilegais) e segurança jurídica.`
          }],
          exercicios: [
            {
              titulo: 'Identificação do princípio violado',
              pergunta: 'Um técnico do INSS concedeu aposentadoria a um segurado que não cumpria os requisitos legais por considerá-lo "merecedor" em razão de sua situação de pobreza. Qual princípio foi violado?',
              alternativas: [
                'Eficiência, pois o ato não produziu resultado útil para a coletividade.',
                'Publicidade, pois o ato não foi divulgado no Diário Oficial.',
                'Legalidade, pois o agente público atuou fora dos limites autorizados por lei.',
                'Proporcionalidade, pois a decisão foi desproporcional ao caso concreto.',
                'Razoabilidade, pois o servidor não considerou a situação humana do segurado.'
              ],
              correta: 2,
              explicacao: 'O servidor público só pode agir quando e como a lei autoriza. Conceder benefício sem que o segurado cumpra os requisitos legais, ainda que por motivo humanitário, viola o princípio da legalidade — o mais fundamental para a Administração Pública.',
              nivel_dificuldade: 1
            },
            {
              titulo: 'Autotutela administrativa',
              pergunta: 'O INSS constata que concedeu um benefício de forma equivocada, sem base legal. Com base no princípio da autotutela, a conduta correta é:',
              alternativas: [
                'Manter o benefício para preservar a boa-fé do beneficiário, pois atos administrativos são irrevogáveis.',
                'Aguardar que o beneficiário recorra ao Judiciário para que o erro seja corrigido.',
                'Anular o ato ilegal de ofício, independentemente de provocação, resguardados os efeitos para o beneficiário de boa-fé.',
                'Revogar o ato por razões de conveniência e oportunidade, sem necessidade de motivação.',
                'Encaminhar o processo ao Ministério Público para que este solicite a anulação ao Judiciário.'
              ],
              correta: 2,
              explicacao: 'Pela autotutela (Súmula 473 do STF), a Administração pode anular seus próprios atos ilegais de ofício. A anulação (ato ilegal) difere da revogação (ato legal, mas inoportuno). Os efeitos patrimoniais para o beneficiário de boa-fé devem ser preservados.',
              nivel_dificuldade: 1
            }
          ]
        },

        {
          nome: 'Atos Administrativos e Poderes da Administração',
          descricao: 'Elementos do ato administrativo, atributos e poderes vinculado e discricionário.',
          pilulas: [{
            titulo: 'Elementos, atributos e poder vinculado vs. discricionário no contexto do INSS',
            nivel_profundidade: 1,
            texto: `Os cinco elementos do ato administrativo formam o mnemônico COFIM: Competência, Objeto, Forma, Interesse público (finalidade) e Motivo. O vício em qualquer desses elementos gera nulidade.\n\nOs atributos são as características que tornam o ato diferente dos atos privados: Presunção de legitimidade (presume-se válido até prova em contrário), Imperatividade (impõe-se ao destinatário independentemente de concordância), Autoexecutoriedade (pode ser executado sem autorização judicial prévia) e Tipicidade.\n\nNo INSS, a concessão de benefício que cumpre todos os requisitos legais é ato vinculado — o servidor não tem margem de escolha, deve conceder. Já a definição de horário de atendimento é ato discricionário — há margem para conveniência e oportunidade dentro dos limites legais.`
          }],
          exercicios: [
            {
              titulo: 'Ato vinculado vs. discricionário no INSS',
              pergunta: 'Segurado requer aposentadoria por idade comprovando todos os requisitos legais (idade, carência e qualidade de segurado). A decisão do INSS de conceder o benefício caracteriza-se como:',
              alternativas: [
                'Ato discricionário, pois o INSS pode avaliar a conveniência da concessão.',
                'Ato vinculado, pois presentes os requisitos legais, a Administração é obrigada a conceder.',
                'Ato administrativo complexo, pois depende da concordância de dois órgãos distintos.',
                'Ato administrativo precário, pois pode ser revogado a qualquer momento.',
                'Ato discricionário vinculado, pois há liberdade apenas quanto ao prazo de concessão.'
              ],
              correta: 1,
              explicacao: 'Quando a lei determina todos os requisitos e o segurado os cumpre, não há margem de avaliação para a Administração — é ato vinculado. O INSS é obrigado a conceder. Negar seria ilegal e sujeita o ato à anulação.',
              nivel_dificuldade: 1
            },
            {
              titulo: 'Atributo da autoexecutoriedade',
              pergunta: 'O atributo da autoexecutoriedade do ato administrativo significa que:',
              alternativas: [
                'O ato produz efeitos imediatos apenas após publicação no Diário Oficial.',
                'A Administração pode executar o ato sem autorização prévia do Poder Judiciário.',
                'O ato presume-se válido e verdadeiro até que o contrário seja provado.',
                'O ato impõe-se ao destinatário independentemente de sua concordância.',
                'Apenas atos de natureza punitiva possuem o atributo da autoexecutoriedade.'
              ],
              correta: 1,
              explicacao: 'Autoexecutoriedade: a Administração pode executar suas decisões com meios próprios, sem precisar de autorização judicial prévia. Ex: interdição sanitária de uma empresa. Não confundir com presunção de legitimidade (validade presumida) ou imperatividade (imposição ao destinatário).',
              nivel_dificuldade: 1
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 5. ATUALIDADES E O INSS NA PRÁTICA
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Atualidades e Seguridade Social no Brasil',
      modulos: [
        {
          nome: 'INSS na Prática — Estrutura, Missão e Serviços Digitais',
          descricao: 'Missão institucional do INSS, canais de atendimento, Meu INSS e principais benefícios operacionais.',
          pilulas: [{
            titulo: 'O que é o INSS, o Meu INSS e a transformação digital da previdência',
            nivel_profundidade: 1,
            texto: `O INSS (Instituto Nacional do Seguro Social) é uma autarquia federal vinculada ao Ministério da Previdência Social. Sua missão é garantir proteção previdenciária aos trabalhadores e dependentes por meio da concessão e manutenção de benefícios.\n\nO canal digital Meu INSS (gov.br/mein) permite solicitar e acompanhar benefícios sem sair de casa. Para serviços simples, é necessário o nível Prata da conta Gov.br; para serviços que envolvem pagamento ou movimentação financeira (como solicitar aposentadoria), exige-se o nível Ouro — validado por reconhecimento facial via banco credenciado.\n\nOs principais benefícios administrados: Aposentadoria por Incapacidade Permanente, Auxílio por Incapacidade Temporária, Aposentadoria Programada (por Tempo de Contribuição/Idade), Salário-Maternidade, Salário-Família, Pensão por Morte e Auxílio-Reclusão. O técnico do INSS é a ponta de atendimento de todos esses serviços — conhecer o fluxo operacional é essencial para a prova situacional.`
          }],
          exercicios: [
            {
              titulo: 'Nível de acesso no Gov.br para serviços do INSS',
              pergunta: 'Para solicitar aposentadoria pelo canal digital Meu INSS, exigindo acesso a dados financeiros e movimentação de benefício, o segurado deve ter sua conta Gov.br no nível:',
              alternativas: [
                'Bronze, pois é suficiente para qualquer serviço digital do governo federal.',
                'Prata, pois inclui validação por CPF e dados da Receita Federal.',
                'Ouro, pois requer validação biométrica via instituição financeira credenciada.',
                'Platina, nível exclusivo para servidores públicos federais.',
                'Qualquer nível, pois o Meu INSS não exige autenticação diferenciada.'
              ],
              correta: 2,
              explicacao: 'Serviços de alto impacto no Meu INSS (solicitação de aposentadoria, alteração de dados bancários) exigem conta Gov.br nível Ouro — validada por reconhecimento facial via banco. O nível Prata permite consultas e serviços de menor risco. Bronze dá acesso apenas a informações básicas.',
              nivel_dificuldade: 1
            },
            {
              titulo: 'Natureza jurídica do INSS',
              pergunta: 'O INSS, responsável pela gestão dos benefícios previdenciários do RGPS, é uma:',
              alternativas: [
                'Empresa pública com personalidade jurídica de direito privado.',
                'Fundação pública vinculada ao Ministério da Fazenda.',
                'Autarquia federal vinculada ao Ministério da Previdência Social.',
                'Sociedade de economia mista com fins previdenciários.',
                'Órgão da administração direta federal, sem personalidade jurídica própria.'
              ],
              correta: 2,
              explicacao: 'O INSS é uma autarquia federal (personalidade jurídica de direito público, patrimônio e receita próprios) vinculada ao Ministério da Previdência Social. Autarquias integram a administração indireta — cobrado com frequência em questões de estrutura administrativa.',
              nivel_dificuldade: 1
            }
          ]
        }
      ]
    }
  ]
};

executarIngestion(CONFIG).catch(err => {
  console.error('\n❌ ERRO FATAL INSS:', err.message);
  process.exit(1);
});
