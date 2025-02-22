interface Amount {
  currency_code: string
  value: string
  breakdown: {}
}

export class PayPalDto {
  intent = "CAPTURE" 
  purchase_units = [
    {
      reference_id: "d9f80740-38f0-11e8-b467-0ed5f89f718b", 
      amount: {
        currency_code: "CAD", 
        value: "100.00",
        breakdown: {}
      }
    }
  ]
  payment_source = {
    paypal: {
      experience_context: {
        payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED", 
        brand_name: "EXAMPLE INC", 
        locale: "en-US", 
        landing_page: "LOGIN", 
        shipping_preference: "SET_PROVIDED_ADDRESS", 
        user_action: "PAY_NOW", 
        return_url: "https://example.com/returnUrl", 
        cancel_url: "https://example.com/cancelUrl",
      }
    }
  }
}