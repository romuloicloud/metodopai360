// ENCAPSULAMENTO GLOBAL PARA DEBUG VISUAL
let supabaseClient;
let questoes = [];
let indiceAtual = 0;
let respondida = false;
let sinteseVocais = window.speechSynthesis;

try {
    const supabaseUrl = window.ENV.SUPABASE_URL;
    const supabaseKey = window.ENV.SUPABASE_ANON_KEY;

    if (!window.supabase) {
        throw new Error("Biblioteca do Supabase (CDN) não foi carregada pelo navegador.");
    }

    supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
    
    console.log("[O PAI 360] Script carregado. Iniciando fetch ao Supabase...");
    carregarBanco();

} catch (err) {
    console.error("[O PAI 360] FATAL ERROR GLOBAL:", err);
    document.getElementById('loading').innerHTML = "🚨 ERRO FATAL DE INICIALIZAÇÃO: <br><br> " + err.message;
}

// FETCH SUPABASE
async function carregarBanco() {
    console.log("[O PAI 360] Função carregarBanco disparada.");
    try {
        const gpsId  = sessionStorage.getItem('recruta_concurso_id'); // UUID de concursos_gps
        const orgao  = sessionStorage.getItem('recruta_orgao') || 'Banco Geral 360°';
        const disciplinaFoco = sessionStorage.getItem('filtro_massa_disciplina');

        document.getElementById('ui-progress').innerText = `Matriz Tática: ${orgao}`;

        // ── Validação de UUID ────────────────────────────────────
        const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(gpsId || '');
        if (!isUUID) {
            console.warn("[O PAI 360] recruta_concurso_id ausente ou inválido. Redirecionando para o GPS.");
            document.getElementById('loading').innerHTML = `
                <div style="text-align:center; padding:40px;">
                    <h3 style="color:#f59e0b;">⚠️ Concurso não selecionado</h3>
                    <p>Você precisa concluir o GPS para receber treino personalizado.</p>
                    <button onclick="window.location.href='tela_gps_concurso.html'"
                        style="margin-top:20px; padding:14px 28px; background:#ca8a04; color:#000;
                               font-weight:900; border:none; border-radius:8px; cursor:pointer;">
                        Definir meu Concurso-Alvo
                    </button>
                </div>`;
            return;
        }

        // ── Resolução da Ponte: concursos_gps.id → concursos.id ─
        // O GPS salva o ID de concursos_gps. Os exercícios usam o ID de concursos.
        // A coluna concurso_ref_id em concursos_gps faz a ponte.
        const { data: gpsData, error: gpsError } = await supabaseClient
            .from('concursos_gps')
            .select('concurso_ref_id, orgao')
            .eq('id', gpsId)
            .single();

        if (gpsError || !gpsData?.concurso_ref_id) {
            console.warn("[O PAI 360] Concurso sem conteúdo disponível ainda. GPS ID:", gpsId);
            document.getElementById('loading').innerHTML = `
                <div style="text-align:center; padding:40px;">
                    <h3 style="color:#f59e0b;">📚 Conteúdo em preparação</h3>
                    <p>O banco de questões para <strong>${orgao}</strong> está sendo montado.</p>
                    <p style="color:#94a3b8; font-size:0.9em;">Volte em breve — novas bancas são adicionadas semanalmente.</p>
                    <button onclick="window.location.href='tela_gps_concurso.html'"
                        style="margin-top:20px; padding:14px 28px; background:#334155; color:#fff;
                               font-weight:bold; border:none; border-radius:8px; cursor:pointer;">
                        Escolher outro concurso
                    </button>
                </div>`;
            return;
        }

        const concursoId = gpsData.concurso_ref_id;
        console.log(`[O PAI 360] Ponte resolvida: gps_id=${gpsId} → concurso_id=${concursoId}`);

        // ── Busca exercícios da nova hierarquia (2 etapas) ──────
        // Etapa 1: pega todos os modulo_ids do concurso (via disciplinas)
        const discQuery = supabaseClient
            .from('disciplinas')
            .select('id, nome, modulos(id, nome)')
            .eq('concurso_id', concursoId);

        const { data: disciplinasData, error: discError } = await discQuery;
        if (discError) {
            console.error("[O PAI 360] Erro ao buscar disciplinas:", discError);
            document.getElementById('loading').innerHTML = "Falha ao carregar estrutura do concurso.";
            return;
        }

        // Monta mapa modulo_id → { moduloNome, disciplinaNome }
        const moduloMap = {};
        let moduloIds = [];
        for (const disc of (disciplinasData || [])) {
            if (disciplinaFoco && disc.nome !== disciplinaFoco) continue;
            for (const mod of (disc.modulos || [])) {
                moduloIds.push(mod.id);
                moduloMap[mod.id] = { moduloNome: mod.nome, disciplinaNome: disc.nome };
            }
        }

        if (disciplinaFoco) {
            document.getElementById('ui-progress').innerText = `Treinamento Intenso: ${disciplinaFoco}`;
            sessionStorage.removeItem('filtro_massa_disciplina');
            sessionStorage.removeItem('filtro_massa_topico');
        }

        if (moduloIds.length === 0) {
            document.getElementById('loading').innerHTML = `
                <div style="text-align:center; padding:40px;">
                    <h3 style="color:#f59e0b;">📚 Conteúdo em preparação</h3>
                    <p>Nenhum módulo disponível para <strong>${orgao}</strong>${disciplinaFoco ? ' — ' + disciplinaFoco : ''} ainda.</p>
                </div>`;
            return;
        }

        // Etapa 2: busca exercícios pelos modulo_ids
        const { data, error } = await supabaseClient
            .from('exercicios_forja')
            .select('id, titulo, pergunta, alternativas, correta, explicacao, nivel_dificuldade, modulo_id')
            .in('modulo_id', moduloIds)
            .order('nivel_dificuldade', { ascending: true });

        if (error) {
            console.error("[O PAI 360] Erro Supabase:", error);
            document.getElementById('loading').innerHTML = "Falha ao conectar na Base de Dados. Erro: " + error.message;
            return;
        }

        // Normaliza para o formato que renderizarQuestao() espera
        const questoesNormalizadas = (data || []).map(ex => ({
            id:               ex.id,
            pergunta:         ex.pergunta,
            materia:          moduloMap[ex.modulo_id]?.disciplinaNome || orgao,
            topico:           moduloMap[ex.modulo_id]?.moduloNome || '',
            alternativas:     ex.alternativas,
            correta:          ex.correta,
            explicacao:       ex.explicacao,
            nivel_dificuldade: ex.nivel_dificuldade
        }));

        console.log(`[O PAI 360] ${questoesNormalizadas.length} exercícios carregados para ${orgao}`);

        if (questoesNormalizadas.length > 0) {
            questoes = questoesNormalizadas;
            document.getElementById('loading').style.display = 'none';
            document.getElementById('question-container').style.display = 'block';
            renderizarQuestao();
        } else {
            document.getElementById('loading').innerHTML = `
                <div style="text-align:center; padding:40px;">
                    <h3 style="color:#f59e0b;">📚 Conteúdo em preparação</h3>
                    <p>Nenhum exercício disponível para <strong>${orgao}</strong>${disciplinaFoco ? ' — ' + disciplinaFoco : ''} ainda.</p>
                </div>`;
        }
    } catch (e) {
        console.error("[O PAI 360] Erro Crítico:", e);
        document.getElementById('loading').innerHTML = "Falha crítica no sistema. Tente novamente mais tarde.";
    }
}

function renderizarQuestao() {
    if (indiceAtual >= questoes.length) {
        document.getElementById('question-container').innerHTML = `
            <div style="text-align:center; padding: 50px;">
                <h2 style="color:#10b981;">Bateria de Combate Concluída! 🏆</h2>
                <p>O Método do Pai 360 identificou os seus pontos cegos neste bloco tático.</p>
                <div style="display: flex; gap: 15px; justify-content: center; margin-top: 30px; flex-wrap: wrap;">
                    <button onclick="window.location.href='rota_estudos.html'" class="pulse-subtle" style="padding:15px 25px; background:#ca8a04; color:#000; font-weight:900; border:none; border-radius:8px; cursor:pointer;"><i class="fa-solid fa-layer-group"></i> Avançar p/ Próxima Matéria</button>
                    <button onclick="location.reload()" style="padding:15px 25px; background:#334155; color:#fff; font-weight:bold; border:none; border-radius:8px; cursor:pointer;"><i class="fa-solid fa-rotate-right"></i> Treinar Novamente</button>
                </div>
            </div>
        `;
        return;
    }

    const q = questoes[indiceAtual];
    respondida = false;
    
    // UI Resets
    document.getElementById('feedback-panel').style.display = 'none';
    document.getElementById('btn-next').style.display = 'none';
    document.getElementById('f-dica').style.display = 'none';
    pararFalante();

    // Injetar Textos e Imagens
    document.getElementById('q-materia').innerText = `${q.materia} | ${q.topico}`;
    document.getElementById('q-texto').innerText = q.pergunta;
    document.getElementById('ui-progress').innerText = `Missão: ${indiceAtual + 1} de ${questoes.length}`;

    const qImage = document.getElementById('q-image');
    if (q.image_url) {
        qImage.src = q.image_url;
        qImage.style.display = 'block';
    } else {
        qImage.style.display = 'none';
        qImage.src = "";
    }

    // Renderizar Opções
    const divOpcoes = document.getElementById('q-opcoes');
    divOpcoes.innerHTML = '';
    
    q.alternativas.forEach((alt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        
        // Remove prefixos hardcoded do DB (A), (A), a), A., A-) blindando qualquer tipografia
        const textoLimpo = alt.replace(/^([A-Ea-e]\s*[-.)\]]+|\([A-Ea-e]\))\s*/i, '').trim();
        
        // Prefixar index (A), B), etc) se não for Certo/Errado puro
        const prefixo = (q.alternativas.length > 2) ? `${String.fromCharCode(65 + idx)})` : '';
        btn.innerHTML = prefixo ? `<strong>${prefixo}</strong>&nbsp;&nbsp;${textoLimpo}` : `<strong></strong>${textoLimpo}`;
        btn.onclick = () => validarResposta(idx, btn);
        divOpcoes.appendChild(btn);
    });
}

function validarResposta(idxEscolhido, btnClicked) {
    if (respondida) return; // Trava contra multi-cliques
    respondida = true;

    const q = questoes[indiceAtual];
    const correta = q.correta;
    const botoes = document.querySelectorAll('.option-btn');

    const feedbackPanel = document.getElementById('feedback-panel');
    const fTitle = document.getElementById('f-title');
    const fTexto = document.getElementById('f-texto');
    const fDica = document.getElementById('f-dica');

    // Revelar o Painel de Correção
    feedbackPanel.style.display = 'block';
    feedbackPanel.classList.remove('success', 'error');

    if (idxEscolhido === correta) {
        // ACERTO
        btnClicked.classList.add('correct');
        feedbackPanel.classList.add('success');
        fTitle.innerHTML = '✅ Alvo Atingido!';
        fTexto.innerText = "Excelente! Você tem a exata compreensão do assunto. Consagrado.";
        
        // Reproduz áudio de acerto curto (opcional)
        lerTexto("Afirmativo. Resposta exata capitão.");

    } else {
        // ERRO DO CANDIDATO
        btnClicked.classList.add('wrong');
        botoes[correta].classList.add('correct'); // Mostra a real
        
        feedbackPanel.classList.add('error');
        fTitle.innerHTML = '❌ O PAI CORRIGE VOCÊ (Correção Meticulosa)';
        fTexto.innerHTML = q.explicacao || "Explicação não formatada no banco.";

        if (q.dica_rapida) {
            fDica.style.display = 'block';
            fDica.innerHTML = q.dica_rapida;
        }

        // Limpa o HTML do explicacao para não ditar <br> nem <strong>
        const textoLimpo = fTexto.innerText || fTexto.textContent;
        // TRIGGER O RIGOR: Inicia TTS forçado
        lerTexto("Atenção ao erro. " + textoLimpo);
    }

    document.getElementById('btn-next').style.display = 'block';
}

function proximaQuestao() {
    indiceAtual++;
    renderizarQuestao();
}

// ==============================
// MOTOR GEMINI 3 DE ACESSIBILIDADE
// ==============================
let audioTreinamento = null;

async function lerTexto(texto) {
    pararFalante(); 
    if (!texto) return;

    try {
        const response = await fetch('http://localhost:3000/api/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ texto, voz: 'masculino_militar_agressivo' })
        });

        if (!response.ok) {
            console.error("Falha no servidor TTS");
            return;
        }

        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(blob);
        
        audioTreinamento = new Audio(audioUrl);
        audioTreinamento.play();
    } catch(err) {
        console.error("Erro na comunicação com o Reator Gemini: ", err);
    }
}

function pararFalante() {
    if (audioTreinamento) {
        audioTreinamento.pause();
        audioTreinamento.currentTime = 0;
    }
}

// Expande o TTS para Ditar Enunciado + Opções a pedido do Usuário
window.lerIntegra = function() {
    if (!questoes || questoes.length === 0) return;
    const qAtual = questoes[indiceAtual];
    const enunciado = document.getElementById('q-texto').innerText;
    
    let falaComposita = enunciado + "... Alternativas: ";
    qAtual.alternativas.forEach((opts, i) => {
        let letra = String.fromCharCode(65 + i); // A, B, C, D
        const textoLimpo = opts.replace(/^([A-Ea-e]\s*[-.)\]]+|\([A-Ea-e]\))\s*/i, '').trim();
        falaComposita += `Letra ${letra}: ${textoLimpo}. `;
    });
    
    lerTexto(falaComposita);
};
