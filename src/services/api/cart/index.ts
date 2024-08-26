import type { AxiosInstance } from "axios";
import type { CartProduct, CartProductModel } from "./types";
import type { Product } from "../cards/types";

export class CartApi {
  constructor(private readonly _axios: AxiosInstance) {}

  async getCart() {
    const response = localStorage.getItem('cart');

    if (!response) {
      return [];
    }

    const cart: CartProductModel[] = JSON.parse(response);
    const products: CartProduct[] = await Promise.all(
      cart.map(async (product) => ({
        ...(await this._axios.get<Product>(`/products/${product.id}`)).data,
        quantity: product.quantity,
      })),
    );

    for (const product of cart) {
      const response = await this._axios.get<Product>(`/products/${product.id}`);

      products.push({
        ...response.data,
        quantity: product.quantity
      });
    }
  }

  async updateCart(cart: CartProduct[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}