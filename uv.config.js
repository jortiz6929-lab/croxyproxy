self.__uv$config = {
    prefix: '/service/',
    bare: [
        'https://bare.benro.dev/',
        'https://uv.student-portal.workers.dev/bare/',
        'https://tomp.app/',
        'https://bare.fly.dev/',
        'https://uv.radon.games/bare/'
    ],
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.0.2/dist/uv.handler.js',
    bundle: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.0.2/dist/uv.bundle.js',
    config: '/uv.config.js',
    sw: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.0.2/dist/uv.sw.js',
};
