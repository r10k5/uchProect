<script setup lang="ts">
import { useCartStore } from '@/stores/cart.store';

const cartStore = useCartStore();
</script>

<template>
  <div class='product-cart-container'>
    <div v-for="product in cartStore.products" :key="product.id" class='product-cart-container__card'>
      <div class="product-cart-container__card-photo">
        <img :src="product.photo" />
      </div>
      <div class="product-cart-container__card-text">
        <p class="card-text__name">{{ product.name }}</p>
        <p>Артикул: {{ product.article }}</p>
        <p>{{ product.price }}</p>
        <p class="card-text__description">{{ product.description }}</p>
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
      max-width: 20%;
      padding: 8px;
      display: flex;
      align-items: center;
      
      img {
        width: 100%;
      }
    }
  }
}
</style>