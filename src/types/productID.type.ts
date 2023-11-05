export interface ProductID {
  status: {}
  localization: {}
  settings: {}
  fieldsInfo: []
  images: []
  video: {}
  description: []
  service: []
  reviews: {}
  delivery: {}
  seller: {}
}

export interface Status {
  code: number
  data: string
  executionTime: string
  requestId: string
  requestTime: string
}

export interface Localization {
  country: string
  currency: string
  locale: string
}

export interface Settings {
  available: boolean
  catId: number
  itemId: string
  itemUrl: string
  sales: string
  title: string
  wishCount: number
}

export interface FieldsInfo {
  title: string
  values: []
}

export interface Video {
  id: number
  thumbnail: string
  url: string
}

export interface Description {
  rubric: string
  text: string
}

export interface Service {
  desc: string
  title: string
}

export interface Reviews {
  count: number
  starRate: number
}

export interface Delivery {
  packageDetail: {}
  shippingFrom: string
  shippingFromCode: string
  shippingList: []
  shippingOutDays: number
  shippingTo: string
  shippingToCode: string
}

export interface Seller {
  companyId: number
  sellerId: number
  storeId: number
  storeImage: string
  storeRating: string
  storeTitle: string
  storeUrl: string
}

export interface Specifications {
  name: string
  value: string
}

export interface StoreObj {
  productName: string,
  productId: string,
  productImg: string,
  quantity: number,
  quantityMax: number,
  fields: {name: string, value: string}[]
}