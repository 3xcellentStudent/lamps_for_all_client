import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { ProductDataType } from '@/types/main/productData.type';
import ReviewsList from '../ReviewsList/ReviewsList';
import { useEffect, useRef, useState } from 'react';
import { ReviewsType } from '@/types/main/reviews.type';
import getReviewsRecursive from '@/api/database/reviews/reviews.api';

export default function PaginationComponent() {

  const [reviewsList, setReviewsList] = useState<ReviewsType[] | []>([])

  const reviewsId = useSelector(({productData: {reviewsId}}: {productData: ProductDataType}) => (reviewsId))

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToRef = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if(reviewsId.length){
      const selectedReviewsId = reviewsId.filter((reviewId, index) => index < 10)
      getReviewsRecursive(selectedReviewsId, setReviewsList)
    }
  }, [reviewsId])

  function handleChange(event: React.ChangeEvent<unknown>, value: number){
    const selectedReviewsId = reviewsId.filter((reviewId, index) => index >= (value - 1) * 10 && index < (value) * 10)
    getReviewsRecursive(selectedReviewsId, setReviewsList)
    scrollToRef()
  }

  return (
    <Stack spacing={2}>
      <div ref={sectionRef}></div>
      <ReviewsList reviewsList={reviewsList} />
      <Pagination count={
        reviewsId?.length < 10 ? 1 : 
        Math.round(reviewsId?.length / 10) * 10 < reviewsId?.length ? Math.round(reviewsId?.length / 10) + 1 : 
        Math.round(reviewsId?.length / 10)
      } 
      onChange={handleChange} />
    </Stack>
  );
}