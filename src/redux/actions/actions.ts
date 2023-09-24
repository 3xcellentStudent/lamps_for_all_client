import {GET_PRODUCT_ID, SET_PRODUCT_ID} from '../constants/product'

export const actionGETProductID = (payload: {collection: string, productID: string}) => ({  
  type: GET_PRODUCT_ID,
  payload
});

export const actionSETProductID = (payload: any) => ({  
  type: SET_PRODUCT_ID,
  payload
});