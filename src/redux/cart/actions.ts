import { SAGA_CHANGE_CART } from "./constants"

export const actionChangeCartSaga = (
  payload: {type: string, payload: {}}
) => ({type: SAGA_CHANGE_CART, payload})
/* ************* */
export const actionChangeCartReducer = (
  payload: {type: string, payload: {}}
) => (payload)
//
export const actionCartSelectedReducer = (
  payload: {type: string, payload: {}}
) => (payload)