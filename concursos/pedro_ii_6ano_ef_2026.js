/**
 * DADOS: Colégio Pedro II — Admissão ao 6º Ano EF 2026
 * Edital nº 44/2025 | Banca: CP2 | Prova: Português + Matemática + Redação
 * 231 vagas | Conteúdo baseado no currículo do 5º ano EF (BNCC)
 */

const { executarIngestion } = require('../engine_ingestao');

const CONFIG = {
  orgao_match: 'Pedro II - 6º Ano EF 2026',
  concurso_nome: 'Pedro II - 6º Ano EF 2026',
  concurso_banca: 'CP2',

  concurso_gps: {
    familia: 'academico',
    esfera: 'federal',
    uf: 'RJ',
    orgao: 'Pedro II - 6º Ano EF 2026',
    link_matriz_pedagogica: 'https://dhui.cp2.g12.br/dhui_arquivos/ano_2025/certame_0500/oferta_0590/EDITAL_6ANO_2026_FINAL.pdf',
    status_edital: 'encerrado',
    ano_ultimo_edital: 2026,
    banca_ultimo_edital: 'CP2',
    data_prova: '2025-11-16',
    idade_alvo: 'Fundamental (10-11)',
    tipo_instituicao: 'Federal'
  },

  disciplinas: [
    {
      nome: 'Língua Portuguesa',
      modulos: [
        {
          nome: 'Leitura e Compreensão Textual',
          descricao: 'Localizar informações explícitas e implícitas; identificar tema central e finalidade do texto.',
          pilulas: [
            {
              titulo: 'Recruta, a resposta está no texto',
              nivel_profundidade: 1,
              texto: 'Ouve bem, soldado. Nas questões de leitura do CP2, a resposta nunca está na sua cabeça — está impressa no texto. Antes de ler as alternativas, sublinhe no texto os nomes próprios, datas e o assunto de cada parágrafo. Quando a questão perguntar "de acordo com o texto", volte ao parágrafo correspondente e compare letra por letra. A banca do CP2 usa o truque de trocar sinônimos para te confundir. Exemplo: o texto diz "veloz" e a alternativa errada diz "ágil" — parecem iguais, mas o contexto muda o sentido. Treine os olhos. A resposta já está escrita. Você só precisa encontrá-la.'
            },
            {
              titulo: 'Inferência: leia o que não está escrito',
              nivel_profundidade: 2,
              texto: 'Nível dois, recruta. Inferência é quando a questão pergunta algo que o texto sugere, mas não diz diretamente. O texto fala de fumaça — você infere fogo. O personagem está com frio e cobre o rosto — você infere que está na rua. Para acertar: leia o trecho indicado, pergunte a si mesmo "o que isso quer dizer?" e elimine as alternativas que extrapolam o que o texto permite concluir. Se a alternativa precisar de informação de fora do texto, ela está errada.'
            }
          ],
          exercicios: [
            {
              titulo: 'Localizar informação explícita',
              nivel_dificuldade: 1,
              pergunta: 'Leia o trecho: "O Colégio Pedro II foi fundado em 1837, por decreto do Imperador Dom Pedro I, com o objetivo de ser um modelo para as escolas do Império." De acordo com o texto, qual foi o objetivo da fundação do Colégio Pedro II?',
              alternativas: [
                'Substituir as escolas particulares do Rio de Janeiro',
                'Ser um modelo para as escolas do Império',
                'Homenagear o Imperador Dom Pedro II',
                'Oferecer ensino gratuito para todas as crianças do Brasil'
              ],
              correta: 1,
              explicacao: 'A resposta está explícita no próprio texto: "com o objetivo de ser um modelo para as escolas do Império". Questão de localização direta — sem interpretação.'
            },
            {
              titulo: 'Identificar o tema central',
              nivel_dificuldade: 1,
              pergunta: 'Um texto fala sobre os danos causados pelo desmatamento na Amazônia, os animais que perdem habitat e a importância das árvores para o clima. Qual é o tema central desse texto?',
              alternativas: [
                'Os animais selvagens da Amazônia',
                'A importância do clima para o Brasil',
                'Os impactos do desmatamento na Amazônia',
                'A vida dos agricultores na floresta'
              ],
              correta: 2,
              explicacao: 'O tema central é o assunto que amarra todos os parágrafos. O texto menciona animais e clima, mas tudo está relacionado ao desmatamento como causa principal.'
            },
            {
              titulo: 'Inferir informação implícita',
              nivel_dificuldade: 2,
              pergunta: 'Leia o trecho: "Mariana olhou pela janela e viu o céu escuro e as nuvens carregadas. Pegou o guarda-chuva antes de sair." O que podemos inferir sobre o tempo no momento da saída de Mariana?',
              alternativas: [
                'Estava fazendo muito calor',
                'O sol estava forte',
                'Provavelmente iria chover',
                'Era de madrugada'
              ],
              correta: 2,
              explicacao: 'Inferência: o texto não diz "ia chover", mas o céu escuro, nuvens carregadas e o guarda-chuva são pistas que levam a essa conclusão. Céu escuro e nuvens carregadas são sinais de chuva iminente.'
            }
          ]
        },
        {
          nome: 'Gramática e Língua em Uso',
          descricao: 'Classes de palavras, pontuação, concordância e ortografia conforme o Acordo Ortográfico.',
          pilulas: [
            {
              titulo: 'Classes de palavras: o básico que cai sempre',
              nivel_profundidade: 1,
              texto: 'Atenção, recruta. O CP2 adora cobrar substantivo, adjetivo, verbo e advérbio. A diferença está na função: substantivo é o nome das coisas ("coragem"), adjetivo caracteriza ("corajoso"), verbo indica ação ou estado ("ter coragem"), advérbio modifica o verbo ("muito"). Dica de ouro: troque a palavra por outra da mesma classe. Se "bonito" e "inteligente" cabem no mesmo lugar da frase, são adjetivos. Se "correu" e "saltou" cabem, são verbos.'
            }
          ],
          exercicios: [
            {
              titulo: 'Identificar classe de palavra',
              nivel_dificuldade: 1,
              pergunta: 'Na frase "O menino correu rapidamente pelo parque", qual é a classe gramatical da palavra "rapidamente"?',
              alternativas: [
                'Substantivo',
                'Adjetivo',
                'Verbo',
                'Advérbio'
              ],
              correta: 3,
              explicacao: '"Rapidamente" modifica o verbo "correu" indicando o modo como a ação foi feita. Palavras que modificam verbos são advérbios. Terminações em "-mente" são quase sempre advérbios de modo.'
            },
            {
              titulo: 'Concordância verbal',
              nivel_dificuldade: 2,
              pergunta: 'Assinale a frase que apresenta concordância verbal CORRETA:',
              alternativas: [
                'Os alunos fez a prova com calma.',
                'A professora e os alunos chegaram cedo.',
                'Todos o estudante passou de ano.',
                'Nenhum dos meninos foram reprovado.'
              ],
              correta: 1,
              explicacao: 'O verbo deve concordar com o sujeito em número e pessoa. "A professora e os alunos" é sujeito composto (plural), portanto o verbo vai para o plural: "chegaram".'
            }
          ]
        },
        {
          nome: 'Produção Textual e Redação',
          descricao: 'Tipos de texto, coesão, coerência e características da redação dissertativo-argumentativa e narrativa.',
          pilulas: [
            {
              titulo: 'Tipos de texto: não confunda',
              nivel_profundidade: 1,
              texto: 'Soldado, o CP2 cobra os tipos de texto no contexto de leitura e de redação. Os principais: NARRATIVO conta uma história com personagens, tempo e espaço ("Era uma vez..."). DESCRITIVO descreve características ("A casa era grande e branca"). DISSERTATIVO apresenta uma tese e argumentos ("A leitura é importante porque..."). INJUNTIVO dá instruções ("Misture os ingredientes e leve ao forno"). Treine identificar o tipo pelo objetivo do texto, não só pelo assunto.'
            }
          ],
          exercicios: [
            {
              titulo: 'Identificar tipo de texto',
              nivel_dificuldade: 1,
              pergunta: 'Leia o trecho: "Dissolva o açúcar na água morna. Em seguida, adicione o suco de limão e misture bem. Sirva gelado." Esse texto pertence a qual tipo?',
              alternativas: [
                'Narrativo',
                'Descritivo',
                'Dissertativo',
                'Injuntivo'
              ],
              correta: 3,
              explicacao: 'O texto dá instruções passo a passo usando verbos no imperativo ("Dissolva", "adicione", "Sirva"). Isso caracteriza o texto injuntivo (ou instrucional).'
            }
          ]
        }
      ]
    },
    {
      nome: 'Matemática',
      modulos: [
        {
          nome: 'Números e Operações',
          descricao: 'Números naturais, inteiros, operações fundamentais, potenciação e divisibilidade.',
          pilulas: [
            {
              titulo: 'Ordem das operações: quem vem primeiro',
              nivel_profundidade: 1,
              texto: 'Recruta, isso mata metade da turma. A ordem é: 1º parênteses, 2º potências e raízes, 3º multiplicação e divisão (da esquerda para a direita), 4º adição e subtração (da esquerda para a direita). Exemplo: 2 + 3 × 4 = 2 + 12 = 14. Errado seria 5 × 4 = 20. A multiplicação vem antes da soma. Quando aparecer parêntese: resolva de dentro para fora. Isso é lei, recruta. Não existe exceção.'
            },
            {
              titulo: 'Divisibilidade: critérios que salvam tempo',
              nivel_profundidade: 1,
              texto: 'Decorar regras de divisibilidade poupa tempo de cálculo. Por 2: termina em número par. Por 3: soma dos algarismos divisível por 3. Por 5: termina em 0 ou 5. Por 9: soma dos algarismos divisível por 9. Por 10: termina em 0. Exemplo: 738 ÷ 3? Some: 7+3+8=18. 18 é divisível por 3? Sim. Então 738 também é. Isso evita fazer a divisão completa.'
            }
          ],
          exercicios: [
            {
              titulo: 'Ordem das operações',
              nivel_dificuldade: 1,
              pergunta: 'Qual é o resultado da expressão: 20 – 4 × 3 + 2²?',
              alternativas: [
                '52',
                '12',
                '64',
                '16'
              ],
              correta: 1,
              explicacao: 'Seguindo a ordem: 1º potência: 2² = 4. 2º multiplicação: 4 × 3 = 12. 3º da esquerda para direita: 20 – 12 + 4 = 12. Resultado: 12.'
            },
            {
              titulo: 'Critério de divisibilidade por 3',
              nivel_dificuldade: 1,
              pergunta: 'Qual dos números abaixo é divisível por 3?',
              alternativas: [
                '124',
                '235',
                '312',
                '421'
              ],
              correta: 2,
              explicacao: 'Critério do 3: some os algarismos. 1+2+4=7 (não divisível por 3). 2+3+5=10 (não). 3+1+2=6 (divisível por 3 ✓). 4+2+1=7 (não).'
            }
          ]
        },
        {
          nome: 'Frações e Números Decimais',
          descricao: 'Frações equivalentes, operações com frações, conversão entre frações e decimais.',
          pilulas: [
            {
              titulo: 'Soma de frações: MMC é o caminho',
              nivel_profundidade: 1,
              texto: 'Para somar ou subtrair frações com denominadores diferentes, você precisa do MMC (Mínimo Múltiplo Comum). Encontre o MMC dos denominadores, converta as frações e some os numeradores. Exemplo: 1/4 + 1/6. MMC(4,6)=12. Converta: 3/12 + 2/12 = 5/12. Pronto. Nunca some os denominadores direto — esse é o erro mais comum da prova.'
            }
          ],
          exercicios: [
            {
              titulo: 'Soma de frações com denominadores diferentes',
              nivel_dificuldade: 2,
              pergunta: 'Qual é o resultado de 2/3 + 1/4?',
              alternativas: [
                '3/7',
                '3/12',
                '11/12',
                '8/12'
              ],
              correta: 2,
              explicacao: 'MMC(3,4) = 12. Converta: 2/3 = 8/12 e 1/4 = 3/12. Some: 8/12 + 3/12 = 11/12. A alternativa C está correta.'
            }
          ]
        },
        {
          nome: 'Geometria e Medidas',
          descricao: 'Perímetro, área de figuras planas, unidades de medida e conversões.',
          pilulas: [
            {
              titulo: 'Perímetro versus Área: não confunda nunca mais',
              nivel_profundidade: 1,
              texto: 'Recruta, essa confusão derruba muitos. PERÍMETRO é a soma de todos os lados — pense na cerca ao redor de um terreno. ÁREA é a superfície interna — pense no piso que você vai comprar. Para retângulo: Perímetro = 2×(base + altura). Área = base × altura. Exemplo: retângulo de 5cm × 3cm. Perímetro = 2×(5+3) = 16cm. Área = 5×3 = 15cm². Note: perímetro em cm, área em cm². Unidade diferente é sinal de que você usou a fórmula certa.'
            }
          ],
          exercicios: [
            {
              titulo: 'Calcular área de retângulo',
              nivel_dificuldade: 1,
              pergunta: 'Uma sala retangular tem 8 metros de comprimento e 5 metros de largura. Qual é a área dessa sala?',
              alternativas: [
                '26 m²',
                '40 m²',
                '13 m²',
                '80 m²'
              ],
              correta: 1,
              explicacao: 'Área do retângulo = base × altura = 8 × 5 = 40 m². O perímetro seria 2×(8+5) = 26m — não confunda com área.'
            },
            {
              titulo: 'Perímetro de figura composta',
              nivel_dificuldade: 2,
              pergunta: 'Um jardim tem formato de L, formado por dois retângulos. O lado externo maior mede 6m de comprimento e 4m de largura. A parte retirada mede 2m × 2m. Qual é o perímetro do jardim?',
              alternativas: [
                '20m',
                '24m',
                '16m',
                '28m'
              ],
              correta: 0,
              explicacao: 'No formato L, o perímetro é: some todos os lados visíveis. Os lados são: 6, 4, 2, 2, 4, 2 = 20m. A dica é que o recorte "adiciona" dois novos lados iguais ao que foi retirado.'
            }
          ]
        },
        {
          nome: 'Resolução de Problemas',
          descricao: 'Problemas envolvendo as quatro operações, porcentagem e raciocínio lógico.',
          pilulas: [
            {
              titulo: 'Decodifique o enunciado antes de calcular',
              nivel_profundidade: 1,
              texto: 'Antes de colocar o lápis no papel, recruta: leia o problema duas vezes. Sublinhe os números e o que está sendo pedido. Identifique se é problema de juntar (adição), separar (subtração), grupos iguais (multiplicação) ou dividir (divisão). O erro mais comum é operar com todos os números sem entender o que fazer. Exemplo: "João tem 12 figurinhas e dá 1/3 para Maria. Quantas ficam?" Não é 12 ÷ 3 e pronto — é 12 – 4 = 8. Leia antes de calcular.'
            }
          ],
          exercicios: [
            {
              titulo: 'Problema com porcentagem',
              nivel_dificuldade: 2,
              pergunta: 'Uma camiseta custa R$ 80,00. Com desconto de 25%, qual é o valor a pagar?',
              alternativas: [
                'R$ 55,00',
                'R$ 60,00',
                'R$ 65,00',
                'R$ 20,00'
              ],
              correta: 1,
              explicacao: '25% de R$ 80 = 80 × 0,25 = R$ 20 de desconto. Valor final: 80 – 20 = R$ 60,00.'
            },
            {
              titulo: 'Problema de múltiplas etapas',
              nivel_dificuldade: 2,
              pergunta: 'Uma turma tem 30 alunos. 2/5 são meninas. Dos meninos, 6 praticam futebol. Quantos meninos NÃO praticam futebol?',
              alternativas: [
                '6',
                '12',
                '18',
                '24'
              ],
              correta: 1,
              explicacao: '2/5 de 30 = 12 meninas. Meninos: 30 – 12 = 18. Meninos que praticam futebol: 6. Meninos que NÃO praticam: 18 – 6 = 12.'
            }
          ]
        }
      ]
    }
  ]
};

// Execução direta
executarIngestion(CONFIG).catch(err => {
  console.error('\n❌ ERRO FATAL:', err.message);
  process.exit(1);
});
