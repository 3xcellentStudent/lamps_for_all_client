import { ReactElement } from "react"

export interface ShippingAddressType {
  email: {value: string, error: boolean}
  emailNotifications: boolean
  country: string
  firstName: {value: string, error: boolean}
  lastName: {value: string, error: boolean}
  company: string
  address: {value: string, error: boolean}
  apartment: string
  city: {value: string, error: boolean}
  province: string
  postalCode: {value: string, error: boolean}
  coungtryCode: string
  phoneNumber: string
}

export type ShippingAddressProps = {email: {value: string, error: boolean}} | 
  {emailNotifications: boolean} | 
  {country: string} | 
  {firstName: {value: string, error: boolean}} | 
  {lastName: {value: string, error: boolean}} | 
  {company: string} | 
  {address: {value: string, error: boolean}} | 
  {apartment: string} | 
  {city: {value: string, error: boolean}} | 
  {province: string} | 
  {postalCode: {value: string, error: boolean}} | 
  {coungtryCode: string} | 
  {phoneNumber: string}

export type PaymentMethodsType = "paypal" | "google_pay" | "apple_pay" | "card"

export interface PaymentMethodsObjectType {value: PaymentMethodsType, text: string, svg: ReactElement}

export interface CreateOrderActionType {
  intent: "CAPTURE" | "AUTHORIZE"
  purchase_units: PurchaseUnitsType[],
  payment_source: {paypal: ExperienceContextType}
}

export interface PurchaseUnitsType {
  reference_id: string | undefined
  amount: AmountType
}

export interface AmountType {
  currency_code: string
  value: string
  breakdown: BreakdownType | {}
}

export interface ExperienceContextType {
  experience_context: {
    payment_method_preference: "UNRESTRICTED" | "IMMEDIATE_PAYMENT_REQUIRED" | undefined, 
    brand_name: "EXAMPLE INC", 
    locale: "en-US", 
    landing_page: "LOGIN" | "GUEST_CHECKOUT" | "NO_PREFERENCE" | undefined, 
    shipping_preference: "SET_PROVIDED_ADDRESS" | "GET_FROM_FILE" | "NO_SHIPPING" | undefined, 
    user_action: "PAY_NOW" | "CONTINUE" | undefined, 
    return_url: "https://example.com/returnUrl", 
    cancel_url: "https://example.com/cancelUrl"
  }
}

export interface BreakdownType {
  discount: BreakdownObjectsType
  tax_total: BreakdownObjectsType
  handling: BreakdownObjectsType
  insurance: BreakdownObjectsType
  item_total: BreakdownObjectsType
  shipping: BreakdownObjectsType
  shipping_discount: BreakdownObjectsType
}

export type BreakdownObjectsType = {currency_code: string, value: string} | undefined