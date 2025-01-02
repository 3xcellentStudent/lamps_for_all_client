import { CartObjectType } from "./cartTypes/cartObject.types"
import { ProductIdType } from "./main/product.type"
import { ShippingAddressType } from "./payment/payment"

export interface InitialState {
  cartObject: CartObjectType,
  data: ProductIdType,
  shipping: ShippingAddressType,
  isOpenCart: boolean,
}

export interface MoveCoordinates {pageY: number, pageX: number}

export interface UpCoordinates {pageY: number, pageX: number, isUped: boolean}

export interface FieldItemType {
  background: string
  index: number
  name: string
  stockStatus: boolean
  type: string
  value: string
}

export interface CartProduct {
  productName: string
  productId: string
  productImg: ProductIdType["mediaContent"]["images"][0]
  quantity: number
  quantityMax: number
  price: number
  fields: FieldItemType[]
  displayedField: FieldItemType | {name: string, value: string}
  checked: boolean
}