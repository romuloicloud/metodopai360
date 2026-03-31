// Vercel Serverless Function — /api/config
// Serve o window.ENV injetando as variáveis de ambiente do Vercel
// Resolve o problema do app/config.js estar no .gitignore

export default function handler(req, res) {
    const supabaseUrl  = process.env.SUPABASE_URL  || '';
    const supabaseKey  = process.env.SUPABASE_ANON_KEY || '';

    if (!supabaseUrl || !supabaseKey) {
        return res.status(500).send('// ERRO: Variáveis de ambiente não configuradas no Vercel.');
    }

    const js = `window.ENV = ${JSON.stringify({ SUPABASE_URL: supabaseUrl, SUPABASE_ANON_KEY: supabaseKey })};`;

    res.setHeader('Content-Type', 'application/javascript');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.send(js);
}
