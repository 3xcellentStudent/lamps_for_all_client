import Address from "./parts/Address/AddressHOC";
import Country from "./parts/Country";
import EmailField from "./parts/EmailField";
import FullName from "./parts/FullName";
import styles from "./styles.module.scss"

export default function ShippingForm(){

  return(
    <section id="shipping-form-section" className={`${styles.container}`}>
      <EmailField/>
      <div>
        <h3 className="font-bold text-2xl">Shipping address</h3>
        <Country/>
        <FullName/>
        <Address/>
      </div>
    </section>
  )
}

({ 
  "intent": "CAPTURE", 
  "purchase_units": [ { 
    "reference_id": "d9f80740-38f0-11e8-b467-0ed5f89f718b", 
    "amount": { 
      "currency_code": "USD", 
      "value": "100.00" 
    } 
  } ], 
  "payment_source": { 
    "paypal": { 
      "experience_context": { 
        "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED", 
        "brand_name": "EXAMPLE INC", 
        "locale": "en-US", 
        "landing_page": "LOGIN", 
        "shipping_preference": "SET_PROVIDED_ADDRESS", 
        "user_action": "PAY_NOW", 
        "return_url": "https://example.com/returnUrl", 
        "cancel_url": "https://example.com/cancelUrl"
      } 
    } 
  } 
})