import { List } from "@mui/material"
import UserReviewCard from "../UserReviewCard/UserReviewCard"
import { ProductDataType } from "@/types/main/productData.type"
import { ReviewsType } from "@/types/main/reviews.type"

export default function ReviewsList({reviewsList}: {reviewsList: ReviewsType[] | []}){

  return(
    <List className='mt-4 flex flex-wrap justify-center'>
      {reviewsList.map(({content, rating, attachments, productName}, idx) => {
        return(
          <UserReviewCard key={idx} productName={productName} content={content} rating={rating} attachments={attachments} />
        )
      })}
    </List>
  )
}