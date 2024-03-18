import { CommonType, SectionTitleType } from "../sectionTitle"
import { FieldComponentType } from "./fieldComp"

export type Props = {
  common: CommonType
  purchasePart: PurchasePartType
  price: string
  productId: string | string[]
} & SectionTitleType

export interface PurchasePartType {sxCont: {}, sxBox: {}, components: ComponentsType}

export interface ComponentsType {
  titleC: TitleCompType
  addCartC: AddCartType
  selectionC: SelectionComponentType
}

export interface TitleCompType {
  sxBox: {}
  ratingC: RatingCompType
}

export interface AddCartType {sxBox: {}, btnC: {sxWrap: {}, sx: {}}, sxPrice: {}}

export interface RatingCompType {
  content: string
  sxText: {}
  sxRating: {}
  sxBox: {}
}

export interface SelectionComponentType {
  sxBox: {}
  sxList: {}
  quantityC: {sxBox: {}, sxIcon: {}, sxBtn: {}},
  fieldC: FieldComponentType[]
}