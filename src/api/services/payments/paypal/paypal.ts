import { CREATE_ORDER } from "./routes";

export default async function(){
  return await fetch(CREATE_ORDER, {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json',
      'PayPal-Request-Id': '7b92603e-77ed-4896-8e78-5dea2050476a',
      'Authorization': 'Bearer 6V7rbVwmlM1gFZKW_8QtzWXqpcwQ6T5vhEGYNJDAAdn3paCgRpdeMdVYmWzgbKSsECednupJ3Zx5Xd-g'
    },
    body: JSON.stringify({}),
  })
}