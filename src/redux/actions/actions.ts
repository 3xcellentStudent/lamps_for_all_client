import {
  GET_PRODUCT_ID,
  SET_PRODUCT_ID,
  PUT_BASKET,
  SET_BASKET,
  SET_OPEN_CART,
  CHANGE_OPEN_CART,
} from '../constants/product'

export const actionGETProductID = (payload: {collection: string, productID: string}) => ({  
  type: GET_PRODUCT_ID,
  payload
});
export const actionSETProductID = (payload: any) => ({type: SET_PRODUCT_ID, payload});

export const actionPUTBasket = (payload: any) => ({type: PUT_BASKET, payload});
export const actionSETBasket = (payload: any) => ({type: SET_BASKET, payload});

export const actionSETOpenCart = () => ({type: SET_OPEN_CART});
export const actionCHANGEOpenCart = () => ({type: CHANGE_OPEN_CART});