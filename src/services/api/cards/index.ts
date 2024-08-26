import { convertCardPhoto } from '@/services/helpers/converters/card';
import type { AxiosInstance } from 'axios';
import type { Product } from './types';

export class ProductsApi {
  constructor(private readonly _axios: AxiosInstance) {}

  async getProducts() {
    const response = await this._axios.get<Product[]>('/products');
    return response.data.map((product) => {
      product.photo = convertCardPhoto(product.photo);
      
      return product;
    });
  }

  async getProduct(id: number) {
    const response = await this._axios.get<Product>(`/products/${id}`);

    return response.data;
  }
}
