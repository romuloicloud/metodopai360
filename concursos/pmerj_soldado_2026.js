/**
 * DADOS: PMERJ — Soldado PM 2026 (próximo edital previsto)
 * Banca: FGV | 50 questões objetivas | Redação dissertativa
 * Referência: Edital PMERJ 2024 (FGV) — conteúdo estável entre edições
 *
 * 5 disciplinas × 10 questões:
 *  1. Língua Portuguesa
 *  2. Matemática Básica
 *  3. Direitos Humanos
 *  4. Direito Administrativo e Legislação PMERJ
 *  5. Direito Penal e Processual Penal
 */

const { executarIngestion } = require('../engine_ingestao');

const CONFIG = {
  orgao_match: 'Polícia Militar PMERJ',
  concurso_nome: 'PMERJ',
  concurso_banca: 'FGV',

  concurso_gps: {
    familia: 'seguranca',
    esfera: 'estadual',
    uf: 'RJ',
    orgao: 'Polícia Militar PMERJ',
    link_matriz_pedagogica: 'https://conhecimento.fgv.br/concursos/pmerj24',
    status_edital: 'previsto',
    ano_ultimo_edital: 2024,
    banca_ultimo_edital: 'FGV',
    data_prova: null,
    idade_alvo: 'Adulto (18+)',
    tipo_instituicao: 'Estadual'
  },

  disciplinas: [

    // ══════════════════════════════════════════════════════════
    // 1. LÍNGUA PORTUGUESA — 10 questões
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Língua Portuguesa',
      modulos: [
        {
          nome: 'Interpretação e Compreensão de Textos',
          descricao: 'Leitura e interpretação de textos; localização de informações; inferência; tema central.',
          pilulas: [
            {
              titulo: 'Como a FGV monta a armadilha de interpretação',
              nivel_profundidade: 1,
              texto: 'Atenção, recruta. A FGV usa um padrão fixo: ela coloca no texto uma informação correta e nas alternativas erradas coloca essa mesma informação DISTORCIDA. A alternativa certa é quase sempre uma paráfrase — mesma ideia, palavras diferentes. Seu treino: após ler o texto, antes de ver as alternativas, responda a questão com suas palavras. Depois compare com as opções. A que mais se parece com sua resposta costuma ser a correta. Elimine as que exageram, generalizam ou trazem informação de fora do texto.'
            },
            {
              titulo: 'Identificar o tema central em 30 segundos',
              nivel_profundidade: 1,
              texto: 'Recruta, o tema central é o assunto que aparece do início ao fim do texto. Técnica rápida: leia só o primeiro e o último parágrafo. Em 80% dos casos o tema já está ali. Se o texto tem título, ele entrega o tema. A FGV frequentemente coloca alternativas que são subtemas — assuntos mencionados no texto mas que não são o principal. Subtema ≠ tema central. Exemplo: texto sobre poluição dos rios → tema central é poluição dos rios, não os peixes que morrem (isso é consequência, não tema).'
            }
          ],
          exercicios: [
            {
              titulo: 'Paráfrase correta do texto',
              nivel_dificuldade: 1,
              pergunta: 'Leia: "A criminalidade aumenta quando o Estado falha em oferecer educação e emprego à população." Qual alternativa expressa corretamente a ideia do texto?',
              alternativas: [
                'A criminalidade é causada exclusivamente pela falta de emprego.',
                'O aumento da criminalidade está relacionado à ausência de políticas públicas de educação e trabalho.',
                'A criminalidade só diminui com mais policiamento.',
                'O Estado não tem responsabilidade sobre os índices de criminalidade.'
              ],
              correta: 1,
              explicacao: 'A alternativa B parafraseia corretamente o texto. A A distorce (diz "exclusivamente" — o texto menciona também educação). C e D trazem ideias que não estão no texto.'
            }
          ]
        },
        {
          nome: 'Sintaxe e Regência',
          descricao: 'Período simples e composto; termos da oração; regência verbal e nominal; colocação pronominal.',
          pilulas: [
            {
              titulo: 'Regência verbal: os verbos que mais caem na FGV',
              nivel_profundidade: 1,
              texto: 'Recruta, a FGV tem favoritos em regência. Decore estes: ASSISTIR (a um filme) — exige "a". OBEDECER (às leis) — exige "a". VISAR (ao cargo) — exige "a". PREFERIR (café a chá) — nunca use "do que". NAMORAR alguém — sem preposição. IMPLICAR em — exige "em" quando significa resultar. Dica tática: na prova, quando ver verbo + preposição, pergunte: "Esse verbo pede mesmo essa preposição?" Substitua o complemento por um pronome (lhe, o, a) para confirmar a regência.'
            },
            {
              titulo: 'Colocação pronominal: ênclise, próclise e mesóclise',
              nivel_profundidade: 2,
              texto: 'Três posições, recruta. PRÓCLISE (pronome antes): use com palavras atrativas — negação (não me diga), advérbio (sempre te vejo), pronomes relativos (quem me chamou), orações subordinadas. ÊNCLISE (pronome depois): uso padrão, início de frase ou após vírgula. Nunca inicie frase com pronome oblíquo no padrão culto. MESÓCLISE (pronome no meio do verbo): só com futuro do presente e futuro do pretérito — raramente cobrada. Na FGV, foco em próclise obrigatória versus facultativa.'
            }
          ],
          exercicios: [
            {
              titulo: 'Regência verbal correta',
              nivel_dificuldade: 2,
              pergunta: 'Assinale a frase com regência verbal CORRETA:',
              alternativas: [
                'O soldado obedeceu os regulamentos sem questionar.',
                'Os recrutas assistiram o treinamento em silêncio.',
                'O comandante visou ao bem-estar da tropa.',
                'Ele prefere o serviço diurno do que o noturno.'
              ],
              correta: 2,
              explicacao: '"Visar" no sentido de "ter em vista/almejar" exige a preposição "a" — "visou ao bem-estar" ✓. "Obedecer" exige "a" (obedecer aos regulamentos). "Assistir" no sentido de "ver" exige "a" (assistir ao treinamento). "Preferir" nunca usa "do que" — correto seria "prefere ao noturno".'
            },
            {
              titulo: 'Colocação pronominal com palavra atrativa',
              nivel_dificuldade: 2,
              pergunta: 'Em qual frase a colocação pronominal está CORRETA segundo a norma culta?',
              alternativas: [
                'Me disseram que o concurso seria adiado.',
                'Não me disseram nada sobre o concurso.',
                'Disseram-me que o concurso seria adiado, mais tarde se arrependeram.',
                'Sempre me contam as novidades primeiro.'
              ],
              correta: 1,
              explicacao: '"Não me disseram" ✓ — a negação "não" é palavra atrativa que obriga a próclise. "Me disseram" no início de frase seria incorreto no padrão culto. A alternativa D também está correta ("sempre" atrai o pronome), mas B é a mais direta e clara.'
            }
          ]
        },
        {
          nome: 'Ortografia e Semântica',
          descricao: 'Ortografia (Acordo Ortográfico 2009); acentuação; sinônimos, antônimos e polissemia.',
          pilulas: [
            {
              titulo: 'Acordo Ortográfico: o que mudou e o que cai na prova',
              nivel_profundidade: 1,
              texto: 'Recruta, desde 2009 o trema (ü) foi abolido em palavras portuguesas — só fica em nomes estrangeiros (Müller). O hífen mudou: não se usa mais em palavras com prefixos terminados em vogal + palavras iniciadas com vogal diferente (autoescola, sem hífen). Mas mantém-se quando o prefixo termina em vogal e a palavra começa com a MESMA vogal (anti-inflamatório) ou com "h" (anti-higiênico). A FGV adora cobrar isso. Grave: "mal-estar" tem hífen. "Malnascido" não tem. A regra: mal + palavra que começa com vogal ou "h" = hífen.'
            }
          ],
          exercicios: [
            {
              titulo: 'Grafia correta com novo acordo ortográfico',
              nivel_dificuldade: 1,
              pergunta: 'Assinale a alternativa com todas as palavras grafadas CORRETAMENTE conforme o Acordo Ortográfico de 2009:',
              alternativas: [
                'autoescola, anti-inflamatório, mal-estar',
                'auto-escola, antiinflamatório, mal estar',
                'autoescola, antiinflamatório, malstar',
                'auto-escola, anti-inflamatório, mal-estar'
              ],
              correta: 0,
              explicacao: '"Autoescola" — sem hífen (prefixo "auto" + vogal diferente "e"). "Anti-inflamatório" — com hífen (prefixo termina em "i" + palavra começa com "i"). "Mal-estar" — com hífen (mal + palavra iniciada por vogal). Alternativa A está completamente correta.'
            },
            {
              titulo: 'Sinônimo em contexto',
              nivel_dificuldade: 1,
              pergunta: 'Na frase "O policial manteve uma postura AUSTERA durante a abordagem", a palavra destacada pode ser substituída, sem alterar o sentido, por:',
              alternativas: [
                'Agressiva',
                'Rígida',
                'Relaxada',
                'Simpática'
              ],
              correta: 1,
              explicacao: '"Austero" significa severo, rígido, sem excessos. No contexto de postura profissional, "rígida" é o sinônimo mais adequado. "Agressiva" seria um exagero que distorce o sentido.'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 2. MATEMÁTICA BÁSICA — 10 questões
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Matemática Básica',
      modulos: [
        {
          nome: 'Conceitos Iniciais (Conjuntos)',
          descricao: 'Conjuntos e operações: união, intersecção e diferença. Aplicação em problemas.',
          pilulas: [
            {
              titulo: 'Conjuntos: diagrama de Venn resolve tudo',
              nivel_profundidade: 1,
              texto: 'Recruta, problemas de conjuntos na PMERJ são sempre sobre contagem. A arma: o Diagrama de Venn. Desenhe dois círculos que se cruzam. O centro (intersecção) são os elementos em AMBOS os grupos. Fora dos círculos ficam os que não estão em nenhum. Fórmula fundamental: Total = A + B - (A∩B) + Nenhum. Exemplo: 30 alunos. 18 gostam de futebol, 15 de vôlei, 8 gostam dos dois. Quantos não gostam de nenhum? Total = 18 + 15 - 8 = 25 gostam de pelo menos um. 30 - 25 = 5 não gostam de nenhum. Simples assim.'
            }
          ],
          exercicios: [
            {
              titulo: 'Problema de conjuntos com Venn',
              nivel_dificuldade: 2,
              pergunta: 'Em um grupo de 40 candidatos ao concurso da PMERJ, 25 estudaram Português, 20 estudaram Matemática e 10 estudaram ambas as matérias. Quantos candidatos não estudaram nenhuma das duas?',
              alternativas: [
                '5',
                '10',
                '15',
                '25'
              ],
              correta: 0,
              explicacao: 'Pelo menos uma matéria = 25 + 20 - 10 = 35. Nenhuma = 40 - 35 = 5 candidatos.'
            }
          ]
        },
        {
          nome: 'Juros Simples e Compostos',
          descricao: 'Cálculo de juros simples (J = C × i × t) e compostos (M = C × (1+i)ᵗ). Aplicações práticas.',
          pilulas: [
            {
              titulo: 'Juros simples vs compostos: quando usar cada um',
              nivel_profundidade: 1,
              texto: 'Recruta, a diferença é simples: JUROS SIMPLES crescem de forma linear — a base de cálculo é sempre o capital inicial. JUROS COMPOSTOS crescem de forma exponencial — os juros de um período são incorporados ao capital (juros sobre juros). Fórmulas: Simples: J = C × i × t → M = C(1 + i×t). Composto: M = C × (1 + i)ᵗ. Na prova: se falar em "ao mês" com vários meses → composto. Se for uma única aplicação com prazo fixo → cheque se é simples. Dica: em juros simples, o montante cresce em linha reta. Em juros compostos, cresce em curva.'
            }
          ],
          exercicios: [
            {
              titulo: 'Cálculo de juros simples',
              nivel_dificuldade: 1,
              pergunta: 'Um policial aplicou R$ 2.000,00 a juros simples de 3% ao mês. Quanto receberá de juros após 4 meses?',
              alternativas: [
                'R$ 180,00',
                'R$ 240,00',
                'R$ 260,00',
                'R$ 200,00'
              ],
              correta: 1,
              explicacao: 'J = C × i × t = 2000 × 0,03 × 4 = R$ 240,00. O montante final seria 2000 + 240 = R$ 2.240,00.'
            }
          ]
        },
        {
          nome: 'Porcentagem e Frações',
          descricao: 'Cálculo percentual, variação percentual, frações e conversões. Razão e proporção.',
          pilulas: [
            {
              titulo: 'Porcentagem: os três caminhos que a FGV usa',
              nivel_profundidade: 1,
              texto: 'Recruta, a FGV aplica porcentagem de três formas: 1) CALCULAR o valor: 20% de 150 = 150 × 0,20 = 30. 2) ENCONTRAR a porcentagem: 30 é quanto % de 150? 30/150 × 100 = 20%. 3) ENCONTRAR o total: se 30 é 20% do total, qual é o total? 30 ÷ 0,20 = 150. Treine os três. Na prova, identifique qual dos três está sendo pedido antes de calcular. Armadilha comum: desconto de 20% depois de aumento de 20% NÃO volta ao valor original. 100 → +20% = 120 → -20% = 96. Isso cai muito.'
            }
          ],
          exercicios: [
            {
              titulo: 'Variação percentual consecutiva',
              nivel_dificuldade: 2,
              pergunta: 'O salário de um PM sofreu aumento de 10% em janeiro e redução de 10% em julho. Se o salário inicial era R$ 3.000,00, qual é o salário final?',
              alternativas: [
                'R$ 3.000,00',
                'R$ 2.970,00',
                'R$ 3.030,00',
                'R$ 2.900,00'
              ],
              correta: 1,
              explicacao: 'Jan: 3000 × 1,10 = R$ 3.300,00. Jul: 3300 × 0,90 = R$ 2.970,00. Aumentos e reduções iguais consecutivos NÃO se anulam — geram perda de 1% (100 × 1,1 × 0,9 = 99).'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 3. DIREITOS HUMANOS — 10 questões
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Direitos Humanos',
      modulos: [
        {
          nome: 'Pacto de San José da Costa Rica',
          descricao: 'Convenção Americana sobre Direitos Humanos (1969): direitos civis, políticos e garantias.',
          pilulas: [
            {
              titulo: 'CADH: o que a FGV mais cobra',
              nivel_profundidade: 1,
              texto: 'Recruta, o Pacto de San José (CADH, 1969) é cobrado no contexto de como ele se aplica À ATIVIDADE POLICIAL. Os artigos quentes: Art. 4º — Direito à vida: proibição da pena de morte arbitrária (relevante para uso da força). Art. 5º — Direito à integridade pessoal: proibição de tortura e tratamento degradante. Art. 7º — Direito à liberdade: prisão só por autoridade competente, habeas corpus. Art. 8º — Garantias judiciais: ampla defesa, presunção de inocência. A FGV adora perguntar: "Com base na CADH, qual princípio foi violado?" Grave esses artigos e os situações correspondentes.'
            },
            {
              titulo: 'Direitos Humanos na prática policial: princípios',
              nivel_profundidade: 1,
              texto: 'Soldado, Direitos Humanos não é contra a polícia — é o que define os LIMITES LEGAIS da sua atuação. Os princípios do uso da força policial segundo ONU: LEGALIDADE (só o que a lei permite), NECESSIDADE (force somente se necessária), PROPORCIONALIDADE (força mínima para o objetivo), PRECAUÇÃO (evitar morte quando possível). Na prova: situações que violam um desses princípios = violação de Direitos Humanos. Gravação de abordagem, uso de algemas, condução ao DP — tudo passa por esses filtros.'
            }
          ],
          exercicios: [
            {
              titulo: 'Aplicação da CADH em caso prático',
              nivel_dificuldade: 2,
              pergunta: 'Um suspeito foi detido e mantido incomunicável por 48 horas sem ser apresentado a autoridade judicial. Com base na Convenção Americana sobre Direitos Humanos, qual direito foi violado?',
              alternativas: [
                'Direito à propriedade (Art. 21)',
                'Direito à liberdade e segurança pessoal, incluindo o direito ao habeas corpus (Art. 7º)',
                'Direito à educação',
                'Direito à livre circulação (Art. 22)'
              ],
              correta: 1,
              explicacao: 'O Art. 7º da CADH garante que toda pessoa detida deve ser apresentada sem demora à autoridade judicial e tem direito ao habeas corpus. Manter alguém incomunicável por 48h sem apresentação ao juiz viola diretamente esse artigo.'
            },
            {
              titulo: 'Princípio da proporcionalidade no uso da força',
              nivel_dificuldade: 2,
              pergunta: 'Um policial usa força física para imobilizar um suspeito desarmado que tenta fugir correndo. Segundo os princípios de Direitos Humanos aplicados à atividade policial, essa ação é:',
              alternativas: [
                'Ilegal, pois nunca se pode usar força física.',
                'Proporcional, desde que a força usada seja a mínima necessária para impedir a fuga.',
                'Desproporcional em qualquer situação envolvendo suspeito desarmado.',
                'Legal apenas com autorização judicial prévia.'
              ],
              correta: 1,
              explicacao: 'O princípio da proporcionalidade permite o uso de força desde que seja a mínima necessária para o objetivo legítimo. Impedir fuga de suspeito é objetivo legítimo. A força deve ser proporcional à resistência.'
            }
          ]
        },
        {
          nome: 'Constituição Federal — Art. 5º e Direitos Fundamentais',
          descricao: 'CF/88 Art. 5º: direitos individuais e coletivos. Remédios constitucionais. Garantias processuais.',
          pilulas: [
            {
              titulo: 'Art. 5º CF/88: os incisos que a FGV adora',
              nivel_profundidade: 1,
              texto: 'Recruta, o Art. 5º tem 78 incisos — a FGV foca em uns 15. Os mais cobrados para PM: I (igualdade homem/mulher); XI (inviolabilidade do domicílio — prisão em flagrante, desastre ou ordem judicial); XII (sigilo de comunicações); LVII (presunção de inocência); LXI (prisão só flagrante ou ordem escrita); LXII (comunicar prisão à família e ao advogado); LXIII (direito ao silêncio); LXVIII (habeas corpus). Para a atividade policial, LXI e LXIII são os mais críticos. Saiba de cor: "ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente".'
            }
          ],
          exercicios: [
            {
              titulo: 'Inviolabilidade do domicílio',
              nivel_dificuldade: 2,
              pergunta: 'Um PM recebe informação de que há drogas em uma residência. Sem mandado judicial, ele pode entrar na casa:',
              alternativas: [
                'Somente com autorização do proprietário.',
                'Em caso de flagrante delito, desastre ou para prestar socorro.',
                'Sempre que houver fundada suspeita de crime.',
                'Nunca, sem mandado judicial.'
              ],
              correta: 1,
              explicacao: 'Art. 5º, XI da CF/88: "a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial".'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 4. DIREITO ADMINISTRATIVO E LEGISLAÇÃO PMERJ — 10 questões
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Legislação Aplicada',
      modulos: [
        {
          nome: 'Estatuto dos Policiais Militares (RJ)',
          descricao: 'Lei nº 443/1983: ingresso, carreira, direitos, deveres e responsabilidades dos PMs do RJ.',
          pilulas: [
            {
              titulo: 'Estatuto PMERJ: o que define sua carreira',
              nivel_profundidade: 1,
              texto: 'Recruta, a Lei 443/83 é sua lei de vida na PMERJ. Os pontos mais cobrados: INGRESSO: por concurso público para a graduação de Soldado. HIERARQUIA: Soldado → Cabo → 3º Sargento → ... → Coronel. DEVERES: disciplina, hierarquia, lealdade às instituições democráticas. PROIBIÇÕES: envolvimento em atividade político-partidária fardado; greve; abandono de posto. ESTABILIDADE: após 3 anos de efetivo exercício. TRANSGRESSÃO DISCIPLINAR: pode ser punição administrativa (advertência, detenção, prisão) independente da esfera penal. Grave: punição administrativa não depende de condenação criminal.'
            }
          ],
          exercicios: [
            {
              titulo: 'Princípio da hierarquia na PMERJ',
              nivel_dificuldade: 1,
              pergunta: 'De acordo com o Estatuto dos Policiais Militares do RJ, a hierarquia militar é baseada em:',
              alternativas: [
                'Tempo de serviço exclusivamente.',
                'Autoridade e responsabilidade escalonadas em níveis, fundamentada na disciplina.',
                'Grau de escolaridade do policial.',
                'Relação de amizade e confiança entre os membros.'
              ],
              correta: 1,
              explicacao: 'A hierarquia militar é o princípio de autoridade e responsabilidade escalonados em graus, estabelecendo subordinação entre os membros. Ela é a base da disciplina e do funcionamento da instituição.'
            }
          ]
        },
        {
          nome: 'Regulamento Disciplinar e Código de Ética',
          descricao: 'Transgressões disciplinares, penalidades, processo administrativo e ética policial militar.',
          pilulas: [
            {
              titulo: 'Transgressões disciplinares: leve, média e grave',
              nivel_profundidade: 1,
              texto: 'Soldado, a FGV cobra o sistema de transgressões disciplinares da PMERJ. Existem três níveis: LEVE (ex: descuido com equipamento, pequenos atrasos), MÉDIA (ex: conduta inconveniente, desobediência leve) e GRAVE (ex: abandono de posto, embriaguez em serviço, agressão a colega). As punições correspondentes: advertência, repreensão, detenção, prisão e licenciamento/demissão. Ponto crítico: a punição disciplinar pode ocorrer mesmo que o policial seja absolvido criminalmente, pois são esferas independentes. A instância administrativa não espera a criminal para agir.'
            }
          ],
          exercicios: [
            {
              titulo: 'Independência entre esferas penal e administrativa',
              nivel_dificuldade: 2,
              pergunta: 'Um PM é acusado de transgressão disciplinar grave. O inquérito policial foi arquivado por falta de provas. Quanto à punição disciplinar:',
              alternativas: [
                'Também deve ser arquivada, pois segue a decisão criminal.',
                'Pode prosseguir normalmente, pois as esferas penal e administrativa são independentes.',
                'Só pode prosseguir se houver nova prova criminal.',
                'Fica suspensa até nova decisão judicial.'
              ],
              correta: 1,
              explicacao: 'As esferas penal, cível e administrativa são independentes. O arquivamento de inquérito por falta de provas na esfera penal não vincula a administração militar, que pode punir disciplinarmente com base em critérios próprios.'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 5. DIREITO PENAL E PROCESSUAL PENAL — 10 questões
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Direito Penal e Processual Penal',
      modulos: [
        {
          nome: 'Crimes contra a Pessoa e o Patrimônio',
          descricao: 'CP: homicídio (Art. 121), lesão corporal (Art. 129), furto (Art. 155), roubo (Art. 157). Qualificadoras.',
          pilulas: [
            {
              titulo: 'Furto × Roubo × Extorsão: a diferença que cai sempre',
              nivel_profundidade: 1,
              texto: 'Recruta, essa tríade é certeira na prova. FURTO (Art. 155): subtração SEM violência ou grave ameaça — pena de 1 a 4 anos. ROUBO (Art. 157): subtração COM violência ou grave ameaça — pena de 4 a 10 anos. EXTORSÃO (Art. 158): constranger alguém a FAZER algo mediante violência ou ameaça para obter vantagem — pena de 4 a 10 anos. Diferença roubo/extorsão: no roubo o agente toma o bem; na extorsão a vítima entrega porque foi coagida a agir. Furto qualificado (arrombamento, escalada, 2+ pessoas) equipara-se em pena ao roubo simples. Grave bem isso.'
            },
            {
              titulo: 'Homicídio simples vs qualificado vs privilegiado',
              nivel_profundidade: 2,
              texto: 'Art. 121 CP. SIMPLES: matar alguém — 6 a 20 anos. QUALIFICADO (hediondo): motivo torpe, fútil, meio cruel, traição, emboscada, feminicídio, contra criança, etc. — 12 a 30 anos. PRIVILEGIADO: relevante valor moral, domínio de violenta emoção, ou se agente não pode exigir conduta diversa — reduz pena de 1/6 a 1/3. Para o PM: homicídio doloso no exercício da função — Tribunal do Júri tem competência. Homicídio culposo (imprudência, negligência, imperícia): 1 a 3 anos. Na atividade policial, o uso de força letal desproporcional configura crime.'
            }
          ],
          exercicios: [
            {
              titulo: 'Enquadrar furto qualificado vs roubo',
              nivel_dificuldade: 2,
              pergunta: 'João, com ajuda de Pedro, arrombou a janela de uma loja fechada e furtou mercadorias no valor de R$ 5.000,00. Sem entrar em contato com ninguém no local. O crime praticado é:',
              alternativas: [
                'Roubo simples, pois houve dois agentes.',
                'Furto qualificado pelo concurso de pessoas e pelo arrombamento.',
                'Extorsão, pois houve dano ao patrimônio.',
                'Furto simples, pois não houve violência contra pessoa.'
              ],
              correta: 1,
              explicacao: 'Não houve violência ou ameaça contra pessoa — descarta roubo. Mas houve duas qualificadoras: arrombamento (§ 4º, I) e concurso de duas ou mais pessoas (§ 4º, IV). Logo: furto qualificado, com pena de 2 a 8 anos.'
            },
            {
              titulo: 'Legítima defesa do PM',
              nivel_dificuldade: 2,
              pergunta: 'Um PM é agredido por suspeito armado e, para se defender, usa a arma de fogo e fere o agressor. O PM agiu em:',
              alternativas: [
                'Estado de necessidade',
                'Legítima defesa',
                'Exercício regular do direito',
                'Estrito cumprimento do dever legal'
              ],
              correta: 1,
              explicacao: 'Legítima defesa (Art. 25 CP): repelir injusta agressão, atual ou iminente, a direito próprio ou alheio, usando moderadamente os meios necessários. A agressão do suspeito armado é injusta e atual — os requisitos estão presentes.'
            }
          ]
        },
        {
          nome: 'Flagrante, Prisão e Processo Penal',
          descricao: 'CPP: flagrante delito, prisão preventiva, temporária, liberdade provisória, inquérito policial.',
          pilulas: [
            {
              titulo: 'Flagrante delito: as 4 modalidades que o PM precisa saber',
              nivel_profundidade: 1,
              texto: 'Art. 302 CPP. Está em flagrante quem: I — está cometendo a infração (PRÓPRIO/REAL); II — acaba de cometê-la (PRÓPRIO); III — é perseguido logo após, em situação que faça presumir ser o autor (IMPRÓPRIO/QUASE-FLAGRANTE); IV — é encontrado logo depois, com instrumentos ou objetos que façam presumir ser o autor (PRESUMIDO/FICTO). Para o PM: a abordagem de quem está na Modalidade III ou IV é legal. A prisão deve ser comunicada imediatamente ao juiz, à família e ao advogado. O prazo para audiência de custódia: 24 horas da prisão.'
            }
          ],
          exercicios: [
            {
              titulo: 'Modalidade de flagrante',
              nivel_dificuldade: 2,
              pergunta: 'Minutos após um roubo, a PM é acionada e encontra o suspeito a 500 metros do local, ainda portando a mochila roubada. Trata-se de flagrante:',
              alternativas: [
                'Próprio (real)',
                'Impróprio (quase-flagrante)',
                'Presumido (ficto)',
                'Preparado'
              ],
              correta: 2,
              explicacao: 'Flagrante presumido (Art. 302, IV CPP): o suspeito é encontrado logo depois do crime com instrumentos ou objetos que façam presumir ser o autor. Portando a mochila roubada = elemento que o faz presumir ser o autor. Se estivesse em perseguição contínua, seria impróprio.'
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
