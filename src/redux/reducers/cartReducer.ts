import {PUT_CART_ALL, PUT_CART_QUANTITY} from '../constants/cartConst'
import {Cart} from '@/types/storeTypes'

function filtration(state: Cart[], payload: Cart){
  const filtered = state.filter(item => {
    if(item.productId === payload.productId){
      const coincidences = item.fields.filter(
        ({value}, idx) => value === payload.fields[idx].value
      )
      // console.log(item.fields[0], payload.fields[0])
      // console.log(coincidences)
      return [...state, item]
    }
    else return [...state, payload]
    // item.productId === payload.productId
  })
}

export default function cartReducer(state: Cart[], 
  {type, payload}: {type: string, payload: Cart}
){
  switch(type){
    case PUT_CART_ALL:
      if(state.length){
        const filtered = filtration(state, payload)
        // console.log('filtered')
        return [filtered]
      }
      else return [payload]
    case PUT_CART_QUANTITY: 
      console.log(payload)
      return state
    default: return state
  }
}