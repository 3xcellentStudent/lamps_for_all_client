import { createOrder } from "@/api/controllers/payment/payment";
import { CreateOrderActionType } from "@/types/payment/payment";
import { InitialState } from "@/types/storeTypes";
import { AttachMoney } from '@mui/icons-material';
import { 
  PayPalScriptProvider, usePayPalScriptReducer, DISPATCH_ACTION, SCRIPT_LOADING_STATE 
} from "@paypal/react-paypal-js";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function PaymentButton(){

  const {cartObject, shipping} = useSelector((state: InitialState) => state)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  console.log(cartObject.cart)

  const CLIENT_ID: string = process.env.NEXT_PUBLIC_CLIENT_ID as string
  
  function ButtonWrapper(){

    const [{ isPending }, dispatch] = usePayPalScriptReducer();

    const orderObject: CreateOrderActionType = {
      intent: "CAPTURE", 
      purchase_units: [
        {
          reference_id: "d9f80740-38f0-11e8-b467-0ed5f89f718b", 
          amount: {
            currency_code: "CAD", 
            value: "100.00",
            breakdown: {}
          }
        }
      ], 
      payment_source: {
        paypal: {
          experience_context: {
            payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED", 
            brand_name: "EXAMPLE INC", 
            locale: "en-US", 
            landing_page: "LOGIN", 
            shipping_preference: "SET_PROVIDED_ADDRESS", 
            user_action: "PAY_NOW", 
            return_url: "https://example.com/returnUrl", 
            cancel_url: "https://example.com/cancelUrl",
          }
        }
      }
    }

    async function handleClick(){
      dispatch({
        type: DISPATCH_ACTION.LOADING_STATUS,
        value: SCRIPT_LOADING_STATE.PENDING,
      });

      try {
        dispatch({type: DISPATCH_ACTION.LOADING_STATUS, value: SCRIPT_LOADING_STATE.RESOLVED})
        const orderID = await createOrder(orderObject);
        const {paypal} = window;

        if (paypal && paypal.Buttons){
          paypal?.Buttons({
            createOrder: () => orderID,
            onApprove: async (data, actions) => {
              await actions.order?.capture();
              alert('Transaction completed');
            },
          }).render("#payment-button");
        } else {
          console.error("PayPal Buttons is not available.");
        }
        // const details = await captureOrder(orderID);
        // alert("Transaction completed by " + details.payer.name.given_name);
      } catch(error){
        console.error("Error processing payment:", error);
        dispatch({
          type: DISPATCH_ACTION.LOADING_STATUS,
          value: SCRIPT_LOADING_STATE.REJECTED,
        });
      } finally {
        dispatch({
          type: DISPATCH_ACTION.LOADING_STATUS,
          value: SCRIPT_LOADING_STATE.RESOLVED,
        });
      }
    };

    return(
      <div className="flex items-center justify-center w-full mt-5">
        <button id="payment-button" onClick={handleClick} disabled={isPending} 
        className="px-5 py-2 font-bold flex justify-around max-w-80 min-w-64">
          <div>Pay</div>
          <div>Icon</div>
        </button>
      </div>
    )
  }

  return(
    // <PayPalScriptProvider options={{clientId: CLIENT_ID, currency: "CAD"}}>
    //   <PayPalButtons fundingSource="paypal"
    //     createOrder={(data, actions) => {
    //       return actions.order.create(orderObject);
    //     }}
    //     onApprove={async (data, actions) => {
    //       return await actions.order?.capture().then(details => {
    //         // alert("Transaction completed by " + details?.payer?.name?.given_name);
    //         alert("Transaction completed by " + details.payment_source?.paypal?.name?.given_name);
    //         // Логика после успешного платежа
    //       });
    //     }}
    //   />
    // </PayPalScriptProvider>

    <PayPalScriptProvider options={{ clientId: CLIENT_ID, currency: "CAD" }}>
      <ButtonWrapper/>
    </PayPalScriptProvider>
  )
}