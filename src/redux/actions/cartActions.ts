import {
  SET_CART, SET_OPEN_CART, PUT_CART_ALL, PUT_CART_QUANTITY
} from '../constants/cartConst'

export const actionSETDataCart = (payload: any) => ({type: SET_CART, payload});
export const actionPUTDataCart = (payload: any) => ({type: PUT_CART_ALL, payload});
export const actionPUTDataCartQuantity = (payload: number) => (
  {type: PUT_CART_QUANTITY, payload}
);