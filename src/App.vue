<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue';
</script>

<template>

  <AppHeader />

  <div class="app-route">
    <RouterView />
  </div>

</template>

<style scoped>

</style>
