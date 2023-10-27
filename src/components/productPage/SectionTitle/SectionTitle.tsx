import Rating from '../common/Rating'
import MainLargeBtn from '../../common/MainLargeBtn/MainLargeBtn'
import './SectionTitle.scss'
import { useState, useEffect, useRef } from 'react'
import Quantity from '../../common/Quantity/Quantity'
import SelectField from './parts/SelectField/SelectField'
import CarouselImages from './parts/CarouselImages/CarouselImages'
import { useDispatch, useSelector } from 'react-redux'
import {actionCartSaga} from '@/redux/actions'
import {PUT_CART_ALL} from '@/redux/constants/cartConst'

interface Props {
  pageId: string
  rating: number
  data: {
    title: string
    price: number
    images: string[]
    purchaseDetails: {
      quantityMax: number
      fields: {
        name: string 
        items: {value: string, color: string}[]
      }[]
    }
  }
  images: {media: string, src: string}[][]
}

export default function SectionTitle({pageId, rating, data, images}: Props){

  const dispatch = useDispatch()
  
  const [quantity, setQuantity] = useState(1)
  const fieldsRef = useRef([])

  function setTotalObj(idx: number, value: string){fieldsRef.current[idx].value = value}

  function dispatchToCart(){
    const resultObj = {
      productName: data.title,
      productId: pageId,
      productImg: images[0][0].src,
      quantity,
      quantityMax: data.purchaseDetails.quantityMax,
      fields: fieldsRef.current
    }
    dispatch(actionCartSaga({type: PUT_CART_ALL, payload: resultObj}))
  }

  return(
    <section className='section_title P_product_common flex line_section_divider'>
      <CarouselImages images={images} clsWrap='w-full h-full' />
      <div className='section_title__content_right w-6/12 my-auto mx-auto'>
        <div className="flex items-start flex-col justify-between line_title_left w-min">
          <h3 className='fos-x1_5 font-bold text-center whitespace-nowrap 
          w-min relative'>{data.title}</h3>
          <p className=' fos-x1_25 mb-1'>
            {/* <span className='text-blue-600'>Price per unit:</span>  */}
            <span className='text-blue-600'>Price:</span> 
            <span className='line-through'>{data.oldPrice ? `${data.oldPrice}$` : ''}</span>
            <span className='mx1-1'>{data.price}$</span>
          </p>
          <Rating text={rating} cls='h-min fos-x1' rating={rating} />
        </div>

        <ul className='flex flex-wrap w-full'>
          {data.purchaseDetails?.fields.map((obj, idx, array) => {
            const {name, items} = obj
            const fieldsCompr = fieldsRef.current.length + 1 <= array.length
            if(fieldsCompr){fieldsRef.current.push({name, value: items[0].value})}
            return <SelectField key={idx} setTotalObj={setTotalObj} 
            idx={idx} name={name} items={items} />
          })}
        </ul>

        <Quantity quantity={quantity} setQuantity={setQuantity} 
        text={`Quantity (max ${data.purchaseDetails?.quantityMax}):`} 
        quantityMax={data.purchaseDetails?.quantityMax} />
        <MainLargeBtn text="Buy Now" data={""} action={dispatchToCart} />
      </div>
    </section>
  )
}



// "https://static.wixstatic.com/media/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png/v1/fill/w_336,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png",