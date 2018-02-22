module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'TinyKitten',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TinyKitten Official Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        'href': 'https://fonts.googleapis.com/css?family=Raleway', 'rel': 'stylesheet'
      }
    ]
  },
  manifest: {
    name: 'TinyKitten',
    short_name: 'tinykitten',
    description: 'Official TinyKitten Portfolio',
    lang: 'ja',
    theme_color: '#008FFE',
    background_color: '#FFFFFF',
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#008FFE' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
