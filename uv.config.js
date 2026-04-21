/* Ultraviolet Configuration 
   This file tells the browser how to handle the proxy requests.
*/

self.__uv$config = {
    prefix: '/service/',
    bare: [
        'https://bare.benro.dev/',
        'https://uv.student-portal.workers.dev/bare/',
        'https://tomp.app/',
        'https://bare.fly.dev/'
    ],
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv.handler.js',
    bundle: '/uv.bundle.js',
    config: '/uv.config.js',
    sw: '/uv.sw.js',
};
