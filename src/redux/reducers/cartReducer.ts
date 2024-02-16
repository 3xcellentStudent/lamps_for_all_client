import {PUT_CART_ALL, PUT_CART_QUANTITY, DELETE_CART} from '../constants/cartConst'
import {Cart} from '@/types/storeTypes'

function filtration(state: Cart[], payload: Cart){
  let uniqueId: boolean = false
  const coincidences = []

  for(let i = 0; i < state.length; i++){
    const {productId, fields} = state[i]

    if(productId === payload.productId){
      uniqueId = false
      const fieldsArray = fields.filter(
        ({value}, idx) => value !== payload.fields[idx].value
      )
      if(fieldsArray.length === 0){
        coincidences.length = 0
        break
      }
      else {
        const indexes = payload.fields.map(({index}) => index)
        payload.productId = `${payload.productId}=${indexes.join('-')}`
        coincidences.push(0)
      }
    }
    else {
      uniqueId = true
      continue
    }
  }
  if(coincidences.length > 0 || uniqueId) return {status: 201, result: [...state, payload]}
  return {status: 409, result: state}
}

export default function cartReducer(state: Cart[], 
  {type, payload}: {type: string, payload: any}
): {status: number, result: {}[]}{
  switch(type){
    case PUT_CART_ALL:
      if(state.length > 0){
        const response = filtration(state, payload)
        return response
      }
      else {
        return {status: 201, result: [payload]}
      }
    case PUT_CART_QUANTITY:
      return {status: 100, result: state}
    case DELETE_CART:
      const {idx, type}: {idx: number, type: string} = payload
      if(type === ''){}
      else {}
      // return {status: 204, result: newState}
    default: return {status: 100, result: state}
  }
}