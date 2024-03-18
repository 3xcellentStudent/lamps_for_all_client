import TypographyComp from '@/components/common/TypographyComp';
import {Box, Rating, Stack} from '@mui/material';

interface Props {
  rating: number
  props: {
    sxBox: {}
    sxRating: {}
    sxText: {}
    content: string
  }
  size: "small" | "medium" | "large"
  clsBox: string
}

export default function RatingComp({clsBox, rating, props, size}: Props){

  return (
    <Box className={clsBox} sx={props?.sxBox}>
      <Stack spacing={1}>
        <Rating sx={props?.sxRating} 
        size={size} value={rating} precision={.1} readOnly />
      </Stack>
      <TypographyComp cls='' sx={props?.sxText} comp="span">{props?.content}</TypographyComp>
    </Box>
  )
}
