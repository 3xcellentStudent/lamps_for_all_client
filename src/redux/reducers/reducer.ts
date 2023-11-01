import {SET_PRODUCT_ID, CHANGE_OPEN_CART, REDUCER_CALL_CART} from '../constants'
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

// const cart: {}[] = []

const initialState = {
  data,
  cart: [],
  isOpenCart: false
}

const reducer = (state = initialState, {type, payload}: {type: string, payload: any}) => {
  switch (type) {
    case SET_PRODUCT_ID:
      return {...state, data: payload}
    case REDUCER_CALL_CART:
      return { ...state, cart: [...state.cart, payload.payload] };
      // if(state.cart.length){
        // const cart = cartReducer(state.cart, payload)
      // }
      // else return {...state, cart: [payload.payload]}
    case CHANGE_OPEN_CART:
      return {...state, isOpenCart: !state.isOpenCart}
    default:
      return state;
  }
};

export default reducer;