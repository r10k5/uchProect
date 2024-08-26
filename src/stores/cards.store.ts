import { api } from "@/services";
import { defineStore } from "pinia";
import { ref } from "vue";
import testCards from "@/assets/test.json";
import type { Product } from "@/services/api/cards/types";

export const useCardsStore = defineStore('cardsStore', () => {
  const cards = ref<Product[]>([...testCards]);

  const addCardLocal = (card: Product) => {
    cards.value.push(card);
  }

  const getCards = async () => {
    cards.value = await api.products.getProducts();
  }

  return { cards, addCardLocal, getCards };
});
