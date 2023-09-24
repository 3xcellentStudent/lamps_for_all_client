import {
  Status, 
  Localization,
  Settings,
  FieldsInfo,
  Video,
  Description,
  Service,
  Reviews,
  Delivery,
  Seller,
  Specifications,
} from '@/typesComp/productID.type'

export const fieldProductID = {
  status: {} as Status,
  localization: {} as Localization,
  settings: {} as Settings,
  fieldsInfo: <FieldsInfo[]>[],
  images: <string[]>[],
  video: {} as Video,
  description: <Description[]>[],
  service: <Service[]>[],
  reviews: {} as Reviews,
  delivery: {} as Delivery,
  seller: {} as Seller,
  specifications: <Specifications[]>[]
}