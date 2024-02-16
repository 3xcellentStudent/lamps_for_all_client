export interface Props {
  sectionData: SectionReviewsType
}

export interface SectionReviewsType {
  reviewsCount: number
  reviewsList: {
    name: string
    text: string
    rating: number
  }[]
}