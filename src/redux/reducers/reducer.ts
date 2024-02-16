import {SET_PRODUCT_ID, CHANGE_OPEN_CART, REDUCER_CALL_CART, SELECTED_CART_ELEMENTS} from '../constants'
import { PUT_CART_ALL } from '../constants/cartConst';
import cartReducer from './cartReducer';

interface InitialState {
  data: {}
  cart: []
  statusCode: number
  isOpenCart: boolean
  selectedCartElements: number[]
}

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

const initialState: InitialState = {
  data,
  cart: [],
  statusCode: 100,
  isOpenCart: false,
  selectedCartElements: []
}

const reducer = (state = initialState, {type, payload}: {type: string, payload: any}) => {
  switch (type) {
    case SET_PRODUCT_ID:
      return {...state, data: payload}
    case REDUCER_CALL_CART:
      const {status: statusCode, result} = cartReducer(state.cart, payload)
      return {...state, statusCode, cart: result}
    case SELECTED_CART_ELEMENTS:
      const {type} = payload
      switch(type){
        case 'ADD': return{...state, selectedCartElements: [...state.selectedCartElements, payload.idx]}
        case 'DELETE': 
          const filtered = state.selectedCartElements.filter(($, index) => index !== payload.idx)
          return{...state, selectedCartElements: filtered}
        default: return state
      }
    case CHANGE_OPEN_CART:
      return {...state, isOpenCart: !state.isOpenCart}
    default:
      return state;
  }
};

export default reducer;