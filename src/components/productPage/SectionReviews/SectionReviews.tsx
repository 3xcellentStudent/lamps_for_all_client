import SVGSettings from '@/components/SVG/SVGSettings';
import Rating from '../common/Rating'
import WriteReview from './parts/WriteReview/WriteReview'
import './SectionReviews.scss'

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
    <section className='section_reviews P_product_common line_section_divider'>
      <div className="section_reviews_top items-center">
        <div className='section_reviews_rating'>
          <Rating text={`Reviews: ${data.reviewsCount}`} 
          rating={4.7} cls='h-min fos-x1' />
        </div>
        <div className='section_reviews_write-rev h-full mr-3 flex justify-end items-center'>
          <WriteReview/>
        </div>
        <div className='section_reviews_settings w-full h-full'>
          <button className='btn_black_hover relative w-full h-full px1-03 py1-03'>
            <SVGSettings fill="#000" cls="w-full h-full top-0 left-0 object-fit"/>
          </button>
        </div>
      </div>
    </section>
  )
}