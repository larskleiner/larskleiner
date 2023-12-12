export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'de',
    messages: {
        en: {
            hello: 'Hello, I\'m Lars Kleiner. Web developer, Drupal expert, cyclist and amateur photographer.',
            linkedin: 'linkedin blurb here.',
            drupal: 'drupal blurb here.',
            github: 'github blurb here.',
            strava: 'strava blurb here.',
            instagram: 'instagram blurb here.',
            about: 'About',
            privacy: 'Privacy policy',
        },
        de: {
            hello: 'Hallo, ich bin Lars Kleiner. Webentwickler, Drupal-Experte, Radfahrer und Hobbyfotograf.',
            linkedin: 'linkedin blurb here.',
            drupal: 'drupal blurb here.',
            github: 'github blurb here.',
            strava: 'strava blurb here.',
            instagram: 'instagram blurb here.',
            about: 'Impressum',
            privacy: 'Datenschutzerklärung',
        }
    }
}))