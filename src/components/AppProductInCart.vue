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
        <p class="card-text__name">{{ card.name }}</p>
        <p>Артикул: {{ card.article }}</p>
        <p>{{ card.price }}</p>
        <p class="card-text__description">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<style setup lang="scss">
.card-text__description {
  max-width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.card-text__name {
  font-size: 20px;
  font-weight: 700;
}
.product-cart-container {
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__card {
    width: 100%;
    display: flex;
    background-color: rgb(255, 255, 255);
    padding: 8px;

    &-text {
      width: 80%;
    }
    &-photo {
      width: 20%;
      padding: 8px;
    }
  }
}
</style>