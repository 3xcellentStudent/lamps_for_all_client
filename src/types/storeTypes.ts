// export interface Store {
//   basket: Cart
// }

import { CartObjectType } from "./cartTypes/cartObject.types"
import { ProductIdType } from "./main/product.type"
import { ShippingAddressType } from "./payment/payment"
// import { FieldsRefType } from "./productPage.types/sectionTitle/purchasePart/field.component.type"

// export interface InitialState {
//   data: ProductIdType
//   cart: []
//   statusCode: number
//   isOpenCart: boolean
//   selectedCartElements: number[]
//   payment: {paymentType: string, shippingAddress: ShippingAddressType}
// }
export interface InitialState {
  cartObject: CartObjectType,
  data: ProductIdType,
  shipping: ShippingAddressType,
  isOpenCart: boolean,
  pageCoordinates: {up: UpCoordinates},
}

export interface MoveCoordinates {pageY: number, pageX: number}
export interface UpCoordinates {pageY: number, pageX: number, isUped: boolean}

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
  // fields: FieldsRefType[]
  displayedField: FieldItemType | {name: string, value: string}
  checked: boolean
}