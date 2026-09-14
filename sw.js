const CACHE = 'tv6mk1-v1';
const BASE = '/tv6mk1-/'; // Имя твоего репозитория

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll([
    BASE, 
    BASE + 'index.html', 
    BASE + 'icon-512.png'
  ])));
});
