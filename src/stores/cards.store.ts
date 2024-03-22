import type { Product } from "@/services/types/cards.types";
import { defineStore } from "pinia";
import { ref } from "vue";
import testCards from '@/assets/test.json'

export const useCardsStore = defineStore('cardsStore', () => {
  const cards = ref<Product[]>(testCards );

  const addCardLocal = (card: Product) => {
    cards.value.push(card);
  }

  return {cards, addCardLocal}
});
