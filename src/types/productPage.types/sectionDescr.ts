import { ImagesArrayType } from "./mainTypes"

export interface SectionDescrType {
  description: string[]
  images: ImagesArrayType
  sx: SectionDescrSxType
}

export interface SectionDescrSxType {sxBtn: {}, sxIcon: {}, sxSection: {}}