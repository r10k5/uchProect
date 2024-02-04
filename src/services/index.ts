/* Файл для создания класса, который связывается с бекендом */
import axios from "axios";

class Api {
  constructor() {
    this.axios = axios.create({
      baseURL: import.meta.env.VITE_API_URL
    });
  }

  public axios;
}

export const api = new Api();
