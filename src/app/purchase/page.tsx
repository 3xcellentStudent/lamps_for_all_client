'use client'

import ButtonCircleArrow from "@/components/common/Buttons/ButtonCircleArrow";
import Header from "@/components/common/Header/Header";
import CartItems from "@/components/pages/purchase/CartItems/CartItems";
import StepperList from "@/components/pages/purchase/PaymentMethods/components/StepperList/StepperList";
import PaymentMethods from "@/components/pages/purchase/PaymentMethods/PaymentMethods";
import ShippingForm from "@/components/pages/purchase/ShippingForm/ShippingForm";
import { CartObjectType } from "@/types/cartTypes/cartObject.types";
// import AdditionalInfo from "@/components/purchasePage/AdditionalInfo/AdditionalInfo";
// import PaymentButton from "@/components/purchasePage/PaymentMethods/components/PaymentButton/PaymentButton";
import { StepsListType } from "@/types/payment/elements";
import { InitialState } from "@/types/storeTypes";
import { useSelector } from "react-redux";

export default function Cart(){

  const {cart} = useSelector(({cart}: {cart: CartObjectType}) => ({cart}));

  const tabsList: StepsListType[] = [
    {label: "Shipping Address", element: <ShippingForm/>}, 
    {label: "Check Out", element: <PaymentMethods/>}
  ]

  return(
    <>
      <Header/>
      <main className="mt-14 flex flex-row justify-center 
      w-[100svw] h-[calc(100svh-56px)] overflow-x-hidden">
        <div className="flex flex-col justify-between">
          <CartItems/>
          <ButtonCircleArrow text="Continue Shopping" action={() => history.back()}/>
        </div>
        <div>
          <StepperList/>
        </div>
      </main>
    </>
  )
}