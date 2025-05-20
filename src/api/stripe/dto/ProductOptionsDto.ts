import { FieldsRefType } from "@/types/pages/product/overview.types"
import { CartProduct } from "@/types/storeTypes"

export default class ProductOptionsDto {
  productName: string
  productId: string
  quantity: number
  price: string
  stockStatus: boolean
  value: string

  constructor(obj: ProductOptionsDto){
    this.productName = obj.productName
    this.productId = obj.productId
    this.quantity = obj.quantity
    this.price = obj.price
    this.stockStatus = obj.stockStatus
    this.value = obj.value
  }
}