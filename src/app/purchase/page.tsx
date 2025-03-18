'use client'

import ButtonCircleArrow from "@/components/common/Buttons/ButtonCircleArrow";
import Header from "@/components/common/Header/Header";
import StepperList from "@/components/pages/purchase/PaymentMethods/components/StepperList/StepperList";
import PaymentMethods from "@/components/pages/purchase/PaymentMethods/PaymentMethods";
import ShippingForm from "@/components/pages/purchase/ShippingForm/ShippingForm";
import { CartObjectType } from "@/types/cartTypes/cartObject.types";
// import AdditionalInfo from "@/components/purchasePage/AdditionalInfo/AdditionalInfo";
// import PaymentButton from "@/components/purchasePage/PaymentMethods/components/PaymentButton/PaymentButton";
import { StepsListType } from "@/types/payment/elements";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss"
import CartListPurchase from "@/components/pages/purchase/CartListPurchase/CartListPurchase";

export default function Cart(){

  const {cart} = useSelector(({cart}: {cart: CartObjectType}) => ({cart}));

  const tabsList: StepsListType[] = [
    {label: "Shipping Address", element: <ShippingForm/>}, 
    {label: "Check Out", element: <PaymentMethods/>}
  ]

  return(
    <>
      <Header/>
      <main className={`${styles.main} mt-[100px] flex flex-row justify-center 
      w-[100svw] overflow-x-hidden`}>
        <div className="flex flex-col justify-between">
        <section id="cart-items" className="min-w-[650px] h-[calc(100%-54px)] px-2.5">
          <CartListPurchase/>
        </section>
          <ButtonCircleArrow text="Continue Shopping" action={() => history.back()}/>
        </div>
        <div>
          <StepperList/>
        </div>
      </main>
    </>
  )
}