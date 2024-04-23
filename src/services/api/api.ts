import type { AxiosInstance } from 'axios';
import axios from 'axios';

import { ProductsApi } from './cards';

class Api {
  private constructor(
    private readonly _axios: AxiosInstance
  ) {
    this.products = new ProductsApi(this._axios);
  }

  public products: ProductsApi;

  static from(baseUrl: string) {
    return new Api(axios.create({
      baseURL: baseUrl,
      withCredentials: true,
    }));
  }
}

export const api = Api.from(import.meta.env.VITE_API_URL);
