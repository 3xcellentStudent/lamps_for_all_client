import { CartObjectType } from "@/types/cartTypes/cartObject.types";
import { CartProduct } from "@/types/storeTypes";

export function addProductToCart(
  state: CartObjectType, payload: CartProduct
): CartObjectType{
  const {cart, isOpenCart} = state

  let uniqueId: boolean = false;
  let coincidences: boolean = false;
  let resultObject: CartObjectType = {
    response: {severity: "success", message: ""}, cart: [], isOpenCart: false
  };

  for(let i = 0; i < cart.length; i++){
    const cartItem = cart[i];
    const {productId, fields, quantity, quantityMax} = cartItem

    if(productId === payload.productId){
      uniqueId = false
      const fieldsArray = fields.filter(({value}, idx) => {
        return value !== payload.fields[idx].value
      });

      if(fieldsArray.length === 0){
        if(+quantity + +payload.quantity <= quantityMax){
          
          cartItem.quantity = +cartItem.quantity + +payload.quantity
          resultObject = {
            response: {severity: "success", message: "Product added to cart !"}, cart, isOpenCart
          }
          coincidences = true
        } else {
          coincidences = false
          resultObject = {
            response: {severity: "warning", message: `You can add maximum ${quantityMax} items !`}, cart, isOpenCart
          }
        }
        break;
      }
      else {
        const indexes = payload.fields.map(({index}) => index)
        payload.productId = `${payload.productId}=${indexes.join('-')}`;
        resultObject = {
          response: {severity: "success", message: "Product added to cart !"}, 
          cart: [...cart, payload],
          isOpenCart
        }
        coincidences = true
      }
    }
    else {
      uniqueId = true
      continue
    }
  }
  if(coincidences || uniqueId){
    return resultObject
  } else {
    return resultObject;
  }
}