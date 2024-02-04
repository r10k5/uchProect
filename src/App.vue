<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue';
import { useCardsStore } from './stores/cards.store';

const cardStore = useCardsStore();
cardStore.addCardLocal({
  id: 0,
  name: 'Имбовый стол',
  price: 1000,
  article: '001',
  description: 'Крутой стол покупайте скорее всего 10 чашек кофе',
  photo: '/taburetka.jpg'
});
</script>

<template>

  <AppHeader />

  <div class="app-route">
    <RouterView />
  </div>

</template>

<style scoped>

</style>
