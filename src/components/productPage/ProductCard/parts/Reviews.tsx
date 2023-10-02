import { Grid, Item } from "@mui/material"
import Rating from "./Rating"


interface PrsRevProps {
  name: string
  stars: number
  text: string
}

function PersonReview({name, stars, text}: PrsRevProps){
  return(
    <li>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <p>xs=6 md=8</p>
        </Grid>
        <Grid item xs={6} md={4}>
          <p>xs=6 md=4</p>
        </Grid>
        <Grid item xs={6} md={4}>
          <p>xs=6 md=4</p>
        </Grid>
        <Grid item xs={6} md={8}>
          <p>xs=6 md=8</p>
        </Grid>
      </Grid>
    </li>
  )
}

interface Props {
  stars: number
  reviews: PrsRevProps[]
}

export default function Reviews({stars, reviews}: Props){
  return(
    <>
      <Rating stars={stars} />
      <ul>
        <PersonReview/>
        {/* {reviews.map((obj, idx) => {
          const {name, stars, text} = obj
          return <PersonReview/>
        })} */}
      </ul>
    </>
  )
}