import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import PaginationComponent from './parts/PaginationComponent/PaginationComponent';
import { Box } from '@mui/material';

import styles from "./styles.module.scss"
import ReviewAnalyticsPanel from './parts/ReviewAnalyticsPanel/ReviewAnalyticsPanel';

export default function Reviews(){

  return(
    <section className='mt-24 px-5'>
      <SectionTitle containerSx={{paddingBottom: "10px"}} >Customer Reviews</SectionTitle>

      <Box className={`flex ${styles.main_container}`}>
        <ReviewAnalyticsPanel/>

        <div className={`${styles.reviews_container}`}>
          <PaginationComponent/>
        </div>
      </Box>

      {/* <div className='w-full flex justify-center'>
        <Box className='w-[80%] h-[2px] my-6' sx={{backgroundColor: elementsOptionalBg.hex}}></Box>
      </div> */}
      
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