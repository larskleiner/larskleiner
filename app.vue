<script setup lang="ts">
const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}

const { t } = useI18n()
</script>

<template>
  <NuxtLayout>
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
