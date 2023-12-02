<script setup lang="ts">
const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}

const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
  <NuxtLayout>
    <div>
      <nav>
        <template v-for="(locale, index) in availableLocales" :key="locale.code">
          <template v-if="index"> | </template>
          <NuxtLink class="btn btn-outline-secondary mb-3" :to="switchLocalePath(locale.code)">{{ locale.name ?? locale.code }}</NuxtLink>
        </template>
      </nav>
      <NuxtPage :transition="{
        name: 'trans',
        mode: 'out-in',
        onBeforeEnter
      }" />
      <hr class="p-3" />
      <footer>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col text-center">
              &copy; <NuxtLink to="/">Lars Kleiner</NuxtLink> {{ new Date().getFullYear() }}
            </div>
            <div class="col text-center">
              <NuxtLink to="/about">{{ t('about') }}</NuxtLink>
            </div>
            <div class="col text-center">
              <NuxtLink to="/privacy">{{ t('privacy') }}</NuxtLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </NuxtLayout>
</template>

<style>
.trans-enter-active,
.trans-leave-active {
  transition: opacity 0.3s;
}
.trans-enter,
.trans-leave-active {
  opacity: 0;
}
</style>
