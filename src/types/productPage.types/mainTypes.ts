import { SectionDescrType } from "./sectionDescr";
import { SectionDetailsType } from "./sectionDetails";
import { SectionReviewsType } from "./sectionReviews";
import { CommonType, SectionTitleType } from "./sectionTitle/sectionTitle";

export interface ProductIdType {
  sectionTitle: SectionTitleType
  sectionDescr: SectionDescrType
  sectionDetails: SectionDetailsType
  sectionReviews: SectionReviewsType
  images: ImagesArrayType
  common: CommonType
}

export type ImagesArrayType = Array<Array<ImagesType>>

export interface ImagesType {media: string, src: string}