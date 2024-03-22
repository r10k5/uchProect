<script setup lang="ts">
import { useCardsStore } from '@/stores/cards.store';

const cardsStore = useCardsStore();
</script>

<template>
  <div class='product-cart-container'>
    <div v-for="card in cardsStore.cards" :key="card.id" :card="card" class='product-cart-container__card'>
      <div class="product-cart-container__card-photo">
        {{ card.photo }}
      </div>
      <div class="product-cart-container__card-text">
        <p>{{ card.name }}</p>
        <p>{{ card.article }}</p>
        <p>{{ card.price }}</p>
        <p>{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<style setup lang="scss">
.product-cart-container {
  width: 100%;
  height: 100%;
  padding: 20px 40px;

  &__card {
    width: 100%;
    display: flex;
    background-color: rgb(255, 255, 255);
    padding: 8px;

    &-text {
      
    }
    &-photo {

    }
  }
}
</style>