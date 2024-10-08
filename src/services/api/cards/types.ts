import type { Field } from '../fields/types'

export type Product = {
  id: number
  name: string
  description: string
  price: string
  photo: string
  article: string
  fields: Field[]
}

export type FieldCreateProductProps = {
  id: number
  value: string
}

export type CreateProductProps = {
  name: string
  price: string
  article: string
  description: string
  photo?: string
  fields: FieldCreateProductProps[]
}
