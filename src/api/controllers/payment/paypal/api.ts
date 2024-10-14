import { CartProduct } from "@/types/storeTypes";
import PayPalServiceApi from "../../../services/payment/paypal/api";
import { createPayPalJsonBody } from "../../../services/payment/paypal/helper";
import { ApiResponseType } from "@/types/api.types/api";
// import openPayPalWindow from "../../../services/payment/paypal/openPayPalWindow";

class PayPalControllerApi {

  public static async createOrder(cart: CartProduct[]){
    const requestBody: string = createPayPalJsonBody(cart);
    // const target = e.currentTarget as HTMLAnchorElement
  
    try {
      const createOrderRes: ApiResponseType = await PayPalServiceApi.createOrder(requestBody)

      if(createOrderRes.status === 200 && createOrderRes.data){
        // const captureOrderRes = await captureOrderApi(createOrderRes.data);
        return createOrderRes;
      } else {
        return undefined;
      }
      // const captureOrderRes = await captureOrderApi(createOrderRes);
      // console.log(captureOrderRes)
      // return captureOrderRes;
    } catch(error){
      const message = "Something went wrong ! \n Error message: \n" + error
      console.error(message)
      return;
    }
  }

  public static async captureOrder(params: string){
    const response = await PayPalServiceApi.captureOrder(params)
    // return JSON.stringify(response);
    return response;
  }
}

export default PayPalControllerApi;