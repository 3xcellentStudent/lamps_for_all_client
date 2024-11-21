import { ProductIdType } from '@/types/productPage.types/mainTypes';
import {Rating, Stack, Typography} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface Props {
  rating: number
  props: {
    content: string
  }
  size: "small" | "medium" | "large"
}

export default function RatingComp({rating, props: {content}, size}: Props){
  
  const [{mainBg, textColor, secondaryBg}, setColors] = useState<
    {mainBg: string, textColor: string, secondaryBg: string}
  >({mainBg: "", textColor: "", secondaryBg: ""})

  const data = useSelector(({data}: {data: ProductIdType}) => data)
  useEffect(() => {
    const {mainBg, secondaryBg, textColor} = data.common.theme.colors
    setColors({mainBg, textColor, secondaryBg: `rgb(${secondaryBg})`})
    document.querySelectorAll(".css-1c99szj-MuiRating-icon").forEach(selector => selector.setAttribute("style", `color: rgba(${mainBg});`))
  }, [data])

  useEffect(() => document.querySelectorAll(".css-1c99szj-MuiRating-icon")
  .forEach(selector => selector.setAttribute("style", `color: rgba(${mainBg});`)), [mainBg])

  return (
    <div className="h-min flex items-center">
      <Stack spacing={1}>
        <Rating sx={{color: `rgb(${mainBg})`, backgroundColor: `rgb(${secondaryBg})`}} size={size} value={rating} precision={.1} readOnly />
      </Stack>
      <Typography className='ml-2.5 whitespace-nowrap' sx={{color: textColor}} component="span">{content}</Typography>
    </div>
  )
}
