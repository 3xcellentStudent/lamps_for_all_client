import TypographyComp from '@/components/common/TypographyComp';
import {Rating, Stack} from '@mui/material';

interface Props {
  rating: number
  props: {
    sxRating: {}
    sxText: {}
    content: string
  }
  size: "small" | "medium" | "large"
}

export default function RatingComp({rating, props: {sxRating, sxText, content}, size}: Props){

  return (
    <div className="h-min flex items-center">
      <Stack spacing={1}>
        <Rating sx={sxRating} 
        size={size} value={rating} precision={.1} readOnly />
      </Stack>
      <TypographyComp cls='ml-2.5 whitespace-nowrap' sx={sxText} comp="span">{content}</TypographyComp>
    </div>
  )
}
