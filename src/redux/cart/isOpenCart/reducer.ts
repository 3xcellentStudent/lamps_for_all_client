import { CART_IS_OPEN_SAVE } from "./constants";
import { CART_IS_OPEN_SAVE_TYPE } from "@/redux/cart/isOpenCart/types"

let isOpenCart: boolean = false

export default function cartReducer(state = isOpenCart, 
{type}: {type: CART_IS_OPEN_SAVE_TYPE}){
  switch(type){
    case CART_IS_OPEN_SAVE: return state = !state;
    default: return state;
  }
}