import { FormControl, RadioGroup } from "@mui/material";
import { useState } from "react";
import { PaymentMethodsType } from "@/types/payment/payment";
import PaymentMethodList from "./components/PaymentMethodList";
import PaymentButton from "./components/PaymentButton/PaymentButton";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

export default function PaymentMethods(){

  const [paymentType, setPaymentType] = useState<PaymentMethodsType>("paypal")

  return(
    <section id="payment-methods" className="w-80 px-2.5 mt-5">
      <AdditionalInfo/>

      <h3 className="font-bold text-2xl">Payment</h3>
      <FormControl>
        <h4 className="mt-3 font-bold">Choose payment method</h4>
        <RadioGroup onChange={e => setPaymentType(e.target.value as PaymentMethodsType)} 
        defaultValue="paypal" name="choose-payment-method-radio-buttons-group" 
        aria-labelledby="choose-payment-method-radio">
          <PaymentMethodList/>
        </RadioGroup>
      </FormControl>
      
      <PaymentButton/>
    </section>
  )
}