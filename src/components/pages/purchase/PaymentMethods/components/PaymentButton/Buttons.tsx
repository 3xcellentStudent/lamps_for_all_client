import { CreateOrderActionType } from "@/types/payment/payment";
import { PayPalButtons, PayPalScriptProvider, PayPalButtonsComponentProps } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";

interface Props {
  orderObject: CreateOrderActionType
}

type FundingSource = PayPalButtonsComponentProps["fundingSource"]

export default function Buttons({orderObject}: Props){

  const CLIENT_ID: string = process.env.NEXT_PUBLIC_CLIENT_ID as string

  const [fundingSource, setFundingSource] = useState<FundingSource>("paypal")

  // useEffect(() => {
  //   setFundingSource(Object.keys(orderObject.payment_source)[0] as FundingSource)
  //   console.log(orderObject.payment_source)
  // }, [orderObject])

  return(
    <PayPalScriptProvider options={{clientId: CLIENT_ID, currency: "CAD"}}>
      <PayPalButtons fundingSource="paypal"
        createOrder={(data, actions) => {
          return actions.order.create(orderObject);
        }}
        onApprove={async (data, actions) => {
          return await actions.order?.capture().then(details => {
            // alert("Transaction completed by " + details?.payer?.name?.given_name);
            alert("Transaction completed by " + details.payment_source?.paypal?.name?.given_name);
            // Логика после успешного платежа
          });
        }}
      />
      <PayPalButtons fundingSource="card"
        createOrder={(data, actions) => {
          return actions.order.create(orderObject);
        }}
        onApprove={async (data, actions) => {
          return await actions.order?.capture().then(details => {
            // alert("Transaction completed by " + details?.payer?.name?.given_name);
            alert("Transaction completed by " + details.payment_source?.paypal?.name?.given_name);
            // Логика после успешного платежа
          });
        }}
      />
    </PayPalScriptProvider>
  )
}