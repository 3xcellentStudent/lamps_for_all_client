export interface Store {
  basket: Cart
}

export interface FieldItemType {
  name: string
  value: string
  index: number
}

export interface Cart {
  productName: string
  productId: string
  productImg: string
  quantity: number
  quantityMax: number
  fields: FieldItemType[]
  displayedField: FieldItemType
}