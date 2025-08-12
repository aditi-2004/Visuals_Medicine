const CACHE_NAME = 'hycure-cache-v1';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/data/medicines.json' // we'll copy this to public/data during build (see below)
];

// Also cache all images under /images/ when they are fetched.

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  // cleanup old caches
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  // For navigation requests, return index.html from cache (SPA support)
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Try network first, fallback to cache; for images use cache-first
  if (req.destination === 'image') {
    event.respondWith(
      caches.match(req).then(cacheRes => cacheRes || fetch(req).then(networkRes => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(req, networkRes.clone());
          return networkRes;
        });
      })).catch(() => caches.match('/images/placeholder.png'))
    );
    return;
  }

  // Default: network first, fallback to cache
  event.respondWith(
    fetch(req)
      .then(res => {
        // put a copy in cache
        if (req.method === 'GET' && res && res.status === 200 && req.url.startsWith(self.location.origin)) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req))
  );
});
