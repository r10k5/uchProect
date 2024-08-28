import type { AxiosInstance } from "axios";
import type { CartProduct, CartProductModel } from "./types";
import type { Product } from "../cards/types";
import { convertCardPhoto } from "@/services/helpers/converters/card";

export class CartApi {
  constructor(private readonly _axios: AxiosInstance) {}

  async getCart(): Promise<CartProduct[]> {
    const response = localStorage.getItem('cart');

    if (!response) {
      return [];
    }

    const cart: CartProductModel[] = JSON.parse(response);
    const products: CartProduct[] = await Promise.all(
      cart.map(async (product) => {
        const singleProductResponse = await this._axios.get<Product>(`/products/${product.id}`);
        const singleProduct = singleProductResponse.data;
        singleProduct.photo = convertCardPhoto(singleProduct.photo);
        
        if (!product) return [];
        
        return [{
          ...singleProduct,
          quantity: product.quantity,
        }]
      }),
    )
    .then((values) => values.flat());

    return products;
  }

  async updateCart(cart: CartProduct[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}