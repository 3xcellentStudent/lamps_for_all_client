import SVGApplePay from "@/components/SVG/payments/SVGApplePay"
import SVGCardPay from "@/components/SVG/payments/SVGCardPay"
import SVGGooglePay from "@/components/SVG/payments/SVGGooglePay"
import SVGPayPal from "@/components/SVG/payments/SVGPayPal"
import { PaymentMethodsObjectType } from "@/types/payment/payment"
import PaymentMethodRadio from "./PaymentMethodRadio"

export default function PaymentMethodList(){

  const methods: PaymentMethodsObjectType[] = [
    {value: "paypal", text: "PayPal", svg: <SVGPayPal/>}, 
    {value: "google_pay", text: "Google Pay", svg: <SVGGooglePay/>}, 
    {value: "apple_pay", text: "Apple Pay", svg: <SVGApplePay/>},
    {value: "card", text: "Card Pay", svg: <SVGCardPay/>},
  ]

  return(
    <ul className="flex flex-col mt-2">
      {methods.map(({value, text, svg}, idx) => {
        return !idx ? <PaymentMethodRadio key={idx} value={value} text={text} children={svg} /> : 
        <PaymentMethodRadio key={idx} value={value} text={text} children={svg} />
      })}
    </ul>
  )
}