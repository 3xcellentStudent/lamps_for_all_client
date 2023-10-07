import ImgWrapper from "@/components/productPage/common/ImgWrapper"
import {useRef, useState} from 'react'

interface Props {
  images: string[]
  clsWrap: string
}

export default function CarouselImages({images, clsWrap}: Props){

  const [position, setPosition] = useState(0)

  const carouselWrapRef = useRef(null)

  function decrement(){
    const width = carouselWrapRef.current.getBoundingClientRect().width
    const condition = position + width <= 0
    const result = condition ? position + width : position
    setPosition(result)
  }
  function increment(){
    const width = carouselWrapRef.current.getBoundingClientRect().width
    const condition = position - width >= (images.length - 1) * -width
    const result = condition ? position - width : position
    setPosition(result)
  }

  return(
    <div ref={carouselWrapRef} className="carousel_wrap relative w-6/12">
      <ul style={{'--amountElems': images?.length, '--carouselPos': `${position}px`}} 
      className="flex flex-row absolute h-full top-0 left-0">
        {images?.map((src, idx) => {
          return(
            <ImgWrapper key={idx} cls={clsWrap}>
              <img className='object-cover w-full h-full block' src={src} alt="" />
            </ImgWrapper>
          )
        })}
      </ul>

      <button onClick={decrement} 
      className="carousel_wrap_btn -prev">Prev</button>
      <button onClick={increment} 
      className="carousel_wrap_btn -next">Next</button>
    </div>
  )
}