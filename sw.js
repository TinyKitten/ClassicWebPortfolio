importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "tinykitten",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.aa7dee3560bb8950af84.js",
    "revision": "0f41cf9faafc83267e2ff48ea71ff06c"
  },
  {
    "url": "/_nuxt/layouts/default.3251a757a8135790a81c.js",
    "revision": "35b8dbf9ed337f721373aaa27d2de0fe"
  },
  {
    "url": "/_nuxt/manifest.a280e6c4dfc9b7f58720.js",
    "revision": "d8210e9f7f2cd0c2377530c716bbb250"
  },
  {
    "url": "/_nuxt/pages/index.8e257131d49bd026f33b.js",
    "revision": "fb0cdb04074787ac312d9456aa208279"
  },
  {
    "url": "/_nuxt/vendor.18e4a6e91f16097f59d8.js",
    "revision": "c4b72d9b524d0e59481fe3eec26a0be9"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

