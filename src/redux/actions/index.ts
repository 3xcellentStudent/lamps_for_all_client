import {
  GET_PRODUCT_ID,
  SET_PRODUCT_ID,
  REDUCER_CALL_CART,
  CHANGE_OPEN_CART,
  CALL_OPEN_CART,
  CART_DATA_SAGA,
  CART_SELECTED_SAGA,
  SELECTED_CART_ELEMENTS
} from '../constants'

export const actionGETProductID = (payload: {collection: string, productID: string}) => (
  {type: GET_PRODUCT_ID, payload}
)
export const actionSETProductID = (payload: any) => ({type: SET_PRODUCT_ID, payload});
export const actionSETOpenCart = () => ({type: CALL_OPEN_CART});
export const actionCHANGEOpenCart = () => ({type: CHANGE_OPEN_CART});
export const actionCartReducer = (payload: {}) => ({type: REDUCER_CALL_CART, payload})
export const actionCartSaga = (payload: {}) => (
  {type: CART_DATA_SAGA, payload}
)

export const actionCartSelectedSaga = (payload: {}) => (
  {type: CART_SELECTED_SAGA, payload}
)
export const actionCartSelectedReducer = (payload: {}) => (
  {type: SELECTED_CART_ELEMENTS, payload}
)