import { AlertColor, AlertProps } from "@mui/material";
import { Cart } from "../storeTypes";

export interface CartObjectType {
  // cartObject: {cart: Cart[], response: {severity: AlertProps["severity"], message: string}}
  cartObject: {cart: Cart[], response: CartObjectResponse}
}

export interface CartObjectResponse {message: string, severity: AlertColor | undefined}