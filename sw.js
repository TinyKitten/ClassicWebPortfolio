importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "tinykitten",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.272008aaf84bfa7b7725.js",
    "revision": "1a1c551adc22b40abcc0cce95373627a"
  },
  {
    "url": "/_nuxt/layouts/default.f01d59c950bc1816e49a.js",
    "revision": "aec6ed85ca5fa94e29225752a90b7b96"
  },
  {
    "url": "/_nuxt/manifest.8c1bb8dc6c6d04c78493.js",
    "revision": "f45228fbf95649e86f4cc4cbefb843be"
  },
  {
    "url": "/_nuxt/pages/index.1ee77dcf435b8f783752.js",
    "revision": "94738f4cdf0be7e85b508a653b07fae8"
  },
  {
    "url": "/_nuxt/vendor.18e4a6e91f16097f59d8.js",
    "revision": "c4b72d9b524d0e59481fe3eec26a0be9"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

