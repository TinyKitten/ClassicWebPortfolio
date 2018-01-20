module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-lazyload']
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180"', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#008ffe' },
  /*
  ** Customize app manifest
  */
  manifest: {
    name: 'TinyKitten',
    theme_color: '#008ffe'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-109126456-2'
    }]
  ],
  plugins: [
    '~/plugins/vue-lazyload'
  ]
}
