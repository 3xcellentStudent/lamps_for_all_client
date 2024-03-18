import { FieldComponentType, FieldsRefType, ItemPropertiesType } from "./fieldComp"

export interface SetTotalObjType {
  elemIdx: number 
  index: number
  data: {value: string, properties: ItemPropertiesType}
}

export interface Props {
  selectionC: {
    sxList: {}
    fieldC: FieldComponentType[]
  }
  fieldsRef: {current: FieldsRefType[]}
  setTotalObj: ({}: SetTotalObjType) => void
}