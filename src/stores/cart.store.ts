import { api } from "@/services";
import type { Product } from "@/services/api/cards/types";
import type { CartProduct } from "@/services/api/cart/types";
import Decimal from "decimal.js";
import { defineStore } from "pinia";
import { computed, ref } from "vue"

export const useCartStore = defineStore('cartsStore', () => {
    const products = ref<CartProduct[]>([]);

    const totalPrice = computed(() => {
        return products.value.reduce((acc, product) => {
            return new Decimal(acc).plus(new Decimal(product.price).times(new Decimal(product.quantity))).toNumber();
        }, 0);
    })

    api.cart.getCart().then((value) => (products.value = value));

    const addToCart = (product: Product) => {
        if (hasProduct(product.id)) {
            const card = products.value.find((pr) => pr.id === product.id);

            if (card) {
                card.quantity += 1;
            }
        } else {
            const productWithQuantity = {
                ...product,
                quantity: 1
            }

            products.value.push(productWithQuantity);
        }

        api.cart.updateCart(products.value);
    }

    const removeFromCart = (id: number) => {
        const product = products.value.find((p) => p.id === id);

        if (!product) return;

        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            products.value = products.value.filter((p) => p.id !== id);
        }

        api.cart.updateCart(products.value);
    }

    const hasProduct = (id: number) => {
        const card = products.value.find((product) => product.id === id);
        return card !== undefined;
    }

    return { products, addToCart, hasProduct, removeFromCart, totalPrice }
});