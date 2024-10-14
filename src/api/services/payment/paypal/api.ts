import { paypalRoutes } from "./routes";


class PayPalServiceApi {
  public static async createOrder(body: string){
    try {
      const request = await fetch(paypalRoutes.createOrder, {
        method: "POST",
        body,
      });
      const response = await request.json()
      return response;
    } catch(error){
      console.error(error)
      return error;
    }
  }

  public static async captureOrder(token: string){
    const url = paypalRoutes.captureOrder + "?orderId=" + token;
    try {
      const createOrder = await fetch(url, {
        method: "POST",
        body: JSON.stringify({})
      });
      return await createOrder.json();
    } catch(error){
      console.error(error)    
      return null;
    }
  }
}

export default PayPalServiceApi;