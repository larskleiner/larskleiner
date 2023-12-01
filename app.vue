<script setup lang="ts">
const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage :transition="{
      name: 'trans',
      mode: 'out-in',
      onBeforeEnter
    }" />
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
