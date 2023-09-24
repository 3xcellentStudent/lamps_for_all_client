import {SET_PRODUCT_ID} from '../constants/product'

const initialState = {
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
};

const counterReducer = (state = initialState, action: {type: string, payload: any}) => {
  switch (action.type) {
    case SET_PRODUCT_ID:
      return {...state, product: action.payload}
    default:
      return state;
  }
};

export default counterReducer;
