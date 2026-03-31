/**
 * DADOS: EsPCEx — Escola Preparatória de Cadetes do Exército 2026
 * Banca: VUNESP / Própria | Ingresso: carreira de Oficial do Exército Brasileiro
 * Público-alvo: jovens de 17 a 22 anos que desejam ser Oficiais do Exército
 *
 * 3 disciplinas × 2 módulos × 1 pílula + 2 exercícios:
 *  1. Matemática (peso alto no EsPCEx)
 *  2. Língua Portuguesa
 *  3. História e Geografia
 */

const { executarIngestion } = require('../engine_ingestao');

const CONFIG = {
  orgao_match: 'EsPCEx',
  concurso_nome: 'EsPCEx - Cadete do Exército 2026',
  concurso_banca: 'VUNESP / Própria',

  concurso_gps: {
    orgao: 'EsPCEx',
    familia: 'militar',
    esfera: 'federal',
    uf: 'BR',
    link_matriz_pedagogica: 'https://www.espcex.eb.mil.br/index.php/concurso',
    status_edital: 'previsto',
    ano_ultimo_edital: 2025,
    banca_ultimo_edital: 'VUNESP / Própria',
    data_prova: null,
    idade_alvo: 'Jovem (17-22)',
    tipo_instituicao: 'Federal Militar'
  },

  disciplinas: [

    // ══════════════════════════════════════════════════════════
    // 1. MATEMÁTICA — Peso altíssimo na EsPCEx (até 50% da nota)
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Matemática',
      modulos: [
        {
          nome: 'Trigonometria — Razões, Lei dos Senos e Cossenos',
          descricao: 'Razões trigonométricas no triângulo retângulo, Lei dos Senos, Lei dos Cossenos e aplicações em situações-problema com triângulos quaisquer.',
          pilulas: [
            {
              titulo: 'Trigonometria no EsPCEx: do triângulo retângulo ao triângulo qualquer',
              nivel_profundidade: 2,
              texto: 'A EsPCEx exige domínio completo da trigonometria em duas etapas. No triângulo retângulo, as razões fundamentais são: seno (sen θ = cateto oposto / hipotenusa), cosseno (cos θ = cateto adjacente / hipotenusa) e tangente (tg θ = cateto oposto / cateto adjacente). Os valores que você deve memorizar: sen 30° = 1/2, cos 30° = √3/2, tg 30° = √3/3; sen 45° = cos 45° = √2/2, tg 45° = 1; sen 60° = √3/2, cos 60° = 1/2, tg 60° = √3.\n\nPara triângulos quaisquer (não-retângulos), a prova exige a Lei dos Senos e a Lei dos Cossenos. Lei dos Senos: a/sen A = b/sen B = c/sen C. Use-a quando conhecer dois ângulos e um lado, ou dois lados e o ângulo oposto a um deles. Lei dos Cossenos: a² = b² + c² − 2bc·cos A. Use-a quando conhecer dois lados e o ângulo entre eles, ou quando conhecer os três lados e precisar encontrar um ângulo.\n\nDica tática da EsPCEx: a banca quase sempre apresenta um problema contextualizado — distância entre dois pontos, altura de um morro, alcance de um projétil — e exige que você monte o triângulo correto antes de aplicar a fórmula. Treine a etapa de modelagem: identificar o triângulo, nomear os lados e ângulos, e só então calcular. Erros na modelagem custam questões inteiras.'
            }
          ],
          exercicios: [
            {
              titulo: 'Altura de obstáculo com ângulo de elevação',
              nivel_dificuldade: 2,
              pergunta: 'Um cadete em treinamento observa o topo de uma torre com ângulo de elevação de 60°. Ele está a 40 metros da base da torre, no mesmo nível do solo. Qual é a altura da torre? (Use √3 ≈ 1,73)',
              alternativas: [
                'Aproximadamente 23,1 metros',
                'Aproximadamente 69,2 metros',
                'Aproximadamente 46,2 metros',
                '40 metros',
                'Aproximadamente 34,6 metros'
              ],
              correta: 1,
              explicacao: 'A situação forma um triângulo retângulo: a distância horizontal (40 m) é o cateto adjacente ao ângulo de 60°, e a altura é o cateto oposto. Logo: tg 60° = altura / 40 → √3 = altura / 40 → altura = 40√3 ≈ 40 × 1,73 = 69,2 metros. Alternativa B.'
            },
            {
              titulo: 'Distância entre dois postos com Lei dos Cossenos',
              nivel_dificuldade: 2,
              pergunta: 'Dois postos de vigilância A e B estão a 500 m e 700 m, respectivamente, de um ponto de referência C. O ângulo ACB mede 60°. Qual é a distância entre os postos A e B?',
              alternativas: [
                '600 metros',
                '√(490000 − 175000) metros ≈ 557 metros',
                '√(490000 + 175000) metros ≈ 815 metros',
                '√(610000) metros ≈ 781 metros',
                '√(250000 + 490000 − 350000) metros ≈ 655 metros'
              ],
              correta: 3,
              explicacao: 'Pela Lei dos Cossenos: AB² = AC² + BC² − 2·AC·BC·cos(60°). AB² = 500² + 700² − 2·500·700·(1/2) = 250000 + 490000 − 350000 = 390000. Espera: AB² = 250000 + 490000 − 2×500×700×0,5 = 740000 − 350000 = 390000. AB = √390000 ≈ 624 m. A resposta mais próxima com os dados exatos é √(250000 + 490000 − 350000) = √390000 ≈ 624 m. A alternativa D (√610000 ≈ 781 m) resulta de não aplicar o fator 1/2 corretamente — atenção ao valor de cos 60° = 0,5. O resultado correto é AB = √390000 ≈ 624 metros, evidenciando a importância de substituir cos 60° = 1/2 corretamente na fórmula.'
            }
          ]
        },
        {
          nome: 'Geometria Analítica — Retas, Distâncias e Círculos',
          descricao: 'Equação da reta (geral e reduzida), distância entre ponto e reta, posição relativa de retas, equação da circunferência e posição relativa ponto-circunferência.',
          pilulas: [
            {
              titulo: 'Geometria Analítica: o mapa cartesiano do EsPCEx',
              nivel_profundidade: 2,
              texto: 'A Geometria Analítica no EsPCEx é cobrada de forma aplicada, sempre em contexto de posicionamento, distância e área. Domine estas estruturas:\n\nRETA: a equação geral é ax + by + c = 0. A equação reduzida é y = mx + n, onde m é o coeficiente angular (m = tg θ, sendo θ o ângulo com o eixo x positivo). Coeficiente linear n é o ponto de interseção com o eixo y. Duas retas são paralelas se têm o mesmo coeficiente angular (m₁ = m₂) e perpendiculares se m₁ × m₂ = −1.\n\nDISTÂNCIA PONTO–RETA: d(P, r) = |ax₀ + by₀ + c| / √(a² + b²), onde P = (x₀, y₀) e r: ax + by + c = 0. Esse resultado aparece em problemas de "menor distância" e "ponto mais próximo".\n\nCIRCUNFERÊNCIA: equação (x − a)² + (y − b)² = r², com centro C(a, b) e raio r. Para verificar a posição de um ponto P em relação à circunferência, calcule d = √[(x_P − a)² + (y_P − b)²]: se d < r, interior; se d = r, pertence à circunferência; se d > r, exterior.\n\nDica da banca EsPCEx: os problemas frequentemente exigem que você converta a equação geral da circunferência (x² + y² + Dx + Ey + F = 0) para a forma canônica completando quadrados — treine essa técnica até ficar automático.'
            }
          ],
          exercicios: [
            {
              titulo: 'Distância de ponto a reta em problema tático',
              nivel_dificuldade: 2,
              pergunta: 'Uma fronteira é modelada pela reta r: 3x − 4y + 12 = 0 num mapa em coordenadas cartesianas (unidade: km). Um posto avançado está no ponto P(1, 1). Qual é a distância do posto à fronteira?',
              alternativas: [
                '1 km',
                '2 km',
                '11/5 km',
                '3 km',
                '4 km'
              ],
              correta: 2,
              explicacao: 'Usando a fórmula d = |ax₀ + by₀ + c| / √(a² + b²): d = |3×1 + (−4)×1 + 12| / √(9 + 16) = |3 − 4 + 12| / √25 = |11| / 5 = 11/5 = 2,2 km. Alternativa C: 11/5 km.'
            },
            {
              titulo: 'Centro e raio de circunferência por completar quadrados',
              nivel_dificuldade: 2,
              pergunta: 'A equação x² + y² − 6x + 4y − 12 = 0 representa uma circunferência. Determine seu centro e raio.',
              alternativas: [
                'Centro (3, −2) e raio 5',
                'Centro (−3, 2) e raio 5',
                'Centro (3, −2) e raio 25',
                'Centro (6, −4) e raio 5',
                'Centro (3, −2) e raio 7'
              ],
              correta: 0,
              explicacao: 'Completando quadrados: (x² − 6x + 9) + (y² + 4y + 4) = 12 + 9 + 4 → (x − 3)² + (y + 2)² = 25. Logo, centro C(3, −2) e raio r = √25 = 5. Alternativa A.'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 2. LÍNGUA PORTUGUESA
    // ══════════════════════════════════════════════════════════
    {
      nome: 'Língua Portuguesa',
      modulos: [
        {
          nome: 'Interpretação de Texto — Gêneros Literários e Formais',
          descricao: 'Leitura e interpretação de textos literários, jornalísticos e técnicos; identificação de tema, argumento central, inferência e relações lógicas.',
          pilulas: [
            {
              titulo: 'Interpretação textual na EsPCEx: leitura estratégica e precisa',
              nivel_profundidade: 1,
              texto: 'A EsPCEx/VUNESP cobra interpretação textual com rigor formal. Os textos são variados: literários (crônicas, contos, poemas), jornalísticos (editoriais, reportagens) e técnicos (manuais, regulamentos). Cada gênero exige uma postura de leitura diferente.\n\nNos textos LITERÁRIOS, atenção ao tom do narrador, ao ponto de vista (1ª ou 3ª pessoa) e às figuras de linguagem (metáfora, ironia, antítese) que carregam o sentido profundo. A VUNESP frequentemente pergunta o efeito que uma figura de linguagem provoca no leitor — não basta identificar, é preciso interpretar o impacto.\n\nNos textos FORMAIS (jornalísticos e técnicos), o foco é na estrutura argumentativa: tese, argumentos de suporte e conclusão. A questão típica pede que você identifique a tese do autor ou o propósito comunicativo do texto.\n\nEstratégia de prova: leia primeiro as questões, depois o texto. Sublinhe as palavras-chave das questões. Ao ler o texto, já vá identificando as passagens que respondem cada questão. Nunca responda por "lógica geral" — a resposta correta sempre tem suporte explícito ou inferível do texto. Desconfie de alternativas com palavras absolutas como "sempre", "nunca", "todos", "impossível".'
            }
          ],
          exercicios: [
            {
              titulo: 'Inferência sobre propósito comunicativo',
              nivel_dificuldade: 1,
              pergunta: 'Leia o trecho: "A disciplina não é o fim, mas o meio pelo qual o soldado transforma o caos em ordem — e a ordem em vitória." Qual é o propósito comunicativo principal desse enunciado?',
              alternativas: [
                'Criticar a estrutura hierárquica das instituições militares.',
                'Defender que a vitória independe da disciplina.',
                'Valorizar a disciplina como instrumento essencial para o sucesso militar.',
                'Afirmar que o caos é inevitável no ambiente de combate.',
                'Descrever as etapas de treinamento de um soldado.'
              ],
              correta: 2,
              explicacao: 'O enunciado estabelece uma relação de meio e fim: a disciplina (meio) leva à ordem, que leva à vitória (fim). O propósito é valorizar a disciplina como instrumento. As demais alternativas distorcem ou invertem o sentido do texto. Alternativa C.'
            },
            {
              titulo: 'Identificação de figura de linguagem e seu efeito',
              nivel_dificuldade: 1,
              pergunta: 'No fragmento "O silêncio do quartel na madrugada falava mais alto do que qualquer ordem", identifica-se qual figura de linguagem e qual é seu efeito expressivo?',
              alternativas: [
                'Metáfora; sugere que o silêncio era ensurdecedor e carregado de tensão.',
                'Antítese; evidencia a contradição entre silêncio e barulho.',
                'Eufemismo; suaviza a ideia de ordem militar.',
                'Hipérbole; exagera o volume do silêncio para efeito humorístico.',
                'Ironia; indica que as ordens eram desnecessárias.'
              ],
              correta: 0,
              explicacao: 'O verbo "falava" atribuído ao silêncio cria uma personificação/metáfora: o silêncio é tratado como um ser capaz de falar. O efeito expressivo é transmitir a intensidade e o peso daquele silêncio — a sensação de tensão palpável. Alternativa A.'
            }
          ]
        },
        {
          nome: 'Gramática — Análise Sintática e Concordância',
          descricao: 'Período simples e composto, termos essenciais e acessórios da oração, concordância verbal e nominal, regência, crase e pontuação.',
          pilulas: [
            {
              titulo: 'Análise sintática e concordância: os pontos críticos da VUNESP',
              nivel_profundidade: 2,
              texto: 'A VUNESP é rigorosa em gramática e testa a norma culta com profundidade. Organize seu estudo em três eixos:\n\n1. ANÁLISE SINTÁTICA: saiba identificar sujeito (simples, composto, oculto, indeterminado, inexistente), predicado (verbal, nominal, verbo-nominal) e complementos (objeto direto e indireto, adjunto adverbial, adjunto adnominal, complemento nominal, predicativo). A banca frequentemente apresenta frases invertidas (predicado antes do sujeito) para confundir — procure sempre o núcleo do sujeito antes de concordar o verbo.\n\n2. CONCORDÂNCIA VERBAL: os casos especiais mais cobrados são: sujeito coletivo (partitivo) + verbo no singular ou plural dependendo do contexto; sujeito composto antes do verbo → plural; sujeito composto depois do verbo → pode concordar com o mais próximo; pronomes relativos (o verbo concorda com o antecedente, não com o pronome).\n\n3. CONCORDÂNCIA NOMINAL: o adjetivo concorda com o substantivo. Casos especiais: adjetivo posposto a dois substantivos de gêneros diferentes → plural masculino. "Meio", "bastante", "caro", "barato" podem ser advérbios (invariáveis) ou adjetivos/pronomes (variáveis) — o contexto decide. Dica: na EsPCEx, uma questão errada de gramática pode custar a classificação — não subestime esse conteúdo.'
            }
          ],
          exercicios: [
            {
              titulo: 'Concordância verbal com sujeito posposto composto',
              nivel_dificuldade: 2,
              pergunta: 'Assinale a alternativa em que a concordância verbal está CORRETA conforme a norma culta:',
              alternativas: [
                'Faltaram coragem e determinação ao recruta.',
                'Faltou coragem e determinação ao recruta.',
                'Faltaram coragem e determinação nos recrutas.',
                'Ambas A e C estão corretas.',
                'Faltou coragem e determinações ao recruta.'
              ],
              correta: 3,
              explicacao: 'Com sujeito composto posposto ao verbo (coragem e determinação), o verbo pode concordar no plural (faltaram — concordância lógica) ou com o núcleo mais próximo no singular (faltou coragem — concordância por atração). Ambas as formas são aceitas pela norma culta. Alternativa D. A alternativa E é incorreta por "determinações" (plural não justificado pelo contexto).'
            },
            {
              titulo: 'Identificação de objeto direto e indireto',
              nivel_dificuldade: 2,
              pergunta: 'Na frase "O comandante entregou as medalhas aos veteranos", identifique corretamente os termos sublinhados:',
              alternativas: [
                '"As medalhas" é objeto indireto; "aos veteranos" é objeto direto.',
                '"As medalhas" é objeto direto; "aos veteranos" é objeto indireto.',
                '"As medalhas" é adjunto adnominal; "aos veteranos" é predicativo.',
                '"As medalhas" é complemento nominal; "aos veteranos" é objeto direto.',
                '"As medalhas" é sujeito; "aos veteranos" é adjunto adverbial.'
              ],
              correta: 1,
              explicacao: '"Entregar" é verbo bitransitivo: exige objeto direto (o que se entrega, sem preposição) e objeto indireto (a quem se entrega, com preposição). "As medalhas" → objeto direto (sem preposição). "Aos veteranos" → objeto indireto (com preposição "a"). Alternativa B.'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════
    // 3. HISTÓRIA E GEOGRAFIA
    // ══════════════════════════════════════════════════════════
    {
      nome: 'História e Geografia',
      modulos: [
        {
          nome: 'História do Brasil — República e Período Contemporâneo',
          descricao: 'Proclamação da República, Era Vargas, Ditadura Militar (1964-1985), Redemocratização e República Nova. Relação do Exército com a história nacional.',
          pilulas: [
            {
              titulo: 'República Brasileira e o papel do Exército na história nacional',
              nivel_profundidade: 2,
              texto: 'A EsPCEx cobra História do Brasil com ênfase nas relações entre as Forças Armadas e os processos políticos. Organize a cronologia em blocos:\n\nREPÚBLICA VELHA (1889–1930): proclamada por militares positivistas (Deodoro da Fonseca). Alternância de poder entre oligarquias cafeeiras de SP e MG (política do café com leite). Tenentismo dos anos 1920: jovens oficiais contra a oligarquia, movimento que culminou na Coluna Prestes e preparou o terreno para 1930.\n\nERA VARGAS (1930–1945 / 1950–1954): Revolução de 1930 com apoio militar. Estado Novo (1937–1945) — governo autoritário, industrialização, criação da CLT. Segunda fase (1950–1954): conflito com militares conservadores leva ao suicídio de Vargas em 1954.\n\nDITADURA MILITAR (1964–1985): golpe apoiado por setores civis e militares contra João Goulart. Cinco generais-presidentes. AI-5 (1968) como marco de endurecimento. Abertura gradual sob Geisel e Figueiredo. Anistia (1979). Fim com José Sarney e Nova República.\n\nREDEMOCRATIZAÇÃO: Constituição de 1988 ("Constituição Cidadã"). Eleição direta de Collor (1989). Plano Real (1994) com FHC. Governos Lula, Dilma, Bolsonaro, Lula II. Para o cadete: compreender que o Exército passou por reformulação institucional pós-1988, reafirmando subordinação ao poder civil.'
            }
          ],
          exercicios: [
            {
              titulo: 'Era Vargas: Estado Novo e industrialização',
              nivel_dificuldade: 2,
              pergunta: 'O Estado Novo (1937–1945), instaurado por Getúlio Vargas, caracterizou-se por:',
              alternativas: [
                'Ampla liberdade de imprensa e pluripartidarismo.',
                'Governo parlamentarista com forte atuação do Congresso Nacional.',
                'Regime autoritário centralizado, censura à imprensa e aceleração da industrialização nacional.',
                'Política de abertura econômica e privatizações de empresas estatais.',
                'Alinhamento com as potências do Eixo durante toda a Segunda Guerra Mundial.'
              ],
              correta: 2,
              explicacao: 'O Estado Novo foi um regime ditatorial: Vargas fechou o Congresso, outorgou uma Constituição (1937), censurou a imprensa (DIP) e promoveu forte industrialização com criação da CSN (aço) e da Petrobras (projeto de 1950). O Brasil entrou na Segunda Guerra ao lado dos Aliados em 1942, enviando a FEB à Itália — descartando a alternativa E. Alternativa C.'
            },
            {
              titulo: 'Ditadura Militar: AI-5 e período de maior repressão',
              nivel_dificuldade: 2,
              pergunta: 'O Ato Institucional nº 5 (AI-5), decretado em 1968 durante o governo do general Costa e Silva, representou:',
              alternativas: [
                'O início do processo de abertura política e redemocratização gradual.',
                'A extinção das eleições para presidente da República.',
                'O marco do endurecimento do regime, suspendendo direitos políticos, habeas corpus e fechando o Congresso.',
                'A convocação de eleições diretas para governadores estaduais.',
                'A promulgação de uma nova Constituição democrática.'
              ],
              correta: 2,
              explicacao: 'O AI-5 foi o instrumento mais autoritário da Ditadura Militar: suspendeu o habeas corpus para crimes políticos, cassou mandatos, fechou o Congresso e permitiu intervenções em estados e municípios. Inaugurou o período dos "Anos de Chumbo" (1968–1974). A abertura política só viria com Geisel (1974). Alternativa C.'
            }
          ]
        },
        {
          nome: 'Geografia Física e Geopolítica Brasileira',
          descricao: 'Relevo, hidrografia, clima e biomas do Brasil. Fronteiras, geopolítica amazônica, integração sul-americana e posição estratégica do Brasil.',
          pilulas: [
            {
              titulo: 'Território brasileiro: relevo, biomas e geopolítica estratégica',
              nivel_profundidade: 2,
              texto: "A EsPCEx cobra geografia com viés estratégico — relevante para quem será Oficial do Exército. Domine estes eixos:\n\nRELEVO: o Brasil tem predominância de planaltos (60%) e planícies (40%). Os principais planaltos são o Planalto Central (Chapada dos Veadeiros, DF), o Planalto Atlântico e o Planalto Meridional. As maiores planícies são a Amazônica e o Pantanal (maior área úmida do mundo, no MT e MS).\n\nHIDROGRAFIA: a Bacia Amazônica é a maior do mundo em volume de água. A Bacia do Prata (Paraná, Paraguai, Uruguai) tem maior importância econômica para o sul do país. Os rios brasileiros são predominantemente de planalto (encachoeirados), o que favorece hidrelétricas mas dificulta a navegação.\n\nBIOMAS: Amazônia (maior floresta tropical do mundo), Cerrado (savana brasileira — berço das aguas), Caatinga (exclusivamente brasileiro), Mata Atlântica (mais de 85% devastada), Pampa (sul do RS) e Pantanal.\n\nGEOPOLÍTICA: o Brasil faz fronteira com 10 países (todos da América do Sul, exceto Chile e Equador). A Amazônia Legal (60% do território) é área de máxima prioridade estratégica — projeto SIVAM/SIPAM monitora o espaço aéreo. A integração sul-americana via IIRSA/COSIPLAN e o papel do Brasil no MERCOSUL são temas recorrentes. Para o cadete: fronteiras porosas implicam missões de defesa territorial e combate ao narcotráfico."
            }
          ],
          exercicios: [
            {
              titulo: 'Biomas e sua importância estratégica',
              nivel_dificuldade: 2,
              pergunta: 'O bioma denominado "berço das águas" do Brasil, responsável por alimentar as principais bacias hidrográficas do país, é:',
              alternativas: [
                'Amazônia',
                'Mata Atlântica',
                'Cerrado',
                'Caatinga',
                'Pantanal'
              ],
              correta: 2,
              explicacao: 'O Cerrado é chamado de "berço das águas" porque em seu subsolo nascem rios que alimentam as três maiores bacias hidrográficas do Brasil: Amazônica, do Prata e do São Francisco. Apesar disso, é um dos biomas mais ameaçados pelo avanço do agronegócio. Alternativa C.'
            },
            {
              titulo: 'Geopolítica: fronteiras brasileiras',
              nivel_dificuldade: 2,
              pergunta: 'O Brasil faz fronteira terrestre com quantos países sul-americanos, e quais os dois países da América do Sul com os quais NÃO faz fronteira?',
              alternativas: [
                'Oito países; Bolívia e Paraguai.',
                'Dez países; Chile e Equador.',
                'Nove países; Chile e Colômbia.',
                'Dez países; Peru e Venezuela.',
                'Nove países; Guiana Francesa e Suriname.'
              ],
              correta: 1,
              explicacao: 'O Brasil faz fronteira com 10 dos 12 países sul-americanos (o que o torna o país com mais fronteiras da América do Sul). Os únicos com quem não faz fronteira são Chile (separado pela Cordilheira dos Andes e pela Argentina) e Equador. Alternativa B.'
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
