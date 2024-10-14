export interface CreateOrderRequestBodyType {
  productsPrice: number
  currency: "CAD" | "USD"
  productsQuantity: number
}