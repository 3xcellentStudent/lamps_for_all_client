import { Box, Typography } from '@mui/material'
import styles from "./styles.module.scss";
import Purchase from './parts/PurchaseOverviewComponent/Purchase';
import BigSlider from './parts/CarouselOverviewComponent/BigCarousel/BigCarousel';
import SmallSlider from './parts/CarouselOverviewComponent/SmallCarousel/SmallCarousel';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { GlobalDataType } from '@/types/main/globalData.type';

interface Props {
  productId: string | string[]
}

export default function Overview({productId}: Props){

  const [carouselIndex, setCarouselIndex] = useState<number>(0)

  const {optionalBg, elementsSecondaryBg} = useSelector(({
    globalData: {colors: {backgrounds}}
  }: {globalData: GlobalDataType}) => ({...backgrounds}))

  return(
    <Typography component="section" sx={{
      "&:before": {backgroundColor: optionalBg.hex}, background: `linear-gradient(to right, ${elementsSecondaryBg.hex} 50%, transparent 50%)`
    }} className={`${styles.section}`}>
      <div className={`${styles.wrapper}`}>
        <Box className={`w-[50%] ${styles.slider_container}`} >
          <div className='w-full flex flex-row' >
            <SmallSlider carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} />
            <BigSlider carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} />
          </div>
        </Box>
        <Purchase carouselState={{state: carouselIndex, action: setCarouselIndex}} productId={productId as string} />
      </div>
    </Typography>
  )
}