import { SetTotalObjType } from "./selectionComp"

// export interface Props {
//   name: string
//   sxField: SxFieldType
//   items: {value: string, fill: string, stroke: string}[]
//   elemIdx: number
//   setTotalObj: ({elemIdx, index, data}: SetTotalObjType) => void
//   boxShadow: string
// }

export interface Props {
  data: FieldComponentType & {boxShadow: string}
  elemIdx: number
  setTotalObj: ({elemIdx, index, data}: SetTotalObjType) => void
}

export interface FieldComponentType {
  sxField: SxFieldType,
  name: string, type: string, 
  items: {value: string, fill: string, stroke: string}[]
}

export interface FieldsRefType {
  boxShadow: string
  background: string
  name: string
  type: string
  value: string
  index: number
}

export interface SxFieldType {colorLabel: string}