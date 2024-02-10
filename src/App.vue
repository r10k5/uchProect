<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue';
import { useCardsStore } from './stores/cards.store';
import { useAppStore } from './stores/app.store';
import { computed } from 'vue';

const cardStore = useCardsStore();
cardStore.addCardLocal({
  id: 0,
  name: 'Имбовый стол',
  price: 1000,
  article: '001',
  description: 'Крутой стол покупайте скорее всего 10 чашек кофе',
  photo: '/taburetka.jpg'
});

const appStore = useAppStore();
const appRootModalOpen = computed( () => { 
  if(appStore.isModalOpen) {
    return 'app-root-modal-open'
  } 
  return '';
 })
</script>

<template>

 <div id="app-root" :class="appRootModalOpen">
  <AppHeader />

  <div class="app-route">
    <RouterView />
  </div>

 </div>

  <div id="app-modals">

  </div>
</template>

<style scoped>
.app-root-modal-open {
  overflow: hidden;
}
#app-modals {
  position: absolute;
  top: 0;
  left: 0;
}
#app-root {
  overflow: auto;
  max-height: 100%;
}
</style>
