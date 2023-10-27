export interface Store {
  basket: Cart
}

export interface Cart {
  productName: string
  productId: string
  productImg: string
  quantity: number
  quantityMax: number
  fields: {name: string, value: string}[]
}