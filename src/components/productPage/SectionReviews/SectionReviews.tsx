import Rating from '../common/Rating'
import WriteReview from './parts/WriteReview/WriteReview'

interface Props {
  data: {
    reviewsCount: number
    reviewsList: {
      name: string
      text: string
      rating: number
    }[]
  }
}

export default function SectionReviews({data}: Props){

  return(
    <section className='section_title P_product_common'>
      <div className="flex justify-between items-center my2-15">
        <div>
          <Rating rating={4.7} cls='h-min fos-x1' />
          <button className='fos-x1 font-bold uppercase mt-1'
          >Reviews: {data.reviewsCount}</button>
        </div>
        <WriteReview/>
      </div>
    </section>
  )
}