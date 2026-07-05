const CACHE_NAME = 'pwx-v1';
const ASSETS = [
  '/',
  '/manifest-Sales.json',
  '/iconSale.png'
];

// I-install ang Service Worker at i-cache ang basic assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// I-fetch ang mga request kahit offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
