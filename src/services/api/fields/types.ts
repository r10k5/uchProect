export type Field = {
  id: number
  type: FieldType
  value: string
}

export enum FieldType {
  Discount = 'discount',
  String = 'string',
  Integer = 'integer',
  Unknown = 'unknown',
}