export type OrderRequest = {
  name: string;
  surname: string;
  phone: string;
  address: string;
  products: OrderProduct[];
}

export type OrderProduct = {
  id: number;
  quantity: number;
}

export type CreateOrderResult = {
  id: number;
}