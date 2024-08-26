<script setup lang="ts">
import type { Product } from '@/services/api/cards/types';
import { useCartStore } from '@/stores/cart.store';
import { computed } from 'vue';
import AppDeleteIcon from './icons/AppDeleteIcon.vue';

export interface AppProductCardProps {
    card: Product;
}
const props = defineProps<AppProductCardProps>();

const cartStore = useCartStore();

const addToCart = () => {
    cartStore.addToCart(props.card);
}

const removeFromCart = () => {
    cartStore.removeFromCart(props.card.id);
}

const productInCartCount = computed(() => {
    if (cartStore.hasProduct(props.card.id)) {
        const card = cartStore.products.find((product) => product.id === props.card.id);

        if (card) {
            return card.quantity;
        }
    }

    return 0;
});
</script>

<template>
    <div class="app-card-container">
        <button class="app-delete-button" role="button">
            <AppDeleteIcon width="30px" height="30px" class="app-delete-button__icon" />
        </button>


        <div class="app-card-image" :style="{ backgroundImage: `url(${card.photo})` }">
        </div>
        <p class="app-product-price">
            {{ card.price }} руб
        </p>
        <p class="app-product-name">
            {{ card.name }}
        </p>
        <div class="app-product-cart-buttons">
            <button v-if="productInCartCount === 0" class="add-cart-button" @click="addToCart" role="button">
                В корзину
            </button>

            <template v-else>
                <button class="app-product-cart-buttons__button" @click="removeFromCart" role="button">
                    -
                </button>

                <p class="app-product-cart-buttons__count">{{ productInCartCount }}</p>

                <button class="app-product-cart-buttons__button" @click="addToCart" role="button">
                    +
                </button>
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-card-container:hover > .app-delete-button {
    opacity: 1;
}

.app-delete-button {
    position: absolute;
    opacity: 0;
    top: -20px;
    right: -20px;
    border: none;
    outline: none;
    border-radius: 100%;
    background-color: white;
    box-shadow: 1px 1px 4px rgba(62, 62, 62, 0.25);
    width: 40px;
    height: 40px;

    &__icon {
        color: rgb(199, 8, 8);
    }
}

.add-cart-button {
    width: 240px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #57c757;
    background-color: #fbfbfb;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4F901C;
}

.add-cart-button:hover {
    background-color: #57c757;
    color: #f9f9f9;
    box-shadow: 1px 1px 4px rgba(62, 62, 62, 0.25);
}

.app-product-name {
    margin: 8px 0px;
    color: #3D3C3C;
    font-size: 14px;
    font-weight: 700;
}

.app-product-cart-buttons {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;

    &__button {
        padding: 4px 30px;
        height: 40px;
        border-radius: 10px;
        border: 1px solid #57c757;
        background-color: #fbfbfb;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #4F901C;

        &:hover {
            background-color: #57c757;
            color: #f9f9f9;
            box-shadow: 1px 1px 4px rgba(62, 62, 62, 0.25);
        }
    }

    &__count {
        border: 1px solid #3D3C3C50;
        border-radius: 10px;
        flex-grow: 1;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
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
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    padding: 24px 24px;
    position: relative;
}
</style>