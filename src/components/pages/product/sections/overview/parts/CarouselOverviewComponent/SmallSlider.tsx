import { ProductIdType } from "@/types/main/product.type";
import { styled, Typography } from "@mui/material";
import { Dispatch, PointerEvent, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss"

const CustomButton = styled("button")({})

export default function SmallSlider({carouselIndex, setCarouselIndex}: {carouselIndex: number, setCarouselIndex: Dispatch<SetStateAction<number>>}){

  const {images, elementsSecondary} = useSelector(({
    data: {mediaContent: {images}, theme: {colors: {backgrounds: {elementsSecondary}}}}
  }: {data: ProductIdType}) => ({images, elementsSecondary}));

  const [position, setPosition] = useState<number>(0)
  
  const wrapperWidthRef = useRef<HTMLDivElement | null>(null)
  // const containerWidthRef = useRef<HTMLDivElement | null>(null)
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
    // containerWidthRef.current?.classList.add("inactive")
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
    const wrapperWidth = wrapperWidthRef.current?.clientWidth || document.getElementById("small_slider_wrapper")?.clientWidth || 0
    const totalHeight = (images.length - 1) * wrapperWidth
    const multiplier = Math.round(position / wrapperWidth)
    if(position < 0) setPosition(0);
    else if(position > totalHeight) setPosition(totalHeight);
    else setPosition(multiplier * wrapperWidth)
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
    }
    conditions.current.isButtonPressed = false;
    conditions.current.isButtonUnpressed = true;
    conditions.current.downY = position;
    conditions.current.mainLock = true
    // containerWidthRef.current?.classList.remove("inactive")
    window.removeEventListener("pointermove", carouselPointerMove)
    calcFocus()
  }, [position]);

  // useCallback(() => setPosition(wrapperWidthRef.current?.clientWidth * -carouselIndex), [carouselIndex])

  useEffect(() => {setPosition(wrapperWidthRef.current?.clientWidth + (wrapperWidthRef.current?.clientWidth * -(carouselIndex)))}, 
  [carouselIndex !== activeElementIndex.current])

  useEffect(() => {
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [position]);

  return(
    <div ref={wrapperWidthRef} id="small_slider_wrapper" 
    className={`relative flex-col flex items-center justify-center ${styles.small_slider_wrapper}`}>
      <div className="absolute w-full overflow-hidden" onPointerDown={carouselPointerDown}>
      <Typography component="div"  style={{"--small_slider_position": position + "px"}} 
      className={`relative w-full flex flex-col ${styles.small_slider_container}`} 
      sx={wrapperWidthRef.current &&  {transition: conditions.current.isButtonPressed ? "0ms" : "500ms",}} >
        {images.map((element, index) => {
          return(
            <CustomButton id={`carousel-button-id_${index}`} key={index} className={`relative w-full h-full`} 
            sx={{border: carouselIndex === index ? `2px solid ${elementsSecondary.hex}` : ""}}>
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