import { MediaContentType } from "./media.type"

export interface ProductDataType {
  id: string
  reviewsId: string[]
  mediaId: string
  rating: string
  title: string
  descriptions: DescriptionsType
  stockInfo: StockInfoType
  productOptions: ProductOptionType[]
  specifications: SpecificationsType
  mediaContent: MediaContentType
  // reviews: ReviewsType[]
  collectionName: string
  createdAt: number
  updatedAt: number
}

export interface DescriptionsType {
  summary: string
  presentable: string[]
}

export interface StockInfoType {
  category: string
  quantityMax: number
  price: string
  reviewsSnapshot: ReviewsSnapshotType
  countOfReviews: number
}

export interface ReviewsSnapshotType {five: number, four: number, three: number, two: number, one: number}

export interface ProductOptionType {
  name: string
  type: string
  items: ProductOptionItemType[]
}

export interface ProductOptionItemType {
  value: string
  fill: string
  stroke: string
  stockStatus: boolean
  mediaIndex: number
}

export interface SpecificationsType {
  titles: string[]
  properties: PropertiesType[]
}

export interface PropertiesType {
  name: string
  array: PropertiesArrayObjectType[]
}

export interface PropertiesArrayObjectType {
  name: string
  value: string
}