import { FieldComponentType, FieldsRefType } from "./fieldComp"

export interface SetTotalObjType {
  elemIdx: number
  index: number
  // data: FieldComponentType & {background: string}
  data: {background: string, boxShadow: string, name: string, type: string, value: string}
}

export interface Props {
  selectionC: {
    fieldC: FieldComponentType[]
  }
  boxShadow: string
  fieldsRef: {current: FieldsRefType[]}
  setTotalObj: ({}: SetTotalObjType) => void
}