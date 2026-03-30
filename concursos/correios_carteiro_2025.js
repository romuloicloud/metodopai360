/**
 * DADOS: Correios — Carteiro 2025
 * Empresa Brasileira de Correios e Telégrafos
 * Banca: IBFC | Múltipla escolha com 5 alternativas
 * Referência: Editais anteriores da ECT/IBFC — conteúdo estável entre edições
 *
 * 3 disciplinas × 2 módulos × 1 pílula + 2 exercícios:
 *  1. Língua Portuguesa
 *  2. Matemática Básica
 *  3. Noções de Informática
 */

const { executarIngestion } = require('../engine_ingestao');

const CONFIG = {
  orgao_match: 'Correios - Carteiro',
  concurso_nome: 'Correios - Carteiro 2025',
  concurso_banca: 'IBFC',

  concurso_gps: {
    orgao: 'Correios - Carteiro',
    cargo: 'Carteiro',
    banca: 'IBFC',
    status_edital: 'previsto',
    vagas: 3000,
    remuneracao: 'R$ 2.429,26'
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
          nome: 'Leitura e Compreensão de Texto',
          descricao: 'Interpretação de textos; identificação do tema central; localização de informações explícitas e implícitas; intenção do autor.',
          pilulas: [
            {
              titulo: 'Como a IBFC testa interpretação: o que é paráfrase e o que é distorção',
              nivel_profundidade: 1,
              texto: `A IBFC é direta: ela quer saber se você leu o texto ou apenas achou que leu. O padrão das questões de interpretação segue três movimentos: (1) LOCALIZAÇÃO — a resposta está literalmente no texto, apenas com palavras diferentes (paráfrase); (2) INFERÊNCIA — a resposta não está explícita, mas é uma conclusão lógica do que o texto afirma; (3) INTENÇÃO — o que o autor quis comunicar com aquela informação ou tom.

Armadilha mais comum da IBFC: alternativas que usam palavras retiradas DO texto, mas em sentido diferente do que o texto usou. Leia com atenção ao contexto, não apenas à palavra isolada.

Técnica de eliminação: descarte qualquer alternativa que (a) exagere o que o texto disse — palavras como "sempre", "nunca", "apenas", "somente" devem estar no texto para serem usadas na resposta; (b) traga informação que não está no texto, mesmo que seja verdadeira no mundo real; (c) contragria diretamente alguma afirmação do texto.

A alternativa correta quase sempre reformula com outras palavras a ideia central do trecho indicado pela questão.`
            }
          ],
          exercicios: [
            {
              titulo: 'Identificação da ideia central do texto',
              nivel_dificuldade: 2,
              pergunta: `Leia o trecho: "O carteiro não é apenas um entregador de encomendas. Ele representa o elo entre pessoas que se comunicam à distância, levando notícias, documentos e afetos que nenhuma tecnologia substituiu por completo."

A ideia central do texto é:`,
              alternativas: [
                'A tecnologia substituiu completamente o serviço dos Correios.',
                'O carteiro desempenha um papel humano e social que vai além da simples entrega de objetos.',
                'Encomendas e documentos são as únicas formas de comunicação à distância.',
                'O trabalho do carteiro é igual ao de qualquer outro entregador de mercadorias.',
                'A comunicação moderna independe do trabalho do carteiro.'
              ],
              correta: 1,
              explicacao: `A alternativa B parafraseia corretamente o texto: o carteiro é descrito como "elo entre pessoas" e sua função vai além de entregar objetos ("afetos que nenhuma tecnologia substituiu por completo"). A alternativa A contraria o texto ("substituiu completamente" x "nenhuma tecnologia substituiu por completo"). C, D e E distorcem ou invertem o que foi dito.`
            },
            {
              titulo: 'Inferência a partir de informação implícita',
              nivel_dificuldade: 2,
              pergunta: `Leia o trecho: "Apesar do crescimento do comércio eletrônico, muitos cidadãos ainda dependem dos Correios para receber aposentadoria, remédios e correspondências judiciais em regiões onde a internet é instável ou inexistente."

É possível inferir do texto que:`,
              alternativas: [
                'O comércio eletrônico reduziu completamente a necessidade dos Correios.',
                'Os Correios atendem apenas cidades com acesso à internet.',
                'O serviço postal é especialmente relevante para populações com acesso limitado à tecnologia digital.',
                'Aposentadoria, remédios e correspondências judiciais são entregues exclusivamente pelos Correios.',
                'A instabilidade da internet é o único motivo pelo qual as pessoas usam os Correios.'
              ],
              correta: 2,
              explicacao: `A inferência correta é a C: o texto menciona "regiões onde a internet é instável ou inexistente" e lista serviços essenciais (aposentadoria, remédios, documentos judiciais), indicando que os Correios são especialmente importantes para quem tem acesso digital limitado. A alternativa A contradiz o texto. D usa "exclusivamente", exagero não presente no texto. E usa "único motivo", também extrapolação.`
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Ortografia e Vocabulário',
          descricao: 'Ortografia conforme o Acordo Ortográfico de 2009; uso do hífen; acentuação gráfica; significado e emprego de palavras no contexto.',
          pilulas: [
            {
              titulo: 'Hífen, acento e grafia: as regras mais cobradas pela IBFC',
              nivel_profundidade: 1,
              texto: `O Acordo Ortográfico de 2009 eliminou o trema em palavras nativas do português (a palavra "agüentar" virou "aguentar"). O acento diferencial foi suprimido da maioria dos casos — "para" (verbo/preposição) não tem mais distinção gráfica, mas "pôde" (passado) x "pode" (presente) e "pôr" (verbo) x "por" (preposição) se mantêm.

REGRAS DO HÍFEN mais cobradas pela IBFC:
— Prefixo terminado em vogal + palavra iniciada com VOGAL DIFERENTE: SEM hífen → autoescola, semiaberto, anteontem.
— Prefixo terminado em vogal + palavra iniciada com A MESMA vogal: COM hífen → anti-inflamatório, micro-ondas, auto-observação.
— Prefixo terminado em vogal + palavra iniciada com "h": COM hífen → anti-higiênico, pré-histórico.
— "Mal": + palavra iniciada por vogal ou "h" → COM hífen (mal-estar, mal-humorado); + consoante → SEM hífen (malcriado, malfeito, maltratado).
— "Bem": + palavra iniciada por vogal → COM hífen (bem-estar, bem-humorado); + consoante → SEM hífen (benfazejo — verificar cada caso).

ACENTUAÇÃO: paroxítonas terminadas em -ens NÃO são acentuadas (jovens, imagens). Oxítonas terminadas em -em e -ens SÃO acentuadas (também, armazém, armazéns). Hiatos com "i" ou "u" tônicos continuam acentuados quando sozinhos na sílaba (saúde, baú, país).`
            }
          ],
          exercicios: [
            {
              titulo: 'Grafia correta com hífen conforme o Acordo Ortográfico de 2009',
              nivel_dificuldade: 2,
              pergunta: 'Assinale a alternativa em que TODAS as palavras estão grafadas corretamente de acordo com o Acordo Ortográfico de 2009:',
              alternativas: [
                'anti-higiênico, autoescola, mal-estar',
                'anti-higienico, auto-escola, mal estar',
                'antihigiênico, autoescola, malstar',
                'anti-higiênico, auto-escola, mal-estar',
                'antihigiênico, auto-escola, mal estar'
              ],
              correta: 0,
              explicacao: `"Anti-higiênico": prefixo "anti" + palavra começada com "h" → COM hífen. ✓
"Autoescola": prefixo "auto" + vogal diferente "e" → SEM hífen. ✓
"Mal-estar": "mal" + palavra iniciada por vogal "e" → COM hífen. ✓
A alternativa A está completamente correta. As demais cometem ao menos um erro de hifenização ou de grafia.`
            },
            {
              titulo: 'Significado de palavra no contexto',
              nivel_dificuldade: 2,
              pergunta: `Na frase "O carteiro percorreu um itinerário extenso antes de concluir a rota do dia", a palavra "itinerário" significa:`,
              alternativas: [
                'Veículo utilizado para a entrega de correspondências.',
                'Conjunto de regras e normas do trabalho dos Correios.',
                'Caminho ou percurso a ser seguido em uma viagem ou deslocamento.',
                'Documento de controle de entregas assinado pelo destinatário.',
                'Equipamento de rastreamento usado nas encomendas.'
              ],
              correta: 2,
              explicacao: `"Itinerário" designa o roteiro ou percurso a ser seguido em um deslocamento. No contexto, o carteiro seguiu um determinado trajeto (caminho) antes de terminar seu turno. As demais alternativas descrevem conceitos distintos não relacionados à palavra.`
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 2. MATEMÁTICA BÁSICA
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Matemática Básica',
      modulos: [

        // ── Módulo 1 ──────────────────────────────────────────
        {
          nome: 'Operações Básicas, Porcentagem e Proporção',
          descricao: 'Cálculo de desconto e acréscimo percentual; variação percentual; razão e proporção; regra de três simples e composta.',
          pilulas: [
            {
              titulo: 'Porcentagem e Regra de Três: as ferramentas certas para cada situação',
              nivel_profundidade: 1,
              texto: `PORCENTAGEM — três tipos de problema:
1) Calcular o valor percentual: 15% de 200 = 200 × 0,15 = 30.
2) Encontrar a porcentagem: 30 é quanto % de 200? → (30 ÷ 200) × 100 = 15%.
3) Encontrar o total: se 30 é 15% do total, qual é o total? → 30 ÷ 0,15 = 200.

DESCONTO: subtrair percentual do valor original. Fator multiplicador: desconto de 20% → multiplique por 0,80.
ACRÉSCIMO: somar percentual ao valor original. Fator multiplicador: aumento de 20% → multiplique por 1,20.

Cuidado com variações consecutivas: aumento de 10% e depois desconto de 10% NÃO retorna ao valor original.
Exemplo: 1.000 → ×1,10 = 1.100 → ×0,90 = 990 (perda líquida de 1%).

REGRA DE TRÊS SIMPLES:
— Grandezas diretamente proporcionais: se uma aumenta, a outra aumenta na mesma proporção.
  Exemplo: 3 funcionários entregam 150 pacotes. Quantos pacotes entregam 5 funcionários?
  3 → 150 | 5 → x → x = (5 × 150) ÷ 3 = 250 pacotes.
— Grandezas inversamente proporcionais: se uma aumenta, a outra diminui.
  Exemplo: 4 carteiros percorrem uma rota em 6 horas. Em quantas horas 3 carteiros percorrem a mesma rota?
  4 × 6 = 3 × x → x = 24 ÷ 3 = 8 horas. (Inverter uma das colunas antes de calcular.)`
            }
          ],
          exercicios: [
            {
              titulo: 'Cálculo de desconto e preço final',
              nivel_dificuldade: 2,
              pergunta: 'Uma encomenda que custava R$ 80,00 para ser enviada pelos Correios recebeu um desconto de 15% para clientes cadastrados. Qual é o valor final a ser pago?',
              alternativas: [
                'R$ 12,00',
                'R$ 68,00',
                'R$ 72,00',
                'R$ 65,00',
                'R$ 76,00'
              ],
              correta: 1,
              explicacao: `Desconto = 15% de 80 = 80 × 0,15 = R$ 12,00.
Valor final = 80 - 12 = R$ 68,00.
Alternativamente: 80 × 0,85 = R$ 68,00 (fator multiplicador direto).`
            },
            {
              titulo: 'Regra de três simples — grandezas diretamente proporcionais',
              nivel_dificuldade: 2,
              pergunta: 'Um carteiro entrega 60 correspondências em 2 horas mantendo ritmo constante. Quantas correspondências ele entregará em 5 horas no mesmo ritmo?',
              alternativas: [
                '100',
                '120',
                '150',
                '180',
                '90'
              ],
              correta: 2,
              explicacao: `Grandezas diretamente proporcionais: mais tempo → mais entregas.
2 horas → 60 correspondências
5 horas → x
x = (5 × 60) ÷ 2 = 300 ÷ 2 = 150 correspondências.`
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Grandezas, Medidas e Geometria Básica',
          descricao: 'Conversão de unidades de comprimento, massa e capacidade; perímetro e área de figuras planas (retângulo, quadrado, triângulo); noções práticas de medição.',
          pilulas: [
            {
              titulo: 'Conversão de unidades e fórmulas de área: o mapa mental para a prova',
              nivel_profundidade: 1,
              texto: `CONVERSÃO DE UNIDADES — regra de ouro: multiplicar ao descer, dividir ao subir.
Comprimento: km → hm → dam → m → dm → cm → mm (cada passo = ×10 ou ÷10)
Exemplo: 3,5 km = 3.500 m (×1000) | 250 cm = 2,5 m (÷100)

Massa: t → kg → g → mg (t×1000 = kg | kg×1000 = g)
Capacidade: kl → l → ml (cada passo ×1000 ou ÷1000)

PERÍMETRO: soma de todos os lados da figura.
— Retângulo: P = 2 × (base + altura) = 2b + 2h
— Quadrado: P = 4 × lado
— Triângulo: P = lado1 + lado2 + lado3

ÁREA das figuras mais cobradas:
— Retângulo: A = base × altura
— Quadrado: A = lado²
— Triângulo: A = (base × altura) ÷ 2
— Trapézio: A = [(base maior + base menor) × altura] ÷ 2

Dica de prova: a questão da IBFC frequentemente apresenta uma situação prática (tamanho de um terreno, caixas a embalar, percurso a percorrer) — identifique a figura geométrica por trás do problema antes de escolher a fórmula.`
            }
          ],
          exercicios: [
            {
              titulo: 'Cálculo de perímetro de percurso retangular',
              nivel_dificuldade: 2,
              pergunta: 'Um carteiro percorre diariamente um quarteirão retangular que mede 120 metros de comprimento e 80 metros de largura. Qual é o perímetro total desse quarteirão?',
              alternativas: [
                '200 metros',
                '9.600 metros',
                '400 metros',
                '480 metros',
                '320 metros'
              ],
              correta: 2,
              explicacao: `Perímetro do retângulo = 2 × (comprimento + largura) = 2 × (120 + 80) = 2 × 200 = 400 metros.
A alternativa B (9.600) é o resultado da área (120 × 80), não do perímetro — armadilha clássica.`
            },
            {
              titulo: 'Conversão de unidades de comprimento',
              nivel_dificuldade: 2,
              pergunta: 'Uma rota de distribuição tem 4,5 km de extensão. Quantos metros correspondem a esse percurso?',
              alternativas: [
                '45 metros',
                '450 metros',
                '4.500 metros',
                '45.000 metros',
                '0,45 metros'
              ],
              correta: 2,
              explicacao: `Para converter km em metros, multiplica-se por 1.000:
4,5 km × 1.000 = 4.500 metros.
Regra: ao descer na escala de unidades (km → m), multiplica-se pelo fator correspondente.`
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 3. NOÇÕES DE INFORMÁTICA
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Noções de Informática',
      modulos: [

        // ── Módulo 1 ──────────────────────────────────────────
        {
          nome: 'Windows e Pacote Office (Word e Excel)',
          descricao: 'Funcionalidades do Windows 10/11: atalhos, explorador de arquivos, área de trabalho, painel de controle. Word: formatação, parágrafo, revisão. Excel: fórmulas básicas, células, referências.',
          pilulas: [
            {
              titulo: 'Windows, Word e Excel: os atalhos e funções que a IBFC cobra',
              nivel_profundidade: 1,
              texto: `WINDOWS 10/11 — funcionalidades mais cobradas:
Atalhos essenciais: Ctrl+C (copiar), Ctrl+X (recortar), Ctrl+V (colar), Ctrl+Z (desfazer), Ctrl+Y (refazer), Alt+F4 (fechar janela), Win+D (mostrar área de trabalho), Win+E (abrir Explorador de Arquivos), Print Screen (capturar tela).
Explorador de Arquivos: permite navegar, copiar, mover e renomear arquivos e pastas. Extensões comuns: .docx (Word), .xlsx (Excel), .pdf, .jpg, .mp3.
Área de Trabalho: atalhos para programas e arquivos. Barra de tarefas: acesso rápido aos programas abertos e fixados.
Lixeira: arquivos excluídos ficam na Lixeira até ser esvaziada. É possível restaurar arquivos da Lixeira antes do esvaziamento.

WORD (Microsoft Word / LibreOffice Writer):
— Formatação básica: Negrito (Ctrl+N ou Ctrl+B), Itálico (Ctrl+I), Sublinhado (Ctrl+U), Alinhar ao centro (Ctrl+E).
— Parágrafo: recuo, espaçamento entre linhas, alinhamento (esquerda, centralizado, direita, justificado).
— Localizar e substituir: Ctrl+L (localizar), Ctrl+U (substituir) — atenção: no Windows BR, Ctrl+U é "substituir" no Word.
— Revisão ortográfica: F7. Contar palavras: Revisão → Contar Palavras.

EXCEL (Microsoft Excel / LibreOffice Calc):
— Célula: interseção de coluna (letra) e linha (número). Ex: A1, B3.
— Fórmulas sempre começam com "=". Exemplos: =SOMA(A1:A5), =MÉDIA(B1:B4), =MÁXIMO(C1:C10), =MÍNIMO(D1:D5).
— Referência relativa (A1) x absoluta ($A$1): ao copiar a fórmula, a referência relativa muda; a absoluta permanece fixa.
— Classificar dados: aba "Dados" → botão Classificar. Filtrar: aba "Dados" → Filtro.`
            }
          ],
          exercicios: [
            {
              titulo: 'Atalho de teclado no Windows',
              nivel_dificuldade: 1,
              pergunta: 'Um funcionário dos Correios precisa abrir rapidamente o Explorador de Arquivos do Windows 10 para localizar um arquivo digitalizado. Qual atalho de teclado deve utilizar?',
              alternativas: [
                'Ctrl + E',
                'Win + D',
                'Win + E',
                'Alt + F4',
                'Ctrl + Alt + Del'
              ],
              correta: 2,
              explicacao: `Win + E abre o Explorador de Arquivos diretamente no Windows 10/11.
Win + D minimiza todas as janelas e mostra a área de trabalho.
Ctrl + E, no contexto do Word ou de navegadores, ativa o campo de busca — não abre o Explorador.
Alt + F4 fecha a janela ativa.`
            },
            {
              titulo: 'Fórmula básica no Excel',
              nivel_dificuldade: 1,
              pergunta: 'Em uma planilha do Excel, os valores 10, 20, 30, 40 e 50 estão nas células A1, A2, A3, A4 e A5, respectivamente. Qual fórmula calcula corretamente a soma de todos esses valores?',
              alternativas: [
                '=TOTAL(A1:A5)',
                '=SOMAR(A1;A5)',
                '=SOMA(A1:A5)',
                '=SOMA(A1+A2+A3+A4+A5)',
                '=CALCULAR(A1:A5)'
              ],
              correta: 2,
              explicacao: `A função correta é =SOMA(A1:A5). O operador ":" indica um intervalo contínuo de células (de A1 até A5). "=TOTAL" e "=CALCULAR" não existem no Excel. "=SOMAR" também não existe — a função em português é SOMA. "=SOMA(A1+A2+A3+A4+A5)" funcionaria tecnicamente, mas não é a forma padrão e eficiente com intervalo.`
            }
          ]
        },

        // ── Módulo 2 ──────────────────────────────────────────
        {
          nome: 'Internet, E-mail e Segurança da Informação',
          descricao: 'Navegadores web (Chrome, Firefox, Edge); conceitos de URL, HTTP/HTTPS; e-mail: protocolo, boas práticas; ameaças: phishing, malware, ransomware, vírus; medidas de proteção: antivírus, firewall, senhas seguras.',
          pilulas: [
            {
              titulo: 'Segurança digital: phishing, malware e como se proteger — o que a IBFC mais cobra',
              nivel_profundidade: 1,
              texto: `NAVEGADORES: Chrome, Firefox, Edge e Safari são os principais. A barra de endereços exibe a URL. "https://" indica conexão criptografada (segura); o cadeado fechado confirma. "http://" sem "s" indica conexão sem criptografia — evitar para dados sensíveis.

PRINCIPAIS AMEAÇAS DIGITAIS:
— Phishing: golpe por e-mail, SMS ou site falso que imita empresa legítima para roubar senhas ou dados bancários. Sinais: erros de ortografia, domínios suspeitos (correios-entregas.xyz em vez de correios.com.br), urgência excessiva.
— Vírus: programa malicioso que se replica e infecta arquivos. Necessita ação do usuário para se propagar (abrir arquivo infectado).
— Worm: se propaga automaticamente pela rede sem necessidade de ação do usuário.
— Trojan (Cavalo de Troia): programa aparentemente legítimo que esconde código malicioso; abre porta para acesso remoto.
— Ransomware: criptografa os arquivos da vítima e exige pagamento (resgate) para liberar. Altamente destrutivo.
— Spyware: coleta informações do usuário sem consentimento (senhas, histórico de navegação).

PROTEÇÃO:
— Antivírus: detecta e remove malware. Deve ser mantido atualizado.
— Firewall: filtra o tráfego de rede, bloqueando acessos não autorizados.
— Atualizações do sistema operacional: corrigem vulnerabilidades conhecidas.
— Senhas seguras: mínimo 8 caracteres, mix de letras maiúsculas, minúsculas, números e símbolos. Nunca reutilizar a mesma senha em serviços diferentes.
— Autenticação em dois fatores (2FA): segunda camada de segurança além da senha.

E-MAIL: protocolo de envio é SMTP; recebimento: POP3 (baixa e remove do servidor) ou IMAP (sincroniza — mantém cópia no servidor). Nunca abrir anexos de remetentes desconhecidos.`
            }
          ],
          exercicios: [
            {
              titulo: 'Identificação de ataque de phishing',
              nivel_dificuldade: 1,
              pergunta: 'Um funcionário dos Correios recebe um e-mail de "suporte@correios-atualizacao.net" informando que sua senha expirará em 24 horas e solicitando que clique em um link para atualizá-la imediatamente. Esse cenário é característico de qual tipo de ataque?',
              alternativas: [
                'Ransomware, pois os arquivos do computador serão criptografados.',
                'Phishing, pois utiliza mensagem falsa e urgente para induzir o usuário a fornecer dados.',
                'Worm, pois o programa se propaga automaticamente pela rede.',
                'Firewall, pois bloqueia o acesso ao sistema legítimo dos Correios.',
                'Spyware, pois instala um programa de monitoramento no dispositivo.'
              ],
              correta: 1,
              explicacao: `Phishing é a técnica de usar mensagens falsas, urgentes e com aparência legítima para enganar o usuário e capturar credenciais. Os sinais clássicos estão presentes: domínio suspeito ("correios-atualizacao.net" em vez de "correios.com.br"), urgência artificial ("24 horas") e solicitação de dados por link. Ransomware criptografa arquivos; worm se propaga pela rede automaticamente; firewall é uma ferramenta de defesa, não um ataque.`
            },
            {
              titulo: 'Boas práticas de segurança da informação',
              nivel_dificuldade: 1,
              pergunta: 'Qual das alternativas a seguir representa uma BOA prática de segurança da informação no ambiente de trabalho?',
              alternativas: [
                'Utilizar a mesma senha em todos os sistemas para não esquecer.',
                'Compartilhar a senha com um colega de confiança para facilitar o trabalho colaborativo.',
                'Manter o antivírus instalado e atualizado regularmente.',
                'Desativar as atualizações automáticas do sistema operacional para evitar lentidão.',
                'Abrir todo e-mail recebido para verificar se há algo importante antes de excluir.'
              ],
              correta: 2,
              explicacao: `Manter o antivírus atualizado é uma prática fundamental de segurança, pois as atualizações incluem as assinaturas de novos vírus e malwares. As demais alternativas são comportamentos de risco: reutilizar senhas facilita ataques em cascata; compartilhar senhas viola princípios básicos de segurança; desativar atualizações deixa vulnerabilidades abertas; abrir e-mails de remetentes desconhecidos expõe o sistema a phishing e malware.`
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
