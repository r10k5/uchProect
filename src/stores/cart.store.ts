import type { Product } from "@/services/api/cards/types";
import type { CartProduct } from "@/services/api/cart/types";
import { defineStore } from "pinia";
import { ref } from "vue"

export const useCartStore = defineStore('cartsStore', () => {
    const products = ref<CartProduct[]>([]);

    const addToCart = (product: Product) => {
        if (hasProduct(product.id)) {
            const card = products.value.find((product) => product.id === product.id);

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
    }

    const removeFromCart = (id: number) => {
        const product = products.value.find((p) => p.id === id);

        if (!product) return;

        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            products.value = products.value.filter((p) => p.id !== id);
        }
    }

    const hasProduct = (id: number) => {
        const card = products.value.find((product) => product.id === id);
        return card !== undefined;
    }

    return { products, addToCart, hasProduct, removeFromCart }
});