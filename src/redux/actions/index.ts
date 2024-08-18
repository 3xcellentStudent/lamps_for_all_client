import {
  GET_PRODUCT_ID,
  SAVE_DATA_FROM_DB,
  SAVE_DATA_FROM_DB_REDUCER,
  SET_PRODUCT_ID,
} from '../constants'
import {
  PUT_CART_ITEM, CHANGE_OPEN_CART, SELECTED_CART_ELEMENTS, REDUCER_PUT_CART_ITEM
} from '../cart/constants';

export const actionGETProductID = (payload: {collection: string, productID: string}) => (
  {type: GET_PRODUCT_ID, payload}
)
export const actionSETProductID = (payload: any) => ({type: SET_PRODUCT_ID, payload});
export const actionChangeOpenCart = () => ({type: CHANGE_OPEN_CART});

// export const actionCartSelectedSaga = (payload: {}) => (
//   {type: CART_SELECTED_SAGA, payload}
// )
export const actionCartDeleteReducer = (payload: {}) => (
  {type: SELECTED_CART_ELEMENTS, payload}
)

export const actionSaveDataFromDb = (payload: {}) => (
  {type: SAVE_DATA_FROM_DB, payload}
)

export const actionSaveDataFromDbReducer = (payload: {}) => (
  {type: SAVE_DATA_FROM_DB_REDUCER, payload}
)