const supabaseUrl = (window.ENV && window.ENV.SUPABASE_URL) || '';
const supabaseKey = (window.ENV && window.ENV.SUPABASE_ANON_KEY) || '';

let supabase;
try {
    if(!window.supabase) {
        console.warn('[RADAR] CDN do Supabase NÃO detectado! Banco offline, habilitando Modo Rigoroso (Mock).');
    } else {
        supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
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

// Motor 360° - Leitor Universal JSON (Isolamento Absoluto)
async function carregarQuestoes() {
    // WIPE DE CACHE: Zerar Arrays de sessão na montagem da tela!
    currentQ = 0;
    responseTimes = [];
    quizData = [];
    scores = { 'Português': 0, 'Direito': 0, 'Exatas': 0, 'Informática': 0, 'Específicas': 0 };

    console.log('[QUEBRA-GELO 360] Inicializando Sistema Universal Frontal...');
    let orgao = sessionStorage.getItem('recruta_orgao') || 'Pedro II';
    let idadeAlvo = sessionStorage.getItem('recruta_idade_alvo') || 'Adulto';
    
    console.log(`[QUEBRA-GELO 360] Alvo Genético: ${orgao}`);
    
    try {
        ui.textoQuestao.innerText = 'Sincronizando com o Cofre da Banca...';
    } catch(e) { console.error('Falha de UI Sync:', e); }

    // Roteador Universal 360: Mapeamento de Cofres por Match Exato ou Fallback de Família
    const stringOrgao = orgao.toUpperCase();
    const familia = sessionStorage.getItem('recruta_familia') || 'militar';
    let targetJsonUrl = '';

    // 1. Busca Exata por Sigla de Órgão Cadastrado
    if (stringOrgao.includes('PMERJ') || stringOrgao === 'PM' || stringOrgao.includes('BOMBEIRO')) {
        targetJsonUrl = '/db_editais/edital_pmerj.json';
    } else if (stringOrgao.includes('FAETEC')) {
        targetJsonUrl = '/db_editais/edital_faetec.json';
    } else if (stringOrgao.includes('PEDRO') || stringOrgao.includes('CEFET')) {
        targetJsonUrl = '/db_editais/edital_pedro_ii.json';
    } else if (stringOrgao.includes('BANCO DO BRASIL') || stringOrgao.includes(' BB')) {
        targetJsonUrl = '/db_editais/edital_bb.json';
    } else if (stringOrgao.includes('CAIXA') || stringOrgao.includes('CEF')) {
        targetJsonUrl = '/db_editais/edital_caixa.json';
    } else if (stringOrgao.includes('CORREIOS')) {
        targetJsonUrl = '/db_editais/edital_correios.json';
    } else if (stringOrgao.includes('PETROBRAS')) {
        targetJsonUrl = '/db_editais/edital_petrobras.json';
    } else if (stringOrgao.includes('TRIBUNAL') || stringOrgao.includes('TJ-') || stringOrgao.includes('TJ ') || stringOrgao === 'TJ' || stringOrgao.includes('TRT') || stringOrgao.includes('TRE')) {
        targetJsonUrl = '/db_editais/fallback_tribunais.json';
    } else if (stringOrgao.includes('CIVIL') || stringOrgao.includes('FEDERAL')) {
        targetJsonUrl = '/db_editais/fallback_policia_civil.json';
    } else if (stringOrgao.includes('BANCO') || stringOrgao.includes('ESTATAL')) {
        targetJsonUrl = '/db_editais/fallback_estatal.json';
    }

    // 2. Fallbacks Nacionais Estratégicos por Família Mãe
    if (!targetJsonUrl) {
        if (familia.includes('tribunal')) targetJsonUrl = '/db_editais/fallback_tribunais.json';
        else if (familia.includes('estatal')) targetJsonUrl = '/db_editais/fallback_estatal.json';
        else if (familia.includes('escolar') || familia.includes('academico')) targetJsonUrl = '/db_editais/edital_pedro_ii.json';
        else if (familia.includes('policia_civil')) targetJsonUrl = '/db_editais/fallback_policia_civil.json';
        else targetJsonUrl = '/db_editais/edital_pmerj.json'; // Padrão Militar Nacional
    }
    try {
        console.log(`[MÉTODO 360] Baixando Cofre: ${targetJsonUrl}...`);
        const fetchRes = await fetch(targetJsonUrl + '?v=' + Date.now());
        if (!fetchRes.ok) throw new Error('Cofre não encontrado. 404 HTTP.');
        
        const bancoIsolado = await fetchRes.json();
        const poolDeQuestoes = bancoIsolado.questoes;
        
        // Randomizar (Embaralhar) e pegar 10 questões
        quizData = poolDeQuestoes.sort(() => 0.5 - Math.random()).slice(0, 10);
        console.log(`[MÉTODO 360] Cofre aberto! ${quizData.length} questões na agulha.`);

    } catch(e) { 
        console.error('[ERRO DRÁSTICO 360] Cofre explodiu. Aplicando Contingência de 1 Questão:', e); 
        quizData = [
            { c: 'Específicas', t: '[CONTO-QUEDA 360] Falha no radar. A disciplina militar exige superação contínua.', o: ['A', 'B', 'C', 'D'], a: 0 }
        ];
    }

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
    
    // [NOVO 360] Limpar injetores antigos de mídia (Imagens/Textos-Base)
    const oldRef = document.getElementById('q-ref-text');
    if (oldRef) oldRef.remove();
    const oldImg = document.getElementById('q-ref-img');
    if (oldImg) oldImg.remove();
    
    // [NOVO 360] Injetor de Textos de Referência (Crônicas, Textos Base)
    if (q.txtRef) {
        const pRef = document.createElement('div');
        pRef.id = 'q-ref-text';
        pRef.style = "background: rgba(0,0,0,0.3); padding: 15px; border-left: 3px solid #4FA5FF; margin-bottom: 15px; font-size: 0.9rem; color: #CBD5E1; font-style: italic; border-radius: 4px; max-height: 200px; overflow-y: auto;";
        pRef.innerHTML = q.txtRef;
        ui.textoQuestao.parentNode.insertBefore(pRef, ui.textoQuestao);
    }
    
    // [NOVO 360] Injetor de Diagramas, Gráficos e Imagens da Banca
    if (q.img) {
        const imgEl = document.createElement('img');
        imgEl.id = 'q-ref-img';
        imgEl.src = q.img;
        imgEl.style = "max-width: 100%; border-radius: 8px; margin-bottom: 15px; border: 1px solid #334155; display: block; margin-left: auto; margin-right: auto;";
        ui.textoQuestao.parentNode.insertBefore(imgEl, ui.textoQuestao);
    }

    // [NOVO 360] Suporte a HTML Rico (Sublinhados, Negritos e Quebras da Banca)
    ui.textoQuestao.innerHTML = q.t;
    ui.metaQuestao.innerText = `Combate ${currentQ + 1}/10 | Setor: ${q.c}`;
    
    // [NOVO 360] Botão nativo de TTS (Acessibilidade e Deslocamento)
    const oldTts = document.getElementById('btn-tts-questao');
    if (oldTts) oldTts.remove();
    
    const btnTts = document.createElement('button');
    btnTts.id = 'btn-tts-questao';
    btnTts.innerHTML = '🔊 Ouvir Missão e Alternativas';
    btnTts.className = 'btn-audio';
    btnTts.style = "margin-top: 15px; margin-bottom: 20px; font-size: 1rem; padding: 10px 20px; background-color: #334155; color: #F3F4F6; margin-left: auto; margin-right: auto;";
    btnTts.onclick = () => {
        if('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Para leitura anterior
            const textoLeitura = new SpeechSynthesisUtterance();
            
            // Remove tags HTML
            const plainText = document.createElement('div');
            plainText.innerHTML = q.t;
            
            // Constrói a frase do motor
            let frase = "Missão atual. " + plainText.textContent + ". Alternativas: ";
            q.o.forEach((opt, idx) => {
                frase += "Letra " + ['A','B','C','D'][idx] + ". " + opt + ". ";
            });
            
            textoLeitura.text = frase;
            textoLeitura.lang = 'pt-BR';
            textoLeitura.rate = 1.05; 
            window.speechSynthesis.speak(textoLeitura);
        } else {
            alert('Seu navegador não suporta leitura de áudio nativa.');
        }
    };
    
    ui.metaQuestao.parentNode.insertBefore(btnTts, ui.opcoesGrid);
    
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
    if('speechSynthesis' in window) window.speechSynthesis.cancel(); // [NOVO 360] Silencia a IA ao responder
    const timeTaken = performance.now() - qStartTime;

    Array.from(ui.opcoesGrid.children).forEach(b => b.disabled = true);

    if (selecionada === correta) {
        btn.classList.add('correct');
        if(scores[categoria] !== undefined) scores[categoria] += 1;
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

    supabase.from('diagnosticos_resultados').insert([{
        usuario_id: sessionStorage.getItem('recruta_id'),
        nome_responsavel: sessionStorage.getItem('recruta_nome') || 'Desconhecido',
        telefone_whatsapp: sessionStorage.getItem('recruta_whatsapp') || 'Nao Informado',
        pontuacao_geral: totalAcertos,
        meta_objetivo: sessionStorage.getItem('recruta_meta') || 'Não informada',
        status_pagamento: 'pendente',
        funil_status: 'nao_acionado'
    }]).then(res => console.log('Resultado de Posse Analisada salvo com sucesso e enviado ao Funil 24h.'));
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
