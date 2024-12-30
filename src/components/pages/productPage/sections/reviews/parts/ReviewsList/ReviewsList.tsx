import { List } from "@mui/material"
import UserReviewCard from "../UserReviewCard/UserReviewCard"
import { ProductIdType } from "@/types/main/product.type"

interface Props {
  reviewsList: ProductIdType["reviews"]["reviewsList"]
}

export default function ReviewsList({reviewsList}: Props){

  return(
    <List className='mt-4 flex flex-wrap justify-center'>
      {reviewsList.map(({name, text, title, rating, attachments}, idx) => {
        return(
          <UserReviewCard key={idx} name={name} text={text} rating={rating} attachments={attachments} />
        )
      })}
    </List>
  )
}