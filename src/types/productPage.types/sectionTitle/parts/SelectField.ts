import { ItemPropertiesType } from "../sectionTitle"

export interface SetTotalObjType {
  elemIdx: number 
  index: number
  data: {value: string, properties: {}}
}

export interface Props {
  name: string
  viewBox: string
  svgProps: SvgPropsType
  fieldProps: FieldPropsType
  items: {value: string, fill: string, stroke: string, properties: ItemPropertiesType}[]
  elemIdx: number
  setTotalObj: ({elemIdx, index, data}: SetTotalObjType) => void
}

export interface SvgPropsType {position: string, width: string, height: string, left: string | number, top: string | number}

export interface FieldPropsType {clsCont: string, formLabel: string, radioGroup: {}, radio: {}}