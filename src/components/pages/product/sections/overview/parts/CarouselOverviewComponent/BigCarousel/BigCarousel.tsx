import { ProductDataType } from "@/types/main/productData.type";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss"
import { styled, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { GlobalDataType } from "@/types/main/globalData.type";

const CustomButton = styled("button")({})

export default function BigCarousel({carouselIndex, setCarouselIndex}: {carouselIndex: number, setCarouselIndex: Dispatch<SetStateAction<number>>}){

  const {productData, elementsSecondaryBg} = useSelector(({
    productData, globalData: {colors: {backgrounds}}
  }: {productData: ProductDataType, globalData: GlobalDataType}) => ({productData, ...backgrounds}));

  const [position, setPosition] = useState<number>(0)

  const wrapperRef = useRef<HTMLDivElement | null>(null)

  function pointerPrev(){
    const carouselWidth = wrapperRef.current ? wrapperRef.current?.clientWidth : 0;
    if(position < 0){
      setPosition(prev => prev + carouselWidth)
      setCarouselIndex(prev => prev - 1)
    }
  }

  function pointerNext(){
    const carouselWidth = wrapperRef.current ? wrapperRef.current?.clientWidth : 0;
    if(position > -carouselWidth * (productData?.mediaContent?.images?.length - 1)){
      setCarouselIndex(prev => prev + 1)
      setPosition(prev => prev - carouselWidth)
    }
  }

  function changePositionWithIndex(index: number){
    const carouselWidth = wrapperRef.current ? wrapperRef.current?.clientWidth : 0;
    setPosition(index * -carouselWidth);
  }
  
  useEffect(() => changePositionWithIndex(carouselIndex), [carouselIndex])

  // useEffect(() => {
  //   window.onresize = () => {wrapperRef.current && setCarouselWidth(wrapperRef.current?.clientWidth)}
  // }, [])

  return(
    <div ref={wrapperRef} className={`w-[50%] relative flex items-center justify-center ${styles.big_slider_wrapper}`}>
      <div className="absolue h-full w-full overflow-hidden">
        <Typography component="div" className="relative h-full flex overflow-y-hidden" 
        sx={wrapperRef.current &&  {width: productData?.mediaContent?.images?.length * wrapperRef.current?.clientWidth}} >
          {productData?.mediaContent?.images?.map((element, idx) => {
            return(
              <Typography component="div" sx={{left: position}} className={`relative w-full h-full ${styles.big_slider_slide}`} key={idx}>
                <picture className="w-full h-full block relative">
                  {element.map((source, idx) => {
                    if(!source.media) return <img className="object-scale-down absolute w-full h-full" key={idx} src={source.src} alt="" />
                    else return <source className="object-scale-down absolute" width="100%" height="100%" 
                    key={idx} srcSet={source.src} media={source.media} />
                  })}
                </picture>
              </Typography>
            ) 
          })}
        </Typography>
      </div>

      <CustomButton sx={{backgroundColor: elementsSecondaryBg.hex}} className={`left-[40px] ${styles.big_slider_slide_button}`} 
      onPointerDown={pointerPrev}>
        <ArrowBackIosNewIcon/>
      </CustomButton>
      <CustomButton sx={{backgroundColor: elementsSecondaryBg.hex}} className={`right-[40px] ${styles.big_slider_slide_button}`} 
      onPointerDown={pointerNext} >
        <ArrowForwardIosIcon/>
      </CustomButton>
    </div>
  )
}