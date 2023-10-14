export interface Store {
  basket: Basket
}

export interface Basket {
  productName: string
  productId: string
  quantity: number
  fields: {name: string, value: string}[]
}