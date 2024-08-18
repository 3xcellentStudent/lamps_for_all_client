import {
  PUT_CART_ITEM, DELETE_CART_ELEMENT,
  HANDLE_CHANGE_QUANTITY_INTO_CART,
  SELECT_CART_ITEM
} from './constants'
import { CartObjectType } from '@/types/cartTypes/cartObject.types';
import { addProductToCart } from './helpers/add-product';
import changeQuantityIntoCart from './helpers/change.quantity';
import selectCartItem from './helpers/select-card-item';
// import statusCodeReducer from './statusCodeReducer';

// function filtration(state: Cart[], payload: Cart){
//   let uniqueId: boolean = false
//   const coincidences = []

//   for(let i = 0; i < length; i++){
//     const {productId, fields, quantity, quantityMax} = state[i]

//     if(productId === payload.productId){
//       uniqueId = false
//       const fieldsArray = fields.filter(
//         ({value}, idx) => value !== payload.fields[idx].value
//       )
//       if(fieldsArray.length === 0){
//         coincidences.length = 0
//         break
//       }
//       else {
//         const indexes = payload.fields.map(({index}) => index)
//         payload.productId = `${payload.productId}=${indexes.join('-')}`
//         coincidences.push(0)
//       }
//     }
//     else {
//       uniqueId = true
//       continue
//     }
//   }
//   if(coincidences.length > 0 || uniqueId) return {status: 201, result: [...state, payload]}
//   return {status: 409, result: state}
// }

// function changeQuantityIntoCart(cart: Cart[], payload: {quantity: number, idx: number}){
//   const {quantity: quantityCart, quantityMax: quantityMaxCart} = cart[payload.idx]
//   const cartItem = cart[payload.idx]

//   if(quantityCart + 1 <= quantityMaxCart || quantityCart - 1 >= 0){
//     cartItem.quantity = payload.quantity
//     return {statusCode: 201, result: cart}
//   }
//   else return {statusCode: 409, result: cart}
// }




// export default function cartReducer(cart: Cart[], 
//   {type, payload}: {type: string, payload: any}
// ): {statusCode: number, result: {}[]}{

//   switch(type){
//     case PUT_CART_ITEM:
//       if(cart.length > 0) return addItemToCart(cart, payload);
//       else return {statusCode: 201, result: [payload]};

//     case PUT_CART_QUANTITY: return changeQuantityIntoCart(cart, payload);
    
//     case DELETE_CART:
//       const {idx, type}: {idx: number, type: string} = payload
//       if(type === ''){}
//       else {}
//       // return {statusCode: 204, result: newState}
//     default: return {statusCode: 100, result: cart}
//   }
// }











const initialState: CartObjectType["cartObject"] = {
  cart: [],
  response: {severity: "success", message: ""},
}

export default function cartReducer(state = initialState, 
  {type, payload}: {type: string, payload: any}
): CartObjectType["cartObject"]{
  const {cart} = state

  switch(type){
    case PUT_CART_ITEM:
      if(cart.length > 0) return addProductToCart(cart, payload);
      else return {
        response: {severity: "success", message: "Product added to cart !"}, 
        cart: [payload]
      };

    case HANDLE_CHANGE_QUANTITY_INTO_CART: return changeQuantityIntoCart(cart, payload);

    case SELECT_CART_ITEM: return selectCartItem(cart, payload)

    case DELETE_CART_ELEMENT:
      const filtered = cart.filter(($, index) => index !== payload)
      return {
        response: {severity: "warning", message: "Product has been removed from the cart !"}, 
        cart: filtered,
      }
    default: return {
      response: {severity: undefined, message: ""}, cart
    }
  }
}