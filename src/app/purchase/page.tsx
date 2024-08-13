'use client'

import Header from "@/components/common/Header/Header";
import AdditionalInfo from "@/components/purchasePage/AdditionalInfo/AdditionalInfo";
import CartItems from "@/components/purchasePage/CartItems/CartItems";
import PaymentButton from "@/components/purchasePage/PaymentMethods/components/PaymentButton/PaymentButton";
import PaymentMethods from "@/components/purchasePage/PaymentMethods/PaymentMethods";
import ContinueShoppingButton from "@/components/purchasePage/ShippingForm/parts/ContinueShoppingButton/ContinueShoppingButton";
import ShippingForm from "@/components/purchasePage/ShippingForm/ShippingForm";
import { InitialState } from "@/types/storeTypes";
import { useSelector } from "react-redux";

export default function Cart(){

  const {data: {common: {theme}}, cartObject: {cart}} = useSelector((state: InitialState) => state);

  const continueShoppingButtonCls = "w-min whitespace-nowrap hover:text-emerald-500 duration-200 mb-4 min-h-[40px] ml-10";

  return(
    <>
      <Header/>
      <main className="mt-14 flex flex-row justify-center 
      w-[100svw] h-[calc(100svh-56px)] overflow-x-hidden">
        {/* <div className="max-w-[500px] min-w-[320px] relative pt-2 h-[93%] overflow-y-auto"> */}
        {/* <PaymentMethods/>
        <AdditionalInfo/> */}
        <div className="flex flex-col justify-between">
          <CartItems/>
          <ContinueShoppingButton btnProps={{className: continueShoppingButtonCls}} />
        </div>
        <div className="max-w-[450px] min-w-[320px] relative py-2 px-4 h-[93%] overflow-y-auto">
          <ShippingForm/>
          <PaymentMethods/>
          <PaymentButton/>
          <AdditionalInfo/>
        </div>
      </main>
    </>
  )
}