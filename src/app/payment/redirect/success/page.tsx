"use client"

import PayPalControllerApi from "@/api/controllers/payment/paypal/api"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Teko } from "next/font/google"
import { CaptureOrderResponse } from "@/types/api.types/paypal.types/capture.order"

const teko = Teko({
  weight: '700',
  subsets: ['latin'],
});

// import PaymentSuccess from "@/components/pages/payment/success/PaymentSuccess";

export default function PaymentSuccessPage(){
  
  const [email, setEmail] = useState<string>("")
  const [response, setResponse] = useState<CaptureOrderResponse | undefined>(undefined)

  async function captureOrderRequest(){
    const {search: params} = window.location

    const tokenValue = params.split("&")[0].split("=")[1];
    console.log("orderId=" + tokenValue)

    const request: CaptureOrderResponse | null = await PayPalControllerApi.captureOrder(tokenValue);
    console.log(request)
    if(request && request.data.status === "COMPLETED") setEmail(request.data.payer.email_address);

    return;
  }

  useEffect(() => {
    if(email.length === 0) captureOrderRequest()
  }, [])

  return(
    <div className="flex items-center justify-center w-full h-svh">
      <div className="max-h-[400px] max-w-[480px]">
        <h3 className={teko.className + " font-regular text-center text-5xl mb-5"}>Thank You!</h3>
        <p>
          We are getting started on your order right away, and you will receive an order confirmation 
          email shortly to "{email}".
        </p>
        <p>
          In the meantime, explore our latest 
          products and get inspired by new trendse !
        </p>
      </div>
    </div>
  )
}