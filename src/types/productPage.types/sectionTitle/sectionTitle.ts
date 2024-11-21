import { PurchasePartType } from "./purchasePart/purchaseComp"

export interface CommonType {
  rating: number
  title: string
  category: {id: string, name: string}
  productLogo: string
  sxQuantity: {}
  theme: ThemeType
}

export interface ThemeType {
  colors: {
    textColor: string
    mainBg: string,
    secondaryBg: string,
    optionalColor: string,
    pageBg: string
  }
  shadows: {
    sxCircle: {boxShadow:string}
  }
}

export interface SectionTitleType {
  description: string
  price: string,
  quantityMax: number,
  sx: {}
  purchasePart: PurchasePartType
}