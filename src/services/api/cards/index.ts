import { convertCardPhoto } from '@/services/helpers/converters/card'
import type { AxiosInstance } from 'axios'
import type { IRefresh } from '../auth/auth.types'
import type { CreateProductProps, Product } from './types'

export class ProductsApi {
  constructor(
    private readonly _axios: AxiosInstance,
    private readonly refreshPort: IRefresh
  ) {}

  async getProducts() {
    const response = await this._axios.get<Product[]>('/products')
    return response.data.map((product) => {
      product.photo = convertCardPhoto(product.photo)

      return product
    })
  }

  async createProduct(data: CreateProductProps) {
    const result = await this.refreshPort.refresh()

    if (!result) {
      throw new Error('Access denied')
    }

    const response = await this._axios.post<{ id: number }>('/products', data)

    return response.data.id
  }

  async getProduct(id: number) {
    const response = await this._axios.get<Product>(`/products/${id}`)

    return response.data
  }
}
