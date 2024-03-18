import { SetTotalObjType } from "./selectionComp"

export interface Props {
  name: string
  viewBox: string
  sxSVG: SxSVGType
  sxField: SxFieldType
  items: {value: string, fill: string, stroke: string, properties: ItemPropertiesType}[]
  elemIdx: number
  setTotalObj: ({elemIdx, index, data}: SetTotalObjType) => void
}

export interface FieldComponentType {
  sxField: {sxBox: {}, sxFormLabel: {sxSpan: {}}, sxRadioGroup: {}, sxRadio: {}},
  sxSVG: {position: string, width: string, height: string, left: number, top: number},
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

export interface SxSVGType {position: string, width: string, height: string, left: string | number, top: string | number}

export interface SxFieldType {sxBox: {}, sxFormLabel: {sxSpan: {}}, sxRadioGroup: {}, sxRadio: {}}