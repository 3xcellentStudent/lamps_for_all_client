export interface Props {
  sectionData: SectionDetailsType
}

export interface SectionDetailsType {
  sx: SectionDetailsSxType
  array: SectionDetailsArrayType[]
}

export interface SectionDetailsSxType {sxList: {}, sxItem: {}, sxText: {}, sxIcon: {}}

export interface SectionDetailsArrayType {title: string ,items: {name: string, value: string}[]}