const supabaseUrl = 'https://xeimqibtnjchbfgsjqsk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlaW1xaWJ0bmpjaGJmZ3NqcXNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyNzUyNTksImV4cCI6MjA4Njg1MTI1OX0.63yaHW4qGnDvDrsaAzqxGU875fLYVBTJgZCVJl0D7Pc';

let supabaseDb;
try {
    if(!window.supabase) {
        console.warn('[RADAR] CDN do Supabase NÃO detectado! Banco offline, habilitando Modo Rigoroso (Mock).');
    } else {
        supabaseDb = window.supabase.createClient(supabaseUrl, supabaseKey);
        console.log('[RADAR] Supabase instanciado com sucesso.');
    }
} catch (e) {
    console.error('[ERRO FATAL] Falha grave ao criar Supabase Client:', e);
}
const screens = { diagnostico: document.getElementById('diagnostico'), paywall: document.getElementById('paywall') };
const ui = {
    textoQuestao: document.getElementById('texto-questao'),
    metaQuestao: document.getElementById('meta-questao'),
    opcoesGrid: document.getElementById('opcoes-grid'),
    progressFill: document.getElementById('progress-fill'),
    quizArea: document.getElementById('quiz-area'),
    dashboard: document.getElementById('dashboard-prontidao')
};

function showScreen(screenId) {
    Object.values(screens).forEach(s => { if(s) s.classList.remove('active'); });
    screens[screenId].classList.add('active');
}

let currentQ = 0;
let qStartTime = 0;
let responseTimes = []; // MS por questão
let quizData = [];
const categorias = ['Português', 'Direito', 'Exatas', 'Informática', 'Específicas'];
let scores = { 'Português': 0, 'Direito': 0, 'Exatas': 0, 'Informática': 0, 'Específicas': 0 };
let maxScores = { 'Português': 2, 'Direito': 3, 'Exatas': 2, 'Informática': 1, 'Específicas': 2 };

// Motor de Queda (Fallback Substituto Rigoroso)
function injetarRigorMock(orgao) {
    return [
        { c: 'Português', t: `[Banca ${orgao}] Identifique a função sintática do termo sublinhado: "A aprovação exige Foco".`, o: ['Objeto Direto', 'Sujeito', 'Adjunto Adnominal', 'Predicativo'], a: 0 },
        { c: 'Português', t: 'Quanto à acentuação, qual regra justifica rigorosamente a palavra "Proposital"?', o: ['Oxítona Terminada em L', 'Falso Acento', 'Paroxítona', 'Proparoxítona'], a: 1 },
        { c: 'Direito', t: 'Segundo STF e o Art. 5º da CF, a manifestação do pensamento é:', o: ['Livre, garantido o anonimato', 'Censurável via decreto', 'Livre, vedado o anonimato', 'Proibida em via pública'], a: 2 },
        { c: 'Direito', t: 'Um ato administrativo estritamente vinculado exige que o gestor:', o: ['Tenha margem de escolha', 'Decida o mérito', 'Atue sem discricionariedade', 'Peça autorização judicial'], a: 2 },
        { c: 'Direito', t: 'No Direito Penal, a jurisprudência para o princípio da insignificância afasta a:', o: ['Tipicidade formal', 'Tipicidade material', 'Culpabilidade', 'Fato Típico integral'], a: 1 },
        { c: 'Exatas', t: 'Raciocínio Lógico (Tabela-Verdade): Se A é FALSA e B é FALSA, a proposição (A -> B) é:', o: ['Verdadeira', 'Falsa', 'Inconclusiva', 'Paradoxo'], a: 0 },
        { c: 'Exatas', t: `Com base nas notas de corte de ${orgao}, qual disciplina tem maior impacto de variância (Desvio Padrão)?`, o: ['Atualidades', 'Redação', 'Matemática/RLM', 'Direitos Humanos'], a: 2 },
        { c: 'Informática', t: 'O atalho que bloqueia o acesso instantâneo no Windows Server é:', o: ['Ctrl+Alt+Del', 'Win+L', 'Win+D', 'Alt+F4'], a: 1 },
        { c: 'Específicas', t: `Mapeamento de DNA para ${orgao}: A falha nº 1 de 90% dos candidatos é:`, o: ['Estudo raso da letra da lei', 'Muitas videoaulas, pouca resolução de questões', 'Uso de resumos alheios', 'Falta de cronograma'], a: 1 },
        { c: 'Específicas', t: 'Para esmagar a nota de corte (85%+), a taxa de acertos em "Específicas" nos 30 dias finais deve ser:', o: ['Acima de 60%', 'Acima de 75%', 'Mínimo 88%', '100%'], a: 2 }
    ];
}

// Motor Especializado para Crianças/Adolescentes (Ensino Fundamental)
function injetarRigorMockFundamental(orgao) {
    return [
        { c: 'Português', t: `[Admissão ${orgao}] Na frase "Os cadetes marcharam firmes", a palavra "firmes" é:`, o: ['Adjetivo', 'Advérbio', 'Substantivo', 'Verbo'], a: 0 },
        { c: 'Português', t: 'Identifique o erro grosseiro de grafia que zera redações escolares:', o: ['Exceção', 'Ecesso', 'Paralisia', 'Ansioso'], a: 1 },
        { c: 'Exatas', t: 'Para passar no Colégio Militar, frações são chave. Se 3/4 de 800 alunos reprovam, APENAS quantos passam?', o: ['600', '200', '400', '150'], a: 1 },
        { c: 'Exatas', t: `Nas provas de ${orgao}, áreas de figuras puras caem sempre. A área de um quadrado de lado 12cm é:`, o: ['24 cm²', '48 cm²', '144 cm²', '120 cm²'], a: 2 },
        { c: 'Específicas', t: '(Ciências Básicas) Qual órgão humano é vital no processo de filtro do sangue?', o: ['Fígado', 'Coração', 'Pulmão', 'Rim'], a: 3 },
        { c: 'Específicas', t: 'Qual o ciclo econômico que alçou as capitanias da região Nordeste no Brasil Colônia?', o: ['Café', 'Pau-Brasil', 'Ouro', 'Cana-de-Açúcar'], a: 3 },
        { c: 'Direito', t: '(Cidadania e ECA) No Estatuto da Criança, um adolescente infrator sofre:', o: ['Pena de prisão', 'Medida Socioeducativa', 'Expulsão do estado', 'Amonestação Verbal apenas'], a: 1 },
        { c: 'Informática', t: 'Qual a função da tecla de atalho universal CTRL + Z no uso diário do Windows?', o: ['Desfazer ação', 'Copiar texto', 'Salvar tela', 'Apagar tudo'], a: 0 },
        { c: 'Exatas', t: 'Qual o MMC de 12 e 15 (clássico de colégios federais)?', o: ['30', '45', '60', '90'], a: 2 },
        { c: 'Específicas', t: 'DNA Escolar: O principal fator de reprovação em provas militares aos 10/11 anos é:', o: ['Falta de Base em Frações/Decimais', 'Letra Malsucedida', 'Ansiedade severa', 'Saber a matéria e errar gabarito'], a: 0 }
    ];
}

// Motor Oculto para Elite (Método do Pai Cruel)
function injetarPegadinhasEliteFundamental(orgao) {
    return [
        { c: 'Português', t: `[ALTO RENDIMENTO ${orgao}] Assinale a ÚNICA opçao com erro CRASSO de regência verbal na norma culta:`, o: ['Custou-lhe entender a lição.', 'Assistimos ao desfile militar.', 'Aspirava ao cargo de sargento.', 'Preferia mais estudar do que brincar.'], a: 3 },
        { c: 'Português', t: `[ARMADILHA ${orgao}] Na oração 'Faz dois anos que não o vejo', o verbo 'fazer' está no singular porque:`, o: ['O sujeito é oculto', 'A concordância é opcional', 'Indica tempo decorrido, sendo impessoal', 'Concorda com "dois" inversamente'], a: 2 },
        { c: 'Exatas', t: `[GABARITO SECRETO] Um tanque de 500L tem um furo que vaza 25L por hora. Uma torneira enche 50L/h. Em quantas horas ele enche?`, o: ['10 horas', '20 horas', '25 horas', 'Nunca encherá'], a: 1 },
        { c: 'Exatas', t: `[PEGACAO DE BANCA] Uma calça de R$ 100 sofreu um acréscimo de 20%, e depois um desconto de 20%. Qual o valor final?`, o: ['R$ 100,00', 'R$ 104,00', 'R$ 96,00', 'R$ 80,00'], a: 2 },
        { c: 'Exatas', t: `[FATOR ELIMINATÓRIO] Qual o algarismo das unidades de 2 elevado a 2024?`, o: ['2', '4', '6', '8'], a: 2 },
        { c: 'Específicas', t: 'O Colégio Militar avalia a resiliência sob pressão. Se você errar as 3 primeiras questões seguidas, estatisticamente você deve:', o: ['Chutar as próximas 5', 'Pular para a matéria de maior domínio', 'Desistir da prova e entregar', 'Tentar resolver a 1ª de novo até sair'], a: 1 },
        { c: 'Direito', t: '(Cidadania) O ECA garante à criança prioridade de socorro. Isso significa que:', o: ['Ela fura a fila do SUS, independentemente da gravidade clínica', 'Ela tem preferência em receber proteção em quaisquer circunstâncias', 'Ela dita as ordens médicas', 'É dispensável a triagem'], a: 1 },
        { c: 'Informática', t: `[DIFERENCIAL ${orgao}] Na elaboração de um relatório tático escolar, qual atalho alterna entre as janelas rapidamente?`, o: ['ALT + F4', 'CTRL + ALT + DEL', 'ALT + TAB', 'WIN + L'], a: 2 },
        { c: 'Específicas', t: 'No Método do Pai 360, o candidato não estuda apenas, ele mapeia o terreno. Qual a armadilha do EPCAR/Naval?', o: ['Cálculo Matemático Pesado (Complexidade)', 'Redação Curta', 'Exame Físico Relaxado', 'Foco apenas em História'], a: 0 },
        { c: 'Português', t: 'Para passar no top 5%, identificar o Plural em compostos é chave. Qual está INCORRETO na norma culta padrão?', o: ['Sempre-vivas', 'Salários-família', 'Decretos-leis', 'Beija-flores'], a: 1 }
    ];
}

async function carregarQuestoes() {
    // WIPE DE CACHE: Zerar Arrays de sessão na montagem da tela!
    currentQ = 0;
    responseTimes = [];
    quizData = [];
    scores = { 'Português': 0, 'Direito': 0, 'Exatas': 0, 'Informática': 0, 'Específicas': 0 };

    console.log('[QUEBRA-GELO] Inicializando Sistema de Diagnóstico Frontal...');
    let orgao = sessionStorage.getItem('recruta_orgao') || 'Órgão Selecionado';
    let idadeAlvo = sessionStorage.getItem('recruta_idade_alvo') || 'Adulto';
    
    console.log(`[QUEBRA-GELO] Alvo Detectado: ${orgao} | Idade Alvo: ${idadeAlvo}`);
    
    try {
        ui.textoQuestao.innerText = 'Sincronizando com a Matriz da Banca...';
    } catch(e) { console.error('[QUEBRA-GELO] Falha ao renderizar Sync UI:', e); }
    
    // Tenta Data Mining Real (Time limit 1.0s - Operação Quebra-Gelo Absoluta)
    let extraidos = null;
    
    if (supabaseDb) {
        try {
            console.log('[QUEBRA-GELO] Iniciando Query concorrente (800ms Máximo)...');
            const timeoutPromise = new Promise(resolve => setTimeout(() => resolve({ error: 'timeout_emergencial' }), 800));
            
            // Bypass de restrição: VINCULAÇÃO OBRIGATÓRIA DE NÍVEL
            const filterNivel = idadeAlvo.includes('Fundamental') ? 'Fundamental' 
                              : (orgao.toUpperCase().includes('TSE') || orgao.toUpperCase().includes('PF')) ? 'Superior' : 'Médio';
            
            const fetchPromise = supabaseDb.from('questoes_diagnostico')
                .select('*, base_conhecimento!inner(*)')
                .eq('base_conhecimento.nivel', filterNivel)
                .limit(10);
            
            const res = await Promise.race([fetchPromise, timeoutPromise]);
            
            if (res && res.error === 'timeout_emergencial') {
                console.warn('[QUEBRA-GELO] Timeout de 800ms violado! O Supabase congelou. Abortando banco.');
            } else if (res && res.data && res.data.length >= 5) {
                console.log(`[QUEBRA-GELO] SUCESSO! ${res.data.length} extraídos estruturalmente do BD.`);
                extraidos = res.data; 
            } else {
                console.warn('[QUEBRA-GELO] Retorno vazio/incompleto da query. Injetando Mock Rigoroso.');
            }
        } catch(e) { 
            console.error('[ERRO DRÁSTICO] Data Mining explodiu na exceção:', e); 
        }
    } else {
        console.warn('[QUEBRA-GELO] Cliente Supabase não existe. Saltando direto para Mock.');
    }

    // Fallback Rigoroso pós timeout
    if(!extraidos || extraidos.length < 5) {
        console.warn('[ALERTA DA SQUAD] Injetando Banco Rigoroso Pré-Mapeado localmente.');
        
        const orgMatch = orgao.toUpperCase();
        
        if(idadeAlvo.includes('Fundamental')) {
            if (orgMatch.includes('CMRJ') || orgMatch.includes('PEDRO II') || orgMatch.includes('EPCAR') || orgMatch.includes('NAVAL')) {
                quizData = injetarPegadinhasEliteFundamental(orgao);
                console.log('[MÉTODO DO PAI CRUEL] Bateria Tática de Choque Injetada.');
            } else {
                quizData = injetarRigorMockFundamental(orgao);
            }
        } else if (orgMatch.includes('TSE')) {
            try {
                const tr = await fetch('/tse_fgv_fallback.json?v=' + Date.now());
                quizData = await tr.json();
                console.log('[QUEBRA-GELO] Mock Específico do TSE (FGV) Injetado com Sucesso!');
            } catch(e) {
                console.error('Falha ao carregar fallback TSE:', e);
                quizData = injetarRigorMock(orgao); // Fallback secundário
            }
        } else {
            quizData = injetarRigorMock(orgao);
        }
    } else {
        // Adapta os cards do BD para o objeto JSON do script
        quizData = extraidos.map(q => ({
            c: q.base_conhecimento ? q.base_conhecimento.disciplina || 'Específicas' : 'Específicas',
            t: q.texto_questao,
            o: [q.opcao_a, q.opcao_b, q.opcao_c, q.opcao_d],
            a: ['A','B','C','D'].indexOf(q.resposta_correta)
        }));
        // Preenche até 10 usando Injeção caso venham poucos
        if(quizData.length < 10) {
            const complementos = idadeAlvo.includes('Fundamental') ? injetarRigorMockFundamental(orgao) : injetarRigorMock(orgao);
            quizData = [...quizData, ...complementos.slice(0, 10 - quizData.length)];
        }
    }

    // Calcular Pesos Dinâmicos da Prova
    maxScores = { 'Português': 0, 'Direito': 0, 'Exatas': 0, 'Informática': 0, 'Específicas': 0 };
    quizData.forEach(q => {
        let mc = q.c;
        if(mc.includes('Direito')) mc = 'Direito';
        if(maxScores[mc] === undefined) mc = 'Específicas';
        maxScores[mc] += 1;
    });
    categorias.forEach(c => { if(maxScores[c] === 0) maxScores[c] = 1; }); // Evitar div/0

    console.log('[QUEBRA-GELO] Matriz pronta. Disparando Questão 1 na Interface.');
    currentQ = 0;
    
    try {
        ui.opcoesGrid.classList.add('slide-container', 'slide-center');
        renderizarVariavel();
    } catch (e) {
        console.error('[ERRO FATAL] Falha ao injetar card visual:', e);
    }
}

function renderizarVariavel() {
    if (currentQ >= quizData.length) {
        exibirDashboard();
        return;
    }

    const q = quizData[currentQ];
    ui.textoQuestao.innerText = q.t;
    ui.metaQuestao.innerText = `Combate ${currentQ + 1}/10 | Setor: ${q.c}`;
    
    // Slide Enter
    ui.opcoesGrid.classList.remove('slide-exit-left');
    ui.opcoesGrid.classList.add('slide-enter-right');
    
    setTimeout(() => {
        ui.opcoesGrid.innerHTML = '';
        q.o.forEach((texto, idx) => {
            const btn = document.createElement('button');
            btn.className = 'opcao-card';
            btn.innerHTML = `<span style="display:inline-block; background:rgba(255,255,255,0.1); width:28px; height:28px; line-height:28px; border-radius:6px; text-align:center; margin-right:12px; font-weight:bold; color:#FFD700;">${['A','B','C','D'][idx]}</span> ${texto}`;
            btn.onclick = () => responder(btn, idx, q.a, q.c);
            ui.opcoesGrid.appendChild(btn);
        });
        ui.opcoesGrid.classList.remove('slide-enter-right');
        ui.opcoesGrid.classList.add('slide-center');
        
        qStartTime = performance.now();
    }, 50);

    // Bypass 'Sensação de Congelamento': A Questão 1 já debita da barra de progresso
    const pct = ((currentQ + 1) / quizData.length) * 100;
    ui.progressFill.style.width = pct + '%';
    const txtProgresso = document.getElementById('txt-progresso');
    if (txtProgresso) txtProgresso.innerText = Math.round(pct) + '% Mapeado';
}

function responder(btn, selecionada, correta, categoria) {
    const timeTaken = performance.now() - qStartTime;
    responseTimes.push(timeTaken);

    Array.from(ui.opcoesGrid.children).forEach(b => b.disabled = true);

    if (selecionada === correta) {
        btn.classList.add('correct');
        let macroCat = categoria;
        if(macroCat.includes('Direito')) macroCat = 'Direito';
        if(scores[macroCat] !== undefined) scores[macroCat] += 1;
        else scores['Específicas'] += 1;
    } else {
        btn.classList.add('wrong');
        ui.opcoesGrid.children[correta].classList.add('correct');
    }

    // Saída rápida (Velocidade Mobile-First)
    setTimeout(() => {
        ui.opcoesGrid.classList.remove('slide-center');
        ui.opcoesGrid.classList.add('slide-exit-left');
        setTimeout(() => {
            currentQ++;
            renderizarVariavel();
        }, 250); // Delay do framer motion mimic
    }, 600); // Mostra verde/vermelho rápido e corta
}

function exibirDashboard() {
    ui.quizArea.style.display = 'none';
    ui.dashboard.style.display = 'block';

    ui.progressFill.style.width = '100%';
    document.getElementById('txt-progresso').innerText = 'Teste Finalizado';

    // 1. Latência Cognitiva: Média de tempo em SEGUNDOS
    const mediaSecs = (responseTimes.reduce((a,b)=>a+b, 0) / responseTimes.length) / 1000;
    
    let idadeAlvo = sessionStorage.getItem('recruta_idade_alvo') || 'Adulto';
    let mediaAprovadosSecs = 7.5; // Aprovados lêem e respondem testes rápidos em 7.5s (Lei de Parkinson) adulto
    
    if(idadeAlvo.includes('Fundamental')) {
        mediaAprovadosSecs = 12.0; // Perfil Cognitivo Infantil/Juvenil de Elite Escolar
    }
    
    const memEl = document.getElementById('dash-memorizacao');
    const memDet = document.getElementById('dash-mem-detalhe');
    
    if (mediaSecs <= mediaAprovadosSecs) {
        memEl.innerText = `${mediaSecs.toFixed(1)}s (Fio da Navalha)`;
        memEl.style.color = '#10B981';
        memDet.innerText = 'Sua latência cognitiva superou a média! Acesso neural ultrarrápido.';
    } else {
        memEl.innerText = `${mediaSecs.toFixed(1)}s (Lentidão Detectada)`;
        memEl.style.color = '#EF4444';
        memDet.innerHTML = `Risco de tempo em prova real. Aprovados batem <b>${mediaAprovadosSecs}s</b>. Mapeie treinos de velocidade de leitura.`;
    }

    // 2. Gap de Posse Real
    const totalAcertos = Object.values(scores).reduce((a,b)=>a+b, 0);
    const notaAluno = (totalAcertos / 10) * 100;
    const notaCorteOriginal = 86.5; 
    const gap = notaAluno - notaCorteOriginal;
    
    const gapEl = document.getElementById('dash-gap');
    document.getElementById('dash-corte').innerText = `${notaCorteOriginal}%`;

    if (gap >= 0) {
        gapEl.innerText = `+${gap.toFixed(1)}% (VOCÊ É A POSSE)`;
        gapEl.style.color = '#10B981';
    } else {
        gapEl.innerText = `${gap.toFixed(1)}% (FORA DOS CLASSIFICADOS)`;
        gapEl.style.color = '#EF4444';
    }

    // 3. Gráfico de Teia - DUAS CAMADAS
    const ctx = document.getElementById('radarChart').getContext('2d');
    const desempenhoAluno = categorias.map(c => Math.min((scores[c] / maxScores[c]) * 100, 100));
    const desempenhoAprovado = [85, 90, 80, 100, 95]; // Meta inquebrável por disciplina
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: categorias,
            datasets: [
                {
                    label: 'Seu DNA (%)',
                    data: desempenhoAluno,
                    backgroundColor: 'rgba(239, 68, 68, 0.4)', // Vermelho alerta pro aluno ver deficiência
                    borderColor: '#EF4444',
                    borderWidth: 2,
                    pointBackgroundColor: '#F8FAFC',
                    pointBorderColor: '#EF4444'
                },
                {
                    label: 'Perfil Aprovado (Meta)',
                    data: desempenhoAprovado,
                    backgroundColor: 'rgba(212, 175, 55, 0.1)', // Dourado Meta
                    borderColor: '#D4AF37',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    pointBackgroundColor: 'transparent',
                    pointBorderColor: 'transparent'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255,255,255,0.05)' },
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    pointLabels: { color: '#F8FAFC', font: { size: 11, weight: 'bold' } },
                    ticks: { display: false, min: 0, max: 100 }
                }
            },
            plugins: { 
                legend: { 
                    position: 'bottom', 
                    labels: { color: '#94A3B8', font: { size: 11 } }
                } 
            }
        }
    });

    supabaseDb.from('diagnosticos_resultados').insert([{
        pontuacao_geral: totalAcertos,
        meta_objetivo: sessionStorage.getItem('recruta_meta') || 'Não informada',
        status_pagamento: 'pendente'
    }]).then(res => console.log('Resultado de Posse Analisada salvo com sucesso.'));
}

if(document.getElementById('btn-conquistar-vaga')) {
    document.getElementById('btn-conquistar-vaga').addEventListener('click', () => {
        showScreen('paywall');
    });
}

// Kick off instantâneo da matriz após ciclo de execução
try {
    if(document.getElementById('diagnostico')) {
        console.log('[QUEBRA-GELO] Div Diagnóstico detectada. Agendando disparo...');
        setTimeout(() => {
            carregarQuestoes();
        }, 100);
    } else {
        console.warn('[ERRO DE CONTEXTO] div #diagnostico NÃO encontrada! O Script vazou?');
    }
} catch (e) {
    console.error('[ERRO GLOBAL] Falha ao ler Elementos no Document:', e);
}
