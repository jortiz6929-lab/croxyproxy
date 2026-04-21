importScripts(
    'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.0.2/dist/uv.bundle.js',
    'uv.config.js',
    'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.0.2/dist/uv.sw.js'
);

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
