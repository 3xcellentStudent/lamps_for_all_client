import { CHANGE_OPEN_CART } from "@/redux/constants/cartConst";

let isOpenCart: boolean = false

export default function cartReducer(state = isOpenCart, 
{type}: {type: string}){
  switch(type){
    case CHANGE_OPEN_CART: return isOpenCart = !isOpenCart;
    default: return isOpenCart;
  }
}