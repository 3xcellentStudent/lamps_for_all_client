import {SET_PRODUCT_ID, PUT_BASKET, CHANGE_OPEN_CART} from '../constants/product'

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
  basket: [],
  isOpenCart: false
}

const reducer = (state = initialState, {type, payload}: {type: string, payload: any}) => {
  switch (type) {
    case SET_PRODUCT_ID:
      return {...state, data: payload}
    case PUT_BASKET:
      // const filtered = state.basket.filter(item => item.productId === payload.productId)
      // console.log('basket', state.basket)
      // console.log('payload', payload)
      // const result = filtered.filter(({fields}: {fields: []}) => {
      //   const comparison = fields.filter(({value}: {value: string}, idx) => {
      //     const payloadChar = payload.fields[idx].value
      //     // console.log(value, payloadChar)
      //     return value !== payloadChar
      //   })
      // })
      return {...state, basket: [...state.basket, payload]}
    case CHANGE_OPEN_CART:
      return {...state, isOpenCart: !state.isOpenCart}
    default:
      return state;
  }
};

export default reducer;
