import type { AxiosInstance } from "axios";
import type { Category } from "./types";

export class CategoriesApi {
  constructor(private readonly _axios: AxiosInstance) {}

  async getCategories() {
    const response = await this._axios.get<Category[]>('/categories');

    return response.data;
  }

  async getCategory(id: number) {
    const response = await this._axios.get<Category>(`/categories/${id}`);

    return response.data;
  }
}