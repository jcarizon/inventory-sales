// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  devServer: {
    host: '0.0.0.0',
    port: 3000
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],

  
  css: ['/public/assets/css/main.css']
})
