import { REVIEWS_GET_RECURSIVE_DATA_ROUTE } from "@/api/routes/routes";
import { ReviewsType } from "@/types/main/reviews.type";
import { Dispatch, SetStateAction } from "react";

export default async function getReviewsRecursive(reviewsId: string[], action: Dispatch<SetStateAction<[] | ReviewsType[]>>){
  const separator = "&id="
  const url = REVIEWS_GET_RECURSIVE_DATA_ROUTE + "?id=" + reviewsId.join(separator)

  const request = await fetch(url);
  const response: ReviewsType[] = await request.json()
  action(response)

  return response;
}