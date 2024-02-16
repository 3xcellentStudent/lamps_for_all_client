import { SectionDescrType } from "./sectionDescr";
import { SectionDetailsType } from "./sectionDetails";
import { SectionReviewsType } from "./sectionReviews";
import { SectionTitleType } from "./sectionTitle/sectionTitle";

export interface ProductIdType {
  sectionTitle: SectionTitleType
  sectionDescr: SectionDescrType
  sectionDetails: SectionDetailsType[]
  sectionReviews: SectionReviewsType
  images: []
  settings: {
    title: string
    rating: number
    textColor: string
    img: string
  }
}