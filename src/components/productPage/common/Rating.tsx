import {Rating, Stack} from '@mui/material';

interface Props {
  rating: number
  cls: string
}

export default function CardTop({rating, cls}: Props){
  return (
    <div className={`flex whitespace-nowrap font-bold uppercase ${cls}`}>
      Stars: {rating}
      <Stack className='mx1-1' spacing={1}>
        <Rating name="read-only" value={rating} precision={.1} readOnly />
      </Stack>
    </div>
  )
}
