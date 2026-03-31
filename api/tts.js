// Vercel Serverless Function — /api/tts
// Substitui o server_tts.js Express em produção

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    const { texto } = req.body;
    if (!texto || typeof texto !== 'string') {
        return res.status(400).json({ error: 'Campo "texto" obrigatório' });
    }

    let audioBuffer = null;

    // 1. TENTA ELEVENLABS
    if (process.env.ELEVENLABS_API_KEY) {
        try {
            const voiceId = process.env.ELEVENLABS_VOICE_ID || 'pNInz6obpgDQGcFmaJgB';
            const elRes = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
                method: 'POST',
                headers: {
                    'Accept': 'audio/mpeg',
                    'Content-Type': 'application/json',
                    'xi-api-key': process.env.ELEVENLABS_API_KEY
                },
                body: JSON.stringify({
                    text: texto,
                    model_id: 'eleven_multilingual_v2',
                    voice_settings: {
                        stability: 0.45,
                        similarity_boost: 0.85,
                        style: 0.5,
                        use_speaker_boost: true
                    }
                })
            });

            if (elRes.ok) {
                const arrayB = await elRes.arrayBuffer();
                audioBuffer = Buffer.from(arrayB);
            } else {
                console.warn('[TTS] ElevenLabs falhou:', await elRes.text());
            }
        } catch (e) {
            console.warn('[TTS] Erro ElevenLabs:', e.message);
        }
    }

    // 2. FALLBACK: GOOGLE TTS
    if (!audioBuffer) {
        try {
            const { getAudioUrl } = await import('google-tts-api');
            const textoLimpo = texto.substring(0, 199);
            const urlAudio = getAudioUrl(textoLimpo, {
                lang: 'pt-BR',
                slow: false,
                host: 'https://translate.google.com',
            });
            const fallRes = await fetch(urlAudio);
            const arrayB = await fallRes.arrayBuffer();
            audioBuffer = Buffer.from(arrayB);
        } catch (e) {
            console.error('[TTS] Fallback Google falhou:', e.message);
            return res.status(500).json({ error: 'Falha no serviço de áudio' });
        }
    }

    res.setHeader('Content-Type', 'audio/mp3');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.send(audioBuffer);
}
