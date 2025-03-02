import globalDataModel from "@/data.models/global/globalData.model.json"
import { GlobalDataType } from "@/types/main/globalData.type"
import { GLOBAL_DATA_SAVE } from "../constants"

export default function databaseReducer(
  state = globalDataModel, {type, payload}: {type: string, payload: GlobalDataType}
){
  switch(type){
    case GLOBAL_DATA_SAVE:
      return {...payload}
    default: return state;
  }
}