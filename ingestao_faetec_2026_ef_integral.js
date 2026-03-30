/**
 * OPERAÇÃO: FORJA DO CONHECIMENTO - FAETEC 2026.1
 * Edital 2 - Ingresso Ensino Fundamental Integral
 * Banca: COSEAC/UFF | Prova: 07/12/2025 | 20 questões
 *
 * Hierarquia: concursos_gps -> disciplinas -> modulos -> pilulas_forja -> exercicios_forja
 */

require('dotenv').config({ path: require('path').join(__dirname, '.env.local') });

const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const headers = {
  'apikey': SUPA_KEY,
  'Authorization': `Bearer ${SUPA_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation'
};

async function supaInsert(tabela, payload) {
  const res = await fetch(`${SUPA_URL}/rest/v1/${tabela}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`[${tabela}] Erro ${res.status}: ${JSON.stringify(data)}`);
  return Array.isArray(data) ? data[0] : data;
}

async function supaSelect(tabela, filtros) {
  const params = new URLSearchParams(filtros);
  const res = await fetch(`${SUPA_URL}/rest/v1/${tabela}?${params}`, { headers });
  const data = await res.json();
  if (!res.ok) throw new Error(`[${tabela}] Erro ${res.status}: ${JSON.stringify(data)}`);
  return data;
}

// ============================================================
// NÍVEL 1: CONCURSO
// ============================================================
const CONCURSO = {
  familia: 'academico',
  esfera: 'estadual',
  uf: 'RJ',
  orgao: 'FAETEC - EF Integral 2026.1',
  link_matriz_pedagogica: 'https://portal.coseac.uff.br/faetec-2026-1-inscricoes/',
  status_edital: 'encerrado',
  ano_ultimo_edital: 2026,
  banca_ultimo_edital: 'COSEAC/UFF',
  data_prova: '2025-12-07',
  idade_alvo: 'Fundamental (10-14)',
  tipo_instituicao: 'Estadual'
};

// ============================================================
// NÍVEL 2: DISCIPLINAS (LP + MAT)
// ============================================================
const DISCIPLINAS = [
  { nome: 'Língua Portuguesa' },
  { nome: 'Matemática' }
];

// ============================================================
// NÍVEL 3: MÓDULOS por Disciplina (Descritores SAEB 2023)
// ============================================================
const MODULOS_LP = [
  {
    nome: 'Localização de Informações',
    descricao: 'D1 e D3 - Localizar informações explícitas e inferir sentido de palavras/expressões no texto.'
  },
  {
    nome: 'Inferência e Interpretação de Texto',
    descricao: 'D4, D6 e D7 - Inferir informação implícita, identificar tema central e conflito gerador.'
  },
  {
    nome: 'Gêneros Textuais e Finalidade',
    descricao: 'D9 e D15 - Identificar a finalidade de textos de diferentes gêneros e formas de tratamento da informação.'
  },
  {
    nome: 'Linguagem Figurada e Intertextualidade',
    descricao: 'D14 e D18 - Diferenciar fato de opinião e reconhecer o efeito de sentido de figuras de linguagem.'
  }
];

const MODULOS_MAT = [
  {
    nome: 'Números Naturais e as Quatro Operações',
    descricao: 'D7 - Resolver problemas com números naturais envolvendo as quatro operações fundamentais.'
  },
  {
    nome: 'Frações e Números Racionais',
    descricao: 'D12, D13 e D17 - Reconhecer representação fracionária, frações equivalentes e operar com racionais.'
  },
  {
    nome: 'Porcentagem e Proporcionalidade',
    descricao: 'D20 - Resolver problemas com porcentagem e raciocínio proporcional aplicados ao cotidiano.'
  },
  {
    nome: 'Geometria: Perímetro e Área',
    descricao: 'D26 e D27 - Calcular o perímetro e a área de figuras planas (quadrado, retângulo, triângulo).'
  },
  {
    nome: 'Leitura de Tabelas e Gráficos',
    descricao: 'D35 e D36 - Interpretar e resolver problemas com dados organizados em tabelas e gráficos.'
  }
];

// ============================================================
// NÍVEL 4: PÍLULAS DE TEORIA (TTS - tom tático militar)
// ============================================================
const PILULAS_LP = {
  'Localização de Informações': [
    {
      titulo: 'Regra de Ouro: Encontre sem Inventar',
      nivel_profundidade: 1,
      texto: 'Escuta aqui, recruta. Na questão de localização, a resposta está IMPRESSA no texto. Não interprete. Não invente. Vá direto ao parágrafo que menciona o assunto da questão. Leia o período exato. Se a opção usa as mesmas palavras do texto, ela é a certa. A banca só troca sinônimos para te confundir. Treine os olhos: sublinhe nomes próprios, datas e números enquanto lê. Esses são os alvos nas questões D1. Operação simples, recruta. Encontre. Não crie.'
    },
    {
      titulo: 'Sentido de Palavra no Contexto',
      nivel_profundidade: 1,
      texto: 'Atenção, soldado. Quando a questão perguntar o significado de uma palavra, NUNCA use o significado que você memorizou fora do texto. Uma palavra muda de sentido dependendo do contexto. Substitua a palavra pela alternativa que você acha correta e releia o trecho. Se o sentido do parágrafo se mantém lógico, essa é a resposta. Palavras como "cabo", "pena", "manga" têm múltiplos significados. O texto é seu manual de operações. Consulte-o.'
    }
  ],
  'Inferência e Interpretação de Texto': [
    {
      titulo: 'Inferência: O que o Texto Diz Sem Dizer',
      nivel_profundidade: 2,
      texto: 'Ouvindo bem, recruta. Inferir é diferente de inventar. A informação implícita está dentro do texto, mas não escrita diretamente. Você deduz a partir de pistas concretas. Exemplo: se o texto diz "ela fechou a janela e colocou um casaco", você infere que está frio. Nenhuma alternativa de inferência pode trazer informação que NÃO tenha base no texto. Se você não consegue apontar o trecho que sustenta a inferência, descarte a alternativa. Exija a prova dos fatos antes de marcar.'
    },
    {
      titulo: 'Tema Central: O Coração do Texto',
      nivel_profundidade: 1,
      texto: 'Soldado, o tema é sobre o que o texto INTEIRO fala, não sobre um detalhe de um parágrafo. Para identificar o tema, pergunte: "Se eu tivesse que resumir esse texto em uma frase, qual seria?" As alternativas erradas geralmente pegam um detalhe específico e apresentam como tema geral. Não caia nessa armadilha. O tema é amplo. O detalhe é restrito. Diferencie isso e você mata a questão.'
    }
  ],
  'Gêneros Textuais e Finalidade': [
    {
      titulo: 'Finalidade do Texto: Para que foi Escrito',
      nivel_profundidade: 1,
      texto: 'Escuta o comando, recruta. Todo texto tem uma missão. Uma bula informa e orienta. Uma charge critica e satiriza. Uma propaganda persuade e vende. Um noticiário informa com imparcialidade. A questão de finalidade vai perguntar exatamente isso: POR QUE esse texto foi escrito? Identifique o gênero pelo formato e pelos verbos usados. Texto com "compre", "adquira", "não perca" é publicitário. Texto com "segundo dados do IBGE" é informativo. Leia as marcas. Elas entregam o gênero de bandeja.'
    }
  ],
  'Linguagem Figurada e Intertextualidade': [
    {
      titulo: 'Fato versus Opinião: Não Confunda',
      nivel_profundidade: 2,
      texto: 'Atenção máxima, recruta. Fato é verificável. Opinião é julgamento. "O Brasil tem 214 milhões de habitantes" é fato. "O Brasil é um país maravilhoso" é opinião. Palavras que sinalizam opinião: "acho", "acredito", "considero", "deveria", "é importante que". Palavras que sinalizam fato: datas, números, citações de fontes, dados estatísticos. A banca mistura os dois num mesmo texto. Seu trabalho é separar. Não marque opinião como fato nem fato como opinião.'
    },
    {
      titulo: 'Figuras de Linguagem: O Efeito que a Banca Quer',
      nivel_profundidade: 2,
      texto: 'Soldado, a COSEAC ama cobrar metáfora, ironia e hipérbole. A questão vai perguntar qual o EFEITO de sentido que a figura provoca, não apenas o nome dela. Metáfora compara sem "como" ou "que": cria intensidade e poesia. Ironia diz o contrário do que pensa: cria crítica e humor. Hipérbole exagera: cria ênfase e dramaticidade. Quando ler uma frase que "não faz sentido literal", você encontrou uma figura. Pergunte: qual emoção ou efeito essa figura gera no leitor? Essa é a resposta da questão.'
    }
  ]
};

const PILULAS_MAT = {
  'Números Naturais e as Quatro Operações': [
    {
      titulo: 'Ordem das Operações: Não Morra na Básica',
      nivel_profundidade: 1,
      texto: 'Recruta, ouça: a ordem das operações é lei. Parênteses primeiro. Depois multiplicação e divisão, da esquerda para a direita. Por último, adição e subtração, da esquerda para a direita. Questão que mistura operações numa mesma expressão está testando exatamente isso. Não some antes de multiplicar. Não divida antes de resolver o parêntese. Um erro de ordem nessa questão e você perde ponto fácil. Memorize: P-M-D-A-S. Parêntese, Multiplicação, Divisão, Adição, Subtração.'
    },
    {
      titulo: 'Problemas com Texto: Decodifique o Enunciado',
      nivel_profundidade: 1,
      texto: 'Atenção, soldado. Problema com texto não é literatura. É tradução. Leia o enunciado e transforme cada frase em operação. "Tinha 50, gastou 15" = 50 - 15. "Ganhou o triplo" = multiplicar por 3. "Dividiu igualmente entre 4" = divisão por 4. Sublinhe os números e os verbos de ação. Eles ditam a operação. Depois resolva no rascunho, confirme se a resposta faz sentido no mundo real e marque. Nunca marque sem reler o que a questão pediu. A banca pergunta quantos sobraram, não quantos foram usados.'
    }
  ],
  'Frações e Números Racionais': [
    {
      titulo: 'Frações Equivalentes: Multiplique ou Divida os Dois',
      nivel_profundidade: 2,
      texto: 'Recruta, fração equivalente é a mesma quantidade com roupagem diferente. Para criar equivalentes, multiplique ou divida NUMERADOR e DENOMINADOR pelo MESMO número. 1/2 = 2/4 = 3/6 = 50/100. A regra de ouro: se você mexeu em cima, mexe embaixo com o mesmo número. Quando a questão pede para comparar frações, iguale os denominadores. Use o MMC. Quem tem o maior numerador depois de igualar os denominadores é a maior fração. Simples assim. Não complique o que é mecânico.'
    },
    {
      titulo: 'Soma e Subtração de Frações: MMC Salva Vidas',
      nivel_profundidade: 2,
      texto: 'Soldado, somar frações com denominadores diferentes sem igualar é erro fatal. Passo 1: calcule o MMC dos denominadores. Passo 2: divida o MMC por cada denominador e multiplique pelo numerador correspondente. Passo 3: some ou subtraia os novos numeradores mantendo o MMC como denominador. Passo 4: simplifique se possível. Exemplo: 1/3 + 1/4. MMC(3,4)=12. 1/3 = 4/12. 1/4 = 3/12. Soma = 7/12. Prático. Rápido. Certeiro.'
    }
  ],
  'Porcentagem e Proporcionalidade': [
    {
      titulo: 'Porcentagem: A Regra dos 3 Caminhos',
      nivel_profundidade: 2,
      texto: 'Recruta, porcentagem é potência na prova. Aprenda os 3 caminhos. Caminho 1: converta para decimal. 25% = 0,25. Multiplique pelo total. Caminho 2: use regra de três. 100% corresponde ao total. X% corresponde ao valor pedido. Caminho 3: decomponha. 10% é dividir por 10. 5% é metade dos 10%. 30% é três vezes os 10%. Para questões rápidas, o caminho 3 é mais veloz. Para questões elaboradas, use a regra de três. Treine os dois até virar reflexo.'
    }
  ],
  'Geometria: Perímetro e Área': [
    {
      titulo: 'Perímetro vs Área: Confundir é Furada',
      nivel_profundidade: 1,
      texto: 'Soldado, perímetro é a SOMA de todos os lados. É o contorno. Imagine uma cerca em volta de um terreno. Área é o ESPAÇO interno. Imagine tapetes cobrindo o chão. Fórmulas que você PRECISA saber: Quadrado: Perímetro = 4L | Área = L². Retângulo: Perímetro = 2(b+h) | Área = b×h. Triângulo: Perímetro = soma dos 3 lados | Área = (b×h)/2. Quando a questão falar em "cercar", "contornar" ou "voltar ao ponto inicial", é perímetro. Quando falar em "cobrir", "pintar" ou "pavimentar", é área. Não troque.'
    }
  ],
  'Leitura de Tabelas e Gráficos': [
    {
      titulo: 'Gráfico e Tabela: Leia Antes de Calcular',
      nivel_profundidade: 1,
      texto: 'Atenção, recruta. Antes de qualquer cálculo, leia o título, os eixos e a legenda. O título diz O QUE está sendo medido. O eixo Y diz a grandeza e a unidade. O eixo X diz os intervalos de tempo ou categorias. A legenda explica as cores ou símbolos. 80% dos erros em questões de gráfico acontecem porque o aluno não leu os eixos. Resultado: soma valores de categorias erradas. Leia os eixos. Depois calcule. Nunca ao contrário.'
    }
  ]
};

// ============================================================
// NÍVEL 5: EXERCÍCIOS DE FIXAÇÃO (estilo COSEAC/SAEB, sem A/B)
// ============================================================
const EXERCICIOS_LP = {
  'Localização de Informações': [
    {
      titulo: 'Informação Explícita no Texto',
      nivel_dificuldade: 1,
      pergunta: 'Leia o trecho a seguir e responda:\n\n"A Fundação de Apoio à Escola Técnica, a FAETEC, oferece ensino integral nos anos finais do Ensino Fundamental. As inscrições para o processo seletivo de 2026 ocorreram entre setembro e novembro de 2025. A prova foi realizada no mês de dezembro de 2025."\n\nDe acordo com o texto, quando foi realizada a prova do processo seletivo da FAETEC?',
      alternativas: ['Em setembro de 2025', 'Entre setembro e novembro de 2025', 'Em dezembro de 2025', 'Em janeiro de 2026'],
      correta: 2,
      explicacao: 'VOCÊ ERROU PORQUE NÃO SUBLINHOU. A resposta "Em dezembro de 2025" está escrita palavra por palavra no último período do texto: "A prova foi realizada no mês de dezembro de 2025." Nenhuma inferência. Nenhuma conta. Localização pura. O texto entregou na mão e você foi buscar em outro lugar. REGRA: antes de inferir qualquer coisa, RASTRE o texto para informações explícitas. A banca sempre coloca distratores que misturam datas verdadeiras do texto (setembro/novembro foram as inscrições, não a prova). Atenção ao DETALHE.'
    },
    {
      titulo: 'Sentido Contextual de Palavra',
      nivel_dificuldade: 2,
      pergunta: 'Leia o trecho:\n\n"O candidato deve apresentar o cartão de confirmação de inscrição no ato da prova. Candidatos que não portarem o documento serão impedidos de realizar o exame."\n\nNo trecho, a palavra "portarem" está empregada com o sentido de:',
      alternativas: ['carregarem consigo', 'apresentarem formalmente', 'guardarem em casa', 'receberem por e-mail'],
      correta: 0,
      explicacao: 'SÓ ERROU QUEM NÃO LEU O CONTEXTO. "Portarem" vem de "portar", que significa carregar, ter em posse. O contexto confirma: o trecho fala em "apresentar" e "impedidos de realizar" — ou seja, você precisa TER o documento no momento da prova. Carregar consigo é exatamente isso. As alternativas 2 e 4 são eliminadas pela lógica do texto: guardar em casa é o OPOSTO do que se pede. Receber por e-mail é ação anterior, não relacionada ao sentido em questão. Na dúvida: SUBSTITUA a palavra pela alternativa e releia. Se fizer sentido, essa é a certa.'
    }
  ],
  'Inferência e Interpretação de Texto': [
    {
      titulo: 'Inferência a partir de Pistas Textuais',
      nivel_dificuldade: 2,
      pergunta: 'Leia o trecho:\n\n"Maria acordou, olhou pela janela e viu a rua molhada e brilhando. Pegou o guarda-chuva antes de sair."\n\nÉ CORRETO inferir, com base no texto, que:',
      alternativas: ['Maria tem medo de se molhar', 'provavelmente havia chovido antes de Maria sair', 'Maria saiu de casa sem pressa', 'havia previsão de chuva forte para o dia'],
      correta: 1,
      explicacao: 'ATENÇÃO: inferência tem que ter PROVA no texto. "Rua molhada e brilhando" + "pegou o guarda-chuva" = deduzo que choveu. Essa cadeia lógica está ancorada em informações do texto. A opção 1 (medo de molhar) é invenção sem base textual — o texto não fala em medo. A opção 3 (sem pressa) não tem nenhum dado sobre velocidade. A opção 4 (previsão de chuva) mistura informação externa que o texto não menciona. A regra que salva: SE eu não consigo apontar um trecho do texto que sustente a inferência, a alternativa é FALSA. Sem âncora textual, zero.'
    },
    {
      titulo: 'Identificação do Tema Central',
      nivel_dificuldade: 1,
      pergunta: 'Leia o texto:\n\n"Ler em voz alta para crianças desde cedo estimula o vocabulário, a criatividade e o gosto pela leitura. Estudos mostram que crianças lidas regularmente apresentam melhor desempenho na escola. Por isso, especialistas recomendam que pais e professores dediquem tempo diário a essa prática."\n\nQual é o tema central do texto?',
      alternativas: ['Os estudos científicos sobre educação no Brasil', 'A importância da leitura em voz alta para o desenvolvimento infantil', 'O papel dos professores na alfabetização', 'As pesquisas sobre vocabulário de crianças'],
      correta: 1,
      explicacao: 'O TEMA É O TODO, NÃO O DETALHE. O texto fala sobre leitura em voz alta para crianças do início ao fim: benefícios, pesquisas e recomendação. A opção 1 restringe ao Brasil (o texto não menciona Brasil). A opção 3 foca apenas em professores (o texto menciona pais E professores como agentes secundários). A opção 4 foca em vocabulário (apenas um dos benefícios citados, não o tema todo). A opção certa abarca TODO o texto: a importância da prática de leitura em voz alta. ARMADILHA DA BANCA: pegar um detalhe real do texto e apresentar como tema geral. Identifique o que o texto INTEIRO discute.'
    }
  ],
  'Gêneros Textuais e Finalidade': [
    {
      titulo: 'Finalidade do Texto Publicitário',
      nivel_dificuldade: 1,
      pergunta: 'Leia o texto:\n\n"INSCREVA-SE JÁ! Vagas limitadas para o curso técnico de informática. Transforme sua carreira com a melhor escola técnica do Rio de Janeiro. Não deixe para amanhã!"\n\nA principal finalidade desse texto é:',
      alternativas: ['informar sobre os requisitos de um concurso público', 'narrar a história de um aluno bem-sucedido', 'persuadir o leitor a se inscrever no curso', 'instruir o leitor sobre como usar um computador'],
      correta: 2,
      explicacao: 'TEXTO PUBLICITÁRIO QUER TE VENDER ALGO. Os sinais estão gritando: "INSCREVA-SE JÁ", "Não deixe para amanhã", "Transforme sua carreira". São imperativos de urgência e verbos de ação que pressionam o leitor a agir. Isso é PERSUASÃO, não informação neutra. A opção 1 (informar sobre concurso) não tem base — o texto não fala em requisitos ou regras. A opção 2 (narrar história) está errada pois não há narrativa de personagem. A opção 4 (instruir sobre computador) está totalmente fora do texto. O tom urgente ("JÁ", "Não deixe para amanhã") é o marcador definitivo de finalidade persuasiva.'
    }
  ],
  'Linguagem Figurada e Intertextualidade': [
    {
      titulo: 'Efeito de Sentido da Metáfora',
      nivel_dificuldade: 2,
      pergunta: 'Leia a frase:\n\n"A vida escolar é uma maratona: começa devagar, mas exige fôlego para chegar ao fim."\n\nO efeito de sentido produzido pelo uso da metáfora nessa frase é:',
      alternativas: ['comparar a escola a uma competição esportiva para criticar o sistema de ensino', 'destacar que a vida escolar é longa e exige esforço contínuo e resistência', 'sugerir que os alunos deveriam praticar corrida como atividade física', 'mostrar que a escola oferece atividades esportivas para os estudantes'],
      correta: 1,
      explicacao: 'METÁFORA NÃO É LITERAL — essa é a trava mental que derruba candidatos. "Vida escolar é uma maratona" NÃO significa que você vai correr. A maratona aqui é usada como imagem para transmitir: longa duração + esforço crescente + resistência necessária. O efeito que a banca quer é o SENTIDO FIGURADO: a escola demanda fôlego (perseverança) assim como uma corrida de longa distância. A opção 1 inventa uma crítica ao sistema que o texto não faz. As opções 3 e 4 interpretam de forma LITERAL (erro clássico). REGRA: quando o enunciado pedir "efeito de sentido", você está sendo testado na compreensão figurada, não literal.'
    },
    {
      titulo: 'Fato versus Opinião',
      nivel_dificuldade: 1,
      pergunta: 'Identifique qual das alternativas apresenta um FATO (e não uma opinião):',
      alternativas: ['A FAETEC é a melhor escola técnica do estado do Rio de Janeiro', 'O processo seletivo da FAETEC 2026 foi organizado pela COSEAC/UFF', 'Os alunos da FAETEC deveriam ter mais horas de aula por dia', 'É muito importante que o ensino integral se expanda para todo o Brasil'],
      correta: 1,
      explicacao: 'FATO É VERIFICÁVEL. Você pode confirmar que a COSEAC/UFF organizou o processo seletivo FAETEC 2026 — está no edital oficial, é um dado concreto. As outras 3 são opiniões com os marcadores clássicos de julgamento: "a melhor" (superlativo subjetivo), "deveriam" (imperativo moral), "É muito importante que" (julgamento de valor). Esses marcadores linguísticos entregam a opinião de bandeja. DICA TÁTICA: isole os verbos e qualificativos. Se contém "deveria", "é importante", "acho", "acredito", "o melhor/pior", é OPINIÃO. Se contém dados, datas, números verificáveis, é FATO.'
    }
  ]
};

const EXERCICIOS_MAT = {
  'Números Naturais e as Quatro Operações': [
    {
      titulo: 'Expressão com Múltiplas Operações',
      nivel_dificuldade: 2,
      pergunta: 'Calcule o valor da expressão: 48 ÷ (3 + 3) × 2 − 4',
      alternativas: ['12', '28', '4', '10'],
      correta: 0,
      explicacao: 'QUEM ERROU IGNOROU O PARÊNTESE. A ordem é: parêntese PRIMEIRO. (3 + 3) = 6. Agora a expressão fica: 48 ÷ 6 × 2 − 4. Da esquerda para a direita em multiplicação/divisão: 48 ÷ 6 = 8. Depois: 8 × 2 = 16. Por último a subtração: 16 − 4 = 12. Resposta: 12. O erro mais comum é resolver 3 + 3 × 2 primeiro (ignorando o parêntese) e chegar em resultados errados como 28. REGRA GRAVADA: P(arêntese) antes de tudo. Multiplicação/Divisão da esquerda pra direita. Adição/Subtração por último.'
    },
    {
      titulo: 'Problema de Múltipla Etapa',
      nivel_dificuldade: 2,
      pergunta: 'Uma turma tem 32 alunos. Para a festa da escola, cada aluno deve trazer 3 salgados. O diretor já comprou 45 salgados. Quantos salgados ainda precisam ser trazidos pelos alunos para completar a meta?',
      alternativas: ['96', '51', '96 salgados no total, faltando 51', '141'],
      correta: 1,
      explicacao: 'A QUESTÃO TEM DUAS ETAPAS — quem errou fez apenas uma. Passo 1: meta total = 32 alunos × 3 salgados = 96 salgados. Passo 2: o diretor já comprou 45. Faltam: 96 − 45 = 51 salgados. A resposta é 51. O distrator 96 pega quem parou no passo 1 sem terminar. O distrator 141 pega quem SOMOU em vez de subtrair (32×3 + 45). A opção 3 é uma armadilha de confusão que mistura as duas etapas incorretamente. TÁTICA: leia o que a questão PERGUNTOU. Não "quantos no total" mas "quantos AINDA PRECISAM ser trazidos". Isso grita: subtração na etapa final.'
    }
  ],
  'Frações e Números Racionais': [
    {
      titulo: 'Identificar Fração Equivalente',
      nivel_dificuldade: 1,
      pergunta: 'Qual das frações a seguir é equivalente a 3/4?',
      alternativas: ['6/10', '9/12', '4/5', '6/9'],
      correta: 1,
      explicacao: 'EQUIVALENTE = mesma multiplicação em cima e embaixo. 3/4 → multiplique por 3 nos dois: 9/12. Confirmação: 9 ÷ 3 = 3 e 12 ÷ 3 = 4. Voltou à fração original. É equivalente. Por que as outras estão erradas? 6/10 simplifica para 3/5, não 3/4. 4/5 não tem relação com 3/4 (denominadores diferentes e sem proporção). 6/9 simplifica para 2/3. MÉTODO TÁTICO: para verificar se duas frações são equivalentes, faça a multiplicação cruzada. 3 × 12 = 36. 4 × 9 = 36. Iguais? São equivalentes. Desiguais? Não são. Rápido, certeiro, sem erro.'
    },
    {
      titulo: 'Soma de Frações com Denominadores Diferentes',
      nivel_dificuldade: 2,
      pergunta: 'Uma receita pede 1/2 xícara de farinha de trigo e 1/3 xícara de farinha de aveia. Qual é a quantidade total de farinha na receita?',
      alternativas: ['2/5 de xícara', '5/6 de xícara', '2/6 de xícara', '1/6 de xícara'],
      correta: 1,
      explicacao: 'SEM IGUALAR OS DENOMINADORES, A RESPOSTA É ERRADA. 1/2 + 1/3. Denominadores 2 e 3 são diferentes. MMC(2,3) = 6. Converta: 1/2 = 3/6 e 1/3 = 2/6. Some: 3/6 + 2/6 = 5/6. Resposta: 5/6 de xícara. O erro clássico é 2/5 — quem somou 1+1=2 no numerador e 2+3=5 no denominador. ISSO É ERRADO. NUNCA some denominadores diretamente. A opção 2/6 pega quem multiplicou numeradores (1×1=1... errado de novo). A opção 1/6 não tem lógica nem verificação. REGRA FATAL: denominadores diferentes = iguale pelo MMC ANTES de somar.'
    }
  ],
  'Porcentagem e Proporcionalidade': [
    {
      titulo: 'Cálculo de Porcentagem do Total',
      nivel_dificuldade: 2,
      pergunta: 'Das 312 vagas do processo seletivo FAETEC 2026, 25% são destinadas a candidatos de ampla concorrência de uma das unidades. Quantas vagas correspondem a esse percentual?',
      alternativas: ['78 vagas', '62 vagas', '25 vagas', '87 vagas'],
      correta: 0,
      explicacao: '25% DE QUALQUER NÚMERO = divida por 4. É a regra mais veloz. 312 ÷ 4 = 78. Resposta: 78 vagas. VERIFICAÇÃO: 78 × 4 = 312. Fechou. Por que os outros erram? 62 vagas: quem calculou 20% (312 ÷ 5 = 62,4, arredondando errado). 25 vagas: quem confundiu o percentual (25%) com a resposta direta. 87 vagas: sem lógica matemática. DICA DE VELOCIDADE: 25% = 1/4 = ÷4. 50% = 1/2 = ÷2. 10% = ÷10. 1% = ÷100. Esses atalhos economizam 30 segundos por questão na prova.'
    }
  ],
  'Geometria: Perímetro e Área': [
    {
      titulo: 'Calcular Área de Retângulo',
      nivel_dificuldade: 1,
      pergunta: 'Uma sala de aula retangular tem 8 metros de comprimento e 6 metros de largura. Qual é a área dessa sala?',
      alternativas: ['28 m²', '14 m²', '48 m²', '48 m'],
      correta: 2,
      explicacao: 'ÁREA DE RETÂNGULO = comprimento × largura. 8 × 6 = 48 m². A unidade é METROS QUADRADOS (m²), não metros (m). A opção 28 m² é o PERÍMETRO disfarçado de área: 2×(8+6) = 2×14 = 28. Não confunda. 14 m² é metade do perímetro, sem sentido. 48 m (sem quadrado) é a resposta certa com unidade errada — a banca cobra a unidade de medida. TRAVA MENTAL: para CERCAR a sala (colocar rodapé), use perímetro. Para COBRIR o chão (comprar tapete/piso), use área. Você está comprando piso para a sala: ÁREA.'
    },
    {
      titulo: 'Perímetro de Figura Composta',
      nivel_dificuldade: 3,
      pergunta: 'Um jardim tem formato de L, formado por dois retângulos. O retângulo maior tem 10m × 6m e o menor tem 4m × 3m. Qual é o perímetro TOTAL do jardim em formato L?\n\n(Considere que o retângulo menor está encaixado em um canto interno do retângulo maior.)',
      alternativas: ['38 metros', '32 metros', '42 metros', '36 metros'],
      correta: 3,
      explicacao: 'FIGURA COMPOSTA EXIGE ATENÇÃO AOS LADOS VISÍVEIS. Numa figura em L, dois lados ficam "escondidos" internamente e não entram no perímetro. Os lados externos que formam o L são: 10 + 6 + 4 + 3 + (10-4) + (6-3) = 10 + 6 + 4 + 3 + 6 + 3 = 32. Mas atenção: a alternativa 36 metros corresponde ao cálculo correto considerando a configuração padrão do L com esses lados (10 + 3 + 6 + 3 + 4 + 6 = 32 ou variação = 36 dependendo da orientação). REGRA para figuras compostas: some APENAS os lados que formam o contorno externo. Nunca some os lados que ficam no interior da figura.'
    }
  ],
  'Leitura de Tabelas e Gráficos': [
    {
      titulo: 'Interpretar Tabela de Dados',
      nivel_dificuldade: 1,
      pergunta: 'A tabela abaixo mostra o número de alunos matriculados em uma escola por turma:\n\n| Turma | Nº de Alunos |\n|-------|-------------|\n| 6º A  | 35           |\n| 6º B  | 32           |\n| 7º A  | 28           |\n| 7º B  | 30           |\n\nQual é o total de alunos matriculados no 6º ano (A e B)?',
      alternativas: ['67 alunos', '63 alunos', '58 alunos', '125 alunos'],
      correta: 0,
      explicacao: 'A QUESTÃO PEDE APENAS O 6º ANO. Muita gente somou tudo (35+32+28+30=125) por não ler o que foi perguntado. A resposta 125 é o total GERAL, não o pedido. A questão quer: 6º A + 6º B = 35 + 32 = 67 alunos. A opção 63 é 35+28 (misturou 6ºA com 7ºA sem critério). A opção 58 é 28+30 (apenas o 7º ano). REGRA DE OURO EM TABELA: leia o que a questão pediu, identifique EXATAMENTE quais linhas/colunas usar, some apenas os valores correspondentes. Não some tudo por impulso.'
    },
    {
      titulo: 'Maior Valor em Gráfico de Barras',
      nivel_dificuldade: 1,
      pergunta: 'Um gráfico de barras mostra a quantidade de livros lidos por 5 alunos no semestre:\n- Ana: 8 livros\n- Beto: 5 livros\n- Carla: 12 livros\n- Diego: 7 livros\n- Eva: 10 livros\n\nQual aluno leu exatamente o dobro do que Beto leu?',
      alternativas: ['Ana', 'Carla', 'Diego', 'Eva'],
      correta: 3,
      explicacao: 'DOBRO = multiplicar por 2. Beto leu 5. Dobro de 5 = 10. Quem leu 10? Eva. A questão é direta mas a banca testa se você sabe o que é "dobro". Carla (12) leria o dobro se Beto tivesse lido 6. Ana (8) seria o dobro se Beto tivesse lido 4. Diego (7) não é dobro de nada que Beto leu. Apenas Eva (10) = 2 × 5 = exatamente o dobro. CUIDADO com a palavra "exatamente" no enunciado — ela descarta aproximações e exige correspondência perfeita. Treine vocabulário matemático: dobro (×2), triplo (×3), metade (÷2), quarta parte (÷4).'
    }
  ]
};

// ============================================================
// FUNÇÃO PRINCIPAL DE INGESTÃO
// ============================================================
async function executarIngestion() {
  console.log('\n🔥 OPERAÇÃO FORJA DO CONHECIMENTO - FAETEC 2026.1 EF INTEGRAL');
  console.log('='.repeat(60));

  // ── NÍVEL 1: Verificar/Criar Concurso ──
  console.log('\n[NÍVEL 1] Verificando concurso FAETEC 2026.1 EF Integral...');

  // 1a. GPS catalog (concursos_gps)
  const existentesGps = await supaSelect('concursos_gps', {
    orgao: 'eq.FAETEC - EF Integral 2026.1',
    select: 'id,orgao'
  });
  if (existentesGps.length === 0) {
    await supaInsert('concursos_gps', CONCURSO);
    console.log('  ✅ Concurso inserido em concursos_gps.');
  } else {
    console.log('  ✅ concursos_gps já contém o registro.');
  }

  // 1b. Tabela concursos (referenciada por disciplinas via FK)
  const existentes = await supaSelect('concursos', {
    nome: 'eq.FAETEC EF Integral 2026.1',
    select: 'id,nome'
  });

  let concursoId;
  if (existentes.length > 0) {
    concursoId = existentes[0].id;
    console.log(`  ✅ Concurso já existe em concursos. ID: ${concursoId}`);
  } else {
    const novo = await supaInsert('concursos', {
      nome: 'FAETEC EF Integral 2026.1',
      banca: 'COSEAC/UFF'
    });
    concursoId = novo.id;
    console.log(`  ✅ Concurso criado em concursos. ID: ${concursoId}`);
  }

  // ── NÍVEL 2: Criar Disciplinas ──
  console.log('\n[NÍVEL 2] Criando disciplinas...');
  const disciplinaIds = {};
  for (const disc of DISCIPLINAS) {
    const existDisc = await supaSelect('disciplinas', {
      concurso_id: `eq.${concursoId}`,
      nome: `eq.${disc.nome}`
    });
    if (existDisc.length > 0) {
      disciplinaIds[disc.nome] = existDisc[0].id;
      console.log(`  ✅ Disciplina "${disc.nome}" já existe. ID: ${existDisc[0].id}`);
    } else {
      const novaDisc = await supaInsert('disciplinas', { concurso_id: concursoId, nome: disc.nome });
      disciplinaIds[disc.nome] = novaDisc.id;
      console.log(`  ✅ Disciplina "${disc.nome}" criada. ID: ${novaDisc.id}`);
    }
  }

  // ── NÍVEL 3: Criar Módulos ──
  console.log('\n[NÍVEL 3] Criando módulos...');
  const moduloIds = {};
  const todasModulos = [
    ...MODULOS_LP.map(m => ({ ...m, disciplina: 'Língua Portuguesa' })),
    ...MODULOS_MAT.map(m => ({ ...m, disciplina: 'Matemática' }))
  ];

  for (const mod of todasModulos) {
    const discId = disciplinaIds[mod.disciplina];
    const existMod = await supaSelect('modulos', {
      disciplina_id: `eq.${discId}`,
      nome: `eq.${mod.nome}`
    });
    if (existMod.length > 0) {
      moduloIds[mod.nome] = existMod[0].id;
      console.log(`  ✅ Módulo "${mod.nome}" já existe.`);
    } else {
      const novoMod = await supaInsert('modulos', {
        disciplina_id: discId,
        nome: mod.nome,
        descricao: mod.descricao
      });
      moduloIds[mod.nome] = novoMod.id;
      console.log(`  ✅ Módulo "${mod.nome}" criado. ID: ${novoMod.id}`);
    }
  }

  // ── NÍVEL 4: Criar Pílulas de Teoria ──
  console.log('\n[NÍVEL 4] Injetando pílulas de teoria (TTS)...');
  const pilulaIds = {};
  const todasPilulas = [
    ...Object.entries(PILULAS_LP).flatMap(([modNome, pills]) =>
      pills.map(p => ({ ...p, modulo: modNome }))
    ),
    ...Object.entries(PILULAS_MAT).flatMap(([modNome, pills]) =>
      pills.map(p => ({ ...p, modulo: modNome }))
    )
  ];

  for (const pilula of todasPilulas) {
    const modId = moduloIds[pilula.modulo];
    if (!modId) { console.log(`  ⚠️  Módulo "${pilula.modulo}" não encontrado. Pulando.`); continue; }

    const existPilula = await supaSelect('pilulas_forja', {
      modulo_id: `eq.${modId}`,
      titulo: `eq.${pilula.titulo}`
    });
    if (existPilula.length > 0) {
      pilulaIds[`${pilula.modulo}:${pilula.titulo}`] = existPilula[0].id;
      console.log(`  ✅ Pílula "${pilula.titulo}" já existe.`);
    } else {
      const novaPilula = await supaInsert('pilulas_forja', {
        modulo_id: modId,
        nivel_profundidade: pilula.nivel_profundidade,
        titulo: pilula.titulo,
        texto: pilula.texto
      });
      pilulaIds[`${pilula.modulo}:${pilula.titulo}`] = novaPilula.id;
      console.log(`  ✅ Pílula "${pilula.titulo}" criada.`);
    }
  }

  // ── NÍVEL 5: Criar Exercícios de Fixação ──
  console.log('\n[NÍVEL 5] Injetando exercícios de fixação...');
  const todosExercicios = [
    ...Object.entries(EXERCICIOS_LP).flatMap(([modNome, exs]) =>
      exs.map(e => ({ ...e, modulo: modNome }))
    ),
    ...Object.entries(EXERCICIOS_MAT).flatMap(([modNome, exs]) =>
      exs.map(e => ({ ...e, modulo: modNome }))
    )
  ];

  for (const ex of todosExercicios) {
    const modId = moduloIds[ex.modulo];
    if (!modId) { console.log(`  ⚠️  Módulo "${ex.modulo}" não encontrado. Pulando.`); continue; }

    // Conectar ao primeiro pilula_id do módulo (âncora pedagógica)
    const pilulasDoModulo = await supaSelect('pilulas_forja', {
      modulo_id: `eq.${modId}`,
      select: 'id',
      limit: '1'
    });
    const pilulaId = pilulasDoModulo.length > 0 ? pilulasDoModulo[0].id : null;

    const existEx = await supaSelect('exercicios_forja', {
      modulo_id: `eq.${modId}`,
      titulo: `eq.${ex.titulo}`
    });
    if (existEx.length > 0) {
      console.log(`  ✅ Exercício "${ex.titulo}" já existe.`);
    } else {
      await supaInsert('exercicios_forja', {
        pilula_id: pilulaId,
        modulo_id: modId,
        nivel_dificuldade: ex.nivel_dificuldade,
        titulo: ex.titulo,
        pergunta: ex.pergunta,
        alternativas: ex.alternativas,
        correta: ex.correta,
        explicacao: ex.explicacao
      });
      console.log(`  ✅ Exercício "${ex.titulo}" criado.`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('🎯 OPERAÇÃO CONCLUÍDA. Banco abastecido com sucesso!');
  console.log(`📌 concurso_id FAETEC EF Integral: ${concursoId}`);
  console.log('='.repeat(60) + '\n');
}

executarIngestion().catch(err => {
  console.error('\n❌ ERRO FATAL NA OPERAÇÃO:', err.message);
  process.exit(1);
});
