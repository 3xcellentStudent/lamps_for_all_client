import { PurchasePartType } from "./purchasePart/purchaseComp"

export interface Props {
  productId: string | string[]
  common: CommonType
  sectionData: SectionTitleType
  images: {media: string, src: string}[][]
}

export interface CommonType {
  rating: number
  title: string
  category: {id: string, name: string}
  textColor: string
}

export interface SectionTitleType {
  description: string
  price: string,
  quantityMax: number,
  sx: {}
  purchasePart: PurchasePartType
}