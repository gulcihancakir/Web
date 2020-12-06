export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'minikterzi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },


  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
   
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/main.scss'
   
   
  ],
  
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/bootstrap.js',
    '~/plugins/fontawesome.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    ['nuxt-fontawesome', {
       component: 'fa', //customize component name
       imports: [{
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['faLightbulb']
           },
           {set: '@fortawesome/free-brands-svg-icons',
           icons: ['faGithub']
           },
           {set: '@fortawesome/free-regular-svg-icons',
           icons: ['faLightbulb']
           },
       ]
    }]
   ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
   
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    
    
    
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  

  /*
  ** Style resources
  */
  styleResources: {
    scss: "./scss/*.scss"
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
 
}
