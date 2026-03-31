const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); // Lê o .env padrão
require('dotenv').config({ path: '.env.local', override: true }); // FORÇA o .env.local a esmagar as chaves antigas!

const app = express();
app.use(cors());
app.use(express.json());

// Serve os arquivos estáticos da pasta /app
// extensions: ['html'] permite acessar /missao em vez de /missao.html
app.use(express.static(path.resolve(__dirname, 'app'), { extensions: ['html'] }));

app.post('/api/tts', async (req, res) => {
    const { texto } = req.body;

    try {
        console.log(`[ÁUDIO] Solicitado TTS para: "${texto.substring(0, 50)}..."`);

        let audioBufferOriginal = null;

        // 1. TENTA O ENDPOINT DA ELEVENLABS (Voz de Cinema)
        if (process.env.ELEVENLABS_API_KEY) {
            try {
                // Se o usuário não colocou Voice ID, usamos o Callum (uma voz americana grave que fica boa ríspida em PT) 
                // ou o Antoni. A ID abaixo é uma padrão masculina forte.
                const voiceId = process.env.ELEVENLABS_VOICE_ID || 'pNInz6obbfDQGcgMyIGD';
                const endpoint = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;

                const payload = {
                    text: texto,
                    model_id: "eleven_multilingual_v2", // Suporta Português BR perfeito
                    voice_settings: {
                        stability: 0.45,
                        similarity_boost: 0.85,
                        style: 0.5,
                        use_speaker_boost: true
                    }
                };

                const elRes = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Accept': 'audio/mpeg',
                        'Content-Type': 'application/json',
                        'xi-api-key': process.env.ELEVENLABS_API_KEY
                    },
                    body: JSON.stringify(payload)
                });

                if (elRes.ok) {
                    const arrayB = await elRes.arrayBuffer();
                    audioBufferOriginal = Buffer.from(arrayB);
                    console.log("✅ Áudio de Cinema (ElevenLabs) gerado com sucesso!");
                } else {
                    const errJson = await elRes.json();
                    console.log("❌ ElevenLabs falhou (Acabou a cota ou chave errada/sem acesso):");
                    console.log(errJson);
                }
            } catch (apiError) {
                console.log("❌ Erro fatal na comunicação com a API ElevenLabs...");
            }
        } else {
            console.log("⚠️ Chave ELEVENLABS_API_KEY não encontrada. Pulando direto para o Fallback.");
        }

        // 2. SE A ELEVENLABS FALHAR OU NÃO TIVER CHAVE, ACIONA O GOOGLE TTS GRÁTIS
        if (!audioBufferOriginal) {
            console.log("⚠️ Preparando Motor de Contingência (Google TTS API)...");
            const googleTTS = require('google-tts-api');

            // Corta para não exceder limites free de certas libs
            const textoLimpo = texto.substring(0, 199);

            const urlAudio = googleTTS.getAudioUrl(textoLimpo, {
                lang: 'pt-BR',
                slow: false,
                host: 'https://translate.google.com',
            });

            const fallResponse = await fetch(urlAudio);
            const arrayB = await fallResponse.arrayBuffer();
            audioBufferOriginal = Buffer.from(arrayB);
            console.log("✅ Áudio de Contingência (Google Assistente) ativado!");
        }

        res.set('Content-Type', 'audio/mp3');
        return res.send(audioBufferOriginal);

    } catch (error) {
        console.error("Erro Crítico no TTS Backend:", error);
        res.status(500).json({ error: "Erro interno no servidor de áudio" });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`\n==============================================`);
    console.log(`🎙️   CAIXA PRETA: REATOR DE VOZ (ELEVEN LABS)`);
    console.log(`==============================================`);
    console.log(`Porta de disparo: ${PORT}`);
    console.log(`Status ELEVENLABS_API_KEY: ${process.env.ELEVENLABS_API_KEY ? "🟢 CONFIGURADA" : "🔴 FALTA ADICIONAR NO '.env'"}`);
    console.log(`==============================================\n`);
});
