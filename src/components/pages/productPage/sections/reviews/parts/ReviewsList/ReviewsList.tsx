import { List } from "@mui/material"
import { Fragment } from "react"
import UserReviewCard from "../UserReviewCard/UserReviewCard"
import { ReviewsListType } from "@/types/productPage.types/sectionReviews"
import { ProductIdType } from "@/types/main/product.type"

interface Props {
  reviewsList: ReviewsListType[]
  theme: ProductIdType["theme"]["colors"]
}

export default function ReviewsList({reviewsList, theme}: Props){

  // const listSx = {
  //   display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "max-content",
  //   gap: "16px", gridAutoFlow: "dense"
  // }
  // const listSx = {
  //   display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "max-content",
  //   gap: "16px", gridAutoFlow: "dense"
  // }

  return(
    <List className='mt-4 flex flex-wrap content-start' sx={{}}>
      {reviewsList.map((item, idx) => {
        const {name, text, rating, attachments} = item
        return(
          <Fragment key={idx}>
            <UserReviewCard props={{name, text, rating, attachments, theme}} />
          </Fragment>
        )
      })}
    </List>
  )
}