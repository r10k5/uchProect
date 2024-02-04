/*функция для получения карточек с бэка*/
import { api } from "@/services";
import type { Product } from "@/services/types/cards.types"

export async function getCards() {
  const cards = await api.axios.get<Product[]>('/cards');

  return cards.data;
}
