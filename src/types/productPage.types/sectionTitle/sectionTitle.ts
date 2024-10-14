import { PurchasePartType } from "./purchasePart/purchaseComp"

export interface Props {
  productId: string | string[]
  common: CommonType
  sectionData: SectionTitleType
  // images: {media: string, src: string}[][]
}

export interface CommonType {
  rating: number
  title: string
  category: {id: string, name: string}
  productLogo: string
  sxQuantity: {}

  theme: {
    colors: {
      textColor: string
      elementsBg: string
      pageBg: string
    }
    shadows: {
      sxCircle: {boxShadow:string}
    }
  }
}

export interface SectionTitleType {
  description: string
  price: number,
  quantityMax: number,
  sx: {}
  purchasePart: PurchasePartType
}