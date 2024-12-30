// import { List } from '@mui/material';
// import RatingComp from '../common/RatingComp';
import './style.scss'
// import UserReviewCard from './parts/UserReviewCard/UserReviewCard';
import ReviewsList from './parts/ReviewsList/ReviewsList';
import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { ReviewsListType } from '@/types/productPage.types/sectionReviews';
import { ProductIdType } from '@/types/main/product.type';
import RatingComp from '../../common/RatingComp';
import SectionTitle from '@/components/common/SectionElements/SectionTitle/SectionTitle';
import { Box } from '@mui/material';
import PaginationComponent from './parts/PaginationComponent/PaginationComponent';

export default function Reviews(){
  // const [state, setState] = useState(dataModel);  

  const {rating, reviewsList, reviewsSnaphot, countOfReviews, colors} = useSelector(({data: {
    rating, reviews: {countOfReviews, reviewsList, reviewsSnaphot}, theme: {colors}
  }}: {data: ProductIdType}) => ({rating, countOfReviews, reviewsList, reviewsSnaphot, colors}))

  return(
    <section className='mt-24 px-5'>
      <SectionTitle fontSize='40px' >Customer Reviews</SectionTitle>

      <div className='flex items-center justify-center flex-row mt-10'>
        <div className='mr-4 text-5xl'>{rating}</div>
        <div className='flex flex-col justify-start'>
          <RatingComp rating={rating} size='large' />
          <p>Based on {countOfReviews} reviews</p>
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <Box className='w-[80%] h-[2px] my-6' sx={{backgroundColor: colors.backgrounds.elementsOptional.hex}}></Box>
      </div>

      <div>
        <PaginationComponent/>
      </div>
      
      {/* <div className='min-h-svh'>
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
                </div>
                <div className="text-base">
                  {reviewsSnaphot?.five && `${Object.values(reviewsSnaphot).reduce((acc, value) => acc += value)} Reviews`}
                </div>
              </div>
              {<p className="text-base">{`${reviewsSnaphot?.five || "" + reviewsSnaphot?.four || ""} out of `}</p>}
            </div>
          </div>
        </div>

        <ReviewsList reviewsList={reviewsList} theme={colors} />
      </div> */}

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