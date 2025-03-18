// import { ImagesArrayType } from "@/types/productPage.types/sectionDescr"
import { useRef, useState} from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Typography } from "@mui/material";
import Button from "@/components/common/Buttons/Button";
import Link from "next/link";
import { decrement, increment } from "./actions/PositionActions";
import { ProductDataType } from '@/types/main/productData.type';
import styles from "./styles.module.scss"

interface Props {
  descriptionVideo: string
  backgroundColor: string
}

export default function DescriptionContent({descriptionVideo, backgroundColor}: Props){

  const carouselWrapRef = useRef<any>(null)

  return(
    <Box className={`${styles.video_container}`}>
      <div className={`${styles.video_wrapper}`}>
        <video className={`${styles.player}`} muted autoPlay loop
        src='//vitruvi.ca/cdn/shop/videos/c/vp/f7e3669e31214c2784b8397c480a6987/f7e3669e31214c2784b8397c480a6987.HD-1080p-2.5Mbps-30987013.mp4?v=0'></video>
      </div>
    </Box>

    // <Typography component="div" ref={carouselWrapRef}
    // className="carousel relative w-[55%] overflow-hidden flex items-center mx-auto">
    //   <ul style={{'--amountElems': images?.length, '--carouselPos': `${position}px`}} 
    //   className="flex flex-row absolute h-full w-full top-0 left-0">
    //     {images?.map((array, idx) => {
    //       return(
    //         <div key={idx}>
    //           <Link href={array[array.length]?.src || ""}>
    //             <picture className="w-full h-full block">
    //               {array.map(({media, src}, idx) => {
    //                 const styles = "w-full h-full block absolute object-cover"
    //                 return media.length ? 
    //                 (<source className={styles} key={idx} media={media} srcSet={src} />) : 
    //                 <img key={idx} src={src} alt="" className={styles} />
    //               })}
    //             </picture>
    //           </Link>
    //         </div>
    //       )
    //     })}
    //   </ul>

      // <Button disabled={false} handleClick={() => setPosition(decrement(carouselWrapRef.current, position, images.length))} 
      // className="carousel_btn left-2 absolute z-[2]">
      //   <NavigateBeforeIcon className="pointer-events-none" fontSize="large" />
      // </Button>
      // <Button disabled={false} handleClick={() => setPosition(increment(carouselWrapRef.current, position, images.length))} 
      // className="carousel_btn right-2 absolute z-[2]">
      //   <NavigateNextIcon className="pointer-events-none" fontSize="large" />
      // </Button>
    // </Typography>
  )
}