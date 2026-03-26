const supabaseUrl = window.ENV.SUPABASE_URL;
const supabaseKey = window.ENV.SUPABASE_ANON_KEY;

let appSupabase;
try {
    if (!window.supabase) console.error("CDN do Supabase não carregado!");
    appSupabase = window.supabase.createClient(supabaseUrl, supabaseKey);
} catch(err) {
    console.error("Erro fatal ao inicializar Supabase:", err);
}

async function salvarAlistamento(nome, email, whatsapp) {
    const { data, error } = await appSupabase
        .from('usuarios')
        .insert([{
            nome_guerra: nome,
            email: email,
            whatsapp: whatsapp
        }])
        .select()
        .single();
    
    if (error) {
        console.error("Erro no Supabase:", error.message);
        return false;
    }
    
    // Salvar ID e contatos no Session Storage para a conclusão do diagnóstico (Paywall/Funil de Vendas)
    sessionStorage.setItem('recruta_id', data.id);
    sessionStorage.setItem('recruta_nome', nome);
    sessionStorage.setItem('recruta_whatsapp', whatsapp);
    return true;
}

async function salvarPerfil(nivel, examesMarcados) {
    const recrutaId = sessionStorage.getItem('recruta_id');
    if(!recrutaId) return false;

    const { error } = await appSupabase
        .from('usuarios')
        .update({
            nivel_ensino: nivel,
            interesses: examesMarcados // Array de JSON
        })
        .eq('id', recrutaId);
    
    if (error) {
        console.error("Erro no Supabase ao salvar perfil:", error.message);
        return false;
    }
    
    // Salvar meta pro diagnostico final (para o paywall/webhook pegar)
    sessionStorage.setItem('recruta_meta', examesMarcados.join(', ') || nivel);
    return true;
}

// Novas funcoes para GPS do Concurso
async function buscarOrgaos(familia, esfera, uf) {
    let query = appSupabase.from('concursos_gps').select('*').eq('familia', familia).eq('esfera', esfera);
    if (esfera === 'estadual') {
        query = query.eq('uf', uf);
    }
    
    try {
        const timeout = new Promise(resolve => setTimeout(() => resolve({ error: 'timeout' }), 3500));
        const res = await Promise.race([query, timeout]);
        
        if (!res || res.error) {
            console.error("Erro ou Timeout ao buscar órgãos GPS:", res?.error);
            return [];
        }
        return res.data;
    } catch (err) {
        console.error("Exceção:", err);
        return [];
    }
}

// Nova funcao para salvar perfil do GPS (substitui salvarPerfil em tela_gps)
async function salvarPerfilGPS(familia, esfera, uf, orgao) {
    const recrutaId = sessionStorage.getItem('recruta_id');
    const alvos = [orgao];
    
    // Opcional: salvar uf no storage para uso no script.js de missao
    sessionStorage.setItem('recruta_uf', uf);
    sessionStorage.setItem('recruta_orgao', orgao);
    sessionStorage.setItem('recruta_meta', orgao); // p/ manter compatibilidade do script de paywall
    
    if(!recrutaId) return true; // se estour local testing

    const updateTask = appSupabase
        .from('usuarios')
        .update({
            interesses: alvos // Array de JSON
        })
        .eq('id', recrutaId);
    
    try {
        const timeout = new Promise(resolve => setTimeout(() => resolve({ error: 'timeout' }), 2500));
        const res = await Promise.race([updateTask, timeout]);
        
        if (res && res.error) {
            console.error("Erro Supabase GPS (ou timeout):", res.error);
            // Ignorar erro e deixar passar por conta da lentidão do servidor
        }
    } catch(e) {}
    
    return true; // Sempre retorna true para não travar a UI
}

// ---- Módulo Push Intelligence (Sinal de Alerta / Boletim) ----
async function carregarBoletimDoPai() {
    let query = appSupabase
        .from('concursos_gps')
        .select('*')
        .eq('status_edital', 'aberto')
        .order('id', { ascending: false })
        .limit(5);

    try {
        const timeout = new Promise(resolve => setTimeout(() => resolve({ error: 'timeout' }), 2500));
        const res = await Promise.race([query, timeout]);
        
        if (!res || res.error) return [];
        return res.data;
    } catch(err) {
        return [];
    }
}
