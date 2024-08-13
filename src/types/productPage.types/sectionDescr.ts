export interface SectionDescrType {
  description: string[]
  images: ImagesArrayType
  sx: SectionDescrSxType
}

export interface SectionDescrSxType {sxBtn: {}, sxIcon: {}, sxSection: {}}

export type ImagesArrayType = Array<Array<ImagesType>>

export interface ImagesType {media: string, src: string}