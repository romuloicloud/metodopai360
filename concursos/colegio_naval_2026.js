/**
 * DADOS: Colégio Naval (CN) — Marinha do Brasil 2026
 * Banca: Própria Marinha | Ingresso: Aspirante/Cadete da Marinha do Brasil
 * Público-alvo: jovens de 13 a 18 anos que desejam seguir carreira naval
 *
 * 3 disciplinas × 2 módulos × 1 pílula + 2 exercícios:
 *  1. Matemática
 *  2. Ciências / Física e Química (cobrados no CN)
 *  3. Língua Portuguesa e Inglês
 */

const { executarIngestion } = require('../engine_ingestao');

const CONFIG = {
  orgao_match: 'Colégio Naval (CN)',
  concurso_nome: 'Colégio Naval - Aspirante da Marinha 2026',
  concurso_banca: 'Própria Marinha',

  concurso_gps: {
    orgao: 'Colégio Naval (CN)',
    familia: 'militar',
    esfera: 'federal',
    uf: 'BR',
    link_matriz_pedagogica: 'https://www.marinha.mil.br/colegio-naval',
    status_edital: 'previsto',
    ano_ultimo_edital: 2025,
    banca_ultimo_edital: 'Própria Marinha',
    data_prova: null,
    idade_alvo: 'Jovem (13-18)',
    tipo_instituicao: 'Federal Militar'
  },

  disciplinas: [

    // ══════════════════════════════════════════════════════════
    // 1. MATEMÁTICA — Nível 8º/9º ano do Ensino Fundamental
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Matemática',
      modulos: [
        {
          nome: 'Álgebra — Equações, Sistemas e Inequações',
          descricao: 'Equações do 1º e 2º grau, sistemas de equações lineares, inequações de 1º grau e representação na reta numérica. Nível 8º/9º ano do Ensino Fundamental.',
          pilulas: [
            {
              titulo: 'Álgebra para o Colégio Naval: equações, sistemas e desigualdades',
              nivel_profundidade: 2,
              texto: 'O Colégio Naval exige domínio da álgebra do Ensino Fundamental. Os três pilares são:\n\nEQUAÇÕES DO 1º GRAU (ax + b = 0): isolam a incógnita realizando operações inversas em ambos os lados. Sempre verifique: multiplicar ou dividir por número NEGATIVO inverte o sinal da inequação. Exemplo: −2x > 6 → x < −3 (sinal inverteu).\n\nEQUAÇÕES DO 2º GRAU (ax² + bx + c = 0): resolvidas pela Fórmula de Bhaskara: x = (−b ± √Δ) / 2a, onde Δ = b² − 4ac. Relações de Girard: x₁ + x₂ = −b/a e x₁·x₂ = c/a. Úteis para verificar as raízes sem calcular.\n\nSISTEMAS DE EQUAÇÕES LINEARES (2×2): dois métodos principais — substituição (isola uma variável e substitui na outra equação) e adição (multiplica as equações por constantes para eliminar uma variável). Um sistema pode ser: possível e determinado (uma solução), possível e indeterminado (infinitas soluções) ou impossível (sem solução).\n\nINEQUAÇÕES: resolução similar às equações, mas com atenção ao sinal de desigualdade. A solução é um intervalo representado na reta numérica. Parêntese ( ) para extremo excluído; colchete [ ] para extremo incluído.\n\nDica para o CN: os problemas são contextualizados em situações do dia a dia naval — peso de cargas, distribuição de tripulantes, cálculo de rotas. Monte a equação com calma, defina a variável claramente e sempre verifique a resposta substituindo na equação original.'
            }
          ],
          exercicios: [
            {
              titulo: 'Sistema de equações: distribuição de tripulantes',
              nivel_dificuldade: 2,
              pergunta: 'Um navio tem 120 tripulantes divididos entre oficiais e praças. O número de praças é o quíntuplo do número de oficiais. Quantos oficiais e quantas praças há no navio?',
              alternativas: [
                '20 oficiais e 100 praças',
                '24 oficiais e 96 praças',
                '25 oficiais e 95 praças',
                '15 oficiais e 105 praças',
                '30 oficiais e 90 praças'
              ],
              correta: 0,
              explicacao: 'Montando o sistema: seja x = número de oficiais e y = número de praças. x + y = 120 e y = 5x. Substituindo: x + 5x = 120 → 6x = 120 → x = 20 oficiais. y = 5×20 = 100 praças. Verificação: 20 + 100 = 120. Alternativa A.'
            },
            {
              titulo: 'Equação do 2º grau: área de convés retangular',
              nivel_dificuldade: 2,
              pergunta: 'O convés de um navio tem formato retangular. O comprimento é 3 metros a mais que o dobro da largura, e a área é 27 m². Qual é a largura do convés?',
              alternativas: [
                '3 metros',
                '4 metros',
                '5 metros',
                '6 metros',
                '9 metros'
              ],
              correta: 0,
              explicacao: 'Seja l a largura. O comprimento é (2l + 3). Área: l·(2l + 3) = 27 → 2l² + 3l − 27 = 0. Δ = 9 + 4·2·27 = 9 + 216 = 225. √Δ = 15. l = (−3 + 15)/4 = 12/4 = 3 metros. (A raiz negativa é descartada.) Largura = 3 m. Alternativa A.'
            }
          ]
        },
        {
          nome: 'Geometria Plana — Áreas, Perímetros e Teorema de Pitágoras',
          descricao: 'Perímetro e área de triângulos, quadriláteros e círculos. Teorema de Pitágoras e sua aplicação. Semelhança de figuras planas.',
          pilulas: [
            {
              titulo: 'Geometria plana para o CN: fórmulas e o Teorema de Pitágoras',
              nivel_profundidade: 2,
              texto: 'Geometria plana é um dos temas mais frequentes no Colégio Naval — a Marinha usa geometria diariamente em navegação, cartografia e projetos navais.\n\nÁREAS ESSENCIAIS:\n• Quadrado: A = l² | Perímetro: P = 4l\n• Retângulo: A = b·h | Perímetro: P = 2(b + h)\n• Triângulo: A = (b·h)/2 — onde h é a altura relativa à base b\n• Triângulo equilátero: A = (l²·√3)/4\n• Trapézio: A = [(B + b)·h]/2 — B é a base maior, b a menor, h a altura\n• Círculo: A = π·r² | Comprimento (perímetro): C = 2·π·r\n\nTEOREMA DE PITÁGORAS (triângulo retângulo): a² = b² + c², onde "a" é a hipotenusa (lado oposto ao ângulo reto) e b, c são os catetos. Ternas pitagóricas mais comuns: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25). Memorize-as para resolver rapidamente sem calcular √.\n\nSEMELHANÇA: duas figuras são semelhantes quando os ângulos são iguais e os lados são proporcionais (mesma razão de semelhança k). Área varia com k² e volume com k³.\n\nDica para o CN: nas provas, os problemas de geometria frequentemente envolvem a planta de embarcações, mapas ou projetos de bordo. Identifique as figuras geométricas presentes, aplique as fórmulas corretas e atenção às unidades (m, cm, m²).'
            }
          ],
          exercicios: [
            {
              titulo: 'Teorema de Pitágoras: distância entre pontos no porto',
              nivel_dificuldade: 2,
              pergunta: 'Um navio está ancorado no porto. Para chegar ao estaleiro de manutenção, ele precisa percorrer 6 km para o norte e depois 8 km para o leste. Qual é a distância em linha reta do ponto de partida ao estaleiro?',
              alternativas: [
                '10 km',
                '14 km',
                '7 km',
                '12 km',
                '100 km'
              ],
              correta: 0,
              explicacao: 'As distâncias percorridas formam os catetos de um triângulo retângulo (6 km e 8 km). A distância em linha reta é a hipotenusa: d² = 6² + 8² = 36 + 64 = 100 → d = 10 km. Terna pitagórica (6, 8, 10) = múltiplo de (3, 4, 5). Alternativa A.'
            },
            {
              titulo: 'Área de figura composta: deque circular do navio',
              nivel_dificuldade: 2,
              pergunta: 'O deque circular de um navio tem raio de 7 metros. No centro do deque há um quadrado de lado 4 metros reservado para equipamentos. Qual é a área útil do deque (área circular menos a área do quadrado)? Use π ≈ 22/7.',
              alternativas: [
                '138 m²',
                '154 m²',
                '142 m²',
                '130 m²',
                '150 m²'
              ],
              correta: 0,
              explicacao: 'Área do círculo: A_círculo = π·r² = (22/7)·7² = (22/7)·49 = 22·7 = 154 m². Área do quadrado: A_quadrado = 4² = 16 m². Área útil = 154 − 16 = 138 m². Alternativa A.'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 2. CIÊNCIAS / FÍSICA E QUÍMICA — Cobrados no Colégio Naval
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Ciências',
      modulos: [
        {
          nome: 'Física Básica — Densidade, Pressão e Empuxo',
          descricao: 'Conceitos de massa, volume e densidade. Pressão hidrostática. Princípio de Arquimedes (Empuxo) e flutuação de corpos. Contexto naval: por que os navios flutuam.',
          pilulas: [
            {
              titulo: 'Densidade, pressão e empuxo: a física que faz o navio flutuar',
              nivel_profundidade: 2,
              texto: 'Esses conceitos têm conexão direta com a realidade naval — entendê-los é entender por que os navios existem.\n\nDENSIDADE: ρ = m/V (massa dividida pelo volume). Unidade: g/cm³ ou kg/m³. A densidade da água pura é 1 g/cm³ (ou 1000 kg/m³). Da água do mar: ≈ 1,025 g/cm³. Um corpo flutua se sua densidade média for MENOR que a do fluido. Um navio de aço flutua porque seu formato oco faz sua densidade MÉDIA (aço + ar interno) ser menor que a da água.\n\nPRESSÃO HIDROSTÁTICA: P = ρ·g·h, onde ρ é a densidade do fluido, g é a aceleração da gravidade (≈ 10 m/s²) e h é a profundidade. A pressão aumenta com a profundidade — por isso submarinos precisam de casco reforçado. Na mesma profundidade, a pressão é igual em todos os pontos (Princípio de Pascal).\n\nEMPUXO (Princípio de Arquimedes): "Todo corpo imerso em um fluido recebe uma força de empuxo vertical para cima igual ao peso do fluido deslocado." E = ρ_fluido · g · V_submerso. Condições: E > P (corpo sobe), E < P (corpo afunda), E = P (corpo fica em equilíbrio). Para flutuar: E = P_corpo → ρ_fluido·V_submerso·g = ρ_corpo·V_total·g → ρ_fluido·V_submerso = ρ_corpo·V_total.\n\nAplicação naval real: a linha de flutuação (draft) indica o quanto do navio está submerso. Quanto mais carga o navio leva, mais afunda — mas desde que a densidade média permaneça menor que a da água, ele continua flutuando.'
            }
          ],
          exercicios: [
            {
              titulo: 'Cálculo de empuxo e verificação de flutuação',
              nivel_dificuldade: 2,
              pergunta: 'Um bloco de madeira com volume de 500 cm³ e massa de 400 g é colocado na água (densidade = 1 g/cm³). O bloco irá:',
              alternativas: [
                'Afundar, pois a densidade da madeira é menor que a da água.',
                'Flutuar, pois a densidade da madeira (0,8 g/cm³) é menor que a da água (1 g/cm³).',
                'Flutuar com todo o volume submerso.',
                'Afundar, pois o peso (400 gf) é maior que o empuxo máximo (500 gf).',
                'Permanecer em equilíbrio exatamente na superfície, pois é igual à água.'
              ],
              correta: 1,
              explicacao: 'Densidade da madeira: ρ = m/V = 400 g / 500 cm³ = 0,8 g/cm³. Como 0,8 < 1 (densidade da água), o bloco FLUTUA. O empuxo máximo (todo bloco submerso) seria E = 1 × 500 = 500 gf > P = 400 gf — confirma a flutuação. Apenas 80% do volume ficará submerso (V_sub = m/ρ_fluido = 400/1 = 400 cm³ de 500 cm³ totais). Alternativa B.'
            },
            {
              titulo: 'Pressão hidrostática na profundidade',
              nivel_dificuldade: 2,
              pergunta: 'Um submarino da Marinha navega a 50 metros de profundidade no oceano (densidade da água do mar = 1.025 kg/m³, g = 10 m/s²). Qual é a pressão hidrostática que o casco do submarino suporta nessa profundidade?',
              alternativas: [
                '500.000 Pa (500 kPa)',
                '512.500 Pa (512,5 kPa)',
                '51.250 Pa (51,25 kPa)',
                '5.125.000 Pa (5.125 kPa)',
                '1.025.000 Pa (1.025 kPa)'
              ],
              correta: 1,
              explicacao: 'P = ρ·g·h = 1.025 × 10 × 50 = 512.500 Pa = 512,5 kPa. (Essa é a pressão relativa devida à coluna d\'água, sem contar a pressão atmosférica de superfície.) Alternativa B. Isso evidencia por que cascos de submarinos são projetados com materiais de altíssima resistência estrutural.'
            }
          ]
        },
        {
          nome: 'Química Básica — Tabela Periódica, Ligações e Reações',
          descricao: 'Organização da Tabela Periódica, propriedades periódicas. Ligações químicas: iônica, covalente e metálica. Tipos de reações químicas: síntese, análise, simples e dupla troca.',
          pilulas: [
            {
              titulo: 'Química básica para o CN: tabela periódica, ligações e reações',
              nivel_profundidade: 2,
              texto: 'A Química no Colégio Naval é de nível fundamental avançado — foco nos conceitos estruturadores que serão aprofundados no Ensino Médio naval.\n\nTABELA PERIÓDICA: organizada por número atômico crescente, em linhas (períodos) e colunas (famílias/grupos). Famílias importantes:\n• Família 1A (metais alcalinos): Li, Na, K — altamente reativos, reagem com água.\n• Família 7A (halogênios): F, Cl, Br, I — formam sais com metais.\n• Família 8A (gases nobres): He, Ne, Ar — inerte, não formam ligações comuns.\n• Metais (maioria dos elementos), ametais (não-metais) e semimetais (Si, As, Ge).\n\nLIGAÇÕES QUÍMICAS: os átomos ligam-se para atingir a configuração estável de gás nobre (8 elétrons na camada de valência — Regra do Octeto).\n• IÔNICA: metal + ametal — transferência de elétrons. Forma cristais sólidos com alto ponto de fusão (ex: NaCl — sal de cozinha).\n• COVALENTE: ametal + ametal — compartilhamento de elétrons. Pode ser simples (H−H), dupla (O=O) ou tripla (N≡N). Geralmente gases ou líquidos à temperatura ambiente.\n• METÁLICA: metal + metal — "mar de elétrons" livres. Explica a condutividade elétrica e maleabilidade dos metais.\n\nREAÇÕES QUÍMICAS (tipos fundamentais):\n• SÍNTESE (composição): A + B → AB\n• ANÁLISE (decomposição): AB → A + B\n• SIMPLES TROCA (substituição): A + BC → AC + B\n• DUPLA TROCA (metátese): AB + CD → AD + CB\n\nLei de conservação das massas (Lavoisier): "Na natureza, nada se cria, nada se perde, tudo se transforma." A massa total dos reagentes é igual à massa total dos produtos.'
            }
          ],
          exercicios: [
            {
              titulo: 'Tipo de ligação química pelo tipo dos elementos',
              nivel_dificuldade: 2,
              pergunta: 'O cloreto de sódio (NaCl), usado na conservação de alimentos a bordo de navios, apresenta qual tipo de ligação química e por quê?',
              alternativas: [
                'Covalente, pois o sódio compartilha elétrons com o cloro.',
                'Metálica, pois o sódio é um metal.',
                'Iônica, pois o sódio (metal) transfere um elétron para o cloro (ametal), formando íons Na⁺ e Cl⁻.',
                'Covalente dativa, pois o cloro doa um par de elétrons para o sódio.',
                'Metálica, pois ambos os elementos conduzem eletricidade.'
              ],
              correta: 2,
              explicacao: 'O NaCl é formado pela reação entre sódio (metal alcalino — família 1A) e cloro (halogênio — família 7A, ametal). A regra: metal + ametal → ligação IÔNICA. O Na perde 1 elétron (vira Na⁺) e o Cl ganha 1 elétron (vira Cl⁻) — ambos atingem a configuração estável de gás nobre. Alternativa C.'
            },
            {
              titulo: 'Lei de Lavoisier: balanceamento e conservação',
              nivel_dificuldade: 2,
              pergunta: 'Na reação de formação da água: H₂ + O₂ → H₂O (não balanceada). Qual é a equação corretamente balanceada e qual lei justifica a necessidade do balanceamento?',
              alternativas: [
                '2H₂ + O₂ → 2H₂O — justificada pela Lei de Lavoisier (conservação das massas).',
                'H₂ + O₂ → H₂O — a equação já está balanceada.',
                'H₂ + O₂ → H₂O₂ — o produto correto é o peróxido de hidrogênio.',
                '4H₂ + 2O₂ → 4H₂O — única forma correta de balancear a equação.',
                '2H₂ + 2O₂ → 2H₂O — equação corretamente balanceada.'
              ],
              correta: 0,
              explicacao: 'Balanceamento: à esquerda há 2 átomos de H (em H₂) e 2 átomos de O (em O₂). Para equilibrar, precisamos de 2 moléculas de H₂ e 2 átomos de H por lado: 2H₂ + O₂ → 2H₂O. Verificação: 4H + 2O (reagentes) = 4H + 2O (produtos). A Lei de Lavoisier (conservação das massas) exige que o número de átomos de cada elemento seja igual antes e depois da reação. Alternativa A.'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 3. LÍNGUA PORTUGUESA E INGLÊS
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Língua Portuguesa e Inglês',
      modulos: [
        {
          nome: 'Interpretação de Texto em Português',
          descricao: 'Leitura e interpretação de textos narrativos, descritivos e informativos. Identificação de ideias principais e secundárias, inferência, vocabulário em contexto e coerência textual.',
          pilulas: [
            {
              titulo: 'Interpretação textual para o CN: ler com precisão e responder com segurança',
              nivel_profundidade: 1,
              texto: 'O Colégio Naval seleciona jovens que saibam ler com precisão — uma habilidade fundamental para quem um dia interpretará ordens de navegação, relatórios técnicos e documentos oficiais.\n\nESTRATÉGIA DE LEITURA em 4 passos:\n1. LEITURA RÁPIDA: percorra o texto para ter uma ideia geral do assunto. Não se prenda a palavras desconhecidas nesse primeiro momento.\n2. LEITURA DAS QUESTÕES: leia as perguntas antes de ler o texto em detalhes. Isso direciona sua atenção durante a leitura completa.\n3. LEITURA DETALHADA: releia o texto buscando as informações pedidas nas questões. Marque as passagens relevantes.\n4. VERIFICAÇÃO: ao responder, confirme que a resposta está sustentada pelo texto — não pela sua opinião pessoal.\n\nArmadilhas comuns nas provas do CN:\n• Alternativas que extrapolam o texto: trazem informação verdadeira, mas que NÃO está no texto.\n• Alternativas com distorção parcial: pegam uma ideia do texto mas mudam um detalhe (geralmente uma palavra absoluta como "sempre" ou "apenas").\n• Confusão entre causa e consequência: o texto diz "X porque Y" e a alternativa errada inverte dizendo "Y porque X".\n\nVocabulário em contexto: quando a questão pede o significado de uma palavra, releia a frase inteira para entender o sentido no contexto — uma mesma palavra pode ter significados diferentes em situações diferentes.'
            }
          ],
          exercicios: [
            {
              titulo: 'Identificação da ideia principal do texto',
              nivel_dificuldade: 1,
              pergunta: 'Leia o texto: "A Marinha do Brasil protege mais de 7.400 km de costa, vigia as fronteiras fluviais e garante a soberania nas águas nacionais. Para isso, conta com profissionais altamente treinados, embarcações modernas e tecnologia de ponta. Quem serve à Marinha escolhe uma carreira de responsabilidade, dedicação e orgulho nacional." Qual é a ideia principal do texto?',
              alternativas: [
                'O Brasil possui 7.400 km de costa que precisam de proteção.',
                'A Marinha usa tecnologia avançada em suas operações.',
                'A Marinha do Brasil é uma instituição que protege o território nacional e oferece uma carreira de responsabilidade e prestígio.',
                'Apenas profissionais muito treinados podem servir na Marinha.',
                'A Marinha é responsável exclusivamente pela proteção da costa brasileira.'
              ],
              correta: 2,
              explicacao: 'A ideia principal abarca todos os parágrafos: o texto fala da missão da Marinha (proteger fronteiras), dos meios utilizados (profissionais e tecnologia) e do significado da carreira (responsabilidade e orgulho). A alternativa C sintetiza esses três aspectos. As demais alternativas retomam apenas um detalhe do texto. Alternativa C.'
            },
            {
              titulo: 'Inferência de vocabulário em contexto',
              nivel_dificuldade: 1,
              pergunta: 'No trecho "O capitão era reconhecido pela sua postura íntegra — nunca abria mão de seus princípios, mesmo sob pressão.", a palavra "íntegra" pode ser substituída, sem alterar o sentido, por:',
              alternativas: [
                'Agressiva',
                'Inteligente',
                'Honesta e de caráter inabalável',
                'Elegante e bem-vestida',
                'Rigorosa e severa com a tripulação'
              ],
              correta: 2,
              explicacao: '"Íntegro" significa honesto, de caráter firme, que não se dobra diante de pressões externas. O contexto reforça esse sentido: "nunca abria mão de seus princípios, mesmo sob pressão". A alternativa C ("honesta e de caráter inabalável") captura exatamente esse significado. Alternativa C.'
            }
          ]
        },
        {
          nome: 'Inglês Básico — Vocabulário e Gramática Essencial (Reading)',
          descricao: 'Reading comprehension: understanding the main idea, specific information and vocabulary in context. Essential grammar: simple present, simple past, modal verbs (can, must, should). Nautical and everyday vocabulary.',
          pilulas: [
            {
              titulo: 'English for the Colégio Naval: reading strategies and essential grammar',
              nivel_profundidade: 1,
              texto: 'O Colégio Naval cobra inglês com foco em leitura (reading comprehension) — a habilidade mais importante para quem vai trabalhar com documentação técnica naval em idioma estrangeiro.\n\nESTRATÉGIA DE LEITURA EM INGLÊS:\n• Skimming: leitura rápida para entender o assunto geral. Leia o título, a primeira frase de cada parágrafo e a conclusão.\n• Scanning: leitura em busca de informação específica (nome, data, número). Deixe os olhos percorrerem o texto até encontrar o que procura.\n• Quando não souber uma palavra, use o CONTEXTO para inferir o significado.\n\nGRAMÁTICA ESSENCIAL:\n• Simple Present: uso para fatos, rotinas e verdades gerais. He/She/It recebe -s no verbo (He works, She reads). Negativa: do/does + not + verbo base.\n• Simple Past: ações concluídas. Verbos regulares recebem -ed (worked, visited). Verbos irregulares têm forma própria (go → went, see → saw, have → had).\n• Modal verbs: CAN (habilidade: "I can navigate"), MUST (obrigação: "You must wear the uniform"), SHOULD (recomendação: "You should study every day").\n\nVOCABULÁRIO NÁUTICO BÁSICO:\n• ship / vessel = navio | sailor / seaman = marinheiro | officer = oficial\n• deck = convés | port = bombordo (lado esquerdo) | starboard = estibordo (direito)\n• anchor = âncora | navigation = navegação | coast = costa | harbor = porto\n\nDica: nas questões de inglês do CN, o gabarito quase sempre está diretamente no texto — leitura atenta e vocabulário básico são suficientes. Não tente responder de memória; volte sempre ao texto.'
            }
          ],
          exercicios: [
            {
              titulo: 'Reading comprehension: main idea of the text',
              nivel_dificuldade: 1,
              pergunta: 'Read the text and answer the question:\n\n"The Brazilian Navy has one of the largest fleets in Latin America. It is responsible for protecting the country\'s coastline, rivers, and lakes. Navy officers and sailors are trained in special schools and must follow strict rules of discipline and honor. Serving in the Navy is considered a great privilege and responsibility."\n\nWhat is the main idea of the text?\n\n(Qual é a ideia principal do texto? — Escolha a alternativa correta em inglês.)',
              alternativas: [
                'The Brazilian Navy is the largest in the world.',
                'Navy officers study in many different schools across Brazil.',
                'The Brazilian Navy protects national waters and requires disciplined, dedicated professionals.',
                'Serving in the Navy is easy and requires no special training.',
                'Rivers and lakes are the most important areas protected by the Navy.'
              ],
              correta: 2,
              explicacao: 'A ideia principal abrange os pontos centrais do texto: a missão da Marinha (proteger costa, rios e lagos) e o perfil exigido de seus membros (treinados, disciplinados, com senso de responsabilidade). A alternativa C sintetiza esses dois aspectos. A alternativa A exagera ("largest in the world" — o texto diz "Latin America"). As demais capturam apenas detalhes secundários. Alternativa C. (Em português: O texto fala sobre a missão da Marinha de proteger as águas nacionais e sobre a exigência de disciplina e responsabilidade de seus profissionais.)'
            },
            {
              titulo: 'Grammar: choosing the correct modal verb',
              nivel_dificuldade: 1,
              pergunta: 'Choose the sentence with the CORRECT use of the modal verb:\n\n(Escolha a frase com o uso CORRETO do verbo modal — o gabarito está comentado em português.)',
              alternativas: [
                'All sailors must wears the official uniform during inspections.',
                'All sailors must wear the official uniform during inspections.',
                'All sailors musts wear the official uniform during inspections.',
                'All sailors can must wear the official uniform during inspections.',
                'All sailors should wears the official uniform during inspections.'
              ],
              correta: 1,
              explicacao: 'Regra dos verbos modais em inglês: MODAL VERB + verbo base (sem to, sem -s, sem -ing). "Must" expressa obrigação, e o verbo que o segue deve estar na forma base: "must wear" (correto). Na alternativa A: "must wears" — incorreto (wears tem o -s de terceira pessoa, mas após modal não se usa). Na C: "musts" — incorreto (verbos modais nunca recebem -s). Na D: dois modais juntos (can + must) — impossível em inglês. Na E: "should wears" — mesmo erro da A. (Em português: após qualquer verbo modal — can, must, should, will, would — o verbo principal sempre fica na forma base, sem alterações.)'
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
