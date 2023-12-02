<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <article class="home pb-5">
      <div class="container-fluid">
        <div class="row larskleiner">
          <div class="col-md-1 pt-md-3">
            <NuxtImg preload src="/img/larskleiner.png" class="float-md-end border border-secondary rounded-3" alt="Lars Kleiner" />
          </div>
          <div class="col-11">
            {{ t('hello') }}
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-1 pt-md-2">
            <NuxtLink to="https://www.linkedin.com/in/larskleiner" class="float-md-end"><NuxtImg preload src="/img/linkedin.png" alt="linkedin" /></NuxtLink>
          </div>
          <div class="col-11">
            {{ t('linkedin') }}
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-1 pt-md-2">
            <NuxtLink to="https://www.strava.com/athletes/2479560" class="float-md-end"><NuxtImg preload src="/img/strava.png" alt="strava" /></NuxtLink>
          </div>
          <div class="col-11">
            {{ t('strava') }}
          </div>
        </div>
      </div>
    </article>
</template>
