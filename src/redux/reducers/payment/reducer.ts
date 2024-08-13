import { ShippingAddressType } from "@/types/payment/payment";
import { CHANGE_SHIPPING_DATA, CHECK_SHIPPING_DATA } from "./constants";

const initialState: ShippingAddressType = {
  email: {value: "", error: false},
  emailNotifications: false,
  country: "",
  firstName: {value: "", error: false},
  lastName: {value: "", error: false},
  company: "",
  address: {value: "", error: false},
  apartment: "",
  city: {value: "", error: false},
  province: "",
  postalCode: {value: "", error: false},
  coungtryCode: "",
  phoneNumber: "",
}

export default function shippingReducer(state = initialState, 
  {type, payload}: {type: string, payload: any}
): ShippingAddressType {
  switch(type){
    case CHANGE_SHIPPING_DATA: return {...state, ...payload}
    // case CHECK_SHIPPING_DATA: 
    default: return state;
  }
}