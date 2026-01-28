const CACHE_NAME = 'vision-parser-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// 安装 Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .键，然后(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 拦截网络请求
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .键，然后(response => {
        // 如果缓存中有，直接返回缓存；否则发起网络请求
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
