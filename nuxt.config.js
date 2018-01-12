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
