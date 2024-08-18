import { CartObjectType } from "@/types/cartTypes/cartObject.types";
import { CartProduct } from "@/types/storeTypes";

export default function selectCartItem(
  cart: CartProduct[], {value, idx}: {value: boolean, idx: number}
): CartObjectType["cartObject"]{
  console.log(cart[idx])
  // console.log(cart[idx].checked)
  cart[idx].checked = value;
  // console.log(cart[idx].checked)
  return {cart, response: {message: "Product selected !", severity: "info"}}
}