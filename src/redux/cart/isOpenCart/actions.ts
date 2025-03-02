import { CART_IS_OPEN_CALL, CART_IS_OPEN_SAVE } from "./constants"

export const actionCallIsOpenCart = () => ({type: CART_IS_OPEN_CALL})
/*************************************************************************************************** */
export const actionSaveIsOpenCart = () => ({type: CART_IS_OPEN_SAVE})