import type { Field } from "../fields/types";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  photo: string;
  article: string;
  fields: Field[];
};
