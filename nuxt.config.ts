// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@nuxtjs/i18n',
      {
        locales: ['en', 'de'],
        defaultLocale: 'de',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          alwaysRedirect: true,
          onlyOnRoot: true,
        },
        vueI18n: './i18n.config.ts'
      }
    ]
  ],
  css: ['~/assets/styles/main.scss']
});
