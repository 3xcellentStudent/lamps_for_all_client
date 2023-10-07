import Rating from '../common/Rating'
import BuyButton from './parts/BuyButton/BuyButton'
import './SectionTitle.scss'
import { useState } from 'react'
import Quantity from './parts/Quantity'
import ImgWrapper from '../common/ImgWrapper'
import SelectField from './parts/SelectField/SelectField'
import CarouselImages from './parts/CarouselImages/CarouselImages'

interface Props {
  rating: number
  data: {
    title: string
    price: number
    images: string[]
    purchaseDetails: {
      fields: {
        name: string 
        items: {text: string, color: string}[]
      }[]
    }
  }
}

export default function SectionTitle({rating, data}: Props){

  const [totalPrice, setTotalPrice] = useState(data.price)
  const [quantity, setQuantity] = useState(1)

  return(
    <section className='section_title P_product_common flex line_section_divider'>
      <CarouselImages images={data.images} clsWrap='w-full h-full' />
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

        <div className='flex flex-wrap w-full mb-4'>
          {data.purchaseDetails?.fields.map((obj, idx) => 
          <SelectField key={idx} name={obj.name} items={obj.items} />)}
        </div>

        <Quantity quantity={quantity} setQuantity={setQuantity} 
        purchaseDetails={data.purchaseDetails} />
        <p className='text-blue-600 font-bold mb-6'>
          Total price: {quantity * data?.price}$
        </p>
        <BuyButton/>
      </div>
    </section>
  )
}