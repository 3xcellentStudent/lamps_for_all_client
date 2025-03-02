export type CART_IS_OPEN_CALL_TYPE = "CART_IS_OPEN_CALL"
export type CART_IS_OPEN_SAVE_TYPE = "CART_IS_OPEN_SAVE"
//********************************************************************************************************************** */
export type ActionCallIsOpenCartType = {
  type: CART_IS_OPEN_CALL_TYPE, payload: boolean
}
export type ActionSaveIsOpenCartType = {
  type: CART_IS_OPEN_SAVE_TYPE, payload: boolean
}