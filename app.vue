<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <hr class="p-3" />
    <footer>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col text-center">
            &copy; <NuxtLink to="/">Lars Kleiner</NuxtLink> {{ new Date().getFullYear() }}
          </div>
          <div class="col text-center">
            <NuxtLink :to="localePath('about', 'de')">{{ t('about') }}</NuxtLink>
          </div>
          <div class="col text-center">
            <NuxtLink :to="localePath('privacy', 'de')">{{ t('privacy') }}</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </NuxtLayout>
</template>
