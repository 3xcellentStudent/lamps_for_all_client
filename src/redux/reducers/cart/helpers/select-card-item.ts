import { CartObjectType } from "@/types/cartTypes/cartObject.types";
import { CartProduct } from "@/types/storeTypes";

export default function selectCartItem(
  cart: CartProduct[], {value, idx}: {value: boolean, idx: number}
): CartObjectType["cartObject"]{
  cart[idx].checked = value;
  return {cart, response: {message: "Product selected !", severity: "info"}}
}