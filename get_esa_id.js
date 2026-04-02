require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
async function run() {
  const { data, error } = await supabase.from('concursos').select('id, nome').ilike('nome', '%ESA%');
  if (error) console.error(error);
  else console.log("ESA_ID_RESULT:", JSON.stringify(data));
}
run();
