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
      if(state.cart.length){
        const cart = cartReducer(state.cart, payload)
        // console.log(state.cart)
        // console.log(cart)
        return {...state, cart}
      }
      else return {...state, cart: [payload.payload]}

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

      // const basket = [...state.basket, payload]
      // localStorage.setItem("basketLS", JSON.stringify(basket))
      // // console.log(localStorage.getItem("basketLS"))
      // return {...state, basket}
    case CHANGE_OPEN_CART:
      return {...state, isOpenCart: !state.isOpenCart}
    default:
      return state;
  }
};

export default reducer;
