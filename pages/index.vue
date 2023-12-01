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
  <div class="container-fluid">
    <nav>
      <template v-for="(locale, index) in availableLocales" :key="locale.code">
        <template v-if="index"> | </template>
        <NuxtLink class="btn btn-primary" :to="switchLocalePath(locale.code)">{{ locale.name ?? locale.code }}</NuxtLink>
      </template>
    </nav>
    <article>
      <div class="row">
        <div class="col pt-3">
          <NuxtImg preload src="/img/larskleiner.png" class="border border-secondary rounded-3" alt="Lars Kleiner" />
        </div>
        <div class="col-11">
          {{ t('hello') }}
        </div>
      </div>
    </article>
  </div>
</template>
