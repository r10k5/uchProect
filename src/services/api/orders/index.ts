import type { AxiosInstance } from "axios";
import type { CreateOrderResult, OrderRequest } from "./types";

export class OrdersApi {
  constructor(private readonly _axios: AxiosInstance) {}

  async createOrder(data: OrderRequest) {
    const response = await this._axios.post<CreateOrderResult>('/orders', data);

    return response.data;
  }
}