const MODULOS_PMERJ = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",             topico: "Interpretação e Compreensão de Textos",            descricao: "Como a FGV esconde respostas em paráfrases — pare de perder pontos no texto.",          icon: "fa-book-open"         },
    { id: 1,  disciplina: "Língua Portuguesa",             topico: "Sintaxe e Regência",                               descricao: "A estrutura das frases e a ditadura do verbo regente na prova da FGV.",                  icon: "fa-language"          },
    { id: 2,  disciplina: "Língua Portuguesa",             topico: "Ortografia e Semântica",                           descricao: "Polissemia, homônimos e a armadilha das palavras de duplo sentido.",                    icon: "fa-spell-check"       },
    // ── Matemática Básica ─────────────────────────────────────────────────────
    { id: 3,  disciplina: "Matemática Básica",             topico: "Conceitos Iniciais (Conjuntos)",                   descricao: "Conjuntos, operações e Princípio Fundamental da Contagem.",                            icon: "fa-calculator"        },
    { id: 4,  disciplina: "Matemática Básica",             topico: "Juros Simples e Compostos",                        descricao: "A bomba do fator T — como a banca disfarça o tempo e faz você errar.",                  icon: "fa-percent"           },
    { id: 5,  disciplina: "Matemática Básica",             topico: "Porcentagem e Frações",                            descricao: "Tesoura de cálculo mental: corte zeros e acerte porcentagem em 10 segundos.",           icon: "fa-dice"              },
    // ── Direitos Humanos ──────────────────────────────────────────────────────
    { id: 6,  disciplina: "Direitos Humanos",              topico: "Pacto de San José da Costa Rica",                  descricao: "Tratado essencial — direitos civis, políticos e garantias fundamentais.",                icon: "fa-handshake-angle"   },
    { id: 7,  disciplina: "Direitos Humanos",              topico: "Constituição Federal — Art. 5º e Direitos Fundamentais", descricao: "Os incisos do Art. 5º que mais caem em provas de segurança pública.",          icon: "fa-globe"             },
    // ── Legislação Aplicada ───────────────────────────────────────────────────
    { id: 8,  disciplina: "Legislação Aplicada",           topico: "Estatuto dos Policiais Militares (RJ)",            descricao: "Hierarquia, disciplina e prerrogativas — o que a FGV cobra do Estatuto.",               icon: "fa-shield-halved"     },
    { id: 9,  disciplina: "Legislação Aplicada",           topico: "Regulamento Disciplinar e Código de Ética",        descricao: "Infrações, punições e os limites da conduta policial.",                                 icon: "fa-file-signature"    },
    // ── Direito Penal e Processual Penal ─────────────────────────────────────
    { id: 10, disciplina: "Direito Penal e Processual Penal", topico: "Crimes contra a Pessoa e o Patrimônio",         descricao: "Homicídio (Art. 121), Furto, Roubo e Extorsão — diferencie sem errar.",                icon: "fa-gavel"             },
    { id: 11, disciplina: "Direito Penal e Processual Penal", topico: "Flagrante, Prisão e Processo Penal",            descricao: "Espécies de prisão, flagrante próprio/impróprio e o CPP na prática.",                  icon: "fa-mask"              },
];

const MODULOS_INSS = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",                   topico: "Interpretação e Compreensão de Textos",                       descricao: "Como a banca explora inferências e paráfrases em textos de legislação previdenciária.",  icon: "fa-book-open"         },
    { id: 1,  disciplina: "Língua Portuguesa",                   topico: "Coesão e Coerência Textual",                                  descricao: "Conectivos, progressão temática e os erros que derrubam candidatos na redação.",         icon: "fa-spell-check"       },
    { id: 2,  disciplina: "Língua Portuguesa",                   topico: "Gramática Aplicada — Concordância, Regência e Crase",         descricao: "As regras gramaticais que mais caem em provas do INSS — com exemplos reais de editais.", icon: "fa-language"          },
    // ── Raciocínio Lógico e Quantitativo ──────────────────────────────────────
    { id: 3,  disciplina: "Raciocínio Lógico e Quantitativo",   topico: "Lógica Proposicional — Conectivos e Tabelas-Verdade",         descricao: "Deduza gabaritos usando tabelas-verdade — o método mais rápido para lógica em prova.",   icon: "fa-brain"             },
    { id: 4,  disciplina: "Raciocínio Lógico e Quantitativo",   topico: "Raciocínio Numérico — Razão, Proporção e Porcentagem",        descricao: "Atalhos de cálculo mental para resolver contas de benefícios em segundos.",             icon: "fa-calculator"        },
    { id: 5,  disciplina: "Raciocínio Lógico e Quantitativo",   topico: "Probabilidade e Estatística Básica",                          descricao: "Frequência, média, mediana e moda — o que o INSS adora cobrar em dados populacionais.", icon: "fa-percent"           },
    // ── Legislação Previdenciária ─────────────────────────────────────────────
    { id: 6,  disciplina: "Legislação Previdenciária",           topico: "Seguridade Social — CF/88 Arts. 194 a 204",                  descricao: "A base constitucional: princípios, objetivos e financiamento da Seguridade Social.",    icon: "fa-scale-balanced"    },
    { id: 7,  disciplina: "Legislação Previdenciária",           topico: "Benefícios da Previdência Social — Lei 8.213/1991",          descricao: "Aposentadorias, auxílios, salário-maternidade e pensão por morte — espécies e carências.", icon: "fa-file-shield"      },
    { id: 8,  disciplina: "Legislação Previdenciária",           topico: "Custeio da Previdência Social — Lei 8.212/1991",             descricao: "Alíquotas, bases de cálculo e obrigações do empregador e do segurado.",                icon: "fa-coins"             },
    { id: 9,  disciplina: "Legislação Previdenciária",           topico: "Regras de Transição da Reforma da Previdência — EC 103/2019", descricao: "Idade mínima, pontos de transição e as novas regras de aposentadoria pós-reforma.",   icon: "fa-gavel"             },
    // ── Direito Administrativo ────────────────────────────────────────────────
    { id: 10, disciplina: "Noções de Direito Administrativo",   topico: "Princípios da Administração Pública — LIMPE e outros",       descricao: "LIMPE + Supremacia do Interesse Público — o filtro para eliminar alternativas erradas.", icon: "fa-building-columns"  },
    { id: 11, disciplina: "Noções de Direito Administrativo",   topico: "Atos Administrativos e Poderes da Administração",            descricao: "Atributos, requisitos e a diferença entre Anulação e Revogação sem errar.",            icon: "fa-file-signature"    },
    // ── Atualidades ───────────────────────────────────────────────────────────
    { id: 12, disciplina: "Atualidades e Seguridade Social no Brasil", topico: "INSS na Prática — Estrutura, Missão e Serviços Digitais", descricao: "Meu INSS, CNIS, canais de atendimento e a estrutura organizacional da autarquia.", icon: "fa-shield-halved"     },
];

const MODULOS_PF = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",        topico: "Interpretação e Compreensão de Textos (CEBRASPE)",     descricao: "O item certo/errado da CEBRASPE: como a banca constrói a armadilha na última linha.",   icon: "fa-book-open"        },
    { id: 1,  disciplina: "Língua Portuguesa",        topico: "Coesão e Coerência Textual",                           descricao: "Conectivos que invertem o sentido — o que a banca usa para derrubar candidatos fortes.", icon: "fa-spell-check"      },
    // ── Raciocínio Lógico ─────────────────────────────────────────────────────
    { id: 2,  disciplina: "Raciocínio Lógico",        topico: "Proposições e Conectivos Lógicos",                     descricao: "Negação, contrapositiva e equivalência — a base para zerar a lógica da PF.",             icon: "fa-brain"            },
    { id: 3,  disciplina: "Raciocínio Lógico",        topico: "Silogismos e Inferências Válidas",                     descricao: "Como deduzir a conclusão correta sem cair nas pegadinhas de premissas falsas.",          icon: "fa-network-wired"    },
    // ── Direito Constitucional ────────────────────────────────────────────────
    { id: 4,  disciplina: "Direito Constitucional",   topico: "Direitos e Garantias Fundamentais — Art. 5º CF/88",   descricao: "Os 78 incisos que mais caem — separados por frequência real de cobranças.",              icon: "fa-scale-balanced"   },
    { id: 5,  disciplina: "Direito Constitucional",   topico: "Organização do Estado Brasileiro",                    descricao: "Separação dos Poderes, Federação e competências — o que a CEBRASPE cobra todo edital.", icon: "fa-landmark"         },
    // ── Direito Penal ─────────────────────────────────────────────────────────
    { id: 6,  disciplina: "Direito Penal",            topico: "Teoria Geral do Crime — Elementos do Tipo Penal",     descricao: "Dolo, culpa, tipicidade e antijuridicidade — a estrutura do crime na prova da PF.",     icon: "fa-gavel"            },
    { id: 7,  disciplina: "Direito Penal",            topico: "Crimes contra a Administração Pública",               descricao: "Peculato, corrupção, prevaricação — diferenciação precisa que a PF adora cobrar.",      icon: "fa-handcuffs"        },
    // ── Legislação Especial ───────────────────────────────────────────────────
    { id: 8,  disciplina: "Legislação Especial",      topico: "Lei de Drogas — Lei 11.343/2006",                     descricao: "Tráfico vs. uso, associação e colaboração — o que a PF cobra sobre entorpecentes.",      icon: "fa-shield-halved"    },
    { id: 9,  disciplina: "Legislação Especial",      topico: "Estatuto do Desarmamento e Legislação Correlata",     descricao: "Posse, porte, comércio ilegal de armas — a lei que cai todo concurso federal policial.", icon: "fa-crosshairs"       },
];

const MODULOS_PRF = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",        topico: "Interpretação de Texto — Estilo CEBRASPE",              descricao: "A PRF usa CEBRASPE: domine o certo/errado antes de qualquer outra matéria.",             icon: "fa-book-open"        },
    { id: 1,  disciplina: "Língua Portuguesa",        topico: "Gramática Aplicada — Concordância e Regência",          descricao: "Os erros que derrubam candidatos na gramática — focado no perfil da banca.",             icon: "fa-language"         },
    // ── Legislação de Trânsito ────────────────────────────────────────────────
    { id: 2,  disciplina: "Legislação de Trânsito",   topico: "Normas Gerais de Circulação — Lei 9.503/97",            descricao: "CTB artigo por artigo: velocidades, preferências, conversões e obrigações do condutor.", icon: "fa-car"              },
    { id: 3,  disciplina: "Legislação de Trânsito",   topico: "Infrações, Penalidades e Medidas Administrativas",      descricao: "Gravíssimas, graves, médias e leves — tabela de penalidades que cai integral na prova.", icon: "fa-circle-exclamation"},
    // ── Direito Penal ─────────────────────────────────────────────────────────
    { id: 4,  disciplina: "Direito Penal",            topico: "Teoria Geral do Crime — Elementos do Tipo Penal",       descricao: "Dolo, culpa, tipicidade — a base para não errar direito penal na PRF.",                 icon: "fa-gavel"            },
    { id: 5,  disciplina: "Direito Penal",            topico: "Crimes contra a Administração Pública",                 descricao: "Prevaricação, corrupção, peculato — o que a banca cobra do agente de trânsito.",        icon: "fa-handcuffs"        },
    // ── Direito Constitucional ────────────────────────────────────────────────
    { id: 6,  disciplina: "Direito Constitucional",   topico: "Direitos Fundamentais — Art. 5º CF/88",                 descricao: "Liberdades públicas e garantias individuais — filtro essencial para questões da PRF.",   icon: "fa-scale-balanced"   },
    // ── Raciocínio Lógico ─────────────────────────────────────────────────────
    { id: 7,  disciplina: "Raciocínio Lógico",        topico: "Proposições, Conectivos e Tabelas-Verdade",             descricao: "Lógica proposicional do zero ao gabarito — método visual sem decorar fórmulas.",         icon: "fa-brain"            },
];

const MODULOS_BB = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",            topico: "Interpretação de Texto Bancário",                      descricao: "Textos de economia, finanças e regulação: como o BB testa compreensão textual.",       icon: "fa-book-open"         },
    { id: 1,  disciplina: "Língua Portuguesa",            topico: "Redação Oficial e Correspondência Empresarial",        descricao: "Ofício, memorando, e-mail corporativo — estrutura e linguagem que a FCC exige.",       icon: "fa-envelope"          },
    // ── Matemática Financeira ─────────────────────────────────────────────────
    { id: 2,  disciplina: "Matemática Financeira",        topico: "Juros Simples e Compostos",                            descricao: "Montante, capital e taxa — o BB cobra isso em todo concurso desde 2014.",              icon: "fa-percent"           },
    { id: 3,  disciplina: "Matemática Financeira",        topico: "Porcentagem, Desconto e Acréscimo",                    descricao: "Desconto comercial, racional e cálculo de IOF — a tríade que derruba escriturários.",   icon: "fa-calculator"        },
    // ── Conhecimentos Bancários ───────────────────────────────────────────────
    { id: 4,  disciplina: "Conhecimentos Bancários",      topico: "Sistema Financeiro Nacional — CMN, BACEN e CVM",       descricao: "Estrutura, competências e hierarquia do SFN — o conteúdo que o BB nunca deixa de cobrar.", icon: "fa-building-columns"  },
    { id: 5,  disciplina: "Conhecimentos Bancários",      topico: "Produtos e Serviços Bancários",                        descricao: "CDB, LCI, LCA, Tesouro Direto e seguros — o portfólio que o escriturário precisa dominar.", icon: "fa-coins"            },
    // ── Atualidades do Mercado ────────────────────────────────────────────────
    { id: 6,  disciplina: "Atualidades do Mercado Financeiro", topico: "Open Finance, PIX e Meios de Pagamento",         descricao: "O sistema de pagamentos instantâneos e o futuro do mercado financeiro brasileiro.",       icon: "fa-mobile-screen"     },
];

const MODULOS_CAIXA = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",            topico: "Leitura e Interpretação Textual",                      descricao: "A Caixa usa FCC/CESGRANRIO: inferências diretas e vocabulário em contexto são prioridade.", icon: "fa-book-open"        },
    { id: 1,  disciplina: "Língua Portuguesa",            topico: "Argumentação e Coesão",                                descricao: "Conectivos de causa, oposição e conclusão — como a banca desmonta textos argumentativos.", icon: "fa-spell-check"      },
    // ── Matemática Financeira ─────────────────────────────────────────────────
    { id: 2,  disciplina: "Matemática Financeira",        topico: "Juros Compostos e Capitalização",                      descricao: "Capitalização mensal vs. anual, equivalência de taxas — o núcleo do concurso da Caixa.",   icon: "fa-percent"          },
    { id: 3,  disciplina: "Matemática Financeira",        topico: "Análise de Crédito e Risco",                           descricao: "Score, inadimplência e garantias — conceitos que a Caixa cobra como conhecimento específico.", icon: "fa-chart-line"      },
    // ── Vendas e Atendimento ──────────────────────────────────────────────────
    { id: 4,  disciplina: "Técnicas de Vendas",           topico: "Técnicas de Vendas e Relacionamento com Cliente",      descricao: "SPIN Selling, funil de vendas e CRM — o diferencial para cargo de Técnico Bancário.",     icon: "fa-handshake"        },
    { id: 5,  disciplina: "Técnicas de Vendas",           topico: "Ética no Atendimento e Compliance Bancário",           descricao: "Sigilo bancário, LGPD e prevenção à lavagem de dinheiro — obrigatório na Caixa.",         icon: "fa-file-shield"      },
    // ── Sistema Financeiro ────────────────────────────────────────────────────
    { id: 6,  disciplina: "Conhecimentos Bancários",      topico: "Habitação, FGTS e Programas Sociais da Caixa",         descricao: "Minha Casa Minha Vida, SBPE e carta de crédito — o diferencial específico da Caixa.",     icon: "fa-house"            },
];

const MODULOS_CORREIOS = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",       topico: "Leitura e Compreensão de Texto",                           descricao: "Textos informativos e instrucionais: como o IBFC avalia o carteiro em Português.",          icon: "fa-book-open"        },
    { id: 1,  disciplina: "Língua Portuguesa",       topico: "Ortografia e Vocabulário",                                 descricao: "Acentuação, uso do hífen e sinônimos — pontos que mais caem nas provas dos Correios.",     icon: "fa-spell-check"      },
    // ── Matemática ───────────────────────────────────────────────────────────
    { id: 2,  disciplina: "Matemática",              topico: "Operações Básicas",                                        descricao: "Adição, subtração, multiplicação e divisão com aplicação prática em entregas e rotas.",     icon: "fa-calculator"       },
    { id: 3,  disciplina: "Matemática",              topico: "Porcentagem e Proporção",                                  descricao: "Regra de três simples e composta — indispensável para provas dos Correios.",               icon: "fa-percent"          },
    { id: 4,  disciplina: "Matemática",              topico: "Grandezas, Medidas e Geometria Básica",                    descricao: "Volume de caixas, distâncias e conversão de unidades — aplicação logística real.",          icon: "fa-ruler"            },
    // ── Informática ───────────────────────────────────────────────────────────
    { id: 5,  disciplina: "Noções de Informática",   topico: "Windows e Pacote Office (Word e Excel)",                   descricao: "Comandos de teclado, formatação e fórmulas básicas — o que o carteiro precisa saber de TI.", icon: "fa-computer"         },
    { id: 6,  disciplina: "Noções de Informática",   topico: "Internet, E-mail e Segurança da Informação",              descricao: "Phishing, senhas e backup — proteção de dados que o IBFC cobra nos Correios.",              icon: "fa-wifi"             },
];

const MODULOS_TJRJ = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",        topico: "Interpretação de Texto Jurídico",                          descricao: "Acórdãos, despachos e petições — como ler e extrair sentido de textos legais.",            icon: "fa-book-open"        },
    { id: 1,  disciplina: "Língua Portuguesa",        topico: "Redação Oficial — Manual de Redação da Presidência",       descricao: "Ofício, despacho e memorando padrão federal — estrutura que o TJ-RJ cobra literalmente.", icon: "fa-file-pen"         },
    // ── Direito Constitucional ────────────────────────────────────────────────
    { id: 2,  disciplina: "Direito Constitucional",   topico: "Princípios Constitucionais e Direitos Fundamentais",       descricao: "Art. 5º e princípios processuais — a base constitucional cobrada em todo concurso do TJ.",  icon: "fa-scale-balanced"   },
    { id: 3,  disciplina: "Direito Constitucional",   topico: "Poder Judiciário — Organização e Competências",            descricao: "Estrutura dos tribunais, competências e prerrogativas — o TJ cobra isso em profundidade.",  icon: "fa-landmark"         },
    // ── Direito Administrativo ────────────────────────────────────────────────
    { id: 4,  disciplina: "Direito Administrativo",   topico: "Atos Administrativos — Elementos e Atributos",             descricao: "Motivo, objeto, presunção de legitimidade — diferencie anulação de revogação sem errar.",  icon: "fa-file-signature"   },
    { id: 5,  disciplina: "Direito Administrativo",   topico: "Licitações — Lei 14.133/2021",                             descricao: "A nova lei de licitações: modalidades, fases e o que mudou em relação à Lei 8.666.",       icon: "fa-gavel"            },
    // ── Legislação Judiciária ─────────────────────────────────────────────────
    { id: 6,  disciplina: "Organização Judiciária",   topico: "Organização Judiciária do TJ-RJ",                          descricao: "Regimento interno, corregedoria e funcionamento das varas — o específico do TJ-RJ.",       icon: "fa-building-columns" },
];

const MODULOS_ESPCEX = [
    // ── Matemática ───────────────────────────────────────────────────────────
    { id: 0,  disciplina: "Matemática",           topico: "Trigonometria — Razões, Lei dos Senos e Cossenos",           descricao: "O eixo mais cobrado da EsPCEx — trigonometria em triângulos e circunferência.",           icon: "fa-calculator"       },
    { id: 1,  disciplina: "Matemática",           topico: "Geometria Analítica — Retas, Distâncias e Círculos",         descricao: "Equação da reta, ponto médio e circunferência — geometria cobrada em todos os anos.",      icon: "fa-chart-area"       },
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 2,  disciplina: "Língua Portuguesa",    topico: "Interpretação de Texto — Gêneros Literários e Formais",      descricao: "Prosa, poesia e textos de opinião — a EsPCEx cobra variedade de gêneros.",                 icon: "fa-book-open"        },
    { id: 3,  disciplina: "Língua Portuguesa",    topico: "Gramática — Análise Sintática e Concordância",               descricao: "Sujeito, predicado e concordância nominal e verbal — o que mais pesa na prova.",           icon: "fa-language"         },
    // ── História e Geografia ──────────────────────────────────────────────────
    { id: 4,  disciplina: "História",             topico: "História do Brasil — República e Período Contemporâneo",     descricao: "Era Vargas, Ditadura Militar e Redemocratização — o arco histórico que a EsPCEx exige.",   icon: "fa-flag"             },
    { id: 5,  disciplina: "Geografia",            topico: "Geografia Física e Geopolítica Brasileira",                  descricao: "Biomas, bacias hidrográficas e geopolítica do Brasil no cenário mundial.",                 icon: "fa-globe"            },
    // ── Física ───────────────────────────────────────────────────────────────
    { id: 6,  disciplina: "Física",               topico: "Cinemática e Dinâmica — Leis de Newton",                     descricao: "MRU, MRUV e as três leis — a mecânica básica exigida pelo Exército.",                     icon: "fa-atom"             },
];

const MODULOS_EEAR = [
    // ── Matemática ───────────────────────────────────────────────────────────
    { id: 0,  disciplina: "Matemática",           topico: "Funções — 1º e 2º Grau, Análise Gráfica",                   descricao: "Raízes, vértice de parábola e gráfico de funções — base da prova da Aeronáutica.",         icon: "fa-calculator"       },
    { id: 1,  disciplina: "Matemática",           topico: "Progressões Aritméticas e Geométricas",                     descricao: "PA, PG e fórmulas de soma — o que a EEAR cobra em todos os anos de prova.",               icon: "fa-list-ol"          },
    // ── Física ───────────────────────────────────────────────────────────────
    { id: 2,  disciplina: "Física",               topico: "Cinemática — MRU, MRUV e Queda Livre",                      descricao: "Velocidade, aceleração e tempo de voo — o núcleo de Física que a FAB exige.",               icon: "fa-jet-fighter"      },
    { id: 3,  disciplina: "Física",               topico: "Dinâmica — Leis de Newton e Aplicações",                    descricao: "Força resultante, atrito e plano inclinado — como resolver os problemas da EEAR.",          icon: "fa-atom"             },
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 4,  disciplina: "Língua Portuguesa",    topico: "Interpretação Textual — Tipos e Gêneros",                   descricao: "Texto dissertativo, narrativo e argumentativo — como a FAB avalia leitura crítica.",        icon: "fa-book-open"        },
    { id: 5,  disciplina: "Língua Portuguesa",    topico: "Ortografia, Acentuação e Pontuação",                        descricao: "Hífen, crase e vírgula — os detalhes gramaticais que eliminam candidatos na EEAR.",         icon: "fa-spell-check"      },
    // ── Inglês ────────────────────────────────────────────────────────────────
    { id: 6,  disciplina: "Língua Inglesa",       topico: "Inglês Técnico — Leitura e Vocabulário Aeronáutico",        descricao: "Reading comprehension e termos militares em inglês — cobrados pela Aeronáutica.",           icon: "fa-earth-americas"   },
];

const MODULOS_NAVAL = [
    // ── Matemática ───────────────────────────────────────────────────────────
    { id: 0,  disciplina: "Matemática",           topico: "Álgebra — Equações, Sistemas e Inequações",                  descricao: "Equações do 1º e 2º grau e sistemas lineares — o motor da prova do Colégio Naval.",       icon: "fa-calculator"       },
    { id: 1,  disciplina: "Matemática",           topico: "Geometria Plana — Áreas, Perímetros e Teorema de Pitágoras", descricao: "Triângulos, círculos e quadriláteros — a geometria que a Marinha cobra há décadas.",      icon: "fa-draw-polygon"     },
    // ── Ciências da Natureza ──────────────────────────────────────────────────
    { id: 2,  disciplina: "Física",               topico: "Física Básica — Densidade, Pressão e Empuxo",               descricao: "Princípio de Arquimedes e hidrostática — tópico especial e recorrente do Naval.",          icon: "fa-anchor"           },
    { id: 3,  disciplina: "Química",              topico: "Química Básica — Tabela Periódica, Ligações e Reações",     descricao: "Ligações iônicas, covalentes e balanceamento — a Química que a Marinha exige.",            icon: "fa-flask"            },
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 4,  disciplina: "Língua Portuguesa",    topico: "Interpretação de Texto em Português",                       descricao: "Textos formais e literários — como a Marinha avalia compreensão e análise crítica.",       icon: "fa-book-open"        },
    // ── Inglês ────────────────────────────────────────────────────────────────
    { id: 5,  disciplina: "Língua Inglesa",       topico: "Inglês Básico — Vocabulário e Gramática Essencial (Reading)", descricao: "Presente simples, passado e reading comprehension — o nível de inglês do Colégio Naval.", icon: "fa-earth-americas"  },
];

const MODULOS_PEDRO_II = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",    topico: "Leitura e Compreensão Textual",                             descricao: "Textos literários e informativos: como o Pedro II avalia o candidato ao 6º ano.",           icon: "fa-book-open"        },
    { id: 1,  disciplina: "Língua Portuguesa",    topico: "Gramática e Língua em Uso",                                 descricao: "Classes de palavras, pontuação e concordância no nível Ensino Fundamental.",               icon: "fa-language"         },
    { id: 2,  disciplina: "Língua Portuguesa",    topico: "Produção Textual e Redação",                                descricao: "Coesão, parágrafo de introdução e conclusão — o que a banca espera na produção escrita.",  icon: "fa-pen-to-square"    },
    // ── Matemática ───────────────────────────────────────────────────────────
    { id: 3,  disciplina: "Matemática",           topico: "Números e Operações",                                       descricao: "Adição, subtração, multiplicação e divisão com estratégias de cálculo mental.",            icon: "fa-calculator"       },
    { id: 4,  disciplina: "Matemática",           topico: "Frações e Números Decimais",                                descricao: "Equivalência de frações, operações e conversão decimal — o que mais cai para o 6º ano.",   icon: "fa-divide"           },
    { id: 5,  disciplina: "Matemática",           topico: "Geometria e Medidas",                                       descricao: "Área, perímetro, ângulos e conversão de unidades — geometria do Ensino Fundamental.",      icon: "fa-ruler-combined"   },
    { id: 6,  disciplina: "Matemática",           topico: "Resolução de Problemas",                                    descricao: "Estratégias de interpretação e montagem de equações a partir de situações-problema.",      icon: "fa-lightbulb"        },
];

const MODULOS_FAETEC = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",    topico: "Localização de Informações",                                descricao: "Encontrar dados explícitos no texto — a habilidade base do vestibular FAETEC.",            icon: "fa-magnifying-glass" },
    { id: 1,  disciplina: "Língua Portuguesa",    topico: "Inferência e Interpretação de Texto",                      descricao: "O que o texto diz sem dizer — como responder questões de interpretação sem errar.",        icon: "fa-book-open"        },
    { id: 2,  disciplina: "Língua Portuguesa",    topico: "Gêneros Textuais e Finalidade",                            descricao: "Notícia, conto, poema e publicidade — identificar o gênero é o primeiro passo.",           icon: "fa-newspaper"        },
    { id: 3,  disciplina: "Língua Portuguesa",    topico: "Linguagem Figurada e Intertextualidade",                   descricao: "Metáfora, ironia e referências entre textos — o que a FAETEC adora cobrar.",               icon: "fa-masks-theater"    },
    // ── Matemática ───────────────────────────────────────────────────────────
    { id: 4,  disciplina: "Matemática",           topico: "Números Naturais e as Quatro Operações",                   descricao: "Adição, subtração, multiplicação e divisão — a fundação de toda prova de EF.",             icon: "fa-calculator"       },
    { id: 5,  disciplina: "Matemática",           topico: "Frações e Números Racionais",                              descricao: "Simplificação, operações e representação na reta — o que mais cai na FAETEC.",             icon: "fa-divide"           },
    { id: 6,  disciplina: "Matemática",           topico: "Porcentagem e Proporcionalidade",                          descricao: "Regra de três e desconto percentual — aplicações práticas do cotidiano.",                  icon: "fa-percent"          },
    { id: 7,  disciplina: "Matemática",           topico: "Geometria: Perímetro e Área",                              descricao: "Quadrado, retângulo e triângulo — os sólidos que a banca da FAETEC mais exige.",           icon: "fa-draw-polygon"     },
    { id: 8,  disciplina: "Matemática",           topico: "Leitura de Tabelas e Gráficos",                            descricao: "Barras, setores e linhas — como extrair informação de dados visuais em prova.",            icon: "fa-chart-bar"        },
];

const MODULOS_PETROBRAS = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",              topico: "Interpretação e Produção de Textos Técnicos",          descricao: "Relatórios, normas e manuais — como a CESGRANRIO avalia leitura técnica na Petrobras.",   icon: "fa-book-open"        },
    // ── Matemática ───────────────────────────────────────────────────────────
    { id: 1,  disciplina: "Matemática",                     topico: "Análise Quantitativa e Raciocínio Lógico",              descricao: "Tabelas, gráficos e problemas numéricos — o peso de Exatas no concurso da Petrobras.",    icon: "fa-calculator"       },
    // ── Conhecimentos Específicos ─────────────────────────────────────────────
    { id: 2,  disciplina: "Conhecimentos Específicos",      topico: "Processo de Refino e Exploração de Petróleo",           descricao: "Upstream, downstream e o ciclo do petróleo — o que a Petrobras cobra por cargo.",         icon: "fa-oil-well"         },
    { id: 3,  disciplina: "Conhecimentos Específicos",      topico: "Segurança no Trabalho e Normas Regulamentadoras",      descricao: "NR-33, NR-35 e trabalho em espaço confinado — indispensáveis em provas da Petrobras.",   icon: "fa-hard-hat"         },
    // ── Ética e Compliance ────────────────────────────────────────────────────
    { id: 4,  disciplina: "Ética e Compliance",             topico: "Código de Conduta e Anticorrupção Petrobras",           descricao: "Lei Anticorrupção, FCPA e o código interno — compliance que cai na prova.",               icon: "fa-file-shield"      },
];

const MODULOS_FUZILEIROS = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",    topico: "Interpretação e Compreensão de Textos",                     descricao: "Textos militares e informativos — como a Marinha avalia o candidato a Fuzileiro Naval.",   icon: "fa-book-open"        },
    { id: 1,  disciplina: "Língua Portuguesa",    topico: "Ortografia, Gramática e Concordância",                      descricao: "As regras básicas da norma culta exigidas pelo concurso dos Fuzileiros Navais.",           icon: "fa-spell-check"      },
    // ── Matemática ───────────────────────────────────────────────────────────
    { id: 2,  disciplina: "Matemática",           topico: "Operações Básicas e Resolução de Problemas",                descricao: "Cálculo aplicado — o nível cobrado pela Marinha para praças.",                             icon: "fa-calculator"       },
    { id: 3,  disciplina: "Matemática",           topico: "Geometria e Medidas",                                       descricao: "Área, volume e unidades de medida — aplicação prática exigida nos Fuzileiros.",            icon: "fa-ruler-combined"   },
    // ── Conhecimentos Gerais ──────────────────────────────────────────────────
    { id: 4,  disciplina: "Conhecimentos Gerais",  topico: "História do Brasil e Atualidades",                         descricao: "Eventos históricos e fatos relevantes do país — parte da prova de Conhecimentos Gerais.",   icon: "fa-flag"             },
    { id: 5,  disciplina: "Conhecimentos Militares", topico: "Hierarquia, Disciplina e Valores da Marinha",            descricao: "O que é esperado do Fuzileiro Naval — estrutura e valores das Forças Armadas.",            icon: "fa-shield"           },
];

const MODULOS_PCERJ = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",        topico: "Interpretação e Compreensão de Textos",                  descricao: "Como a VUNESP/FGV avalia leitura crítica em provas de Polícia Civil.",                    icon: "fa-book-open"        },
    { id: 1,  disciplina: "Língua Portuguesa",        topico: "Gramática Aplicada — Sintaxe e Concordância",            descricao: "As regras gramaticais que mais eliminam candidatos nas provas da PCERJ.",                  icon: "fa-language"         },
    // ── Direito Penal ─────────────────────────────────────────────────────────
    { id: 2,  disciplina: "Direito Penal",            topico: "Teoria Geral do Crime — Elementos do Tipo Penal",        descricao: "Dolo, culpa, tipicidade — a estrutura do crime cobrada em todo concurso de PC.",          icon: "fa-gavel"            },
    { id: 3,  disciplina: "Direito Penal",            topico: "Crimes contra a Pessoa e o Patrimônio",                  descricao: "Homicídio, lesão corporal, furto e roubo — diferencie as condutas sem errar.",            icon: "fa-handcuffs"        },
    // ── Direito Processual Penal ──────────────────────────────────────────────
    { id: 4,  disciplina: "Direito Processual Penal", topico: "Inquérito Policial e Flagrante",                         descricao: "Instauração, prazo, espécies de flagrante — o que a PC cobra do agente investigativo.",    icon: "fa-fingerprint"      },
    // ── Direito Constitucional ────────────────────────────────────────────────
    { id: 5,  disciplina: "Direito Constitucional",   topico: "Direitos Fundamentais e Segurança Pública — CF/88",      descricao: "Art. 5º e Art. 144 — os artigos que sustentam toda prova de Polícia Civil.",             icon: "fa-scale-balanced"   },
];

const MAPA_MODULOS = {
    // ── PMERJ ─────────────────────────────────────────────────────────────────
    '37a79dcc-3c56-4615-ac27-d04ec5a86d07': MODULOS_PMERJ, // PMERJ (catálogo)
    '7ccb9092-5445-433c-a85d-23892ee7a5f3': MODULOS_PMERJ, // Polícia Militar PMERJ (ingestão)
    '11111111-1111-1111-1111-111111111111': MODULOS_PMERJ, // legado

    // ── INSS ──────────────────────────────────────────────────────────────────
    'd5d8339d-5662-4021-8f96-a712aa60a50a': MODULOS_INSS,

    // ── Polícia Federal ───────────────────────────────────────────────────────
    'dbfb7aad-7808-4dd2-90cf-953c382b6243': MODULOS_PF,

    // ── Polícia Rodoviária Federal ────────────────────────────────────────────
    'ad11f11b-4569-4541-9deb-5b51e99a827e': MODULOS_PRF,

    // ── Banco do Brasil ───────────────────────────────────────────────────────
    '41242a75-1e54-46ea-a380-d50f2fd4425e': MODULOS_BB,

    // ── Caixa Econômica Federal ───────────────────────────────────────────────
    '467b071c-6faa-4d48-bd80-71173e3d623f': MODULOS_CAIXA,

    // ── Correios ──────────────────────────────────────────────────────────────
    'eb1e50ac-463b-4966-b13b-07958651a002': MODULOS_CORREIOS,

    // ── TJ-RJ ─────────────────────────────────────────────────────────────────
    'd23dc002-d720-4c9d-8903-a85e4124bed8': MODULOS_TJRJ,

    // ── Petrobras ─────────────────────────────────────────────────────────────
    '489086a5-3172-449b-be54-fc2e9fe0ed54': MODULOS_PETROBRAS,

    // ── EsPCEx (Exército) ─────────────────────────────────────────────────────
    '197be82e-0283-4373-95e7-5c3054de730e': MODULOS_ESPCEX,

    // ── EEAR (Aeronáutica) ────────────────────────────────────────────────────
    'e68079a2-e467-4cfb-9859-80e97053f2d1': MODULOS_EEAR,

    // ── Colégio Naval (Marinha) ───────────────────────────────────────────────
    'b8c9dd22-e037-488c-b39c-ad3b4ebf89c1': MODULOS_NAVAL,

    // ── Fuzileiros Navais ─────────────────────────────────────────────────────
    '3fda4434-c074-41c0-9837-935dff2ef84b': MODULOS_FUZILEIROS,

    // ── Colégio Pedro II ──────────────────────────────────────────────────────
    '9d1c4dae-02d3-401b-8dca-4a3bb7d92de5': MODULOS_PEDRO_II,
    '9167b605-0081-4f93-adc7-ea406aa5a11a': MODULOS_PEDRO_II, // legado

    // ── FAETEC ────────────────────────────────────────────────────────────────
    'b3963977-9125-4a09-aa07-8abeb32f0a87': MODULOS_FAETEC,
    '42baa8fb-2130-4864-966b-923c0bf3f9a0': MODULOS_FAETEC, // legado

    // ── Polícia Civil RJ ──────────────────────────────────────────────────────
    '0aec31cd-cf9d-4a46-9207-8ce226c78ed5': MODULOS_PCERJ,

    // Fallback para concursos em implantação
    'DEFAULT': [
        { id: 0, disciplina: "Base Elementar",           topico: "Comando Geral",    descricao: "A disciplina foundational para aprovação neste certame.", icon: "fa-book-open" },
        { id: 1, disciplina: "Conhecimentos Específicos", topico: "Tática Avançada", descricao: "Tudo que você precisa dominar para gabaritar a discursiva.", icon: "fa-brain"    }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Configura UI User Tag
    const nome = sessionStorage.getItem('recruta_nome') || 'Candidato';
    const orgao = sessionStorage.getItem('recruta_orgao') || 'PMERJ';

    const uiNome = document.getElementById('greetingUser');
    if(uiNome) uiNome.innerText = `Bem-vindo(a), ${nome.split(' ')[0]}!`;

    // Atualiza subtitulo
    const mapSub = document.getElementById('map-subtitle');
    if(mapSub) mapSub.innerText = `Siga os passos sequenciais abaixo para cicatrizar suas falhas na base do ${orgao.toUpperCase()} antes da prova.`;

    renderizarMapa();
});

function renderizarMapa() {
    const container = document.getElementById('timeline-container');
    if(!container) return;

    const concurso_id = sessionStorage.getItem('recruta_concurso_id') || '11111111-1111-1111-1111-111111111111';
    let modulos = MAPA_MODULOS[concurso_id];
    if(!modulos) modulos = MAPA_MODULOS['DEFAULT'];

    let completedModules = JSON.parse(localStorage.getItem('mapa_conquistas_' + concurso_id) || '[]');

    let html = '';
    const progressPerc = Math.min(100, Math.round((completedModules.length / modulos.length) * 100));

    html += `
        <div style="background: rgba(30, 41, 59, 0.8); padding: 15px; border-radius: 10px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="display:flex; justify-content:space-between; margin-bottom: 8px;">
                <span style="color:#94A3B8; font-size:0.85rem; font-weight:bold; letter-spacing:1px; text-transform:uppercase;">Domínio Global do Edital</span>
                <span style="color:#10B981; font-weight:bold;">${progressPerc}%</span>
            </div>
            <div style="width: 100%; height: 8px; background: #0F172A; border-radius: 4px; overflow: hidden;">
                <div style="height: 100%; width: ${progressPerc}%; background: linear-gradient(90deg, #10B981, #34D399); border-radius: 4px; transition: width 1s ease;"></div>
            </div>
        </div>
    `;

    modulos.forEach((mod, index) => {
        const isCompleted = completedModules.includes(index);
        let statusClass = isCompleted ? 'completed' : 'locked';

        html += `
            <div class="milestone ${statusClass}" onclick="abrirModulo(${index}, '${mod.disciplina}', '${mod.topico}')">
                <div class="milestone-marker">
                    <i class="fa-solid ${isCompleted ? 'fa-check' : 'fa-lock'}"></i>
                </div>
                <div class="milestone-card" style="cursor:pointer; ${isCompleted ? 'border-color: rgba(16, 185, 129, 0.5);' : 'border-color: rgba(255,255,255,0.1);'}">
                    <div class="milestone-step">MÓDULO 0${index + 1} - ${mod.disciplina.toUpperCase()}</div>
                    <h2 class="milestone-title" style="${isCompleted ? 'color:#10B981;' : ''}">${mod.topico}</h2>
                    <p class="milestone-desc">${mod.descricao}</p>
                    ${isCompleted
                        ? `<div class="action-button" style="border-color:#10B981; color:#10B981; background:rgba(16, 185, 129, 0.1);" onclick="event.stopPropagation(); abrirModulo(${index}, '${mod.disciplina}', '${mod.topico}')"><i class="fa-solid fa-check-double"></i> MÓDULO VENCIDO - REVISAR TEORIA</div>
                           <div class="action-button" style="border-color:#eab308; color:#eab308; background:rgba(234, 179, 8, 0.1); margin-top: 8px;" onclick="event.stopPropagation(); treinarMassa('${mod.disciplina}', '${mod.topico}')"><i class="fa-solid fa-dumbbell"></i> TREINAR (+100 QUESTÕES)</div>`
                        : `<div class="action-button" style="border-color:#4FA5FF; color:#4FA5FF; background:rgba(79, 165, 255, 0.1);"><i class="fa-solid fa-unlock-keyhole"></i> INICIAR E DESTRAVAR</div>`}
                </div>
            </div>
        `;
    });

    if(completedModules.length >= modulos.length) {
        html += `
            <div class="milestone completed">
                <div class="milestone-marker" style="border-color:#D4AF37; background:rgba(212, 175, 55, 0.2);"><i class="fa-solid fa-crown" style="color:#D4AF37;"></i></div>
                <div class="milestone-card" style="border-color:#D4AF37; text-align:center;">
                    <h2 class="milestone-title" style="color:#D4AF37;">EDITAL DESTRUÍDO</h2>
                    <p class="milestone-desc">Você fechou o percurso base de sobrevivência. Agora o sistema recomenda simulados gerais.</p>
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

function abrirModulo(index, disciplina, topico) {
    sessionStorage.setItem('current_modulo_index', index);
    sessionStorage.setItem('current_modulo_disciplina', disciplina);
    sessionStorage.setItem('current_modulo_topico', topico);
    window.location.href = 'teoria_360.html?v=' + new Date().getTime();
}

function treinarMassa(disciplina, topico) {
    sessionStorage.setItem('filtro_massa_disciplina', disciplina);
    sessionStorage.setItem('filtro_massa_topico', topico);
    window.location.href = 'treinamento_360.html?v=' + new Date().getTime();
}
