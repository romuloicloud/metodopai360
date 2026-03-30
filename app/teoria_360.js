// Motor Híbrido: Teoria Áudio-Guiada + Exercícios de Fixação Imediata
let teoriaData = [];
let currentIndex = 0;
let synth = window.speechSynthesis;
let isPlaying = false;
let resolvidaPillAtual = false;
let nivelProfundidadeAtual = 4; // Básico forjado = levels 1 to 4 in code.
let supabaseClient = null;

// Trilha Híbrida de Lançamento (Teoria + Fixação Intercalados)

// ── Carregador Principal: DB → Fallback Algorítmico ─────────────────────────

async function carregarPilulasDB(gpsId, topicoNome) {
    try {
        // 1. Resolve GPS UUID → concurso_ref_id (ponte)
        const { data: gpsData, error: gpsError } = await supabaseClient
            .from('concursos_gps')
            .select('concurso_ref_id')
            .eq('id', gpsId)
            .single();

        if (gpsError || !gpsData?.concurso_ref_id) {
            console.warn("[FORJA] GPS sem ponte para concurso. Usando fallback algorítmico.");
            return false;
        }
        const concursoId = gpsData.concurso_ref_id;

        // 2. Busca disciplinas do concurso → modulo_ids
        const { data: discs, error: discError } = await supabaseClient
            .from('disciplinas')
            .select('id')
            .eq('concurso_id', concursoId);

        if (discError || !discs || discs.length === 0) return false;
        const discIds = discs.map(d => d.id);

        // 3. Encontra o módulo pelo nome do tópico
        const { data: modulos, error: modError } = await supabaseClient
            .from('modulos')
            .select('id, nome')
            .in('disciplina_id', discIds)
            .ilike('nome', `%${topicoNome}%`)
            .limit(1);

        if (modError || !modulos || modulos.length === 0) {
            console.warn(`[FORJA] Módulo '${topicoNome}' não encontrado no banco. Usando fallback.`);
            return false;
        }
        const modId = modulos[0].id;
        console.log(`[FORJA] Módulo encontrado: ${modulos[0].nome} (${modId})`);

        // 4. Carrega pílulas + exercícios em paralelo
        const [resPilulas, resExercicios] = await Promise.all([
            supabaseClient.from('pilulas_forja').select('*').eq('modulo_id', modId).order('nivel_profundidade', { ascending: true }),
            supabaseClient.from('exercicios_forja').select('*').eq('modulo_id', modId).order('nivel_dificuldade', { ascending: true })
        ]);

        if (resPilulas.error || !resPilulas.data || resPilulas.data.length === 0) {
            console.warn("[FORJA] Nenhuma pílula encontrada no banco. Usando fallback.");
            return false;
        }

        // 5. Tece no formato T.P.T.P (Teoria → Exercício intercalados)
        teoriaData = [];
        resPilulas.data.forEach(p => {
            teoriaData.push({ type: 'teoria', titulo: p.titulo, texto: p.texto });

            const pExs = (resExercicios.data || []).filter(ex => ex.pilula_id === p.id);
            pExs.forEach(e => {
                teoriaData.push({
                    type: 'exercicio',
                    titulo: e.titulo,
                    texto: e.pergunta,
                    alternativas: Array.isArray(e.alternativas) ? e.alternativas : JSON.parse(e.alternativas || '[]'),
                    correta: e.correta,
                    explicacao: e.explicacao
                });
            });
        });

        console.log(`[FORJA] ${teoriaData.length} itens carregados do banco para: ${topicoNome}`);
        return teoriaData.length > 0;

    } catch (err) {
        console.error("[FORJA] Erro ao carregar pílulas do banco:", err);
        return false;
    }
}

document.addEventListener('DOMContentLoaded', async () => {

    // Auth Supabase Silenciosa
    if (window.supabase && window.ENV) {
        supabaseClient = window.supabase.createClient(window.ENV.SUPABASE_URL, window.ENV.SUPABASE_ANON_KEY);
        console.log("[FORJA] Reator Supabase Operacional. Modos avançados liberados.");
    }

    const disciplina = sessionStorage.getItem('current_modulo_disciplina') || 'Geral';
    const topico = sessionStorage.getItem('current_modulo_topico') || 'Conceitos Iniciais';
    const gpsId = sessionStorage.getItem('recruta_concurso_id');

    // A Máquina da Forja: Fábrica Algorítmica de Doutrina Woven (T.P.T.P)
    function generateForgedContent(d, t) {
        let pills = [];
        const topicoLower = t.toLowerCase();
        
        // --- MICRO-ESPECIALIZAÇÃO: PORTUGUÊS (INTERPRETAÇÃO E COMPREENSÃO) ---
        if (topicoLower.includes("interpretação") || topicoLower.includes("compreensão")) {
            // T1
            pills.push({ type: 'teoria', titulo: `1. O MITO DA LEITURA ÚNICA`, texto: `Candidato, a interpretação da FGV não é literatura, é caça à informação. O avaliador te dá 10 parágrafos e esconde a resposta em um único advérbio na terceira linha. Nunca leia de forma passiva. Sublinhe rigorosamente as palavras de transição (mas, porém, embora). Elas invertem todo o sentido da oração base e lá reside o gabarito real.` });
            // P1
            pills.push({ type: 'exercicio', titulo: `TIRO DE FIXAÇÃO 01: TRANSIÇÃO`, texto: `Qual o papel letal da conjunção "todavia" no final de um parágrafo afirmativo extenso e emotivo?`, alternativas: ["Apenas alongar o texto para cansar o leitor na prova de domingo", "Invalidar ou limitar a afirmação principal feita imediatamente antes", "Confirmar e ratificar o argumento inicial do autor no texto denso", "Mudar o sujeito da frase sem alterar a tipificação do núcleo verbal principal"], correta: 1, explicacao: "Perfeito. As conjunções adversativas são a arma primária da banca para alterar a verdade. Fique frio e circule o 'todavia'." });

            // T2
            pills.push({ type: 'teoria', titulo: `2. COMANDO REVERSO: LEITURA TÁTICA`, texto: `O candidato civil lê o texto primeiro e a questão depois de perder 5 minutos preciosos. O Candidato Forjado lê a ÚLTIMA LINHA (a pergunta do examinador) primeiro, decodifica o alvo que está sendo cobrado, e SÓ ENTÃO invade o texto denso em missão de busca e apreensão. A leitura inversa economiza carga cognitiva massivamente.` });
            // P2
            pills.push({ type: 'exercicio', titulo: `TIRO DE FIXAÇÃO 02: INFERÊNCIA`, texto: `Se a questão exige militarmente "a inferência correta da narrativa", o que a banca espera arrancar de você na alternativa?`, alternativas: ["Que você re-escreva textualmente as linhas exatas do texto de apoio", "Que você deduza logicamente uma informação que NÃO está escrita claramente de propósito, mas que é a única consequência material", "Que você julgue se o autor está certo ou errado perante as suas convicções ideológicas", "Que você analise a coesão das vírgulas e as ramificações de classes gramaticais"], correta: 1, explicacao: "Inferência tática nunca é a cópia literal da linha cega. É empunhar a dedução lógica material puxada do fato não escrito, baseada nas pistas sem alucinar teses próprias." });

            // T3
            pills.push({ type: 'teoria', titulo: `3. ARMADILHAS DE POLISSEMIA INVISÍVEL`, texto: `A banca arma IEDs usando a mesma palavra popular com três significados diferentes. Na Alternativa A, joga-se o significado mais comum na cultura das ruas, mas no fundo texto suporte, a palavra atuou em sua segunda faceta oculta. Sempre substitua os sinônimos mentalmente no próprio parágrafo original de campo antes de arriscar e preencher o gabarito. Limpe seu pensamento popular na hora do teste linguístico e da prova.` });
            // P3
            pills.push({ type: 'exercicio', titulo: `VERIFICAÇÃO FOCADA DE POLISSEMIA`, texto: `O que significa a palavra restrita "Tático" estritamente e cruamente dentro de uma questão real de segurança pública?`, alternativas: ["Relativo a forças armadas agindo irrestritamente de viés ofensivo ilimitado", "Refere-se ao planejamento cirúrgico e execução metódica e engessada na técnica de incursão, com vistas a obter vantagem estratégica contra as adversidades", "Uso ininterrupto e contínuo de força letal irrefutável na totalidade da doutrina", "Recuo ideológico constante ou omissão controlada da força policial via expressas regulamentadas no estado do rio de janeiro"], correta: 1, explicacao: "Isso sela quem entende o código. Tática na corporação civil ou estendida é a aplicação estrita do Protocolo P.O.P. A força tem cérebro e direção. Essa resposta engloba a técnica O-Pai." });
        }
        // --- MICRO-ESPECIALIZAÇÃO: PORTUGUÊS (SINTAXE E REGÊNCIA) ---
        else if (topicoLower.includes("sintaxe") || topicoLower.includes("regência")) {
            // T1
            pills.push({ type: 'teoria', titulo: `1. O ENIGMA DA ORDEM INVERSA ESTATAL`, texto: `Candidato, a Sintaxe avaliada nas corporações policiais testa sob imensa pressão a sua capacidade de ver a "Vítima e o Agressor" na frase. E a FGV amarra as mãos de seus civis virando todos do avesso a ponta e o cabo. Sujeito de trás pra frente. Isole e transcreva mentalmente o sujeito ativo e passivo na ordem de ação 'Quem -> Para Que -> Verbo'. Nunca, em momento algum, marque um "A", "DE", "EM", num termo candidato à Sujeito. Acabou. O Sujeito não possui preposição grudada.` });
            // P1
            pills.push({ type: 'exercicio', titulo: `DISPARO 01: O ALVO SUJEITO`, texto: `Na oração realística de inquérito: "Aos soldados em diligência da 4ª DP, com preceito superior e hierarquia, foi conferida pelo braço Estatal a pesada missão preventiva de manutenção imediata do patrulhamento rotineiro na área de crise de conflito local". Identifique e expurgo os excessos para encontrar quem domina a ação verbal neutra passiva final. (Sujeito real passivo)`, alternativas: ["Aos soldados (que são os verdadeiros guerreiros alocados e tomam o protagonismo de atrito da ordem do estado soberano na ação da frase)", "A pesada missão preventiva de manutenção imediata do patrulhamento rotineiro (o verdadeiro pólo passivo que sofreu a imposição delegada que foi direcionada aos comandados na base da oração)", "Pelo braço Estatal com preceito superior", "O sujeito não existe. Estima-se oração subordinadada passiva fria sem demarcação gramatical lógica em português normativo por envolver agente da administração abstrato no momento do fato flagrado ali"], correta: 1, explicacao: "Regra seca engolida pelo civil: O sujeito de longe é 'A missão'. Foi ela que sofreu a passividade verbal e NUNCA contém preposição de encadeamento. Aos soldados tem o 'Ao'." });

            // T2
            pills.push({ type: 'teoria', titulo: `2. A DOENÇA DA VÍRGULA FATAL NO EDITAL`, texto: `A principal causa de mortandade na sintaxe gramatical seletiva militar é enbutir advérbios de 4 linhas pesadas entre as vírgulas dentro da divisão exata de concordância. Os sujeitos de plural são esticados para se distanciarem propositalmente quilômetros pra longe do Verbo conjugador com intuito visual de fazer seus olhos lerem a palavra falsa 'pluralizada' cega caindo fora da coesão. Puxe os núcleos e ligue as bordas isoladamente. Feche a mira nas bordadas.` });
            // P2
            pills.push({ type: 'exercicio', titulo: `DISPARO 02: PONTO CEGO GRAMATICAL`, texto: `Como resolver um emboscamento denso gramatical numa frase torta e imensa, onde sujeitos atípicos múltiplos e seus devidos verbos de subordinação principal se vêm subitamente separados e ofuscados por mais de cinco vírgulas excludentes dispostas linearmente em explicações transversais?`, alternativas: ["Ler fluentemente acelerando a passada até a última linha contínua do tempo de execução com ritmo poético de fonética aguda ditando a melhor concordância com aquilo que soar verbalmente polido à escuta natural brasileira sem intervir nas linhas grafadas secas das sentenças de múltiplas e densas subordinações de modo de uso civil do aluno.", "Riscar as amarras à caneta, fatiando lateralmente as falsas premissas laterais ladeadas pelas vigias móveis da vírgula até deixar somente o cadáver primário exposto ao núcleo sintomático puro de ação Sujeito Pleno X Ação Nominal verbal (o tronco)", "Realizar obrigatoriamente e isolacionicamente a contagem pericial dos crases expostos isolando toda a morfologia estéril da fonética sintomática do avaliador FGV antes", "Assumir a negação do teste, pular imediatamente por envolver longas exegeses do material normativo ignorando as preposições temporais, marcando a opção D pela margem estatística da banca no estado"], correta: 1, explicacao: "Na Forja, você não negocia com o avaliador. A maquiagem é raspada com caneta para visualizar o arcabouço da verdadeira sintaxe desossada no papel." });
            
            pills.push({ type: 'teoria', titulo: `3. REGÊNCIA: A DITADURA DO COMANDANTE VERBAL`, texto: `Regência nominal ou verbal nada mais é do que o Código Disciplinar de cada palavra principal que exige rigor com de submissão do preposto que a obedece, na forma engessada ou isenta de uma "Preposição" no meio do ato formal da frase civil da narrativa. A banca brinca com a rua civil. Na linguagem coloquial nós 'assistimos O jogo', mas no rigor da Forja normatizada: assistir num escopo formal para exame significa VER (assistir ao paciente). As transgressões preposicionais na vida real não vigoram sob fogo inimigo nas exigências e cobranças rigorosas federais.` });
            // P3
            pills.push({ type: 'exercicio', titulo: `CHEQUE-MATE GRAMATICAL 03`, texto: `Qual dos falsos comandos evidência a falha letal num procedimento policial tático registrado formal em Boletim descumprindo brutalmente o POP inabalável da norma-culta restrita dos Tribunais em vigor?`, alternativas: ["A guarnição escalada local deslocou-se imediatamente visando de fato a estabilização real a todo o cenário conturbado em crise com intervenientes agressivos na via esburacada externa lateral do posto federal", "A composição patrulheira com 4 civis visava de forma inescrupulosa fuzilar diretamente O contingente rebelado no beco apertado", "A força de pronta recarga armada aspirava incessantemente o empolgante êxito moral glorificado pelo batalhão cravado na honra sem qualquer hesitação tática nos testes periciais práticos da manhã", "A equipe da Força Tática em seu relato técnico alegaram abertamente que todos os referidos suspeitos e menores na apreensão na verdade teriam chegado todos e cada um deles correndo fortemente NA praça da guarnição militar leste nos fundos."], correta: 3, explicacao: "Isso. A ruína total: Chega-se sempre A ALGUM LUGAR segundo as leis normativas puras de regência. Militar que 'Chegou NA praça' assina a reprovação do concurso perante a caneta dos gramáticos e o filtro da FGV rigorosa. Erradicado!" });
        }
        // --- MICRO-ESPECIALIZAÇÃO: EXATAS (PORCENTAGEM, FRAÇÕES, JUROS E DADOS TÁTICOS) ---
        else if (topicoLower.includes("juros") || topicoLower.includes("porcentagem") || topicoLower.includes("fração") || d.includes("Matemática")) {
            // T1
            pills.push({ type: 'teoria', titulo: `1. O SANGUE OCULTO DA ESTATÍSTICA: O ZERO CRÍTICO`, texto: `Candidato, a porcentagem operada na prova não se calcula se corta! O símbolo nefasto e assustador do "%" significa nada menos que "Dividindo secamente pelo número cego base 100". Quando a banca pede os lucros, perdas e rendas numéricas cegas terminadas em algarismos brancos cheios com carga de zeros (Exemplo prático de campo: 14% brutos em cima de exatos 800 recrutas ilesos de baixa ou 30% em carga de 1200 munições)... a sua única atitude não é somar ou usar frações... Você risca o "%", arranca literalmente 2 algarismos "zeros" do seu montante total base (fica 8 e 12) e você cruza metralhando imediatamente esse montante diluído em seu alvo percentual fixo. Fogo cruzado tático.` });
            // P1
            pills.push({ type: 'exercicio', titulo: `CONSTRUÇÃO DA FRAÇÃO RÁPIDA DE TIRO E COMBATE`, texto: `Em cenário operacional adverso sob a forte tensão emocional de prova: Diante do Batalhão Bope que possuía em linha geral cerca de exatos 1800 candidatos habilitados iniciais para o exame final com aval do Tenente, soube-se internamente pela prova teórica que cruéis 11% acabaram decaindo por incapacidade do perfil tático isolado O-Pai. Usando a precisão da tesoura balística de Corte Base, informe qual o saldo final em carne de pessoas excluídas brutalmente em baixas exatas sob seus próprios olhos armados na mesa militar do concurso da Polícia! `, alternativas: ["197 homens abatidos - a multiplicação gerou ruído por ser de base com finais em base 1 em fatores que deveriam gerar frações complexas irredutíveis somando-se 17 da outra fatia sem sentido numérico racional da prova", "165 civis não passaram após readequações de cortes periciais onde cada homem subtraído contou pelo fator de percentual progressivo gerando a conta quebrada de baixas humanas", "198 abatidos, já que o candidato treinado na base O PAI ignorou os dois zeros longínquos de fundo de 1800 (ficando com o puro osso: número 18 duro); depois foi só fatiar multiplicativo frio: Os simples 18 fuzis cruzados pelos exatos 11 da taxa base dada pelo teste sem qualquer pena resultando nos 198 precisos abates isolados numéricas.", "211 indivíduos caídos conforme cruzamento da métrica com as bases relativas logarítmicas por dízimas imprecisas adotadas na conta inicial não arredondadas integralmente sem margens reais."], correta: 2, explicacao: "Forjado em combate exato. O percentual foi aniquilado arrancando-se dois calibres zero do peito dos 1800 de base total fria (Sobraram exatos reais palpáveis 18 operacionais). Dezoito cortados com fator de multiplicação direta por letal 11... Bingo. Saldo tático e contábil mortal cravado: 198 exclusões da fileira sem nem pensar em lápis ou longas dízimas. Tempo economizado valioso contabiliza 1 minuto de liderança moral sobre a carne trêmula do candidato adversário ao lado de carteira na mesma prova cega do salão nobre exaustivo geral!" });

            // T2
            pills.push({ type: 'teoria', titulo: `2. O DANO EXPLOSIVO DA EQUAÇÃO DO JURO SIMPLES TÁTICA E DO TEMPO FALSO MILITAR E DA DILUIÇÃO TEMPORAL OCULTA`, texto: `Você cresceu recitando o dogma ingênuo 'Juros Brutos Frios (J) = O C x i x t' no primário em carteira. Mas a covardia perniciosa do examinador e o cinismo calculista não se atém ao arcabouço da própria conta da prova e da fórmula. A bomba termobárica na conta não é a taxa e muito menos o juros, não. É O VETOR DA MARGEM EXPLOSIVA DO TEMPORAL "T" INVERTIDO. A banca sempre jogará a "Maldita Taxa" base expressa com descaramento em forma de mesada (meses fixados da letra), MAS brutalmente te fornecerá escondido o Tempo corrido no disfarce longo total de um Ano Completo, Período Letivo em Bi-trimestral ou Bi-semestres. Se suas unhas e mentes não igualarem as grandezas de antemão logo convertendo exames com equivalência limpa pro crivo da multiplicação fina... a morte financeira dos seus exatos pontos cai certeira perante Deus na Alternativa A das ciladas de exatas que aguarda zombeteiramente o seu equívoco e o equívoco de mil idiotas na hora final da batida dos seus pés pelo salão! Os fracos caem aqui no suor da desatenção brutal na cara!` });
            // P2
            pills.push({ type: 'exercicio', titulo: `DESARME TÁTICO METÓDICO CRONOLÓGICO`, texto: `Prepara a sua mira para não sangrar com a banca: Ao relatar apreensões volumosas rentáveis calculadas sobre rígidos e imutáveis pesados fatores numéricos brutos do capital investido legalmente à absurda de 4,5% AO MÊS cravados sem perdões nas provas da Cesgranrio no espaço decorrido exato somatório do tempo integral avaliado longo com carga cronológica dura fixa final dada dissimuladamente fechada total de "DOIS SEMESTRES"! Indique o número cirúrgico cortado mortal extraído seco que deve compor unicamente o Fator Matriz (Letra isolada e pequena temporal - 'T') da Equação Geral Oficial Universal e Militar, blindando-se das pegadinhas óbvias com frieza:`, alternativas: ["Colocar orgulhosamente como manda minha intuição direta o algarismo número (2) lido, posto representar textualmente os puros dois semestres listados soltos em português na prova", "Atentar inteligentemente com perícia absoluta ao disfarce e fixar unicamente com sangue vivo o fator do calíbre grosso numérico de tempo (12), representando a coesão convertida absoluta real pericial em igualdade com a base imposta nos juros e nas taxas limitadoras", "Jogarei a soma geral fechada e ampla de (24) pois entendo a total complexidade reflexiva projetada do imposto somada a margem real dos juros não controlados incidentes mensuráveis", "Omitir completamente o vetor tempo, anulando a conta de juros e forçando uma equações compostas falsas desnecessárias ignorando preceitos lógicos elementares exatos sem fundamento algum perante o exame final lido na primeira camada teórica cega civil isolada no rascunho de lapiseira militar de mesa escolar sem lógica de banco de sangue de concursos no edital total base cega vazia falha com juros invertido e nulo!"], correta: 1, explicacao: "Matou o inimigo civil e sobreviveu a casca de banana das trevas de exatas sem choros periciais. Converta ou Perca a posse! 2 semestres pesados convertidos igualizam em sangue suado 12 meses absolutos concretos fixos reais do globo! Se o banco cobra por mês taticamente (i)=mês... O seu Tempo cronológico suado em exame 'T' deverá respirar os MÊSES e só MESES de agora e sempre! Essa manobra destitui e humilha sumariamente do jogo seletivo real federal quase o montante da fileira massiva total civil sem preparação O-pai militar forjada na casca grossa militar densa armada de visão de radar de falhas! Avante fuzileiro operante de provas!" });
        }
        // --- MICRO-ESPECIALIZAÇÃO: DIREITO / LEGISLAÇÃO / DIREITOS HUMANOS (POSITIVISMO SECO & EXCLUDENTES) ---
        else if (d.includes("Direito") || d.includes("Legislação") || topicoLower.includes("san josé")) {
            // T1
            pills.push({ type: 'teoria', titulo: `1. O EIXO DE SANGUE DA HERMENÊUTICA MILITAR E POSITIVISMO DO TRIBUNAL`, texto: `Atenção constante Candidato Forjado na Letra Fria. No mundo do ${d}, a sua régua invisível pessoal da bússola suada da ética, da moral religiosa cega ou dos valores familiares intocáveis de rua é e sempre será na folha da banca considerada Risco Criptográfico para sua real aprovação final isolada no certame! Nos casos mais difíceis, polêmicos graves hipotéticos de provas criados pelo núcleo onde o desespero e o clamor ético exigem exceções viscerais emocionais com choro dos alunos lendo as ocorrências da prova suja, seu cérebro de chumbo tem a função de calar toda o instinto humanitário emotivo na leitura fria de ${t} da mesa e acionar a doutrina legal imperatriz exata como prego ditado no cimento da letra estrita. A banca testa seu limite de quebra de regras! Não seja um civil caridoso com sentimentos próprios no gabarito cego, o comando positivado frio legal é inabalável em provas sem teses abolicionistas.` });
            // P1
            pills.push({ type: 'exercicio', titulo: `DISPARO DÚRO JURÍDICO FRONTAL DE ÉTICA LEGAL`, texto: `Ao se debruçar sem chances e recursos sob análise em prova escrita extensa sob imensa tensão da comissão julgadora pericial baseada estritamente contra um caso narrativo hipotético grave doloroso dramático pesado moral e criminoso na prova simulada, da onde brotam falsas questões abertas humanísticas em ${t}, como a máquina burocrática estatal operada e a banca exigirão covardemente qual veredicto irrecusavelmente para considerar correta uma alternativa nua em suas mãos isoladas sem contato?`, alternativas: ["Acalentará a análise ponderada por interpretações jurisprudenciais permissíveis brandas sob vieses emotivos da conduta ideológica com superações na leitura extensa com margens pra absolvição sumária final cega baseada no choro pericial livre das instâncias primárias e de promotorias da família", "Aplicará com aço implacável frio de serra todos os mais duros dogmas puros restritos positivados intocáveis contidos cravados em tinta dura de pena legal explícita dentro daquele código cego em específico ignorando covardemente com classe isenta fria todos os mais dramáticos clamores emocionais, morais lúdicos sociais emotivos na leitura final tática cega, priorizando e abraçando exclusivamente apenas exata materialidade normativa com sangue na veia cravado firme", "Improvisará as flexões aceitáveis do seu senso de cidadão íntegro diário aplicando o peso moral para equalizar a covardia", "Baseará sumariamente sua resolução fatiando as falácias filosóficas e sociológicas embutindo a culpa do processo ao próprio redator isentando a resolução por falta de precisão acadêmica global e ampla sem dogmas das universidades de defesa unificada das nações armadas no congresso cego federal e militar com leis nulas no momento em que ocorrerem no papel real sem sanções."], correta: 1, explicacao: "Sem choro na caserna legal O-pai. Sem alma e isento. Somente o que o legislador cego codificou e mandou na letra morta escrita das linhas vale, mesmo se quebrar o choro final. Isso limpa a mesa e gabaritos em massa federal isolado." });

            // T2
            pills.push({ type: 'teoria', titulo: `2. O CERCO IMPLACÁVEL TÁTICO CEGO DA BÚSSOLA DAS INCÓGNITAS (EXCLUDENTES)`, texto: `A fim restrito cirúrgico para decepar impiedosos o pescoço da pontuação cortando cabeças de amadores isolados na base da régua limpa com navalha do limite de concorrências massivas amplas de aprovação severa e dura dentro do módulo específico restrito tático central focado isolado de ${t}... a mesa de comando da guarnição do edital joga, na maldade irrestrita ampla, "Sentenças Extremas Adverbiais Absolutistas Fechadas" em cada maldita linha (Ex: sob preceito de "nunca incidir", "em todos os fatos sem chance do réu providenciar", "vedado ou banido incondicionalmente"). Todo código jurisdicional humano possui exceções (as chaves mestras e portões das exclusões ocultas periciais). Em hipóteses normais em prova, toda vez que ver o redator generalizar em alternativas para toda vida as sentenças, desconfie que um civil elaborador de lei cravou ali e esqueceu do artigo oculto, logo essa alternativa tende a ruína irreal e ao Falso pericial limpo!` });
            // P2
            pills.push({ type: 'exercicio', titulo: `VERIFICAÇÃO: A TRAVA MESTRA DO GATILHO DAS REGRAS EM JURISPRUDÊNCIA NUA DIRETA`, texto: `Diante e em face do preenchimento da bolha obscura de falso ou verdadeiro na sua jornada letiva nas carreiras táticas, cite abertamente e defina na cruz, sem desvios cegos... Qual o exato componente engessado letárgico malicioso que destrói a coesão orgânica legal fria do legislador de Brasília usado rotineiramente com intenções furtivas nefastas pelos próprios burocratas maldosos da grande mesa dos examinadores covardes nas entrelinhas pra validar como falsas as afirmativas gerais escritas em ${d}?`, alternativas: ["A introdução ardilosa covarde sibilante isolada fútil engessada de vocábulos e sentenças gramaticais extremanentes literais, fechados imutáveis ditatórios (advérbios absolutos absolutos irredutíveis e fechadores da margem das portas cegos tais quais e do tipo 'exclusivamente limitador', 'sempre aplicável e isolado', e 'jamais isentos irrestritos') visando intencional e metodicamente anular o espectro pericial real previsto claro vivo em suas extensões nas ressalvas jurídicas da CF e na letalidade flexível natural fria orgânica isolada letal livre imposta ao preceito judicial.", "A citação exata pura cega limpa fluente cristalina original sem deturpações exatas textuais orgânica idêntica colada fiel da constituição nua limpa exata de brasília da folha magna do país unificado pelo estado federal maior inabalado.", "A injeção gramatical coesa amigável fluida civil popular amena lúdica com vocábulos abertos poéticos reflexivos abertos livres não atrelados em conceitos sem bases no material dogmático de amparo social não testável na prova sem limites sem fronteiras sem marcos teóricos delimitadores das linhas amplas isentas abertas das bancas na área sem teto.", "Enunciações de parágrafos simples lógicas exatas rasas coesas perfeitas limitadas na pureza limpa estéril cristalina do arcabouço lógico das teses abertas sem contestações das leis isentas isoladas limpas de exegeses normativas dogmáticas rígidas duras literais frias no papel do código mestre restrito da comissão geral de bancas estatais no processo seletivo fechado longo sem choro!"], correta: 0, explicacao: "Correto o faro do instinto O-pai 360 e do lobo civil! Destrua alternativas onde os burocratas absolutizam o mundo das regras em estado seco! Eles sempre ignoram taticamente a cláusula oculta de fuga e da ressalva jurisprudencial isenta legal, reduzindo a complexidade de regras do Brasil a fumaça de exclusão exata nas malhas cruéis duras das FGVs duras da nação armada civil!" });
        }
        // --- FALLBACK METÓDICO DE ESTUDO (TEORIA - PRÁTICA INTERCALADO) ---
        else {
            pills.push({ type: 'teoria', titulo: `1. ARQUITETURA DE MACRO ESTUDO: ${t.toUpperCase()} ISOLADO NO CONCEITO E RAIZ`, texto: `O tema base fundamental focado estrito exato isolado denso de ${t} em torno global no mundo amplo da cadeira principal pericial densa de ${d} rege fortificações de fundação brutais. O virote principal é: A Frieza é matar o nervo e decoreba! Desconstrua a blindagem do bloco textual identificando unicamente logo as bases com seus olhos armados frios cruéis no escanear do olho 360: A Raiz Eixo (O rigor de O Que É) + A Prática Material Civil Direta (O Como isso se Aplica Frio) e A Casca letal Torta Isolada Fuga e Desvio (A Brecha Legal das Armadilhas da Exceção).` });
            pills.push({ type: 'exercicio', titulo: `DISPARO MACRO FÚRIA TÁTICA 01 CEGA E LIMPA O-PAI 360 INICIAL`, texto: `Candidato limpo frio operante mental e limpo sem achismos... Qual deve ser em ato e verbo sua estocada cega metódica de punhal na carne nas mesas brutais sem amparo social civil e tático base ao encarar brutalmente em fogo intenso os grandes capítulos pesados e extensos ruidosos densos imutáveis do edital base O-pai O-concurso na matéria bruta fatiada pura densa e fria lida de ${t}?`, alternativas: ["Ler tudo de joelhos recitando textos densos cegos", "Mapeamento limpo metódico cravado de lápis do Tripé Base: Essência Natureza pura, Filtro cego Letal de Regra Fria Crua Prática da Norma Dura Seca e por fim a Zona da Morte de Aplicação Restrita de Exceção Cruel da Norma Mestra com frieza.", "Ignorar doutrinas em manuais cegos e provas cegas não focadas pulando seções das normas complexas na tela fria das letras e das vírgulas densas", "Buscar lógicas de vida cega real livre orgânica para suprir ausências no edital puro isolado no texto amarrado duro não limpo cego e seco isento das vírgulas não estritas rígidas isento nas palavras e subordinação textual!"], correta: 1, explicacao: "Em Cheio no pescoço na banca! A base tripla é a arma de contenção massiva limpa da doutrina limpa impiedosa que aniquila a insegurança cega militar e processual de campo real!" });
            
            pills.push({ type: 'teoria', titulo: `2. ARMADILHAS EXPLOSIVAS IMBUTIDAS (O POP MODIFICADO ADJETIVADO)`, texto: `Para decepar cabeças civis inaptas da linha de prova com letalidade velada e limpar e rebaixar cruelmente na navalha e foice grande a nota de cortes nos rascunhos em testes de aptidão intelectual de limite amplo rigoroso civil brutal... o infiltrado não forja as alternativas das piores questões mais falsas montando mentiras brutais absurdas gigantes que a massa detecta lendo! Não meu combatente cego isento da tropa... O burocrata maligno aponta trocando nas letras curtas miudas do texto do rascunho a ponta do iceberg isento trocando brutalmente um mísero inofensivo verbo passivo imperativo cruel frio legal autoritário de ordem ("é vedado civil", "é imposto cru", "fica o juiz estritamente e exato obrigado isolado amarrado ali a atuar sob as vias"...) por uma farsa fumaça pálida boazinha passiva liberal limpa sem ordens que acalma seu peito bobo civil isento dócil livre ("se for da vontade exata do magistrado ameno brando", "é lhe facultado no código leve livre aberto por foro isento no edital exato cru pericial isolado no mundo humano aberto civil"). Batalhas civis se perdem pelos verbos disfarçados de anormais clementes sem forças em comandos legais puros secos cruéis do código isolado que você deixou fugir de forma nua vazia!` });
            pills.push({ type: 'exercicio', titulo: `BATERIA FIXAÇÃO O-PAI TÁTICO FINAL FOGUETE MACRO LETAL DO VERBO MODIFICADO`, texto: `Sob o visor limpo da lente da O-pai método de guerra e Força... Relate sem medos isentos como a maldade dos esquadrões de burocratas geram falsos distúrbios da distorção visual gramatical jurídica e imperiosa falsa da lei militar cega bruta excludente e isolada e normativa que aterroriza e fere morte instantânea amarga na ponta do seu fuzil e exame fatal fatiada lida isolada focada cega da regra da base dura cega normatizadora de ${t}?`, alternativas: ["As distorções ocorrem limpas quando falsificam todo o escopo filosófico sociológico lúdico isento irrestrito da obra basilar no mundo cego teórico humano nas escolas modernas de pensamento orgânico sem limites do mundo humano no mundo atual isolado por teorias sem fontes lógicas reais não dogmáticas frias.", "Criando teses ocultas sem registros dos continentes remotos com letras orientais fatiadas em citações na subordinação exegética doutrinárias de teses teóricas fechadas puristas amparadas isentas alienadas orgânicas aladas sem fontes fidedignas dogmas puros abstrusos acadêmicos complexos distantes da prova legal fria rígida e civil", "Reduzindo as alternativas longas bruscamente da caneta do burocrata sujo limitando apenas na síntese exata da letra curta com viés restrito limpo estéril frio com fontes das correntes positivistas puras restritas de códigos sem vícios orgânicos teóricos isentos de farsa emocional ou dogmática no ar estrito civil", "Trocando sutilmente na sombra os frios letais verbos duros irredutíveis imperativos de comando estatal bruto legalizado inabaláveis blindos rigorosos ('é imperativo cego forjado obrigatório') pelas doces perigosas fatais cascas de palavras permissivas liberais amenas fracas mansas ('pode tentar talvez o magistrado escolher isolado fazer por si por opção nula cega branda'), visando desbaratar o peso do código legal isento O-pai duro de lei seca e sua pontuação fria!"], correta: 3, explicacao: "Ouro Operacional Tático na Fita! Trocar O 'PODE' mudo do civil isento pelo 'DEVE' do Estado Maior cego frio isolado e blindado subverte exata mente inteira do leigo desatento e civil e joga fora meses e anos isolados no quarto fechado de cursinho estrito inútil de teoria fumaça na prova fofa isolada não isenta rígida! Missão limpa de sobrevivência armada com cérebro no alvo, superado. Próximo alvo engajado frio." });
        }
        
        return pills;
    }

    // Tenta carregar do banco (pilulas_forja) — fallback para geração algorítmica
    let carregouDB = false;
    if (supabaseClient && gpsId) {
        carregouDB = await carregarPilulasDB(gpsId, topico);
    }

    if (!carregouDB) {
        console.log("[FORJA] Usando conteúdo algorítmico para:", topico);
        teoriaData = generateForgedContent(disciplina, topico);
    }

    const orgao = sessionStorage.getItem('recruta_orgao') || 'Polícia Militar';
    document.getElementById('lbl-edital').innerText = orgao.toUpperCase() + " (TRILHA HÍBRIDA)";

    renderizarPilula();
});

function renderizarPilula() {
    if (teoriaData.length === 0) return;
    pararAudio();

    const p = teoriaData[currentIndex];
    const containerAlternativas = document.getElementById('exercise-options');
    const containerGeral = document.getElementById('theory-text');
    
    document.getElementById('lbl-pill').innerHTML = `${p.type === 'exercicio' ? '<i class="fa-solid fa-hammer" style="color:#eab308"></i> FIXAÇÃO ' : ''}${currentIndex + 1}/${teoriaData.length}`;
    document.getElementById('theory-title').innerText = p.titulo;
    containerGeral.innerText = p.texto;
    
    resolvidaPillAtual = (p.type === 'teoria'); // Teorias já nascem resolvidas/livres para avançar
    
    // Reset da Interface
    containerAlternativas.style.display = 'none';
    containerAlternativas.innerHTML = '';
    
    if (p.type === 'exercicio') {
        containerGeral.style.borderLeft = "4px solid #eab308";
        containerGeral.style.background = "rgba(234, 179, 8, 0.05)";
        containerAlternativas.style.display = 'flex';
        
        p.alternativas.forEach((alt, i) => {
            const btn = document.createElement('button');
            btn.className = "btn-opcao";
            btn.style.cssText = "padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(30, 41, 59, 0.8); color: #F8FAFC; text-align: left; font-size: 1rem; cursor: pointer; transition: 0.2s;";
            btn.innerHTML = `<strong>${String.fromCharCode(65 + i)})</strong> ${alt}`;
            btn.onclick = () => avaliarExercicio(i, p.correta, p.explicacao);
            containerAlternativas.appendChild(btn);
        });
        
        // Bloqueia avanço provisoriamente
        atualizarBotoes(false); 
        
    } else {
        containerGeral.style.borderLeft = "none";
        containerGeral.style.background = "#1E293B";
        atualizarBotoes(true);
    }
    
    // Reset Botão Áudio
    isPlaying = false;
    document.getElementById('icon-audio').className = 'fa-solid fa-play';
    document.getElementById('btn-audio').classList.remove('playing');
    document.getElementById('status-audio').innerText = "OUVIR EM ALTO E BOM SOM";
}

function avaliarExercicio(escolha, correta, explicacao) {
    if (resolvidaPillAtual) return; // Ja respondeu

    const botoes = document.getElementById('exercise-options').querySelectorAll('button');
    resolvidaPillAtual = true;

    // Mostra feedback inline (sem alert bloqueante)
    let feedbackEl = document.getElementById('feedback-exercicio');
    if (!feedbackEl) {
        feedbackEl = document.createElement('div');
        feedbackEl.id = 'feedback-exercicio';
        feedbackEl.style.cssText = 'margin-top:16px; padding:16px; border-radius:10px; font-size:0.95rem; line-height:1.6;';
        document.getElementById('exercise-options').after(feedbackEl);
    }

    if (escolha === correta) {
        botoes[escolha].style.background = "rgba(16, 185, 129, 0.2)";
        botoes[escolha].style.borderColor = "#10B981";
        feedbackEl.style.background = "rgba(16, 185, 129, 0.1)";
        feedbackEl.style.border = "1px solid #10B981";
        feedbackEl.innerHTML = `<strong style="color:#10b981">✅ Alvo Atingido!</strong><br>${explicacao}`;
        falarTextoGemini(explicacao);
    } else {
        botoes[escolha].style.background = "rgba(239, 68, 68, 0.2)";
        botoes[escolha].style.borderColor = "#EF4444";
        botoes[correta].style.background = "rgba(16, 185, 129, 0.2)";
        botoes[correta].style.borderColor = "#10B981";
        feedbackEl.style.background = "rgba(239, 68, 68, 0.08)";
        feedbackEl.style.border = "1px solid #EF4444";
        feedbackEl.innerHTML = `<strong style="color:#ef4444">❌ O PAI CORRIGE:</strong> Gabarito: <strong>${String.fromCharCode(65 + correta)}</strong><br>${explicacao}`;
        falarTextoGemini(`Incorreto. A resposta certa era a letra ${String.fromCharCode(65 + correta)}. ${explicacao}`);
    }

    atualizarBotoes(true);
}

function atualizarBotoes(podeAvançar) {
    document.getElementById('btn-prev').disabled = (currentIndex === 0);
    document.getElementById('btn-prev').style.opacity = (currentIndex === 0) ? '0.5' : '1';
    
    let btnNext = document.getElementById('btn-next');
    let btnCavar = document.getElementById('btn-cavar');

    if (!podeAvançar) {
        btnNext.innerHTML = '<i class="fa-solid fa-lock"></i> Responda Primeiro';
        btnNext.disabled = true;
        btnNext.style.opacity = '0.5';
        btnCavar.style.display = 'none';
    } else {
        btnNext.disabled = false;
        btnNext.style.opacity = '1';
        if (currentIndex === teoriaData.length - 1) {
            btnNext.innerHTML = 'Recuar Seguro <i class="fa-solid fa-person-running"></i>';
            btnNext.onclick = finalizarModuloDynamic;
            btnCavar.style.display = 'inline-block';
        } else {
            btnNext.innerHTML = 'Avançar <i class="fa-solid fa-forward-step"></i>';
            btnNext.onclick = nextPill;
            btnCavar.style.display = 'none';
        }
    }
}

// --------- A MÁQUINA DE CAVAR (ABISMO TÁTICO) ----------
async function cavarMaisFundo() {
    if(!supabaseClient) {
        alert("O Abismo Tático requer conexão vital com o Satélite Supabase. Aguarde restabelecimento da zona.");
        return;
    }
    
    const btnCavar = document.getElementById('btn-cavar');
    btnCavar.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Conectando...';
    btnCavar.disabled = true;

    try {
        let topicoNome = sessionStorage.getItem('current_modulo_topico') || '';
        if(topicoNome.includes("Interpretação")) topicoNome = "Interpretação e Compreensão de Textos"; // Mapping string exata
        if(topicoNome.includes("Sintaxe")) topicoNome = "Sintaxe e Regência";
        
        // 1. Target ID Module
        const { data: moduleData, error: modErr } = await supabaseClient
            .from('modulos')
            .select('id')
            .ilike('nome', `%${topicoNome}%`)
            .limit(1);

        if(modErr || moduleData.length === 0) {
            alert(`Você sobreviveu a toda a doutrina armazenada para [${topicoNome}] no momento. Volte para os testes gerais.`);
            btnCavar.innerHTML = '<i class="fa-solid fa-skull"></i> Cavar Fundo';
            btnCavar.disabled = false;
            return;
        }

        const modId = moduleData[0].id;
        const targetNivel = nivelProfundidadeAtual + 1;

        // 2. Fetching Pílulas e Exercícios Simultâneos
        const [resTeorias, resExercicios] = await Promise.all([
            supabaseClient.from('pilulas_forja').select('*').eq('modulo_id', modId).eq('nivel_profundidade', targetNivel).order('created_at', { ascending: true }),
            supabaseClient.from('exercicios_forja').select('*').eq('modulo_id', modId).eq('nivel_dificuldade', targetNivel)
        ]);
            
        if(resTeorias.error || resTeorias.data.length === 0) {
            alert(`Nível ${targetNivel} de aprofundamento está limpo dos inimigos. O front recuou. Treine a próxima matéria.`);
            btnCavar.innerHTML = '<i class="fa-solid fa-skull"></i> Cavar Fundo';
            btnCavar.style.display = 'none';
            return;
        }

        // 3. Woven Array Injection (T.P.T.P)
        resTeorias.data.forEach(t => {
            teoriaData.push({ type: 'teoria', titulo: t.titulo, texto: t.texto });
            
            // Procura o tirambaio cravado com a id dessa pilula
            const pExs = resExercicios.data.filter(ex => ex.pilula_id === t.id);
            pExs.forEach(e => {
                teoriaData.push({
                    type: 'exercicio', titulo: e.titulo, texto: e.pergunta,
                    alternativas: JSON.parse(e.alternativas || '[]'),
                    correta: e.correta, explicacao: e.explicacao
                });
            });
        });

        // Sucesso
        nivelProfundidadeAtual = targetNivel;
        btnCavar.style.display = 'none'; 
        btnCavar.innerHTML = '<i class="fa-solid fa-skull"></i> Cavar Fundo';
        btnCavar.disabled = false;
        
        alert(`PORTÃO NEGRO ABERTO.\nA profundeza do Nível ${targetNivel} foi injetada no final da sua tela. Só os blindados sobrevivem daqui para frente.`);
        nextPill();

    } catch(err) {
        console.error("ERRO ABISMO TÁTICO:", err);
        btnCavar.innerHTML = '<i class="fa-solid fa-skull"></i> FALHA DE SINAL';
        btnCavar.disabled = false;
    }
}

// --------- MOTOR DE ÁUDIO GEMINI 3 (MULTIMODAL) ----------
let audioAtual = null;

function toggleAudio() {
    if (isPlaying) { pararAudio(); } else { reproduzirAudio(); }
}

async function reproduzirAudio() {
    const txt = document.getElementById('theory-text').innerText;
    if (!txt) return;
    await falarTextoGemini(txt);
}

async function falarTextoGemini(texto) {
    pararAudio(); 

    document.getElementById('icon-audio').className = 'fa-solid fa-spinner fa-spin';
    document.getElementById('btn-audio').classList.add('playing');
    document.getElementById('status-audio').innerText = "CONECTANDO GEMINI 3...";

    try {
        const response = await fetch('http://localhost:3000/api/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ texto, voz: 'masculino_militar_agressivo' })
        });

        if (!response.ok) throw new Error("Servidor do Gemini fora do ar.");

        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: 'audio/mp3' }); // Formato que vier do servidor
        const audioUrl = URL.createObjectURL(blob);
        
        audioAtual = new Audio(audioUrl);

        audioAtual.onplay = () => {
            isPlaying = true;
            document.getElementById('icon-audio').className = 'fa-solid fa-pause';
            document.getElementById('status-audio').innerText = "REPRODUZINDO (GEMINI 3)";
        };

        audioAtual.onended = () => {
            isPlaying = false;
            document.getElementById('icon-audio').className = 'fa-solid fa-play';
            document.getElementById('btn-audio').classList.remove('playing');
            document.getElementById('status-audio').innerText = "LEITURA CONCLUÍDA";
        };

        audioAtual.play();
    } catch(err) {
        console.error("Erro na Forja Gemini: ", err);
        isPlaying = false;
        document.getElementById('icon-audio').className = 'fa-solid fa-play';
        document.getElementById('btn-audio').classList.remove('playing');
        document.getElementById('status-audio').innerText = "ERRO DE CONEXÃO TTS";
    }
}

function pararAudio() {
    if (audioAtual) {
        audioAtual.pause();
        audioAtual.currentTime = 0;
    }
    isPlaying = false;
    const icone = document.getElementById('icon-audio');
    if(icone) icone.className = 'fa-solid fa-play';
    const btn = document.getElementById('btn-audio');
    if(btn) btn.classList.remove('playing');
    const status = document.getElementById('status-audio');
    if(status) status.innerText = "PAUSADO";
}

function nextPill() {
    if (currentIndex < teoriaData.length - 1 && resolvidaPillAtual) {
        currentIndex++;
        renderizarPilula();
    }
}

function prevPill() {
    if (currentIndex > 0) {
        currentIndex--;
        renderizarPilula();
    }
}

function finalizarModuloDynamic() {
    const cid = sessionStorage.getItem('recruta_concurso_id') || '';
    let completedModules = [];
    try {
        completedModules = JSON.parse(localStorage.getItem('mapa_conquistas_' + cid)) || [];
        if(!Array.isArray(completedModules)) completedModules = [];
    } catch(e) { completedModules = []; }
    
    const moduloAtual = parseInt(sessionStorage.getItem('current_modulo_index')) || 0;
    
    // Se ele ainda não tinha dominado esse módulo, injeta na lista de conquistas
    if(!completedModules.includes(moduloAtual)) {
        completedModules.push(moduloAtual);
        localStorage.setItem('mapa_conquistas_' + cid, JSON.stringify(completedModules));
    }
    
    // Retorna triunfante para o GPS, onde a proxima materia e a atual estarao destravadas
    window.location.href = 'rota_estudos.html';
}

window.onbeforeunload = pararAudio;
