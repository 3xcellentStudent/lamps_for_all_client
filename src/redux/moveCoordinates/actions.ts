import { InitialState } from "@/types/storeTypes"
import { PAGE_COORDINATES } from "./action.types"

type PayloadType = {up: InitialState["pageCoordinates"]["up"]}

export function actionDispatchPageCoordinates(payload: PayloadType){
  return {type: PAGE_COORDINATES, payload}
}

export function actionReducerPageCoordinates({payload}: {payload: PayloadType}){
  return {payload, type: "UPDATE_STATE"}
}