import SVGPayPal from "@/components/SVG/payments/SVGPayPal";
import { PaymentMethodsType } from "@/types/payment/payment";
import { FormControlLabel, Radio } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  value: PaymentMethodsType
  text: string
  svgProps?: {}
  children: ReactNode
}

export default function PaymentMethodRadio({value, text, svgProps, children}: Props){

  return(
    <li className="flex flex-row items-center">
      <FormControlLabel value={value} className="m-0 mr-2" control={<Radio/>} label="" />
      <div className="relative w-6 h-6 mr-2">
        {children}
      </div>
      <div className="font-bold">{text}</div>
    </li>
  )
}