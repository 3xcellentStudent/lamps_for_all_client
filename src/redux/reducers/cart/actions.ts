import { REDUCER_PUT_CART_ITEM } from "@/redux/constants/cartConst";

export const actionChangeCartSaga = (
  payload: {type: string, payload: {}}
) => ({type: REDUCER_PUT_CART_ITEM, payload})

export const actionChangeCartReducer = (
  payload: {type: string, payload: {}}
) => (payload)