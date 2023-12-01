// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@nuxtjs/i18n',
      {
        baseUrl: 'https://www.larskleiner.de',
        strategy: 'prefix_and_default',
        locales: [
          {
            name: 'English',
            code: 'en',
            iso: 'en-US'
          },
          {
            name: 'Deutsch',
            code: 'de',
            iso: 'de-DE'
          }
        ],
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
