<script setup lang="ts">
import type { Product } from '@/services/types/cards.types';
import { useCartStore } from '@/stores/cart.store';

export interface AppProductCardProps {
    card: Product;
}
const props = defineProps<AppProductCardProps>();

const cartStore = useCartStore();

const addToCart = () => {
    cartStore.addToCart(props.card);
}
</script>

<template>
    <div class="app-card-container">
        <div class="app-card-image" :style="{ backgroundImage: `url(${card.photo})`}">
        </div>
        <p class="app-product-price"> {{ card.price }} руб </p>
        <p class="app-product-old-price"> 20 999 руб</p>
        <p class="app-product-name">{{ card.name }}</p>
        <button class="add-cart-button" @click="addToCart">
            В корзину
        </button>
    </div>
</template>

<style scoped lang="scss">
.add-cart-button {
    width: 240px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #459927;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 24px;
    color:#4F901C;
}
.app-product-name {
    margin: 8px 24px;
    color: #3D3C3C;
    font-size: 14px;
    font-weight: 700;
    }
.app-product-old-price {
    margin: 4px 24px;
    font-size: 12px;
    color: #3D3C3C;
    font-weight: 700;
    text-decoration: line-through;
}
.app-product-price {
    margin: 16px auto 0 24px;
    font-size: 24px;
    font-size: 24px;
    color: #4F901C;
    font-weight: 700;
}
.app-card-image {
    margin: 16px 24px;
    flex-shrink: 0;
    width: 240px;
    height: 240px;
    overflow: hidden;
    background-position: center center;
    background-size: cover;
}
.app-card-container { 
    height: 472px;
    width: 288px;
    border-radius: 10px;
    box-shadow:1px 1px 4px rgba(0, 0, 0, 0.25);
}
</style>