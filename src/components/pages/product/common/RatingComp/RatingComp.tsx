import { GlobalDataType } from '@/types/main/globalData.type';
import {Rating, Stack, Typography} from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

interface Props {
  rating: string
  content?: string
  iconSize?: number
}

export default function RatingComp({rating, content, iconSize: fontSize}: Props){
  
  const {elementsOptionalBg, primaryText} = useSelector(({
    globalData: {colors: {backgrounds, text}}
  }: {globalData: GlobalDataType}) => ({...backgrounds, ...text}))

  useEffect(() => document.querySelectorAll(".css-1c99szj-MuiRating-icon")
  .forEach(selector => selector.setAttribute("style", `color: rgba(${elementsOptionalBg.rgb});`)), [elementsOptionalBg])

  return (
    <div className="h-min flex items-center">
      <Stack spacing={1}>
        <Rating value={+rating} precision={0.1} readOnly
        icon={<StarRoundedIcon sx={{fontSize, stroke: "#fff"}} />} 
        emptyIcon={<StarBorderRoundedIcon sx={{fontSize, stroke: "#fff"}} />} 
        />
      </Stack>
      <Typography className='ml-2.5 whitespace-nowrap text-xl' sx={{color: primaryText.hex}} component="span">{content}</Typography>
    </div>
  )
}
