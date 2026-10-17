// Deliberately does no caching. A fetch handler is what makes the app
// installable, but a cache here would serve a stale shelf after a rebuild.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // Network only, on purpose.
});
