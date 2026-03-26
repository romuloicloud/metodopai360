const gTTS = require('gtts');
const fs = require('fs');
const path = require('path');
const { fetchDiagnosticoQuestions } = require('./backend_diagnostico.js');

const audioDir = path.join(__dirname, '..', 'assets', 'audios');

async function generateAudios() {
  console.log("Iniciando geração de áudios (Usando gTTS temporariamente como fallback do Alloy - OpenAI)...");
  
  // Garantir que a pasta existe
  if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true });
  }

  // Buscar as questões do banco
  const questoes = await fetchDiagnosticoQuestions('Médio');
  
  if (!questoes || questoes.length === 0) {
    console.log("Nenhuma questão encontrada para gerar áudio.");
    return;
  }

  // Gerar o áudio para cada questão
  let i = 1;
  for (const q of questoes) {
    const textToSpeak = `Questão ${i}. ${q.texto_questao}`;
    const filename = path.join(audioDir, `questao_${q.id}.mp3`);
    
    // Usando pt-br para TTS
    const gtts = new gTTS(textToSpeak, 'pt-br');
    
    await new Promise((resolve, reject) => {
      gtts.save(filename, function (err, result) {
        if(err) {
          console.error("Erro ao gerar áudio:", err);
          reject(err);
        } else {
          console.log(`Áudio gerado com sucesso: ${filename}`);
          resolve();
        }
      });
    });
    i++;
  }
  
  // Gerar o áudio de saudação do Onboarding (General Mentor)
  const introText = "Bem-vindo ao Método do Pai 360. Identifique sua jornada para que nossa inteligência mapeie o DNA exato da sua aprovação.";
  const introFilename = path.join(audioDir, `intro.mp3`);
  
  // Nota técnica: Para um verdadeiro tom masculino, barítono e de alta performance (General Mentor), o 'gTTS'
  // é insuficiente (voz robótica/feminina Google). Para este protótipo, seguiremos com gTTS PT-PT (Portugal Costuma ser masculino/neutro)
  // ou PT-BR. Recomendação: Trocar por ElevenLabs (voz: Onyx/Adam) na versão final de produção.
  const gttsIntro = new gTTS(introText, 'pt-pt'); // pt-pt para gerar uma voz diferente/masculina como fallback no gTTS
  gttsIntro.save(introFilename, () => console.log(`Novo Áudio de introdução (General Mentor) gerado com sucesso!`));
}

generateAudios();
