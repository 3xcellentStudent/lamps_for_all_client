import { ProductIdType } from '@/types/main/product.type';
import {Rating, Stack, Typography} from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface Props {
  rating: string
  content?: string
  size: "small" | "medium" | "large"
}

export default function RatingComp({rating, content, size}: Props){
  
  const [{primaryBg, textPrimary, secondaryBg}, setColors] = useState<
    {primaryBg: string, textPrimary: string, secondaryBg: string}
  >({primaryBg: "", textPrimary: "", secondaryBg: ""})

  const data = useSelector(({data}: {data: ProductIdType}) => data)
  useEffect(() => {
    const {backgrounds: {primary: primaryBg, secondary}, text: {primary: textPrimary}} = data.theme.colors
    setColors({primaryBg: primaryBg.rgb, textPrimary: textPrimary.hex, secondaryBg: `rgb(${secondary.rgb})`})
    document.querySelectorAll(".css-1c99szj-MuiRating-icon").forEach(selector => selector.setAttribute("style", `color: rgba(${primaryBg});`))
  }, [data])

  useEffect(() => document.querySelectorAll(".css-1c99szj-MuiRating-icon")
  .forEach(selector => selector.setAttribute("style", `color: rgba(${primaryBg});`)), [primaryBg])

  return (
    <div className="h-min flex items-center">
      <Stack spacing={1}>
        <Rating sx={{color: `rgb(${primaryBg})`, backgroundColor: `rgb(${secondaryBg})`}} size={size} value={+rating} precision={.1} readOnly />
      </Stack>
      <Typography className='ml-2.5 whitespace-nowrap text-xl' sx={{color: textPrimary}} component="span">{content}</Typography>
    </div>
  )
}
