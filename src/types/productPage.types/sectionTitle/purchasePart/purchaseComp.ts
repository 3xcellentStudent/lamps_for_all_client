import { CommonType, SectionTitleType } from "../sectionTitle"
import { FieldComponentType } from "./fieldComp"

export type Props = {
  common: CommonType
  purchasePart: PurchasePartType
  price: string
  productId: string | string[]
  description: string
  quantityMax: number,
} 

export interface PurchasePartType {sxCont: {}, components: ComponentsType}

export interface ComponentsType {
  titleC: TitleCompType
  addCartC: AddCartType
  selectionC: SelectionComponentType
}

export interface TitleCompType {
  ratingC: RatingCompType
}

export interface AddCartType {sxBtn: {}}

export interface RatingCompType {
  content: string
  sxText: {}
  sxRating: {}
  sxBox: {}
}

export interface SelectionComponentType {
  sxBox: {}
  // sxQuantity: {},
  fieldC: FieldComponentType[]
}