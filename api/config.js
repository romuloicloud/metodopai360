// Vercel Serverless Function — /api/config
// Serve o window.ENV injetando as variáveis de ambiente do Vercel
import fs from 'fs';
import path from 'path';

function lerEnvLocal() {
    try {
        const envPath = path.join(process.cwd(), '.env.local');
        const conteudo = fs.readFileSync(envPath, 'utf8');
        const vars = {};
        conteudo.split('\n').forEach(linha => {
            if (linha.startsWith('#') || !linha.includes('=')) return;
            const [chave, ...resto] = linha.split('=');
            vars[chave.trim()] = resto.join('=').trim();
        });
        return vars;
    } catch(e) {
        return {};
    }
}

export default function handler(req, res) {
    const envLocal = lerEnvLocal();
    const supabaseUrl  = process.env.SUPABASE_URL  || envLocal.SUPABASE_URL  || '';
    const supabaseKey  = process.env.SUPABASE_ANON_KEY || envLocal.SUPABASE_ANON_KEY || '';

    const js = `window.ENV = ${JSON.stringify({ SUPABASE_URL: supabaseUrl, SUPABASE_ANON_KEY: supabaseKey })};`;

    res.setHeader('Content-Type', 'application/javascript');
    res.setHeader('Cache-Control', 'no-store');
    return res.send(js);
}
