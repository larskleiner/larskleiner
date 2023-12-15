<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
    <nav>
      <template v-for="(locale, index) in availableLocales" :key="locale.code">
        <template v-if="index"> | </template>
        <NuxtLink class="btn btn-outline-secondary mb-3" :to="switchLocalePath(locale.code)">{{ locale.name ?? locale.code }}</NuxtLink>
      </template>
    </nav>
    <article class="home pb-5">
      <div class="container-fluid">
        <div class="row larskleiner">
          <div class="col-md-1 d-flex flex-column">
            <NuxtImg src="/img/larskleiner.png" format="webp" width="55" height="55" class="float-md-end" alt="Lars Kleiner" />
          </div>
          <div class="col-11">
            {{ t('hello') }}
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-1 d-flex flex-column">
            <NuxtLink to="https://www.linkedin.com/in/larskleiner" class="float-md-end"><NuxtImg src="/img/linkedin.png" format="webp" width="55" height="47" alt="linkedin" /></NuxtLink>
          </div>
          <div class="col-11">
            {{ t('linkedin') }} <NuxtLink to="https://www.xing.com/profile/Lars_Kleiner">Xing</NuxtLink>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-1 d-flex flex-column">
            <NuxtLink to="https://www.drupal.org/u/larskleiner" class="float-md-end"><NuxtImg src="/img/drupal.png" format="webp" width="55" height="72" alt="drupal" /></NuxtLink>
          </div>
          <div class="col-11">
            {{ t('drupal') }}
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-1 d-flex flex-column">
            <NuxtLink to="https://github.com/larskleiner" class="float-md-end"><NuxtImg src="/img/github.png" format="webp" width="55" height="55" alt="github" /></NuxtLink>
          </div>
          <div class="col-11">
            {{ t('github') }}
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-1 d-flex flex-column">
            <NuxtLink to="https://www.strava.com/athletes/2479560" class="float-md-end"><NuxtImg src="/img/strava.png" format="webp" width="55" height="55" alt="strava" /></NuxtLink>
          </div>
          <div class="col-11">
            {{ t('strava') }}
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-1 d-flex flex-column">
            <NuxtLink to="https://www.instagram.com/larskleiner/" class="float-md-end"><NuxtImg src="/img/instagram.png" format="webp" width="55" height="55" alt="instagram" /></NuxtLink>
          </div>
          <div class="col-11">
            {{ t('instagram') }} <NuxtLink to="https://www.flickr.com/photos/larskleiner/">Flickr</NuxtLink>
          </div>
        </div>
      </div>
    </article>
</template>
