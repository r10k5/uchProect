import type { Product } from "../cards/types"

export type CartProduct = Product & {
  quantity: number
}

export type CartProductModel = {
  id: number
  quantity: number
}