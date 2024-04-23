import { api } from "@/services";
import type { Product } from "@/services/types/cards.types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCardsStore = defineStore('cardsStore', () => {
  const cards = ref<Product[]>([]);

  const addCardLocal = (card: Product) => {
    cards.value.push(card);
  }

  const getCards = async () => {
    cards.value = await api.products.getProducts();
  }

  return { cards, addCardLocal, getCards }
});
