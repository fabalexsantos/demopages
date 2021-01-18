
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0e8014' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/vendor.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    // babel: {
    //   plugins: [
    //     [ "component", {"libraryName": "element-ui",  "styleLibraryName": "theme-chalk"}] 
    //   ] 
    // },
    publicPath : '/.nuxt/dist/',
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    analyze: true,
    extend (config, ctx) {
    }
  },
  server: {
    port: 8086, // default: 3000
    host: '127.0.0.1', // default: localhost
  }
}
