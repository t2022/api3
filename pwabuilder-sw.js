self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('/').then((cache) => cache.addAll([
      'index.html',
      'images/icon.png',
      'w3.css',
      'style.css',
      'w3js',
      'script.js',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
