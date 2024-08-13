import { CREATE_ORDER } from "./routes";

export async function createOrder(body: {}){
  const response = await fetch(CREATE_ORDER, {
    method: "POST",
    headers: {"Content-Type": "application/json",},
    body: JSON.stringify(body),
  })
  return response.json()
}