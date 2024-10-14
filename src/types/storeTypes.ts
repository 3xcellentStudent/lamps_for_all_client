// export interface Store {
//   basket: Cart
// }

import { CartObjectType } from "./cartTypes/cartObject.types"
import { ShippingAddressType } from "./payment/payment"
import { ProductIdType } from "./productPage.types/mainTypes"

// export interface InitialState {
//   data: ProductIdType
//   cart: []
//   statusCode: number
//   isOpenCart: boolean
//   selectedCartElements: number[]
//   payment: {paymentType: string, shippingAddress: ShippingAddressType}
// }
export interface InitialState {
  cartObject: CartObjectType["cartObject"],
  data: ProductIdType,
  shipping: ShippingAddressType,
  isOpenCart: boolean,
}

// export interface FieldItemType {
//   name: string
//   value: string
//   index: number
// }

export interface FieldItemType {
  // sxField: {colorLabel: string, sxRadio: {}}
  // cartInfo: {border: string, bg: string}
  background: string
  boxShadow: string
  index: number
  name: string
  type: string
  value: string
}

export interface CartProduct {
  productName: string
  productId: string
  productImg: string
  quantity: number
  quantityMax: number
  price: number
  // fields: {value: string, index: number}[]
  fields: FieldItemType[]
  displayedField: FieldItemType | {name: string, value: string}
  checked: boolean
}