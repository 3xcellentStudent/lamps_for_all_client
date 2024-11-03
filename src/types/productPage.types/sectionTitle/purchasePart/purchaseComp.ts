import { CommonType, SectionTitleType } from "../sectionTitle"
import { FieldComponentType } from "./fieldComp"

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