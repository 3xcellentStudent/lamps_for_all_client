import CheckoutCreateSessionServerResponse from "@/types/stripe/sessions.create";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss"
import { Backdrop, CircularProgress } from "@mui/material";
import StripeApi from "@/api/stripe/checkout";
import ProductOptionsDto from "@/api/stripe/dto/ProductOptionsDto";
import { useSelector } from "react-redux";
import { CartObjectType } from "@/types/cartTypes/cartObject.types";
import { CartProduct } from "@/types/storeTypes";


export default function StripePayment(){

  const stripePromise = loadStripe(
    "pk_test_51PxA1M04u95jjINWkcCJ5cngtac7Got20xwgrQHLhQnOu7LhsOKl6hZPkzcnO7VkJiOOPsjHNfuhMneTxrXqgUn30078WzF7oH", 
    {betas: ['custom_checkout_beta_6'],}
  );

  const [requestBody, setRequestBody] = useState<ProductOptionsDto[]>([]);

  const cart = useSelector(({cartObject: {cart}}: {cartObject: CartObjectType}) => (cart))

  const [clientSecret, setClientSecret] = useState<string | null>(null)
  useEffect(() => {
    if(requestBody.length){
      StripeApi.fetchClientSecret(setClientSecret, requestBody);
    }
  }, [requestBody])

  useEffect(() => {
    getRequestDto(cart)
  }, [cart])

  function getRequestDto(cart: CartProduct[]){
    const cartItemsDto = cart.map((object, index) => {
      const value = object.fields[0].value
      const stockStatus = object.fields[0].stockStatus

      const productOptionsDto = new ProductOptionsDto({...object, value, stockStatus})

      return productOptionsDto;
      // setRequestDto(prev => [...prev, productOptionsDto])
    })

    setRequestBody(cartItemsDto)
  }

  // async function fetchClientSecret(){
  //   const request = await fetch("http://localhost:5000/api/stripe/checkout/sessions/create", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       productName: "Product Name",
  //       unitAmount: "10000",
  //       quantity: "1",
  //     })
  //   })
  //   const response: CheckoutCreateSessionServerResponse = await request.json()
    
  //   setClientSecret(response.client_secret)
  // };

  return(
    <section id="payment-methods" className={`${styles.container}`}>
      <div id="checkout">
        {
          clientSecret ? 
          <div className={`${styles.stripe_container}`}>
            <EmbeddedCheckoutProvider stripe={stripePromise} options={{clientSecret}}>
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </div> : 
          <Backdrop sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })} open>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      </div>
    </section>
  )
}