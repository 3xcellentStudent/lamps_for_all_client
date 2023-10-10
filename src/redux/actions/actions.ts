import {
  GET_PRODUCT_ID,
  SET_PRODUCT_ID,
  GET_BASKET,
  SET_BASKET
} from '../constants/product'

export const actionGETProductID = (payload: {collection: string, productID: string}) => ({  
  type: GET_PRODUCT_ID,
  payload
});

export const actionSETProductID = (payload: any) => ({  
  type: SET_PRODUCT_ID,
  payload
});

export const actionGETBasket = (payload: []) => ({  
  type: GET_BASKET
  payload
});

export const actionSETBasket = (payload: any) => ({  
  type: SET_BASKET,
  payload
});