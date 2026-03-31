const MODULOS_PMERJ = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",             topico: "Interpretação e Compreensão de Textos",            descricao: "Como a FGV esconde respostas em paráfrases — pare de perder pontos no texto.",          icon: "fa-book-open"         },
    { id: 1,  disciplina: "Língua Portuguesa",             topico: "Sintaxe e Regência",                               descricao: "A estrutura das frases e a ditadura do verbo regente na prova da FGV.",                  icon: "fa-language"          },
    { id: 2,  disciplina: "Língua Portuguesa",             topico: "Ortografia e Semântica",                           descricao: "Polissemia, homônimos e a armadilha das palavras de duplo sentido.",                    icon: "fa-spell-check"       },
    // ── Matemática Básica ─────────────────────────────────────────────────────
    { id: 3,  disciplina: "Matemática Básica",             topico: "Conceitos Iniciais (Conjuntos)",                   descricao: "Conjuntos, operações e Princípio Fundamental da Contagem.",                            icon: "fa-calculator"        },
    { id: 4,  disciplina: "Matemática Básica",             topico: "Juros Simples e Compostos",                        descricao: "A bomba do fator T — como a banca disfarça o tempo e faz você errar.",                  icon: "fa-percent"           },
    { id: 5,  disciplina: "Matemática Básica",             topico: "Porcentagem e Frações",                            descricao: "Tesoura de cálculo mental: corte zeros e acerte porcentagem em 10 segundos.",           icon: "fa-dice"              },
    // ── Direitos Humanos ──────────────────────────────────────────────────────
    { id: 6,  disciplina: "Direitos Humanos",              topico: "Pacto de San José da Costa Rica",                  descricao: "Tratado essencial — direitos civis, políticos e garantias fundamentais.",                icon: "fa-handshake-angle"   },
    { id: 7,  disciplina: "Direitos Humanos",              topico: "Constituição Federal — Art. 5º e Direitos Fundamentais", descricao: "Os incisos do Art. 5º que mais caem em provas de segurança pública.",          icon: "fa-globe"             },
    // ── Legislação Aplicada ───────────────────────────────────────────────────
    { id: 8,  disciplina: "Legislação Aplicada",           topico: "Estatuto dos Policiais Militares (RJ)",            descricao: "Hierarquia, disciplina e prerrogativas — o que a FGV cobra do Estatuto.",               icon: "fa-shield-halved"     },
    { id: 9,  disciplina: "Legislação Aplicada",           topico: "Regulamento Disciplinar e Código de Ética",        descricao: "Infrações, punições e os limites da conduta policial.",                                 icon: "fa-file-signature"    },
    // ── Direito Penal e Processual Penal ─────────────────────────────────────
    { id: 10, disciplina: "Direito Penal e Processual Penal", topico: "Crimes contra a Pessoa e o Patrimônio",         descricao: "Homicídio (Art. 121), Furto, Roubo e Extorsão — diferencie sem errar.",                icon: "fa-gavel"             },
    { id: 11, disciplina: "Direito Penal e Processual Penal", topico: "Flagrante, Prisão e Processo Penal",            descricao: "Espécies de prisão, flagrante próprio/impróprio e o CPP na prática.",                  icon: "fa-mask"              },
];

const MODULOS_INSS = [
    // ── Língua Portuguesa ─────────────────────────────────────────────────────
    { id: 0,  disciplina: "Língua Portuguesa",                   topico: "Interpretação e Compreensão de Textos",                       descricao: "Como a banca explora inferências e paráfrases em textos de legislação previdenciária.",  icon: "fa-book-open"         },
    { id: 1,  disciplina: "Língua Portuguesa",                   topico: "Coesão e Coerência Textual",                                  descricao: "Conectivos, progressão temática e os erros que derrubam candidatos na redação.",         icon: "fa-spell-check"       },
    { id: 2,  disciplina: "Língua Portuguesa",                   topico: "Gramática Aplicada — Concordância, Regência e Crase",         descricao: "As regras gramaticais que mais caem em provas do INSS — com exemplos reais de editais.", icon: "fa-language"          },
    // ── Raciocínio Lógico e Quantitativo ──────────────────────────────────────
    { id: 3,  disciplina: "Raciocínio Lógico e Quantitativo",   topico: "Lógica Proposicional — Conectivos e Tabelas-Verdade",         descricao: "Deduza gabaritos usando tabelas-verdade — o método mais rápido para lógica em prova.",   icon: "fa-brain"             },
    { id: 4,  disciplina: "Raciocínio Lógico e Quantitativo",   topico: "Raciocínio Numérico — Razão, Proporção e Porcentagem",        descricao: "Atalhos de cálculo mental para resolver contas de benefícios em segundos.",             icon: "fa-calculator"        },
    { id: 5,  disciplina: "Raciocínio Lógico e Quantitativo",   topico: "Probabilidade e Estatística Básica",                          descricao: "Frequência, média, mediana e moda — o que o INSS adora cobrar em dados populacionais.", icon: "fa-percent"           },
    // ── Legislação Previdenciária ─────────────────────────────────────────────
    { id: 6,  disciplina: "Legislação Previdenciária",           topico: "Seguridade Social — CF/88 Arts. 194 a 204",                  descricao: "A base constitucional: princípios, objetivos e financiamento da Seguridade Social.",    icon: "fa-scale-balanced"    },
    { id: 7,  disciplina: "Legislação Previdenciária",           topico: "Benefícios da Previdência Social — Lei 8.213/1991",          descricao: "Aposentadorias, auxílios, salário-maternidade e pensão por morte — espécies e carências.", icon: "fa-file-shield"      },
    { id: 8,  disciplina: "Legislação Previdenciária",           topico: "Custeio da Previdência Social — Lei 8.212/1991",             descricao: "Alíquotas, bases de cálculo e obrigações do empregador e do segurado.",                icon: "fa-coins"             },
    { id: 9,  disciplina: "Legislação Previdenciária",           topico: "Regras de Transição da Reforma da Previdência — EC 103/2019", descricao: "Idade mínima, pontos de transição e as novas regras de aposentadoria pós-reforma.",   icon: "fa-gavel"             },
    // ── Direito Administrativo ────────────────────────────────────────────────
    { id: 10, disciplina: "Noções de Direito Administrativo",   topico: "Princípios da Administração Pública — LIMPE e outros",       descricao: "LIMPE + Supremacia do Interesse Público — o filtro para eliminar alternativas erradas.", icon: "fa-building-columns"  },
    { id: 11, disciplina: "Noções de Direito Administrativo",   topico: "Atos Administrativos e Poderes da Administração",            descricao: "Atributos, requisitos e a diferença entre Anulação e Revogação sem errar.",            icon: "fa-file-signature"    },
    // ── Atualidades ───────────────────────────────────────────────────────────
    { id: 12, disciplina: "Atualidades e Seguridade Social no Brasil", topico: "INSS na Prática — Estrutura, Missão e Serviços Digitais", descricao: "Meu INSS, CNIS, canais de atendimento e a estrutura organizacional da autarquia.", icon: "fa-shield-halved"     },
];

const MAPA_MODULOS = {
    // ── PMERJ — GPS IDs reais (catálogo + ingestão) + legado ─────────────────
    '37a79dcc-3c56-4615-ac27-d04ec5a86d07': MODULOS_PMERJ, // PMERJ (catálogo)
    '7ccb9092-5445-433c-a85d-23892ee7a5f3': MODULOS_PMERJ, // Polícia Militar PMERJ (ingestão)
    '11111111-1111-1111-1111-111111111111': MODULOS_PMERJ, // legado (retrocompatibilidade)

    // ── INSS ──────────────────────────────────────────────────────────────────
    'd5d8339d-5662-4021-8f96-a712aa60a50a': MODULOS_INSS,  // INSS Técnico do Seguro Social

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
