export default function handler(req, res) {
    const mode = req.query['hub.mode'];
    const tok  = req.query['hub.verify_token'];
    const ch   = req.query['hub.challenge'];
    if (mode === 'subscribe' && tok === 'pai360webhook') return res.status(200).send(ch);
    return res.status(200).json({ ok: true });
}
