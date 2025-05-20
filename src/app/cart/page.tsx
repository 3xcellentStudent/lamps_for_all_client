'use client'

import ButtonCircleArrow from "@/components/common/Buttons/ButtonCircleArrow";
import Header from "@/components/common/Header/Header";
import StepperList from "@/components/pages/cart/StepperList/StepperList";
import { CartObjectType } from "@/types/cartTypes/cartObject.types";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss"
import CartListPurchase from "@/components/pages/cart/CartListPurchase/CartListPurchase";
import { useRouter } from "next/navigation";


export default function Cart(){

  const {cart} = useSelector(({cart}: {cart: CartObjectType}) => ({cart}));

  const router = useRouter();

  return(
    <>
      {/* <Header/> */}
      <main className={`${styles.main} overflow-x-hidden`}>
        <section className={`flex ${styles.cart_list_container}`}>
          <ButtonCircleArrow text="Continue Shopping" action={() => router.push("http://localhost:3000")}/>
          <div id="cart-items" className={`${styles.cart_list_wrapper}`}>
            <CartListPurchase/>
          </div>
        </section>
        <section className={styles.stepper_list_container}>
          <StepperList/>
        </section>
      </main>
    </>
  )
}