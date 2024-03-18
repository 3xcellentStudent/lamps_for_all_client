import ImgWrapper from "@/components/common/ImgWrapper"
import { ImagesArrayType, SectionDescrSxType, SectionDescrType } from "@/types/productPage.types/sectionDescr"
import {MutableRefObject, RefObject, useRef, useState} from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ButtonBase, Typography } from "@mui/material";
import TypographyComp from "@/components/common/TypographyComp";
import Button from "@/components/common/Button/Button";
import Link from "next/link";
import { decrement, increment } from "./actions/PositionActions";

interface Props {
  images: ImagesArrayType
  sx: SectionDescrSxType
}

export default function CarouselImages({images, sx}: Props){

  const [position, setPosition] = useState(0)

  const carouselWrapRef = useRef<any>(null)

  return(
    <Typography sx={sx?.sxImgWraper} component="div" ref={carouselWrapRef}
    className="carousel relative w-6/12 overflow-hidden rounded-2xl flex items-center mx-auto">
      <ul style={{'--amountElems': images?.length, '--carouselPos': `${position}px`}} 
      className="flex flex-row absolute h-full w-full top-0 left-0">
        {images?.map((array, idx) => {
          return(
            <ImgWrapper key={idx} cls="">
              <Link href={array[array.length]?.src || ""}>
                <picture className="w-full h-full block">
                  {array.map(({media, src}, idx) => {
                    const styles = "w-full h-full block absolute object-cover"
                    return media.length ? 
                    (<source className={styles} key={idx} media={media} srcSet={src} />) : 
                    <img key={idx} src={src} alt="" className={styles} />
                  })}
                </picture>
              </Link>
            </ImgWrapper>
          )
        })}
      </ul>

      <Button handleClick={e => setPosition(decrement(carouselWrapRef.current, position, images.length))} 
      sx={sx?.sxBtn} cls="carousel_btn left-2 absolute z-[2]">
        <NavigateBeforeIcon className="pointer-events-none" sx={sx?.sxIcon} fontSize="large" />
      </Button>
      <Button handleClick={e => setPosition(increment(carouselWrapRef.current, position, images.length))} sx={sx?.sxBtn} cls="carousel_btn right-2 absolute z-[2]">
        <NavigateNextIcon className="pointer-events-none" sx={sx?.sxIcon} fontSize="large" />
      </Button>
    </Typography>
  )
}