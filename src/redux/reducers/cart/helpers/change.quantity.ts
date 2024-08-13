import { CartObjectType } from "@/types/cartTypes/cartObject.types";
import { CartProduct } from "@/types/storeTypes";

export default function changeQuantityIntoCart(
  cart: CartProduct[], payload: {quantity: number, idx: number}
): CartObjectType["cartObject"]{
  console.log(payload)
  const {quantity: quantityCart, quantityMax: quantityMaxCart} = cart[payload.idx]
  const cartItem = cart[payload.idx]

  if(quantityCart + 1 <= quantityMaxCart || quantityCart - 1 >= 0){
    cartItem.quantity = payload.quantity
    return {response: {severity: "info", message: "Quantity changed !"}, cart: cart};
  }
  else return {
    response: {severity: "warning", message: "You cannot change quantity !"}, cart: cart
  }
}