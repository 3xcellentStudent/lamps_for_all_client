import { AlertColor, AlertProps } from "@mui/material";
import { CartProduct } from "../storeTypes";

export interface CartObjectType {
  cart: CartProduct[], response: CartObjectResponse, isOpenCart: boolean
}

export interface CartObjectResponse {message: string, severity: AlertColor | undefined}