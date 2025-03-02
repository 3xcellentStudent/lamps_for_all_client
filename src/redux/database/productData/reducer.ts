import productDataModel from "@/data.models/product/productData.model.json"
import { ProductDataType } from "@/types/main/productData.type"
import { PRODUCT_DATA_SAVE } from "../constants"

export default function productDataReducer(state = productDataModel, {type, payload}: {type: string, payload: ProductDataType}){
  switch(type){
    case PRODUCT_DATA_SAVE:
      return {...payload}
    default: return state;
  }
}