import type { Product } from "../cards/types";

export type Category = {
  id: number;
  name: string;
  parent_id: number | null;
}

export type CategoryWithProducts = Category & {
  products: Product[];
}