import {
  CART_ADD_ITEM_SAVE_CONST,
  CART_IS_OPEN_SAVE_CONST,
  CART_DELETE_ITEM_SAVE_CONST,
  CART_CHANGE_QUANTITY_SAVE_CONST,
  CART_SELECT_ITEM_SAVE_CONST,
} from './constants'
import { CartObjectResponse, CartObjectType } from '@/types/cartTypes/cartObject.types';
import { addProductToCart } from './helpers/add-product';
import changeQuantityIntoCart from './helpers/change.quantity';
import selectCartItem from './helpers/select-card-item';
import CartActionsTypes from './types';
import { enqueueSnackbar } from 'notistack';
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











const initialState: CartObjectType = {
  isOpenCart: false,
  cart: [],
  response: {severity: "success", message: ""},
}

export default function cartReducer(state = initialState, 
  action: {type: CartActionsTypes, payload: any}
): CartObjectType {
  const {cart, isOpenCart} = state

  switch(action.type){
    case CART_IS_OPEN_SAVE_CONST: return {...state, isOpenCart: !isOpenCart};
    case CART_ADD_ITEM_SAVE_CONST: {
      if(cart.length > 0){
        return addProductToCart(state, action.payload)
      } else {
        const resultObject: CartObjectType = {...state,
          response: {severity: "success", message: "Product added to cart !"}, 
          cart: [action.payload]
        }
        enqueueSnackbar(resultObject.response.message, {variant: resultObject.response.severity, autoHideDuration: 1500})
      } return {...state,
        response: {severity: "success", message: "Product added to cart !"}, 
        cart: [action.payload]
      };
    }
    // case PUT_CART_ITEM:
    //   if(cart.length > 0) return addProductToCart(cart, payload);
      // else return {
      //   response: {severity: "success", message: "Product added to cart !"}, 
      //   cart: [payload]
      // };

    case CART_CHANGE_QUANTITY_SAVE_CONST: {
      const resultObject = changeQuantityIntoCart(state, action.payload)
      enqueueSnackbar(resultObject.response.message, {variant: resultObject.response.severity, autoHideDuration: 1500})
      return changeQuantityIntoCart(state, action.payload);
    }

    case CART_SELECT_ITEM_SAVE_CONST: return selectCartItem(state, action.payload)

    case CART_DELETE_ITEM_SAVE_CONST: {
      const filtered = cart.filter(($, index) => index !== action.payload)
      const resultObject: CartObjectType = {
        response: {severity: "warning", message: "Product has been removed from the cart !"}, 
        cart: filtered,
        isOpenCart
      }
      enqueueSnackbar(resultObject.response?.message, {variant: resultObject.response?.severity, autoHideDuration: 1500})
      return resultObject;
    }
    default: return {
      ...state, response: {severity: undefined, message: ""}, isOpenCart
    }
  }
}