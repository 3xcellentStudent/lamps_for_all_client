import { List } from "@mui/material"
import UserReviewCard from "../UserReviewCard/UserReviewCard"
import { ReviewsType } from "@/types/main/reviews.type"

export default function ReviewsList({reviewsList}: {reviewsList: ReviewsType[] | []}){

  return(
    <List className='mt-4 flex flex-col justify-center'>
      {reviewsList.map((props, idx) => {
        return(
          <UserReviewCard key={idx} props={props} />
        )
      })}
    </List>
  )
}