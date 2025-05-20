import { ReactNode } from "react"
import PaymentMethodRadio from "./ShippingOptionsRadio"
import { ShippingOptions } from "@/types/payment/payment"
import RegularDeliverySVG from "@/components/SVG/shipping/delivery/RegularDeliverySVG"
import FastDeliverySvg from "@/components/SVG/shipping/delivery/FastDeliverySVG"

interface PaymentMethodsObjectType {
  value: ShippingOptions, text: string, svg: ReactNode
}

export default function ShippingOptionsList(){

  const methods: PaymentMethodsObjectType[] = [
    {value: "regular", text: "Regular", svg: <RegularDeliverySVG/>}, 
    {value: "express", text: "Express", svg: <FastDeliverySvg/>}
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