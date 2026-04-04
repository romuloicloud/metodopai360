const _coreSupabaseUrl = (window.ENV && window.ENV.SUPABASE_URL)  || '';
const _coreSupabaseKey = (window.ENV && window.ENV.SUPABASE_ANON_KEY) || '';

let supabaseDb;
try {
    if(!window.supabase) {
        console.warn('[RADAR] CDN do Supabase NÃO detectado! Banco offline, habilitando Modo Rigoroso (Mock).');
    } else {
        supabaseDb = window.supabase.createClient(_coreSupabaseUrl, _coreSupabaseKey);
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

// Fallback DB: carrega exercicios_forja quando JSON local não existe
async function carregarQuestoesDB(gpsId) {
    try {
        if (!supabaseDb || !gpsId) return false;

        // Se for placeholder, busca pelo orgao
        let gpsQuery = supabaseDb.from('concursos_gps').select('concurso_ref_id');
        if (gpsId === 'INSS_PREVISTO') {
            gpsQuery = gpsQuery.ilike('orgao', '%INSS%').limit(1);
        } else {
            gpsQuery = gpsQuery.eq('id', gpsId);
        }
        const { data: gpsRaw } = await gpsQuery;
        const gpsData = Array.isArray(gpsRaw) ? gpsRaw[0] : gpsRaw;
        if (!gpsData?.concurso_ref_id) return false;

        const { data: discData } = await supabaseDb
            .from('disciplinas').select('id').eq('concurso_id', gpsData.concurso_ref_id);
        if (!discData?.length) return false;

        const { data: modData } = await supabaseDb
            .from('modulos').select('id').in('disciplina_id', discData.map(d => d.id));
        if (!modData?.length) return false;

        const { data: pilData } = await supabaseDb
            .from('pilulas_forja').select('id').in('modulo_id', modData.map(m => m.id));
        if (!pilData?.length) return false;

        const { data: exData } = await supabaseDb
            .from('exercicios_forja').select('*')
            .in('pilula_id', pilData.map(p => p.id)).limit(40);
        if (!exData?.length) return false;

        quizData = exData.sort(() => 0.5 - Math.random()).slice(0, 10).map(ex => ({
            c: 'Específicas',
            t: ex.pergunta,
            o: ex.alternativas,
            a: ex.correta
        }));
        console.log(`[DB 360] ${quizData.length} questões carregadas do banco Supabase.`);
        return quizData.length > 0;
    } catch (err) {
        console.error('[DB 360] Falha no fallback DB:', err);
        return false;
    }
}

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

    // Roteador Universal 360 (Integridade 100%): Roteamento por ID Exato
    const editalUUID = sessionStorage.getItem('recruta_concurso_id');
    
    // Mapeamento Tático: Do UUID blindado (Servidor) para o arquivo de teste ágil em JSON
    const cofreResolver = {
        // ── GPS UUIDs reais → arquivo JSON local ─────────────────────────
        '37a79dcc-3c56-4615-ac27-d04ec5a86d07': 'edital_pmerj',         // PMERJ Soldado
        '9d1c4dae-02d3-401b-8dca-4a3bb7d92de5': 'edital_pedro_ii',      // Pedro II 6º Ano
        'b3963977-9125-4a09-aa07-8abeb32f0a87': 'edital_faetec',        // FAETEC EF Integral
        'dbfb7aad-7808-4dd2-90cf-953c382b6243': 'edital_pf',            // PF Agente Federal
        'ad11f11b-4569-4541-9deb-5b51e99a827e': 'edital_prf',           // PRF Policial
        '41242a75-1e54-46ea-a380-d50f2fd4425e': 'edital_bb',            // BB Escriturário
        '467b071c-6faa-4d48-bd80-71173e3d623f': 'edital_caixa',         // Caixa Técnico
        'eb1e50ac-463b-4966-b13b-07958651a002': 'edital_correios',      // Correios Carteiro
        'd23dc002-d720-4c9d-8903-a85e4124bed8': 'edital_tjrj',          // TJ-RJ
        '489086a5-3172-449b-be54-fc2e9fe0ed54': 'edital_petrobras',     // Petrobras
        '197be82e-0283-4373-95e7-5c3054de730e': 'edital_espcex',        // EsPCEx Exército
        'e68079a2-e467-4cfb-9859-80e97053f2d1': 'edital_eear',          // EEAR Aeronáutica
        'b8c9dd22-e037-488c-b39c-ad3b4ebf89c1': 'edital_colegio_naval', // Colégio Naval
        '3fda4434-c074-41c0-9837-935dff2ef84b': 'edital_fuzileiro',     // Fuzileiros Navais
        '0aec31cd-cf9d-4a46-9207-8ce226c78ed5': 'fallback_policia_civil', // PCERJ
        'd5d8339d-5662-4021-8f96-a712aa60a50a': 'edital_inss',           // INSS Técnico do Seguro Social
        '38b02499-6bb1-48b0-96fb-b56b381bc3d9': 'edital_essa',           // ESA Sargento do Exército
        'PMSP_PREVISTO':                         'edital_pmerj',          // PM-SP (usa base PMERJ até JSON próprio)
        // ── Legacy (retrocompatibilidade) ─────────────────────────────────
        '9167b605-0081-4f93-adc7-ea406aa5a11a': 'edital_pedro_ii',
        '42baa8fb-2130-4864-966b-923c0bf3f9a0': 'edital_faetec',
    };
    
    const editalID = cofreResolver[editalUUID] || editalUUID;
    let targetJsonUrl = `/db_editais/${editalID}.json`;

    if (editalID === 'edital_em_construcao' || !editalUUID || editalID === 'undefined') {
        targetJsonUrl = null; 
    }
    try {
        if (!targetJsonUrl) throw new Error('ID Reservado de Construção');

        console.log(`[MÉTODO 360] Baixando Cofre Fiel: ${targetJsonUrl}...`);
        const fetchRes = await fetch(targetJsonUrl + '?v=' + Date.now());
        if (!fetchRes.ok) throw new Error('Cofre não encontrado. 404 HTTP.');
        
        const bancoIsolado = await fetchRes.json();
        const poolDeQuestoes = bancoIsolado.questoes_amostra_2021 || bancoIsolado.questoes;
        
        if (!poolDeQuestoes || poolDeQuestoes.length === 0) {
            throw new Error('Banco vazio ou invalido.');
        }

        // TRADUTOR TERRESTRE UNIVERSAL: Módulo de Compatibilidade de APIs
        // Converte o formato Rico (disciplina, enunciado, opções) para o formato Minificado Raiz (c, t, o, a)
        const formatMath = (str) => {
            if (typeof str !== 'string') return str;
            // Intercepta expoentes matemáticos (10^-13 -> 10<sup>-13</sup>) e asteriscos de multiplicação ( * -> &middot; )
            return str.replace(/\^\(([^)]+)\)/g, '<sup>$1</sup>')
                      .replace(/\^([\w\-]+)/g, '<sup>$1</sup>')
                      .replace(/ \* /g, ' &middot; ');
        };

        // Mapeamento via UUID Universal
        const brasaoMap = {
            '11111111-1111-1111-1111-111111111111': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bras%C3%A3o_da_Pol%C3%ADcia_Militar_do_Estado_do_Rio_de_Janeiro.svg/300px-Bras%C3%A3o_da_Pol%C3%ADcia_Militar_do_Estado_do_Rio_de_Janeiro.svg.png',
            '42baa8fb-2130-4864-966b-923c0bf3f9a0': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bras%C3%A3o_do_estado_do_Rio_de_Janeiro.svg/200px-Bras%C3%A3o_do_estado_do_Rio_de_Janeiro.svg.png',
            '9167b605-0081-4f93-adc7-ea406aa5a11a': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Bras%C3%A3o_do_Col%C3%A9gio_Pedro_II.png/300px-Bras%C3%A3o_do_Col%C3%A9gio_Pedro_II.png',
            '489086a5-3172-449b-be54-fc2e9fe0ed54': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Petrobras_Logo.svg/512px-Petrobras_Logo.svg.png',
            '33333333-3333-3333-3333-333333333333': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Caixa_Econ%C3%B4mica_Federal_logo.svg/512px-Caixa_Econ%C3%B4mica_Federal_logo.svg.png',
            '44444444-4444-4444-4444-444444444444': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Banco_do_Brasil_logo.svg/512px-Banco_do_Brasil_logo.svg.png',
            '22222222-2222-2222-2222-222222222222': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Bras%C3%A3o_TJRJ.png/300px-Bras%C3%A3o_TJRJ.png',
            'edital_correios': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Correios_%282014%29_logo.svg/300px-Correios_%282014%29_logo.svg.png',
            'edital_essa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/S%C3%ADmbolo_do_Ex%C3%A9rcito_Brasileiro.svg/300px-S%C3%ADmbolo_do_Ex%C3%A9rcito_Brasileiro.svg.png',
            'edital_espcex': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Bras%C3%A3o_EsPCEx.png/300px-Bras%C3%A3o_EsPCEx.png',
            'edital_ime': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bras%C3%A3o_do_IME.png/300px-Bras%C3%A3o_do_IME.png',
            'edital_eear': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Emblem_of_the_Brazilian_Air_Force.svg/300px-Emblem_of_the_Brazilian_Air_Force.svg.png',
            'edital_epcar': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Emblem_of_the_Brazilian_Air_Force.svg/300px-Emblem_of_the_Brazilian_Air_Force.svg.png',
            'edital_afa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Emblem_of_the_Brazilian_Air_Force.svg/300px-Emblem_of_the_Brazilian_Air_Force.svg.png',
            'edital_ita': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Emblem_of_the_Brazilian_Air_Force.svg/300px-Emblem_of_the_Brazilian_Air_Force.svg.png',
            'edital_pedro_ii': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Bras%C3%A3o_do_Col%C3%A9gio_Pedro_II.png/300px-Bras%C3%A3o_do_Col%C3%A9gio_Pedro_II.png',
            'edital_fuzileiro': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Emblem_of_the_Brazilian_Navy.png/300px-Emblem_of_the_Brazilian_Navy.png',
            'edital_colegio_naval': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Emblem_of_the_Brazilian_Navy.png/300px-Emblem_of_the_Brazilian_Navy.png',
            'edital_escola_naval': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Emblem_of_the_Brazilian_Navy.png/300px-Emblem_of_the_Brazilian_Navy.png',
            'edital_enem': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Enem_logo.svg/300px-Enem_logo.svg.png',
            'edital_tse': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bras%C3%A3o_do_Tribunal_Superior_Eleitoral.svg/300px-Bras%C3%A3o_do_Tribunal_Superior_Eleitoral.svg.png',
            'edital_tjrj': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Bras%C3%A3o_TJRJ.png/300px-Bras%C3%A3o_TJRJ.png',
            'edital_tjsp': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Bras%C3%A3o_do_Tribunal_de_Justi%C3%A7a_de_S%C3%A3o_Paulo.png/300px-Bras%C3%A3o_do_Tribunal_de_Justi%C3%A7a_de_S%C3%A3o_Paulo.png',
            // ── Entradas por nome de arquivo (resolvidas pelo cofreResolver) ──
            'edital_pmerj':     'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bras%C3%A3o_da_Pol%C3%ADcia_Militar_do_Estado_do_Rio_de_Janeiro.svg/300px-Bras%C3%A3o_da_Pol%C3%ADcia_Militar_do_Estado_do_Rio_de_Janeiro.svg.png',
            'edital_pf':        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Pol%C3%ADcia_Federal_do_Brasil_bras%C3%A3o.svg/300px-Pol%C3%ADcia_Federal_do_Brasil_bras%C3%A3o.svg.png',
            'edital_prf':       'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Pol%C3%ADcia_Rodovi%C3%A1ria_Federal_bras%C3%A3o.svg/300px-Pol%C3%ADcia_Rodovi%C3%A1ria_Federal_bras%C3%A3o.svg.png',
            'edital_bb':        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Banco_do_Brasil_logo.svg/512px-Banco_do_Brasil_logo.svg.png',
            'edital_caixa':     'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Caixa_Econ%C3%B4mica_Federal_logo.svg/512px-Caixa_Econ%C3%B4mica_Federal_logo.svg.png',
            'edital_correios':  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Correios_%282014%29_logo.svg/300px-Correios_%282014%29_logo.svg.png',
            'edital_petrobras': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Petrobras_Logo.svg/512px-Petrobras_Logo.svg.png',
            'edital_inss':      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Bras%C3%A3o_do_INSS.svg/300px-Bras%C3%A3o_do_INSS.svg.png',
        };

        // Escudo Tático Dinâmico: Se houver logo cadastrada, troca o ícone padrão pelo Brasão Oficial do Órgão
        const targetImg = document.querySelector('img[src="/app-icon.png?v=5"]');
        if (targetImg && brasaoMap[editalID]) {
            targetImg.src = brasaoMap[editalID];
            targetImg.style.filter = "drop-shadow(0 4px 15px rgba(212, 175, 55, 0.5))"; // Brilho de Ouro
            targetImg.style.backgroundColor = "transparent";
            targetImg.style.width = "auto";
            targetImg.style.maxHeight = "90px";
            targetImg.style.objectFit = "contain";
        }

        // Randomizar (Embaralhar) e pegar 10 questões
        quizData = poolDeQuestoes.sort(() => 0.5 - Math.random()).slice(0, 10);
        
        quizData = quizData.map(q => {
            if (q.c !== undefined) {
                q.t = formatMath(q.t);
                q.o = q.o.map(opt => formatMath(opt));
                return q; // Já é formato Minificado
            }

            let questionText = q.texto_base ? `${q.texto_base}<br><br><b>${q.enunciado}</b>` : (q.enunciado || "Questão de Assalto");
            let correctIndex = 0;
            if (q.gabarito_correto && q.opcoes) {
                correctIndex = q.opcoes.findIndex(op => op.trim() === q.gabarito_correto.trim());
                if (correctIndex === -1) correctIndex = 0; // Fallback se falhar
            }
            return {
                c: q.disciplina || 'Específicas',
                t: formatMath(questionText),
                o: (q.opcoes || ['A', 'B', 'C', 'D']).map(opt => formatMath(opt)),
                a: correctIndex,
                justificativa: q.justificativa_squad || ''
            };
        });

        console.log(`[MÉTODO 360] Cofre aberto e Normalizado! ${quizData.length} questões na agulha.`);

    } catch (e) {
        console.warn('[INTEGRIDADE 360] JSON não encontrado. Tentando banco Supabase...', e.message);

        // Fallback DB: consulta exercicios_forja via GPS → concurso → disciplinas → exercicios
        const dbCarregado = await carregarQuestoesDB(editalUUID);

        if (!dbCarregado) {
            ui.textoQuestao.innerHTML = `
                <div style="text-align: center; color: #FFF; padding: 20px;">
                    <i class="fa-solid fa-lock" style="font-size: 3rem; color: #D4AF37; margin-bottom: 20px;"></i>
                    <h2 style="font-weight: 900; margin-bottom: 10px; color:#F8FAFC;">BANCO DE QUESTÕES EM CONSTRUÇÃO</h2>
                    <p style="color: #94A3B8; font-size: 0.95rem; line-height: 1.5;">
                        O Método do Pai não utiliza dados genéricos de "tapa-buraco".<br>
                        Nossa Squad de Especialistas está analisando rigorosamente o último edital e a doutrina da banca correspondente a <strong>${orgao || 'este Cargo'}</strong>.<br><br>
                        O seu Diagnóstico Exato de Nivelamento estará disponível em breve.
                    </p>
                    <button onclick="window.location.href='tela_catalogo_concursos.html'" style="margin-top: 20px; background: #D4AF37; color: #000; border: none; padding: 12px 25px; font-weight: 900; border-radius: 5px; cursor: pointer; text-transform: uppercase;">Retornar ao Catálogo</button>
                </div>
            `;
            ui.opcoesGrid.innerHTML = '';
            if(ui.metaQuestao) ui.metaQuestao.style.display = 'none';
            const nextBtn = document.getElementById('next-btn');
            if(nextBtn) nextBtn.style.display = 'none';
            const prog = document.getElementById('hq-progress');
            if(prog) prog.style.display = 'none';
            return; // ABORTAR FLUXO DA MISSÃO TOTALMENTE.
        }

        // DB carregou — continua normalmente (quizData já populado por carregarQuestoesDB)
        console.log('[DB 360] Banco Supabase ativado com sucesso. Continuando fluxo...');
    }

    // Calcular Pesos Dinâmicos da Prova
    maxScores = { 'Português': 0, 'Direito': 0, 'Exatas': 0, 'Informática': 0, 'Específicas': 0 };
    quizData.forEach(q => {
        let mc = q.c;
        if(mc.includes('Direito')) mc = 'Direito';
        if(mc.includes('Portugu')) mc = 'Português';
        if(mc.includes('Matem') || mc.includes('Exatas')) mc = 'Exatas';
        if(mc.includes('Informática')) mc = 'Informática';
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
    // Gate 'question_10_final' Absoluto
    if (currentQ >= quizData.length || currentQ >= 10) {
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
    ui.metaQuestao.innerText = `Combate ${currentQ + 1}/${quizData.length} | Setor: ${q.c}`;
    
    // Slide Enter
    ui.opcoesGrid.classList.remove('slide-exit-left');
    ui.opcoesGrid.classList.add('slide-enter-right');
    
    setTimeout(() => {
        ui.opcoesGrid.innerHTML = '';
        q.o.forEach((texto, idx) => {
            const btn = document.createElement('button');
            btn.className = 'opcao-card';
            btn.innerHTML = `<span style="display:inline-block; background:rgba(255,255,255,0.1); width:28px; height:28px; line-height:28px; border-radius:6px; text-align:center; margin-right:12px; font-weight:bold; color:#FFD700;">${String.fromCharCode(65 + idx)}</span> ${texto}`;
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
        if(macroCat.includes('Portugu')) macroCat = 'Português';
        if(macroCat.includes('Matem') || macroCat.includes('Exatas')) macroCat = 'Exatas';
        if(macroCat.includes('Informática')) macroCat = 'Informática';
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

// Expõe a função real do dashboard para ser chamada pelo gate após cadastro
window._mostrarDashboardReal = function() {
    ui.dashboard.style.opacity = '0';
    ui.dashboard.style.display = 'block';
    setTimeout(() => {
        ui.dashboard.style.transition = 'opacity 1s ease-in-out';
        ui.dashboard.style.opacity = '1';
    }, 50);

    // Gatilho Autônomo de Vendas (12 segundos analisando o Radar -> Paywall)
    setTimeout(() => {
        if(ui.dashboard.style.display !== 'none') {
            console.log('[PAYWALL] Iniciando transição mandatória fade-to-paywall...');
            ui.dashboard.style.opacity = '0';
            setTimeout(() => {
                showScreen('paywall');
                document.getElementById('paywall').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('paywall').style.transition = 'opacity 1s ease-in-out';
                    document.getElementById('paywall').style.opacity = '1';
                }, 50);
            }, 1000);
        }
    }, 12000);
};

function exibirDashboard() {
    // UI Fade Transition — esconde quiz, mostra gate de captura primeiro
    ui.quizArea.classList.add('slide-exit-left');

    setTimeout(() => {
        ui.quizArea.style.display = 'none';
        ui.quizArea.classList.remove('slide-exit-left');

        // Se o lead já estava cadastrado (sessão existente), pula o gate
        const nomeExistente = sessionStorage.getItem('recruta_nome');
        const waExistente   = sessionStorage.getItem('recruta_whatsapp');
        if (nomeExistente && waExistente) {
            window._gateConcluido = true;
        }

        if (window._gateConcluido) {
            // Já temos o lead — mostra dashboard direto
            if (typeof window._mostrarDashboardReal === 'function') window._mostrarDashboardReal();
            return;
        }

        // Mostra gate de captura
        const gate = document.getElementById('gate-captura');
        if (gate) {
            gate.style.opacity = '0';
            gate.style.display = 'block';
            setTimeout(() => {
                gate.style.transition = 'opacity 0.6s ease';
                gate.style.opacity = '1';
            }, 50);
        } else {
            // Fallback: gate não encontrado, mostra dashboard direto
            if (typeof window._mostrarDashboardReal === 'function') window._mostrarDashboardReal();
        }

    }, 300);

    ui.progressFill.style.width = '100%';
    const txtProgresso = document.getElementById('txt-progresso');
    if (txtProgresso) txtProgresso.innerText = 'Diagnóstico Finalizado';

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
        sessionStorage.setItem('pw_mem_texto', `${mediaSecs.toFixed(1)}s — Acima da média`);
    } else {
        memEl.innerText = `${mediaSecs.toFixed(1)}s (Lentidão Detectada)`;
        memEl.style.color = '#EF4444';
        memDet.innerHTML = `Risco de tempo em prova real. Aprovados batem <b>${mediaAprovadosSecs}s</b>. Mapeie treinos de velocidade de leitura.`;
        sessionStorage.setItem('pw_mem_texto', `${mediaSecs.toFixed(1)}s — Atenção necessária`);
    }

    // Salva disciplina mais forte e ponto crítico para o paywall
    const scoreEntries = Object.entries(scores);
    const forte   = scoreEntries.reduce((a,b) => b[1] > a[1] ? b : a, scoreEntries[0]);
    const critico = scoreEntries.reduce((a,b) => b[1] < a[1] ? b : a, scoreEntries[0]);
    sessionStorage.setItem('pw_forte_disc',   forte[0]);
    sessionStorage.setItem('pw_critico_disc', critico[0]);

    // 2. Gap de Posse Real
    const totalAcertos = Object.values(scores).reduce((a,b)=>a+b, 0);
    const notaAluno = (totalAcertos / 10) * 100;
    const notaCorteOriginal = 86.5; 
    const gap = notaAluno - notaCorteOriginal;
    
    const gapEl = document.getElementById('dash-gap');
    document.getElementById('dash-corte').innerText = `${notaCorteOriginal}%`;

    const orgaoSessao = sessionStorage.getItem('recruta_orgao') || 'seu concurso';
    if (gap >= 0) {
        gapEl.innerText = `+${gap.toFixed(1)}% (VOCÊ É A POSSE)`;
        gapEl.style.color = '#10B981';
        sessionStorage.setItem('pw_gap_texto', `Você está acima da nota de corte projetada para ${orgaoSessao}. Mantenha o ritmo — a vaga está ao seu alcance.`);
    } else {
        gapEl.innerText = `${gap.toFixed(1)}% (FORA DOS CLASSIFICADOS)`;
        gapEl.style.color = '#EF4444';
        sessionStorage.setItem('pw_gap_texto', `Você está ${Math.abs(gap).toFixed(0)}% abaixo da nota de corte projetada para ${orgaoSessao}. A rota certa fecha esse gap em semanas.`);
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
        status_pagamento: 'pendente',
        user_id: sessionStorage.getItem('recruta_id') || null,
        nome_responsavel: sessionStorage.getItem('recruta_nome') || 'Desconhecido',
        telefone_whatsapp: sessionStorage.getItem('recruta_whatsapp') || null,
        funil_status: 'diagnostico_concluido'
    }]).then(res => console.log('Resultado de Posse Analisada (Lead) salvo com sucesso.'));
}

if(document.getElementById('btn-conquistar-vaga')) {
    document.getElementById('btn-conquistar-vaga').addEventListener('click', () => {
        ui.dashboard.style.opacity = '0';
        setTimeout(() => {
            showScreen('paywall');
            document.getElementById('paywall').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('paywall').style.transition = 'opacity 0.6s ease-in-out';
                document.getElementById('paywall').style.opacity = '1';
            }, 50);
        }, 600);
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
