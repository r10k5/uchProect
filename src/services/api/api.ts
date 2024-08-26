import type { AxiosInstance } from 'axios';
import axios from 'axios';

import { ProductsApi } from './cards';
import { CartApi } from './cart';
import { CategoriesApi } from './categories';
import { OrdersApi } from './orders';
import { ServicesApi } from './services';

class Api {
  private constructor(
    private readonly _axios: AxiosInstance
  ) {
    this.products = new ProductsApi(this._axios);
    this.cart = new CartApi(this._axios);
    this.categories = new CategoriesApi(this._axios);
    this.orders = new OrdersApi(this._axios);
    this.services = new ServicesApi(this._axios);
  }

  public products: ProductsApi;
  public cart: CartApi;
  public categories: CategoriesApi;
  public orders: OrdersApi;
  public services: ServicesApi;

  static from(baseUrl: string) {
    return new Api(axios.create({
      baseURL: baseUrl,
      withCredentials: true,
    }));
  }
}

export const api = Api.from(import.meta.env.VITE_API_URL);
