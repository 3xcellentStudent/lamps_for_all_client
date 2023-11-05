import {PUT_CART_ALL, PUT_CART_QUANTITY} from '../constants/cartConst'
import {Cart} from '@/types/storeTypes'
// import {StoreObj} from '@/types/productID.type'

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
  if(coincidences.length > 0 || uniqueId) return [...state, payload]
  return state
}

export default function cartReducer(state: Cart[], 
  {type, payload}: {type: string, payload: Cart}
){
  switch(type){
    case PUT_CART_ALL:
      if(state.length > 0){
        const response = filtration(state, payload)
        return response
      }
      else return [payload]
      // const response = filtration(state, payload)
      // return response
    case PUT_CART_QUANTITY:
      console.log(type, payload)
      return state
    default: return state
  }
}