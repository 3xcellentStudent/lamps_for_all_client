import {Rating, Stack} from '@mui/material';

interface Props {
  rating: number
  props: {
    color: string
    clsCont: string
    ratingCls: string
    textCls: string | number
    text: string
    size: "small" | "medium" | "large"
  }
}

export default function CardTop({rating, props}: Props){
  return (
    <div className={`flex ${props?.color} ${props?.clsCont}`}>
      <Stack spacing={1}>
        <Rating className={`${props?.ratingCls} ${props?.color}`} size={props?.size} value={rating} precision={.1} readOnly />
      </Stack>
      <span className={`${props?.textCls} ${props?.color}`}>{props?.text}</span>
    </div>
  )
}
