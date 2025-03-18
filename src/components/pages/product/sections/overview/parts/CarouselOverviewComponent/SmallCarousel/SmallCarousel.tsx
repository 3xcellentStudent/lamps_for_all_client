import { ProductDataType } from "@/types/main/productData.type";
import { styled, Typography } from "@mui/material";
import { Dispatch, PointerEvent, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss"
import { GlobalDataType } from "@/types/main/globalData.type";

const CustomButton = styled("button")({})

export default function SmallCarousel({carouselIndex, setCarouselIndex}: {carouselIndex: number, setCarouselIndex: Dispatch<SetStateAction<number>>}){

  const {images, elementsSecondaryBg} = useSelector(({
    productData: {mediaContent}, globalData: {colors: {backgrounds}}
  }: {productData: ProductDataType, globalData: GlobalDataType}) => ({...mediaContent, ...backgrounds}));

  const [position, setPosition] = useState<number>(0)
  // const [slideSize, setSlideSize] = useState<number>(0)
  
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const activeElementIndex = useRef<number>(0)

  const conditions = useRef({
    isButtonPressed: false,
    isButtonUnpressed: true,
    downY: 0,
    lastPosition: 0,
    mainLock: false
  })

  function carouselPointerDown(e: PointerEvent<HTMLDivElement>){
    conditions.current.isButtonPressed = true
    conditions.current.isButtonUnpressed = false
    const {clientY} = e
    conditions.current.downY = clientY;
    conditions.current.lastPosition = position;
    window.addEventListener("pointermove", carouselPointerMove)
  }

  const carouselPointerMove = useCallback((e: PointerEvent<HTMLDivElement>) => {
    const {downY, lastPosition, isButtonPressed, isButtonUnpressed, mainLock} = conditions.current
    if(isButtonPressed && !isButtonUnpressed && !mainLock){
      const {clientY} = e
      setPosition(-(downY - clientY))
    } else if(isButtonPressed && !isButtonUnpressed && mainLock){
      const {clientY} = e
      setPosition(lastPosition - (downY - clientY))
    }
  }, [])

  const calcFocus = useCallback(() => {
    const containerHeight = document.getElementById("small_slider_wrapper")?.clientHeight || 0;
    const containerWidth = document.getElementById("small_slider_wrapper")?.clientWidth || 0;
    const totalHeight = images.length * containerWidth
    const multiplier = Math.round(position / containerWidth)
    if(position > 0) setPosition(0)
    else if(position < -(totalHeight - containerHeight)) setPosition(-(totalHeight - containerHeight))
    else setPosition(multiplier * containerWidth)
  }, [position])

  const handlePointerUp = useCallback((e: any) => {
    const {downY} = conditions.current
    const event = e as PointerEvent
    if(!conditions.current.isButtonPressed) return;
    else if(downY - event.pageY === 0){
      const target = event.target as HTMLButtonElement
      const index = target.getAttribute("id")?.split("_")[1] || 0 + 1
      setCarouselIndex(+index)
      activeElementIndex.current = +index
    } else {
      calcFocus()
    }
    conditions.current.isButtonPressed = false;
    conditions.current.isButtonUnpressed = true;
    conditions.current.downY = position;
    conditions.current.mainLock = true
    window.removeEventListener("pointermove", carouselPointerMove)
  }, [position]);

  // useEffect(() => {setPosition(wrapperRef.current?.clientWidth + (wrapperRef.current?.clientWidth * -(carouselIndex)))}, 
  // [carouselIndex !== activeElementIndex.current])

  useEffect(() => {
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [position]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if(window.innerWidth > 1280){
  //       console.log(wrapperRef.current?.clientHeight / (images.length - 1))
  //       setSlideSize(wrapperRef.current?.clientHeight / (images.length - 1))
  //     }
  //   };

  //   setSlideSize(wrapperRef.current?.clientHeight / (images.length - 1))

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return(
    <div ref={wrapperRef} id="small_slider_wrapper" 
    className={`relative flex-col flex items-center justify-center overflow-hidden ${styles.small_slider_wrapper}`}>
      <div className="absolute w-full top-0" onPointerDown={carouselPointerDown}>
      <Typography component="div" style={{transform: `translateY(${position}px)`}} 
      className={`relative w-full flex flex-col ${styles.small_slider_container}`} 
      // sx={wrapperRef.current &&  {transition: conditions.current.isButtonPressed ? "0ms" : "500ms",}} >
      sx={{transition: conditions.current.isButtonPressed ? "0ms" : "500ms", }} >
        {images?.map((element, index) => {
          return(
            <CustomButton id={`carousel-button-id_${index}`} key={index} className={`relative w-full h-full ${styles.small_carousel_button}`} 
            sx={{border: carouselIndex === index ? `2px solid ${elementsSecondaryBg.hex}` : ""}}>
              <picture className="w-full h-full block pointer-events-none">
                {element.map((source, idx) => {
                  if(!source.media) return <img key={idx} src={source.src} alt="" />
                  else return <source width="100%" height="100%" key={idx} srcSet={source.src} media={source.media} />
                })}
              </picture>
            </CustomButton>
          ) 
        })}
      </Typography>
      </div>
    </div>
  )
}