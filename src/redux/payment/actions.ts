import { ShippingAddressProps } from "@/types/payment/payment"
import { SHIPPING_DATA } from "./constants"

export const actionChangeShippingData = (
  action: {type: string, payload: ShippingAddressProps}
) => (action);

export const actionShippingData = (
  payload: {type: string, payload: ShippingAddressProps}
) => ({type: SHIPPING_DATA, payload});