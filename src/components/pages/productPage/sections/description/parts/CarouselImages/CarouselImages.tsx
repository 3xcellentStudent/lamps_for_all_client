// import { ImagesArrayType } from "@/types/productPage.types/sectionDescr"
import { useRef, useState} from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Typography } from "@mui/material";
import Button from "@/components/common/Buttons/Button";
import Link from "next/link";
import { decrement, increment } from "./actions/PositionActions";
import { ProductIdType } from '@/types/main/product.type';

interface Props {
  descriptionVideo: string
}

export default function CarouselImages({descriptionVideo}: Props){

  const [position, setPosition] = useState(0)

  const carouselWrapRef = useRef<any>(null)

  return(
    <div className='relative w-full h-full'>
      <video className='absolute w-full h-full pointer-events-none object-scale-down' autoPlay muted src={descriptionVideo}></video>
    </div>

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