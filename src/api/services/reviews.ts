import { TypePostReviews } from "../types"

export async function postReview(review: TypePostReviews){
  const reqInit: RequestInit = {method: 'POST', mode: 'cors', body: JSON.stringify(review)}
  // return await fetch("http://localhost:5000/reviews", init)
  return await fetch("http://localhost:5000/reviews", reqInit).then(data => data.json())
}

export async function getReviews(id: string){
  const url = `http://localhost:5000/reviews${id ? `?id=${id}` : null}`
  return await fetch(url).then(data => data.json())
}