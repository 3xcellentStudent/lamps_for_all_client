import { ProductIdType } from "@/types/main/product.type"

type ProductOptionsItemsProps = ProductIdType["productOptions"][0]["items"][0]
type StockStatus = ProductOptionsItemsProps["stockStatus"]

export interface FieldsRefType {
  background: string
  name: string
  type: string
  value: string
  index: number
  stockStatus: StockStatus
}

export interface SetTotalObjType {
  elemIdx: number
  index: number
  background: string, 
  name: string, 
  type: string, 
  value: string
  stockStatus: boolean
}