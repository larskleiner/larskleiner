export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'de',
    messages: {
        en: {
            hello: 'Hello, I\'m Lars Kleiner. Web developer, Drupal expert, cyclist and amateur photographer.',
            linkedin: 'linkedin blurb here.',
            strava: 'strava blurb here.',
        },
        de: {
            hello: 'Hallo, ich bin Lars Kleiner. Webentwickler, Drupal-Experte, Radfahrer und Hobbyfotograf.',
            linkedin: 'linkedin blurb here.',
            strava: 'strava blurb here.',
        }
    }
}))