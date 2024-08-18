import { AlertColor, AlertProps } from "@mui/material";
import { CartProduct } from "../storeTypes";

export interface CartObjectType {
  // cartObject: {cart: Cart[], response: {severity: AlertProps["severity"], message: string}}
  cartObject: {cart: CartProduct[], response: CartObjectResponse}
}

export interface CartObjectResponse {message: string, severity: AlertColor | undefined}