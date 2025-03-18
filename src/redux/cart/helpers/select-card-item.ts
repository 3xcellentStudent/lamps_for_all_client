import { CartObjectType } from "@/types/cartTypes/cartObject.types";

export default function selectCartItem(
  state: CartObjectType, {value, index}: {value: boolean, index: number}
): CartObjectType {
  const {cart, isOpenCart} = state
  cart[index].checked = value;
  return {cart, isOpenCart, response: {message: "Product selected !", severity: "info"}}
}