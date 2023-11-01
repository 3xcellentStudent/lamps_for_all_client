import {PUT_CART_ALL, PUT_CART_QUANTITY} from '../constants/cartConst'
import {Cart} from '@/types/storeTypes'

function filtration(state: Cart[], payload: Cart){
  const map: number[] = []
  state.forEach(item => {
    if(item.productId === payload.productId){
      const coincidences = item.fields.filter(
        ({value}, idx) => value !== payload.fields[idx].value
      )
      map.push(coincidences.length)
    }
    else return
  })
  console.log(map)

  // return state.filter(item => {
  //   if(item.productId === payload.productId){
      // const coincidences = item.fields.filter(
      //   ({value}, idx) => value === payload.fields[idx].value
      // )
      // if(coincidences.length === 0) return
      // else return payload
    //   return item
    // }
    // else return payload
  // })
  return [...state, payload]
}

export default function cartReducer(state: Cart[], 
  {type, payload}: {type: string, payload: Cart}
){
  switch(type){
    case PUT_CART_ALL:
      if(state.length){
        const response = filtration(state, payload)
        return response
      }
      else return [payload]
    case PUT_CART_QUANTITY: 
      return state
    default: return state
  }
}