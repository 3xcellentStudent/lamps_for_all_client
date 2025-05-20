import { FormControl, RadioGroup } from "@mui/material";
import ShippingOptionsList from "./components/ShippingOptionsList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CartObjectType } from "@/types/cartTypes/cartObject.types";
import styles from "./styles.module.scss"
import { ShippingOptions } from "@/types/payment/payment";

export default function ShippingInfo(){

  const [deliveryService, setDeliveryService] = useState<ShippingOptions>("regular")

  const cart = useSelector(({cartObject: {cart}}: {cartObject: CartObjectType}) => (cart))
  
  return(
    <section className="min-w-80 max-w-80 w-96 px-2.5">
      <div>
        <FormControl className="h-full">
          <h3>Choose Delivery service</h3>
          <RadioGroup onChange={e => setDeliveryService(e.target.value as ShippingOptions)} 
            defaultValue={"regular"} name="choose-payment-method-radio-buttons-group" 
            aria-labelledby="choose-payment-method-radio">
            <ShippingOptionsList/>
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <h3>Billing</h3>
        <div>
          <div>Subtotal price:</div>
          <div>{
            cart.reduce(
              (accumulator, {price}) => accumulator + +price, 0,
            )
          }</div>
        </div>
      </div>
    </section>
  )
}