---
layout: null
---
// Service Worker for Sol Ligam - Efficient caching of static assets
const CACHE_NAME = 'solligam-v{{ site.time | date: "%s" }}';
const CACHE_FILES = [
  '/',
  '/assets/css/style.css',
  '/images/brand/logo.webp',
  '/images/favicon.ico',
  '/a-propos/',
  '/contact/',
  '/outils/',
  '/projets/'
];

// Install event - cache essential resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets for offline use');
        return cache.addAll(CACHE_FILES);
      })
      .then(() => {
        self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName.startsWith('solligam-')) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      self.clients.claim();
    })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  // Only handle GET requests for same origin
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Cache strategy: Cache first for static assets, network first for HTML
  if (event.request.destination === 'image' || 
      event.request.url.includes('/assets/') ||
      event.request.url.includes('/images/')) {
    // Static assets: Cache first
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request)
            .then((fetchResponse) => {
              // Add to cache for future use
              if (fetchResponse.status === 200) {
                const responseClone = fetchResponse.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(event.request, responseClone);
                  });
              }
              return fetchResponse;
            });
        })
    );
  } else {
    // HTML pages: Network first for fresh content
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseClone);
              });
          }
          return response;
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(event.request);
        })
    );
  }
});