import { ProductIdType } from "@/types/main/product.type";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss"
import { styled, Typography } from "@mui/material";
import { useRef, useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CustomButton = styled("button")({})

export default function BigSlider(){

  const {images, backgrounds: {elementsSecondary}} = useSelector(({data: {
    mediaContent: {images}, theme: {colors: {backgrounds}}
  }}: {data: ProductIdType}) => ({images, backgrounds}));

  const [position, setPosition] = useState<number>(0)

  const wrapperRef = useRef<HTMLDivElement | null>(null)

  class PositionManager {
    public static prev(){
      const carouselWidth = wrapperRef.current ? wrapperRef.current?.clientWidth : 0;
      if(position < 0) setPosition(prev => prev + carouselWidth)
    }

    public static next(){
      const carouselWidth = wrapperRef.current ? wrapperRef.current?.clientWidth : 0;
      if(position > -carouselWidth * (images.length - 1)) setPosition(prev => prev - carouselWidth);
    }
  }

  // useEffect(() => {
  //   window.onresize = () => {wrapperRef.current && setCarouselWidth(wrapperRef.current?.clientWidth)}
  // }, [])

  return(
    <div ref={wrapperRef} className={`w-[50%] relative flex items-center justify-center ${styles.big_slider_wrapper}`}>
      <div className="absolue h-full w-full overflow-hidden">
      <Typography component="div" className="relative h-full flex overflow-y-hidden" 
      sx={wrapperRef.current &&  {width: images.length * wrapperRef.current?.clientWidth}} >
        {images.map((element, idx) => {
          return(
            <Typography component="div" sx={{left: position}} className={`relative w-full h-full ${styles.big_slider_slide}`} key={idx}>
              <picture className="w-full h-full block">
                {element.map((source, idx) => {
                  if(!source.media) return <img key={idx} src={source.src} alt="" />
                  else return <source width="100%" height="100%" key={idx} srcSet={source.src} media={source.media} />
                })}
              </picture>
            </Typography>
          ) 
        })}
      </Typography>
      </div>

      <CustomButton sx={{backgroundColor: elementsSecondary.hex}} className={`left-[40px] ${styles.big_slider_slide_button}`} 
      onPointerDown={PositionManager.prev}>
        <ArrowBackIosNewIcon/>
      </CustomButton>
      <CustomButton sx={{backgroundColor: elementsSecondary.hex}} className={`right-[40px] ${styles.big_slider_slide_button}`} 
      onPointerDown={PositionManager.next} >
        <ArrowForwardIosIcon/>
      </CustomButton>
    </div>
  )
}