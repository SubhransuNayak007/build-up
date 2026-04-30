// PitBull Markets — service worker (v7 · mobile premium polish)
// Strategy:
//   • Network-first for HTML (so new builds reach users without a hard refresh)
//   • Never cache the backend API (always live counters / leaderboards)
//   • Cache-first for static assets (icons, manifest, fonts) with background revalidation
const CACHE = 'pitbull-v7';
const STATIC_ASSETS = [
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC_ASSETS).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Never cache the backend API or auth — always live
  if (url.hostname.includes('pitbull-backend') || url.hostname.endsWith('.fly.dev') || url.hostname.endsWith('.supabase.co')) {
    return;
  }

  // Network-first for HTML / navigations so users always get the newest build
  const isHTML = req.mode === 'navigate'
              || req.destination === 'document'
              || (req.headers.get('accept') || '').includes('text/html');
  if (isHTML) {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match(req).then(c => c || caches.match('index.html')))
    );
    return;
  }

  // Network-first for CDN dependencies (always get fresh JS)
  if (url.hostname === 'unpkg.com' || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }

  // Cache-first for static assets in our own origin (icons, manifest, fonts)
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        return res;
      }))
    );
  }
});
