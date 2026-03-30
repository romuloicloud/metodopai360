const MAPA_MODULOS = {
    // Banco PMERJ Universal
    '11111111-1111-1111-1111-111111111111': [
        { id: 0, disciplina: "Português", topico: "Interpretação de Textos", descricao: "Aprenda como a banca esconde as respostas no texto e pare de perder pontos.", icon: "fa-book-open" },
        { id: 1, disciplina: "Português", topico: "Sintaxe e Regência", descricao: "A estrutura das frases e a relação de poder entre os verbos e nomes.", icon: "fa-language" },
        { id: 2, disciplina: "Matemática", topico: "Razão, Proporção e Regra de Três", descricao: "Atalhos de cálculo mental para destruir contas em menos de 1 minuto.", icon: "fa-calculator" },
        { id: 3, disciplina: "Matemática", topico: "Porcentagem e Juros Simples", descricao: "As armadilhas financeiras que despencam em todas as provas militares.", icon: "fa-percent" },
        { id: 4, disciplina: "Matemática", topico: "Probabilidade e Análise Combinatória", descricao: "Acerte a chance de eventos críticos com a técnica do princípio multiplicativo.", icon: "fa-dice" },
        { id: 5, disciplina: "Direitos Humanos", topico: "DUDH (Declaração Universal)", descricao: "A base internacional cobrada nas avaliações modernas.", icon: "fa-globe" },
        { id: 6, disciplina: "Direitos Humanos", topico: "Pacto de San José da Costa Rica", descricao: "Tratado essencial de direitos civis e políticos.", icon: "fa-handshake-angle" },
        { id: 7, disciplina: "Direito Penal", topico: "Crimes contra a Vida", descricao: "A anatomia do Homicídio (Art. 121) e qualificadoras.", icon: "fa-gavel" },
        { id: 8, disciplina: "Direito Penal", topico: "Crimes contra o Patrimônio", descricao: "Diferencie Furto, Roubo e Extorsão sem errar na hora do desespero.", icon: "fa-mask" },
        { id: 9, disciplina: "Direito Administrativo", topico: "Poderes Administrativos", descricao: "Poder de Polícia, Hierárquico e Disciplinar.", icon: "fa-building-shield" },
        { id: 10, disciplina: "Direito Administrativo", topico: "Atos Administrativos", descricao: "Requisitos, Atributos e a Anulação (CO FIFOMOB).", icon: "fa-file-signature" },
        { id: 11, disciplina: "Legislação Aplicada", topico: "Estatuto da PMERJ", descricao: "Hierarquia, Disciplina e Prerrogativas Militares.", icon: "fa-shield-halved" },
        { id: 12, disciplina: "Legislação Aplicada", topico: "Estatuto do Desarmamento", descricao: "Regras sobre posse, porte e crimes bélicos.", icon: "fa-gun" },
        { id: 13, disciplina: "Legislação de Trânsito", topico: "CTB - Aspectos Penais", descricao: "Crimes de trânsito que envolvem atividade policial preventiva.", icon: "fa-car-burst" }
    ],
    // Fallback genérico para outros concursos em implantação
    'DEFAULT': [
        {
            id: 0,
            disciplina: "Base Elementar",
            topico: "Comando Geral",
            descricao: "A disciplina foundational para aprovação neste certame.",
            icon: "fa-book-open"
        },
        {
            id: 1,
            disciplina: "Conhecimentos Específicos",
            topico: "Tática Avançada",
            descricao: "Tudo que você precisa dominar para gabaritar a discursiva.",
            icon: "fa-brain"
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Configura UI User Tag
    const nome = sessionStorage.getItem('recruta_nome') || 'Candidato';
    const orgao = sessionStorage.getItem('recruta_orgao') || 'PMERJ';
    
    const uiNome = document.getElementById('greetingUser');
    if(uiNome) uiNome.innerText = `Bem-vindo(a), ${nome.split(' ')[0]}!`;
    
    // Atualiza subtitulo
    const mapSub = document.getElementById('map-subtitle');
    if(mapSub) mapSub.innerText = `Siga os passos sequenciais abaixo para cicatrizar suas falhas na base do ${orgao.toUpperCase()} antes da prova.`;

    renderizarMapa();
});

function renderizarMapa() {
    const container = document.getElementById('timeline-container');
    if(!container) return; // Se não estiver na tela rota estudos

    const concurso_id = sessionStorage.getItem('recruta_concurso_id') || '11111111-1111-1111-1111-111111111111';
    let modulos = MAPA_MODULOS[concurso_id];
    if(!modulos) modulos = MAPA_MODULOS['DEFAULT'];
    
    // Ler progresso do Cache Offline como ARRAY livre (Open-World). Chave nova para evitar conflito.
    let completedModules = JSON.parse(localStorage.getItem('mapa_conquistas_' + concurso_id) || '[]');
    
    let html = '';
    const progressPerc = Math.min(100, Math.round((completedModules.length / modulos.length) * 100));
    
    // Injetar Header Bar de Gamificação
    html += `
        <div style="background: rgba(30, 41, 59, 0.8); padding: 15px; border-radius: 10px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="display:flex; justify-content:space-between; margin-bottom: 8px;">
                <span style="color:#94A3B8; font-size:0.85rem; font-weight:bold; letter-spacing:1px; text-transform:uppercase;">Domínio Global do Edital</span>
                <span style="color:#10B981; font-weight:bold;">${progressPerc}%</span>
            </div>
            <div style="width: 100%; height: 8px; background: #0F172A; border-radius: 4px; overflow: hidden;">
                <div style="height: 100%; width: ${progressPerc}%; background: linear-gradient(90deg, #10B981, #34D399); border-radius: 4px; transition: width 1s ease;"></div>
            </div>
        </div>
    `;

    modulos.forEach((mod, index) => {
        const isCompleted = completedModules.includes(index);
        
        let statusClass = isCompleted ? 'completed' : 'locked';
        
        html += `
            <div class="milestone ${statusClass}" onclick="abrirModulo(${index}, '${mod.disciplina}', '${mod.topico}')">
                <div class="milestone-marker">
                    <i class="fa-solid ${isCompleted ? 'fa-check' : 'fa-lock'}"></i>
                </div>
                <div class="milestone-card" style="cursor:pointer; ${isCompleted ? 'border-color: rgba(16, 185, 129, 0.5);' : 'border-color: rgba(255,255,255,0.1);'}">
                    <div class="milestone-step">MÓDULO 0${index + 1} - ${mod.disciplina.toUpperCase()}</div>
                    <h2 class="milestone-title" style="${isCompleted ? 'color:#10B981;' : ''}">${mod.topico}</h2>
                    <p class="milestone-desc">${mod.descricao}</p>
                    ${isCompleted 
                        ? `<div class="action-button" style="border-color:#10B981; color:#10B981; background:rgba(16, 185, 129, 0.1);" onclick="event.stopPropagation(); abrirModulo(${index}, '${mod.disciplina}', '${mod.topico}')"><i class="fa-solid fa-check-double"></i> MÓDULO VENCIDO - REVISAR TEORIA</div>
                           <div class="action-button" style="border-color:#eab308; color:#eab308; background:rgba(234, 179, 8, 0.1); margin-top: 8px;" onclick="event.stopPropagation(); treinarMassa('${mod.disciplina}', '${mod.topico}')"><i class="fa-solid fa-dumbbell"></i> TREINAR (+100 QUESTÕES)</div>` 
                        : `<div class="action-button" style="border-color:#4FA5FF; color:#4FA5FF; background:rgba(79, 165, 255, 0.1);"><i class="fa-solid fa-unlock-keyhole"></i> INICIAR E DESTRAVAR</div>`}
                </div>
            </div>
        `;
    });

    // Se zerou tudo
    if(completedModules.length >= modulos.length) {
        html += `
            <div class="milestone completed">
                <div class="milestone-marker" style="border-color:#D4AF37; background:rgba(212, 175, 55, 0.2);"><i class="fa-solid fa-crown" style="color:#D4AF37;"></i></div>
                <div class="milestone-card" style="border-color:#D4AF37; text-align:center;">
                    <h2 class="milestone-title" style="color:#D4AF37;">EDITAL DESTRUÍDO</h2>
                    <p class="milestone-desc">Você fechou o percurso base de sobrevivência. Agora o sistema recomenda simulados gerais.</p>
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

function abrirModulo(index, disciplina, topico) {
    sessionStorage.setItem('current_modulo_index', index);
    sessionStorage.setItem('current_modulo_disciplina', disciplina);
    sessionStorage.setItem('current_modulo_topico', topico);
    
    // O Timestamp quebra silenciosamente qualquer cache do Navegador na navegação
    window.location.href = 'teoria_360.html?v=' + new Date().getTime();
}

function treinarMassa(disciplina, topico) {
    sessionStorage.setItem('filtro_massa_disciplina', disciplina);
    sessionStorage.setItem('filtro_massa_topico', topico);
    window.location.href = 'treinamento_360.html?v=' + new Date().getTime();
}
