import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { ProductDataType } from '@/types/main/productData.type';
import ReviewsList from '../ReviewsList/ReviewsList';
import { useEffect, useState } from 'react';
import { ReviewsType } from '@/types/main/reviews.type';
import reviewsModel from "@/data.models/reviews/reviews.model.json"
import getReviewsRecursive from '@/api/database/reviews/reviews.api';

export default function PaginationComponent() {

  // const [newReviewsList, setNewReviewsList] = useState<ProductDataType["reviews"] | []>([]);

  // const reviews = useSelector(({productData: {reviews}}: {productData: ProductDataType}) => (reviews))

  const [reviewsList, setReviewsList] = useState<ReviewsType[] | []>([])

  const reviewsId = useSelector(({productData: {reviewsId}}: {productData: ProductDataType}) => (reviewsId))

  useEffect(() => {
    if(reviewsId.length){
      const selectedReviewsId = reviewsId.filter((reviewId, index) => index < 10)
      getReviewsRecursive(selectedReviewsId, setReviewsList)
    }
  }, [reviewsId])

  // function handleChange(event: React.ChangeEvent<unknown>, value: number){
  //   if(value - 1 === 0 && reviews.length < 10){
  //     setNewReviewsList(reviews)
  //   } else if(value - 1 === 0 && reviews.length - 1 === 9){
  //     const newArray = reviews.filter((item, index) => index < 9)
  //     setNewReviewsList(newArray)
  //   } else if(value - 1 > 0 && reviews.length - 1 >= (value - 1) * 10){
  //     const newArray = reviews.slice((value - 1) * 10 - 10, (value - 1) * 10)
  //     setNewReviewsList(newArray)
  //   } else if(value - 1 > 0 && reviews.length - 1 < (value - 1) * 10){
  //     const newArray = reviews.slice((value - 1) * 10 - 10, reviews.length - 1)
  //     setNewReviewsList(newArray)
  //   }
  // }

  function handleChange(event: React.ChangeEvent<unknown>, value: number){
    console.log(value)
    const selectedReviewsId = reviewsId.filter((reviewId, index) => index >= (value - 1) * 10 && index < (value) * 10)
    getReviewsRecursive(selectedReviewsId, setReviewsList)
  }

  return (
    <Stack spacing={2}>
      <ReviewsList reviewsList={reviewsList} />
      <Pagination count={reviewsId?.length < 10 ? 1 : Math.round(reviewsId?.length / 10) * 10 < reviewsId?.length ? Math.round(reviewsId?.length / 10) + 1 : Math.round(reviewsId?.length / 10)} 
      onChange={handleChange} />
    </Stack>
  );
}