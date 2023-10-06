import {Rating, Stack} from '@mui/material';

interface Props {
  rating: number
  cls: string
  text: string | number
}

export default function CardTop({rating, text, cls}: Props){
  return (
    <div className={`flex whitespace-nowrap font-bold uppercase ${cls}`}>
      <Stack spacing={1}>
        <Rating name="read-only" value={rating} precision={.1} readOnly />
      </Stack>
      <span className='mx1-1'>{text}</span>
    </div>
  )
}
