import { CartProduct } from "@/types/storeTypes"
import {
  CALL_CART_STATE_CONST
} from "./constants"
import CartActionsTypes from "./types"

// export const actionCallCartState = (action: {
//   type: CALL_CART_STATE, payload: {type: CartActionsTypes, payload: CartProduct | any}
// }) => ({type: CALL_CART_STATE_CONST, payload: {...action}})
export const actionCallCartState = (payload: {type: CartActionsTypes, payload: CartProduct | any}) => ({type: CALL_CART_STATE_CONST, payload})
export const actionSaveCartState = ({payload}: {type: CartActionsTypes, payload: {type: CartActionsTypes, payload: CartProduct | any}}) => (payload)
// export const actionSaveCartIsOpen = () => ({type: CART_IS_OPEN_SAVE})
/*************************************************************************************************** */
// export const actionSaveCartAddItem = (payload: CartProduct) => ({type: CART_ADD_ITEM_SAVE, payload})