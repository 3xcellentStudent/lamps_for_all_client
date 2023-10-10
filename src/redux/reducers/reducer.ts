import {SET_PRODUCT_ID, SET_BASKET} from '../constants/product'

const dataState = {
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

const basketState = []

const initialState = {
  dataState,
  basketState
}

const reducer = (state = initialState, action: {type: string, payload: any}) => {
  switch (action.type) {
    case SET_PRODUCT_ID:
      return {...state, product: action.payload}
    case SET_BASKET:
      console.log(state, action.payload)
      // return {...state, }
    default:
      return state;
  }
};

export default reducer;
