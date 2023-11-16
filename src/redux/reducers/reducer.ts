import {SET_PRODUCT_ID, CHANGE_OPEN_CART, REDUCER_CALL_CART} from '../constants'
import { PUT_CART_ALL } from '../constants/cartConst';
import cartReducer from './cartReducer';

const data = {
  product: {
    status: {},
    localization: {},
    settings: {},
    fieldsInfo: [],
    images: [],
    video: {},
    description: [],
    service: [],
    reviews: {},
    delivery: {},
    seller: {},
  }
}

const initialState = {
  data,
  cart: [],
  statusCode: 100,
  isOpenCart: false
}

const reducer = (state = initialState, {type, payload}: {type: string, payload: any}) => {
  switch (type) {
    case SET_PRODUCT_ID:
      return {...state, data: payload}
    case REDUCER_CALL_CART:
      const {status: statusCode, result} = cartReducer(state.cart, payload)
      return {...state, statusCode, cart: result}
    case CHANGE_OPEN_CART:
      return {...state, isOpenCart: !state.isOpenCart}
    default:
      return state;
  }
};

export default reducer;