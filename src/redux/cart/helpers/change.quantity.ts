import { CartObjectType } from "@/types/cartTypes/cartObject.types";

export default function changeQuantityIntoCart(
  state: CartObjectType, payload: {quantity: number, index: number}
): CartObjectType{
  const {cart, isOpenCart} = state
  const {quantity: quantityCart, quantityMax: quantityMaxCart} = cart[payload.index]
  const cartItem = cart[payload.index]

  if(quantityCart + 1 <= quantityMaxCart || quantityCart - 1 >= 0){
    cartItem.quantity = payload.quantity
    return {response: {severity: "info", message: "Quantity changed !"}, cart, isOpenCart};
  }
  else {
    return {response: {severity: "warning", message: "You cannot change quantity !"}, cart, isOpenCart}
  }
}