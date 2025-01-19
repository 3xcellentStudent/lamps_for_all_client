import { Typography } from '@mui/material'
import styles from "./styles.module.scss";
import Purchase from './parts/PurchaseOverviewComponent/Purchase';
import BigSlider from './parts/CarouselOverviewComponent/BigSlider';
import SmallSlider from './parts/CarouselOverviewComponent/SmallSlider';
import { useState } from 'react';

interface Props {
  productId: string | string[]
}

export default function Overview({productId}: Props){

  const [carouselIndex, setCarouselIndex] = useState<number>(0)

  return(
    <Typography component="section" className={`${styles.section}`}>
      <div className='flex flex-row w-[50%]'>
        <SmallSlider carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} />
        <BigSlider carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} />
      </div>
      <Purchase productId={productId as string} />
    </Typography>
  )
}