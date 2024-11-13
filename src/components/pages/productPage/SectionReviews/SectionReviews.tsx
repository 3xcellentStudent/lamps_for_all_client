import { List } from '@mui/material';
import RatingComp from '../common/RatingComp';
import './style.scss'
import UserReviewCard from './parts/UserReviewCard/UserReviewCard';
import ReviewsList from './parts/ReviewsList/ReviewsList';
import { useSelector } from 'react-redux';
import { ProductIdType } from '@/types/productPage.types/mainTypes';
import { useEffect, useState } from 'react';
import { ReviewsObject } from '@/types/productPage.types/sectionReviews';

interface DataModel {
  rating: number,
  reviewsSnaphot: {
    five?: number;
    four?: number;
    three?: number;
    two?: number;
    one?: number;
  },
  reviewsArray: ReviewsObject[],
  theme: {elementsBg: string, cardSx: {}},
  sxFilter: {sxBtn: {}, sxIcon: {}},
  sxRating: {},
  sxText: {}
}

export default function SectionReviews(){

  const dataModel: DataModel = {
    rating: 0,
    reviewsSnaphot: {},
    reviewsArray: [],
    theme: {elementsBg: "", cardSx: {}},
    sxFilter: {sxBtn: {}, sxIcon: {}},
    sxRating: {},
    sxText: {}
  }

  const [state, setState] = useState(dataModel);  

  const {
    common: {rating}, sectionReviews: {reviewsSnaphot, userReviews: {reviewsArray, theme}, sxFilter, sxRating, sxText}
  } = useSelector(({data}: {data: ProductIdType}) => data)

  const data = useSelector(({data}: {data: ProductIdType}) => data)

  useEffect(() => {setState({rating, reviewsSnaphot, reviewsArray, theme, sxFilter, sxRating, sxText})}, [rating])
  
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
              <div className="text-5xl">{state?.rating}</div>
              <div className='flex flex-col justify-between pt-2'>
                <div className='block'>
                  <RatingComp size='small' props={{content: "", sxRating, sxText}} 
                  rating={state?.rating} />
                </div>
                <div className="text-base">
                  {state.reviewsSnaphot?.five && `${Object.values(state?.reviewsSnaphot).reduce((acc, value) => acc += value)} Reviews`}
                </div>
              </div>
              {<p className="text-base">{`${state.reviewsSnaphot?.five || "" + state.reviewsSnaphot?.four || ""} out of `}</p>}
            </div>
          </div>
        </div>

        <ReviewsList reviewsArray={state?.reviewsArray} theme={state.theme} />
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