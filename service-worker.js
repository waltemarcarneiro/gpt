// Service Worker instalado
self.addEventListener('install', function(event) {
  console.log('Service Worker instalado');
});

// Service Worker ativado
self.addEventListener('activate', function(event) {
  console.log('Service Worker ativado');
});

// Interceptando as requisições
self.addEventListener('fetch', function(event) {
  console.log('Service Worker interceptou uma requisição:', event.request.url);
  
  // Respondendo com um cache caso exista
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Retornando uma resposta do cache:', event.request.url);
        return response;
      }
      console.log('Buscando a requisição da rede:', event.request.url);
      return fetch(event.request);
    })
  );
});
