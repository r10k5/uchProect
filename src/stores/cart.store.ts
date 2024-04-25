import type { Product } from "@/services/types/cards.types"
import { defineStore } from "pinia";
import { ref } from "vue"

export const useCartStore = defineStore('cartsStore', () => {
    const products = ref<Product[]>([]);

    const addToCart = (product: Product) => {
        products.value.push(product);
    }

    const hasProduct = (id: number) => {
        const card = products.value.find((product) => product.id === id);
        return card !== undefined;
    }

    return {products, addToCart}
});