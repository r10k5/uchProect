/*функция для получения карточек с бэка*/
import { api } from "@/services";

export async function getCards() {
  const cards = await api.products.getProducts();

  return cards;
}
