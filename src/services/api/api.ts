import type { AxiosError, AxiosInstance } from 'axios'
import axios from 'axios'

import type { AuthorizationResponse } from './auth/auth.types'
import { ProductsApi } from './cards'
import { CartApi } from './cart'
import { CategoriesApi } from './categories'
import { mapError, type DefaultError } from './errors/mapper'
import { OrdersApi } from './orders'
import { ServicesApi } from './services'

class Api {
  private constructor(private _axios: AxiosInstance) {
    this.products = new ProductsApi(this._axios)
    this.cart = new CartApi(this._axios)
    this.categories = new CategoriesApi(this._axios)
    this.orders = new OrdersApi(this._axios)
    this.services = new ServicesApi(this._axios)
  }

  public products: ProductsApi
  public cart: CartApi
  public categories: CategoriesApi
  public orders: OrdersApi
  public services: ServicesApi

  private _expired?: number
  private static readonly EXPIRATION_SUB = 60 * 1000

  public isAuthorized() {
    return this._expired && Date.now() - Api.EXPIRATION_SUB < this._expired
  }

  public async authorize(username: string, password: string) {
    let response
    try {
      response = await this._axios.post<AuthorizationResponse>('/auth', {
        username,
        password
      })
    } catch (err) {
      const error = err as AxiosError
      const response = error.response?.data as DefaultError | undefined

      if (!response) {
        throw new Error('Something went wrong')
      }

      throw mapError(response)
    }

    this._expired = response.data.expires
    this._axios.defaults.headers['Authorization'] = `Bearer ${response.data.access_token}`

    return true
  }

  public async refresh() {
    if (this.isAuthorized()) {
      return true
    }

    if (this._expired === undefined) {
      delete this._axios.defaults.headers['Authorization']
      return false
    }

    let response
    try {
      response = await this._axios.get<AuthorizationResponse>('/auth/refresh-tokens')
    } catch (_) {
      delete this._axios.defaults.headers['Authorization']
      return false
    }

    this._expired = response.data.expires
    this._axios.defaults.headers['Authorization'] = `Bearer ${response.data.access_token}`
  }

  static from(baseUrl: string) {
    return new Api(
      axios.create({
        baseURL: baseUrl,
        withCredentials: true
      })
    )
  }
}

export const api = Api.from(import.meta.env.VITE_API_URL)
