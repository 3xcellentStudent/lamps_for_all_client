import { List } from "@mui/material"
import { Fragment } from "react"
import UserReviewCard from "../UserReviewCard/UserReviewCard"
import { ReviewsObject, SectionReviewsType } from "@/types/productPage.types/sectionReviews"

interface Props {
  reviewsArray: ReviewsObject[]
  theme: SectionReviewsType["userReviews"]["theme"]
}

export default function ReviewsList({reviewsArray, theme}: Props){

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
      {reviewsArray.map((item, idx) => {
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