const fs = require('fs');
const path = require('path');

const jsFiles = [
    'treinamento_360.js', 'script.js', 'radar_sentinela_br.js', 
    'missao_core.js', 'backend_onboarding.js', 'backend_diagnostico.js', 'fallback_cron_24h.js'
];
const htmlFiles = [
    'index.html', 'missao.html', 'tela_catalogo_concursos.html', 
    'tela_diagnostico.html', 'treinamento_360.html'
];
const dir = path.join(__dirname, 'app');

let firstUrl = '';
let firstKey = '';

// Process JS Files
jsFiles.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Extract 
        const urlMatch = content.match(/const supabaseUrl = ['"]([^'"]+)['"]/);
        const keyMatch = content.match(/const supabaseKey = ['"]([^'"]+)['"]/);
        if (urlMatch && firstUrl === '') firstUrl = urlMatch[1];
        if (keyMatch && firstKey === '') firstKey = keyMatch[1];

        // Replace any declaration with window.ENV
        const newUrlDeclaration = 'const supabaseUrl = window.ENV.SUPABASE_URL;';
        const newKeyDeclaration = 'const supabaseKey = window.ENV.SUPABASE_ANON_KEY;';

        content = content.replace(/const supabaseUrl = [^;\n]+;?/g, newUrlDeclaration);
        content = content.replace(/const supabaseKey = [^;\n]+;?/g, newKeyDeclaration);
        
        fs.writeFileSync(filePath, content);
        console.log(`Secured JS: ${file}`);
    }
});

// Export Config and Example
const configContent = `// ARQUIVO GERADO AUTOMATICAMENTE - IGNORADO PELO GIT
window.ENV = {
    SUPABASE_URL: '${firstUrl}',
    SUPABASE_ANON_KEY: '${firstKey}'
};`;

const configExampleContent = `// Molde estático de Variaveis Fixas
window.ENV = {
    SUPABASE_URL: 'COLE_AQUI_SUA_URL',
    SUPABASE_ANON_KEY: 'COLE_AQUI_SUA_ANON_KEY'
};`;

fs.writeFileSync(path.join(dir, 'config.js'), configContent);
fs.writeFileSync(path.join(dir, 'config.example.js'), configExampleContent);
console.log('Created config.js & config.example.js');

// Process HTML Files - Inject config.js in head
htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        if (!content.includes('<script src="config.js"></script>')) {
            content = content.replace('</head>', '    <script src="config.js"></script>\n</head>');
            fs.writeFileSync(filePath, content);
            console.log(`Injected HTML: ${file}`);
        }
    }
});

// Update .gitignore
const gitignorePath = path.join(__dirname, '.gitignore');
if (fs.existsSync(gitignorePath)) {
    let gitignore = fs.readFileSync(gitignorePath, 'utf8');
    if (!gitignore.includes('app/config.js')) {
        gitignore += '\n# Arquivo de chaves dinamico\napp/config.js\n';
        fs.writeFileSync(gitignorePath, gitignore);
        console.log('Updated .gitignore');
    }
}
