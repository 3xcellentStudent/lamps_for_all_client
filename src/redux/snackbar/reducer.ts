import { CartObjectResponse } from "@/types/cartTypes/cartObject.types";

const initialState: CartObjectResponse = {severity: "success", message: ""};

export default function snackbarReducer(snackbar = initialState, 
  {type, payload}: {type: string, payload: any}
): CartObjectResponse{
  
}