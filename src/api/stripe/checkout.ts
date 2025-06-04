import CheckoutCreateSessionServerResponseDto from "@/types/stripe/sessions.create"
import ProductOptionsDto from "./dto/ProductOptionsDto"

export default class StripeApi {
  
  public static async fetchClientSecret(action: (response: string) => void, requestBody: ProductOptionsDto[]){
    console.log(requestBody)
    const request = await fetch("http://localhost:5000/api/stripe/checkout/sessions/create", {
      method: "POST",
      body: JSON.stringify({data: requestBody})
    })
    const response: CheckoutCreateSessionServerResponseDto = await request.json()
    
    action(response.client_secret)
  };
}