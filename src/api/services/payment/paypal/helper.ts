import { CreateOrderRequestBodyType } from "@/types/api.types/paypal.types";
import { CartProduct } from "@/types/storeTypes";

export function createPayPalJsonBody(cart: CartProduct[] | []){
  const requestBody: CreateOrderRequestBodyType = {
    productsPrice: 0,
    currency: "CAD",
    productsQuantity: cart.length,
  }
  cart.forEach(({price, quantity}) => requestBody.productsPrice += price * quantity)
  
  return JSON.stringify(requestBody);
}