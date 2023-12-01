<script setup lang="ts">
definePageMeta({
  title: 'pages.title.top' // set resource key
})

const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
  <div>
    <nav>
      <template v-for="(locale, index) in availableLocales" :key="locale.code">
        <template v-if="index"> | </template>
        <NuxtLink class="btn btn-primary btn-dark mb-3" :to="switchLocalePath(locale.code)">{{ locale.name ?? locale.code }}</NuxtLink>
      </template>
    </nav>
    <article>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-1 pt-md-3">
            <NuxtImg preload src="/img/larskleiner.png" class="float-md-end border border-secondary rounded-3" alt="Lars Kleiner" />
          </div>
          <div class="col-11">
            {{ t('hello') }}
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-1 pt-md-3">
            <NuxtLink to="https://www.linkedin.com/in/larskleiner"><NuxtImg preload src="/img/linkedin.png" class="float-md-end" alt="linkedin" /></NuxtLink>
          </div>
          <div class="col-11">
            {{ t('linkedin') }}
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-1 pt-md-3">
            <NuxtLink to="https://www.strava.com/athletes/2479560"><NuxtImg preload src="/img/strava.png" class="float-md-end" alt="strava" /></NuxtLink>
          </div>
          <div class="col-11">
            {{ t('strava') }}
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
