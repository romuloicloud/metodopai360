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
        const concursoId = sessionStorage.getItem('recruta_concurso_id');
        const orgao = sessionStorage.getItem('recruta_orgao') || 'Banco Geral 360°';

        document.getElementById('ui-progress').innerText = `Matriz Tática: ${orgao}`;

        let query = supabaseClient
            .from('treinamento')
            .select('*')
            .order('created_at', { ascending: false }); // Corrigido para ordernar por data (UUID não tem ordem cronológica)

        // Aplica o filtro blindado de Concurso caso o candidato já tenha passado pelo Onboarding
        if(concursoId) {
            const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(concursoId);
            if(isUUID) {
                query = query.eq('concurso_id', concursoId);
            } else {
                console.warn("[O PAI 360] concursoId (" + concursoId + ") não é UUID nativo. Carregando Banco Geral 360° no fallback.");
            }
        }

        const { data, error } = await query;

        if (error) {
            console.error("[O PAI 360] Erro Supabase:", error);
            document.getElementById('loading').innerHTML = "Falha ao conectar na Base de Dados. Erro: " + error.message;
            return;
        }

        console.log("[O PAI 360] Dados recebidos:", data);

        if (data && data.length > 0) {
            questoes = data;
            document.getElementById('loading').style.display = 'none';
            document.getElementById('question-container').style.display = 'block';
            renderizarQuestao();
        } else {
            document.getElementById('loading').innerHTML = "Nenhuma questão disponível para esta banca no momento.";
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
                <h2 style="color:#10b981;">Bateria Concluída! 🏆</h2>
                <p>O Método do Pai 360 identificou os seus pontos cegos. Continue treinando.</p>
                <button onclick="location.reload()" style="padding:10px 20px; background:#4FA5FF; color:#fff; border:none; border-radius:5px; cursor:pointer;">Reiniciar Bateria</button>
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
// MOTOR TTS DE ACESSIBILIDADE
// ==============================
function lerTexto(texto) {
    pararFalante(); // Corta áudios encavalados
    if (!texto) return;

    const utterThis = new SpeechSynthesisUtterance(texto);
    utterThis.lang = 'pt-BR';
    utterThis.rate = 1.05; // Levemente mais rápido
    utterThis.pitch = 1.0;
    
    // Tenta preferir uma voz do Google ou voz padrão
    const vozes = sinteseVocais.getVoices();
    const vozGoogle = vozes.find(v => v.name.includes('Google') && v.lang.includes('pt-BR'));
    if (vozGoogle) utterThis.voice = vozGoogle;

    sinteseVocais.speak(utterThis);
}

function pararFalante() {
    if (sinteseVocais && sinteseVocais.speaking) {
        sinteseVocais.cancel();
    }
}
