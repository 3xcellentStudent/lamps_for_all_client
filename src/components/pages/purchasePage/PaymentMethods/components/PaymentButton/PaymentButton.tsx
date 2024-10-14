// import { CreateOrderActionType } from "@/types/payment/payment";
// import {Payment as PaymentIcon, DoneOutline as DoneOutlineIcon} from '@mui/icons-material';
// import { 
//   PayPalScriptProvider, usePayPalScriptReducer, DISPATCH_ACTION, SCRIPT_LOADING_STATE 
// } from "@paypal/react-paypal-js";
// import { memo, useEffect, useRef, useState } from "react";
// import Buttons from "./Buttons";

// function PaymentButton(){

//   // const {cartObject, shipping} = useSelector((state: InitialState) => state)
//   // const [totalPrice, setTotalPrice] = useState<number>(0)
//   const [isHover, setIsHover] = useState<boolean>(false)

//   const btnCls = "px-5 py-2 font-bold flex justify-center items-center max-w-80 min-w-64 rounded-md bg-emerald-500"
//   const iconsCls = "flex items-start pointer-events-none animate-[iconsOpactiy_0.5s_ease] top-[2px] right-[-10px] absolute"

  // const orderObject: CreateOrderActionType = {
  //   intent: "CAPTURE", 
  //   purchase_units: [
  //     {
  //       reference_id: "d9f80740-38f0-11e8-b467-0ed5f89f718b", 
  //       amount: {
  //         currency_code: "CAD", 
  //         value: "100.00",
  //         breakdown: {}
  //       }
  //     }
  //   ], 
  //   payment_source: {
  //     paypal: {
  //       experience_context: {
  //         payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED", 
  //         brand_name: "EXAMPLE INC", 
  //         locale: "en-US", 
  //         landing_page: "LOGIN", 
  //         shipping_preference: "SET_PROVIDED_ADDRESS", 
  //         user_action: "PAY_NOW", 
  //         return_url: "https://example.com/returnUrl", 
  //         cancel_url: "https://example.com/cancelUrl",
  //       }
  //     }
  //   }
  // }

//   function handleClick(){
//     const paymentButton = document.getElementById("paypal-payment-wrapper")
//     if(paymentButton) console.log(paymentButton.children[0]?.click())
//   }

//   return(
//     <div>
//       <div className="flex items-center justify-center w-full mt-5">
//         <button onPointerEnter={() => setIsHover(true)} className={btnCls}
//         // onPointerLeave={() => setIsHover(false)} onClick={handleClick} disabled={isPending} >
//         onPointerLeave={() => setIsHover(false)} onClick={handleClick} >
//           <div className="mr-3 text-xl pr-6 relative">
//             Check Out
//             {/* <div id="payment-button" className="absolute w-0 h-0 overflow-hidden"></div> */}
//             <div id="paypal-button-container" className="absolute w-0 f-0"></div>
//             {
//               isHover ? 
//               <div className={iconsCls}>
//                 <DoneOutlineIcon/>
//               </div> : 
//               <div className={iconsCls}>
//                 <PaymentIcon/>
//               </div>
//             }
//           </div>
//         </button>
//       </div>
//       <div className="absolute w-0 h-0 overflow-hidden" id="paypal-payment-wrapper">
//         <Buttons orderObject={orderObject} />
//       </div>
//     </div>
//   )
// }

// export default memo(PaymentButton)




import { InitialState } from "@/types/storeTypes";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Buttons from "./Buttons";
import { ApiResponseDataType, ApiResponseType } from "@/types/paypal.types/api";
import PayPalControllerApi from "@/api/controllers/payment/paypal/api";

interface CreateOrderResponseType {id: string, links: {href: string}[]}

const CustomPayPalButton = () => {
  const [isPayPalReady, setIsPayPalReady] = useState(false);
  const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
  const CURRENCY = "CAD";
  const {cart} = useSelector(({cartObject}: InitialState) => cartObject)

  const frameContainerRef = useRef<HTMLDivElement | null>(null)

  const [isHidden, setIsHidden] = useState<boolean>(true)
  const [iframeSrc, setIframeSrc] = useState<string>("")

  async function handlePayment(e: MouseEvent){
    e.preventDefault();
    
    const response: ApiResponseType | undefined = await PayPalControllerApi.createOrder(cart);

    if(response?.status === 200){
      const data: ApiResponseDataType = JSON.parse(response?.data); 
      const link = data?.links[1]?.href
      setIsHidden(false)
      setIframeSrc(link)
    }

    // if(!response.id) 

    // console.log(response)

    // const target = e.currentTarget as HTMLAnchorElement;

    // if(target && target.href){
    //   window.open(
    //     target.href, // URL, который будет открыт
    //     '_blank', // Открываем в новом окне
    //     'width=600,height=700,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes' // Устанавливаем размеры окна
    //   );
    // }
  }

  const containerCls = `fixed w-full h-full left-[-50%] top-[-50%] 
  translate-y-2/4 translate-x-2/4 bg-slate-950`;

  return (
    <>
      <button onClick={handlePayment} >
        Check Out
      </button>
      <div id="paypal-container" hidden={isHidden} className={containerCls}>
        <div className="w-full h-full flex items-center justify-center">
          <iframe width="320px" height="600px" src={iframeSrc}></iframe>
        </div>
      </div>
    </>
  );
};

export default CustomPayPalButton;