import { List } from '@mui/material';
import RatingComp from '../common/RatingComp';
import './style.scss'
import { Props } from '@/types/productPage.types/sectionReviews';
import UserReviewCard from './parts/UserReviewCard/UserReviewCard';
import { Fragment } from 'react';
import ReviewsList from './parts/ReviewsList/ReviewsList';

export default function SectionReviews({
  sectionData: {
    reviewsSnaphot, userReviews: {reviewsArray, theme}, sxFilter, sxRating, sxText
  }, common: {rating}
}: Props){
  
  // const listSx = {
  //   display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "max-content",
  //   gap: "16px", gridAutoFlow: "dense"
  // }

  return(
    <section className='mt-24 px-5'>
      <div className='min-h-svh'>
        <div className='flex flex-row justify-between w-full'>
          <div>
            <h3 className='text-3xl'>Reviews</h3>
            <h4 className='text-xl'>Rating Snapshot</h4>
            <p className='text-base'>Select a row below to filter reviews</p>
            <div>
              <ul className="flex flex-col"></ul>
            </div>
          </div>
          <div className="">
            <h4 className="text-xl">Overall Rating</h4>
            <div className='flex flex-row'>
              <div className="text-5xl">{rating}</div>
              <div className='flex flex-col justify-between pt-2'>
                <div className='block'>
                  <RatingComp size='small' props={{content: "", sxRating, sxText}} 
                  rating={rating} />
                </div>
                <div className="text-base">
                  {`${Object.values(reviewsSnaphot).reduce((acc, value) => acc += value)} Reviews`}
                </div>
              </div>
              <p className="text-base">{`${reviewsSnaphot.five + reviewsSnaphot.four} out of `}</p>
            </div>
          </div>
        </div>

        <ReviewsList reviewsArray={reviewsArray} theme={theme} />
      </div>
        {/* <div>
          <h4 className="text-xl">Review this product</h4>
          <div className='mx-2 mb-2'>
            <ul className="flex flex-row"></ul>
          </div>
          <p className='text-base'>Adding a review will require a valid <br /> email for verification</p>
        </div> */}
        {/* <div className='section_reviews_settings w-full h-full'>
          <Button cls={btnIconCls} handleClick={() => {}} sx={sxFilter?.sxBtn} disabled={false} >
            <FilterAltIcon className='' sx={sxFilter?.sxIcon} />
          </Button>
        </div> */}
    </section>
  )
}