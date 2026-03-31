// Service Worker — Método do Pai 360
const CACHE = 'pai360-v4';

const STATIC = [
    '/',
    '/tela_catalogo_concursos',
    '/style.css',
    '/app-icon.png',
    '/apple-touch-icon.png',
    '/manifest.json',
    '/backend_onboarding.js',
    '/guard_acesso.js',
    '/roteador_mapa.js',
    '/missao_core.js',
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', e => {
    // API e Supabase: sempre network-first
    if (e.request.url.includes('/api/') || e.request.url.includes('supabase.co') || e.request.url.includes('elevenlabs')) {
        return;
    }
    e.respondWith(
        caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
            if (res && res.status === 200 && e.request.method === 'GET') {
                const clone = res.clone();
                caches.open(CACHE).then(c => c.put(e.request, clone));
            }
            return res;
        }))
    );
});
