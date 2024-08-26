import type { AxiosInstance } from "axios";
import type { Service } from "./types";

export class ServicesApi {
  constructor(private readonly _axios: AxiosInstance) {}

  async getServices() {
    const response = await this._axios.get<Service[]>('/services');

    return response.data;
  }
}