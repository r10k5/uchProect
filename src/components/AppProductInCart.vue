<script setup lang="ts">
import { useCardsStore } from '@/stores/cards.store';

const cardsStore = useCardsStore();
</script>

<template>
  <div class="app-product_container">
    <div class="app-product_container-first">
      <div class="app-product_container-first_photo"></div>
    </div>
  </div>
  
</template>

<style setup lang="scss">
.app-product_container {
  width: 90%;
  height: 90%;
  background-color: bisque;

  &-first{
    width: 900px;
    height: 100px;
    background-color: brown;

    &_photo {
      height: 48px;
      width: 48px;
      background-color: black;
    }
  }
    
}

</style>