import type { AxiosInstance } from 'axios';
import type { Product } from './types';

export class ProductsApi {
  constructor(private readonly _axios: AxiosInstance) {}

  async getProducts() {
    const response = await this._axios.get<Product[]>("/products");
    return response.data;
  }
}
