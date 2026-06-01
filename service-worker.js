const CACHE='angelreise-delete-trip-button-fix-2026-06-01';
const FILES=['./manifest.json','./icon-norway.svg'];
self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.mode==='navigate' || (req.headers.get('accept')||'').includes('text/html')){
    event.respondWith(fetch(req,{cache:'no-store'}).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(fetch(req).then(res=>{
    const copy=res.clone();
    caches.open(CACHE).then(cache=>cache.put(req,copy));
    return res;
  }).catch(()=>caches.match(req)));
});
