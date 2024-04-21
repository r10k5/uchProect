import type { AxiosInstance } from "axios";
import axios from "axios";

class Api {
  constructor(private readonly _axios: AxiosInstance) { }
}

export const api = new Api(axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
}));
