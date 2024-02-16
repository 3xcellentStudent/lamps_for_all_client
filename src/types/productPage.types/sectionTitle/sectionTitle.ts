export interface Props {
  pageId: string | string[]
  settings: {rating: number, title: string, textColor: string, img: string}
  sectionData: SectionTitleType
  images: {media: string, src: string}[][]
}

export interface SectionTitleType {
  subtitle: {text: string, cls: string},
  title: {text: string, cls: string}
  shortDescription: {cls: string, text: string}
  price: number,
  quantityMax: number,
  purchasePartStyles: string
  components: ComponentsType
}

export interface ComponentsType {
  quantityC: {text: string, clsCont: string, clsHead: string, clsIcons: string, clsInput: string, clsBtn: string},
  ratingC: {color: string, text: string, size: 'small' | 'medium' | 'large', textCls: string, ratingCls: string, clsCont: string},
  selectionC: SelectionComponentType[]
}

// radio: {margin: string, position: string, width: string, height: string}
export interface SelectionComponentType {
  fieldProps: {clsCont: string, formLabel: string, radioGroup: {}, radio: {}},
  svgProps: {position: string, width: string, height: string, left: number, top: number},
  name: string, type: string, viewBox: string, 
  items: {value: string, fill: string, stroke: string, properties: ItemPropertiesType}[]
}

export interface ItemPropertiesType {
  uncheckedProps: {internal: QuantitiesType, external: QuantitiesType}
  checkedProps: QuantitiesType
}

export interface QuantitiesType {r: number, cx: number, cy: number}

export interface FieldsRefType {
  name: string
  type: string
  value: string
  properties: ItemPropertiesType
  index: number
}

export interface SetTotalObjType {
  elemIdx: number
  index: number
  data: {value: string, properties: ItemPropertiesType}
}

// export interface CartInfoType {
//   border: string
//   bg: string
// }