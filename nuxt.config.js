const themeColor = '#008ffe';
const siteName = 'TinyKitten.me';
const siteDescription = 'TinyKittenのポートフォリオです。';

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'TinyKitten.me',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteDescription },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: themeColor },
      // Add to home screen
      // for Safari on iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'TinyKitten' },
      // for Windows
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
      { name: 'msapplication-TileColor', content: '#000000' },
    ],
    noscript: [
      {
        innerHTML:
          '当サイトを閲覧するためには、JavaScriptを有効にしていただく必要があります。',
        body: true,
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
      // Safari icon
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
    ],
  },
  modules: ['@nuxtjs/pwa'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: themeColor },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  meta: {
    mobileAppIOS: true,
    name: siteName,
    author: 'TinyKitten',
    description: siteDescription,
    theme_color: '#008FFE',
    lang: 'ja',
  },
  manifest: {
    name: siteName,
    short_name: siteName,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    description: siteDescription,
    lang: 'ja',
  },
  plugins: [
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/smoothscroll.js', ssr: false },
  ],
};
