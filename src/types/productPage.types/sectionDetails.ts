export interface Props {
  sectionData: SectionDetailsType[]
}

export interface SectionDetailsType {
  title: string 
  items: {
    name: string
    value: string
  }[]
}