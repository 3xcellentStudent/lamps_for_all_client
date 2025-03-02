import { ProductDataType } from "@/types/main/productData.type"
import { GLOBAL_DATA_CALL, PRODUCT_DATA_CALL, PRODUCT_DATA_SAVE, GLOBAL_DATA_SAVE } from "./constants"
import { GlobalDataType } from "@/types/main/globalData.type"



export const actionCallProductData = (payload: ProductDataType) => ({type: PRODUCT_DATA_CALL, payload})
export const actionCallGlobalData = (payload: GlobalDataType) => ({type: GLOBAL_DATA_CALL, payload})
/*************************************************************************************************** */
export const actionSaveProductData = (payload: ProductDataType) => ({type: PRODUCT_DATA_SAVE, payload})
export const actionSaveGlobalData = (payload: GlobalDataType) => ({type: GLOBAL_DATA_SAVE, payload})