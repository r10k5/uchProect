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
    border: 1px solid #57c757;
    background-color: #fbfbfb;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#4F901C;
    margin-top: 20px;
}
.add-cart-button:hover {
    background-color: #57c757;
    color:#f9f9f9;
    box-shadow:1px 1px 4px rgba(62, 62, 62, 0.25);
}
.app-product-name {
    margin: 8px 0px;
    color: #3D3C3C;
    font-size: 14px;
    font-weight: 700;
    }
.app-product-price {
    margin: 16px 0px 2px;
    font-size: 24px;
    font-size: 24px;
    color: #4F901C;
    font-weight: 700;
}
.app-card-image {
    flex-shrink: 0;
    width: 240px;
    height: 240px;
    overflow: hidden;
    background-position: center center;
    background-size: cover;
}
.app-card-container { 
    width: 288px;
    border-radius: 10px;
    box-shadow:1px 1px 4px rgba(0, 0, 0, 0.25);
    padding: 24px 24px;
}
</style>