import {Rating, Stack} from '@mui/material';

interface Props {
  stars: number
}

export default function CardTop({stars}: Props){
  return (
    <div className='flex whitespace-nowrap fos-x1 font-bold uppercase'>
      Stars: {stars}
      <Stack className='mx1-1' spacing={1}>
        <Rating name="read-only" value={stars} precision={.1} readOnly />
      </Stack>
    </div>
  )
}
