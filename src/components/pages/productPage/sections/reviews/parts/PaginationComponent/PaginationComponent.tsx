import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { ProductIdType } from '@/types/main/product.type';
import ReviewsList from '../ReviewsList/ReviewsList';
import model from "@/data.models/components/pagination/reviews.json"

export default function PaginationComponent() {

  const {reviewsList} = useSelector(({
    data: {reviews: {reviewsList}}
  }: {data: ProductIdType}) => ({reviewsList}))

  const [newReviewsList, setNewReviewsList] = React.useState<ProductIdType["reviews"]["reviewsList"]>(reviewsList || model);

  function handleChange(event: React.ChangeEvent<unknown>, value: number){
    if(value - 1 === 0 && reviewsList.length < 10){
      setNewReviewsList(reviewsList)
    } else if(value - 1 === 0 && reviewsList.length - 1 === 9){
      const newArray = reviewsList.filter((item, index) => index < 9)
      setNewReviewsList(newArray)
    } else if(value - 1 > 0 && reviewsList.length - 1 >= (value - 1) * 10){
      const newArray = reviewsList.slice((value - 1) * 10 - 10, (value - 1) * 10)
      setNewReviewsList(newArray)
    } else if(value - 1 > 0 && reviewsList.length - 1 < (value - 1) * 10){
      const newArray = reviewsList.slice((value - 1) * 10 - 10, reviewsList.length - 1)
      setNewReviewsList(newArray)
    }
  };

  return (
    <Stack spacing={2}>
      <ReviewsList reviewsList={newReviewsList} />
      <Pagination count={reviewsList.length < 10 ? 1 : Math.round(reviewsList.length / 10)} onChange={handleChange} />
    </Stack>
  );
}