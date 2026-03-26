const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'tela_catalogo_concursos.html');
let html = fs.readFileSync(targetFile, 'utf8');

// The mapping of poster image sources
const mappings = {
    'Polícia Militar (PMERJ)': 'assets/posters/pmerj_cine.png',
    'Polícia Federal (PF)': 'assets/posters/pf_cine.png',
    'Polícia Rodoviária Federal (PRF)': 'assets/posters/prf_cine.png',
    'Polícia Civil': 'assets/posters/pc_cine.png',
    'Guarda Municipal': 'assets/posters/gm_cine.png',
    'Tribunal Superior Eleitoral (TSE Unificado)': 'assets/posters/tse_cine.png',
    'Tribunal de Justiça (TJ-RJ)': 'assets/posters/tjrj_cine.png',
    'Tribunal de Justiça (TJ-SP)': 'assets/posters/tjsp_cine.png',
    'Caixa Econômica Federal': 'assets/posters/caixa_cine.png',
    'Correios S/A': 'assets/posters/correios_cine.png',
    'Petrobrás': 'assets/posters/petrobras_cine.png',
    'Banco do Brasil': 'assets/posters/bb_cine.png',
    'EsSA': 'assets/posters/exercito_cine.png',
    'EsPCEx': 'assets/posters/exercito_cine.png',
    'IME': 'assets/posters/exercito_cine.png',
    'EEAR (Sargento Especialista)': 'assets/posters/aeronautica_cine.png',
    'EPCAR': 'assets/posters/aeronautica_cine.png',
    'AFA': 'assets/posters/aeronautica_cine.png',
    'ITA': 'assets/posters/aeronautica_cine.png',
    'Fuzileiro Naval (CFN)': 'assets/posters/marinha_cine.png',
    'Colégio Naval': 'assets/posters/marinha_cine.png',
    'Escola Naval': 'assets/posters/marinha_cine.png',
    'Exame Nacional do Ensino Médio (ENEM)': 'assets/posters/escolar_cine.png',
    'Sistema Colégio Militar do Brasil': 'assets/posters/escolar_cine.png',
    'Colégio Pedro II': 'assets/posters/escolar_cine.png',
    'FAETEC': 'assets/posters/escolar_cine.png',
};

// 1. We will use Regex to find each poster-card block and extract the identifier from `direcionarCatalogo`
const posterCardRegex = /<div class="poster-card" onclick="direcionarCatalogo\([^)]+,\s*'([^']+)'\)">([\s\S]*?)<\/div>(?=\s*<div class="poster-card"|\s*<\/div>)/g;

html = html.replace(posterCardRegex, (match, identifier, innerHTML) => {
    const posterSrc = mappings[identifier];
    if (posterSrc) {
        // Remove ANY img tag that has weserv or unsplash from the inner HTML to clean the broken icons
        let newInner = innerHTML.replace(/<div[^>]*>\s*<img[^>]*weserv[^>]*>\s*<\/div>/g, '');
        newInner = newInner.replace(/<img[^>]*weserv[^>]*>/g, '');
        // Replace the main poster img tag
        // Look for the main image tag (the one that might have unsplash or just generic img)
        newInner = newInner.replace(/<img[^>]*unsplash[^>]*>/g, `<img src="${posterSrc}" alt="${identifier}" style="filter: brightness(0.6);">`);
        newInner = newInner.replace(/<img src="assets\/posters\/poster_[^"]+"[^>]*>/g, `<img src="${posterSrc}" alt="${identifier}" style="filter: brightness(0.6);">`);
        
        // Return the modified block
        return `<div class="poster-card" onclick="${match.match(/onclick="[^"]+"/)[0].substring(9, match.match(/onclick="[^"]+"/)[0].length - 1)}">${newInner}</div>`;
    }
    return match;
});

// For PMERJ Hero Banner:
html = html.replace(
    `<img src="https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bras%C3%A3o_da_Pol%C3%ADcia_Militar_do_Estado_do_Rio_de_Janeiro.svg/300px-Bras%C3%A3o_da_Pol%C3%ADcia_Militar_do_Estado_do_Rio_de_Janeiro.svg.png" alt="PMERJ" style="max-height: 140px; margin-bottom: 20px; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.9));">`,
    `<img src="assets/posters/pmerj_cine.png" alt="PMERJ" style="max-height: 140px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.9);">`
);

fs.writeFileSync(targetFile, html, 'utf8');
console.log('Posters sucessfully injected and CDNs removed!');

