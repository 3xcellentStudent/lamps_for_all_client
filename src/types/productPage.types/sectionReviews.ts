import { CommonType } from "./sectionTitle/sectionTitle"

export interface Props {
  common: CommonType
  sectionData: SectionReviewsType
}

export interface SectionReviewsType {
  reviewsSnaphot: {five: number, four: number, three: number, two: number, one: number}
  sxRating: {}
  sxText: {}
  sxFilter: {sxBtn: {}, sxIcon: {}}
  userReviews: {
    theme: {
      elementsBg: string
      cardSx: {}
    },
    reviewsArray: ReviewsObject[]
  }
}

export interface ReviewsObject {
  name: string
  text: string
  rating: number
  attachments: string[]
}