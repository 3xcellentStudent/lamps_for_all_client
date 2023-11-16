import Rating from '../common/Rating'
import MainLargeBtn from '../../common/MainLargeBtn/MainLargeBtn'
import './SectionTitle.scss'
import { useRef } from 'react'
import Quantity from '../../common/Quantity/Quantity'
import SelectField from './parts/SelectField/SelectField'
import CarouselImages from './parts/CarouselImages/CarouselImages'
import { useDispatch } from 'react-redux'
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
        type: string 
        items: {value: string, cartInfo: string}[]
      }[]
    }
  }
  images: {media: string, src: string}[][]
}

interface FieldsRefType {
  name: string
  type: string
  value: string
  cartInfo: string
  index: number
}

interface SetTotalObjType {
  elemIdx: number
  index: number
  data: {value: string, cartInfo: string}
}

export default function SectionTitle({pageId, rating, data, images}: Props){

  const dispatch = useDispatch()
  
  const quantityRef = useRef(1)
  const fieldsRef = useRef<FieldsRefType[]>([])

  function setTotalObj({elemIdx, index, data}: SetTotalObjType){
    const {value, cartInfo} = data
    fieldsRef.current[elemIdx].value = value
    fieldsRef.current[elemIdx].cartInfo = cartInfo
    fieldsRef.current[elemIdx].index = index
  }

  const createFieldsArray = () => {
    const fields: {}[] = []
    for(let i = 0; i < fieldsRef.current.length; i++){
      const copyObj = Object.assign({}, fieldsRef.current[i])
      fields.push(copyObj)
    }
    return fields
  }

  function dispatchToCart(){
    const {name, value} = fieldsRef.current[0]
    
    const resultObj = {
      productName: data.title,
      productId: pageId,
      productImg: images[0][0].src,
      quantity: quantityRef.current,
      quantityMax: data.purchaseDetails.quantityMax,
      fields: createFieldsArray(),
      displayedField: {name, value}
    }
    dispatch(actionCartSaga({type: PUT_CART_ALL, payload: resultObj}))
  }

  return(
    <section className='section_title P_product_common flex line_section_divider'>
      <CarouselImages images={images} clsWrap='w-full h-full'/>
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
            const {name, type, items} = obj
            const {value, cartInfo} = items[0]
            const fieldsCompr = fieldsRef.current.length + 1 <= array.length
            if(fieldsCompr){
              fieldsRef.current.push({name, type, value, cartInfo, index: 0})
            }
            return <SelectField key={idx} setTotalObj={setTotalObj} 
            elemIdx={idx} name={name} items={items} />
          })}
        </ul>

        <Quantity action={(result: number) => quantityRef.current = result} 
        text={`Quantity (max ${data.purchaseDetails?.quantityMax}):`} 
        clsBtn='w-9 h-9' clsInput='' cls="mb-6" clsIcons=''
        quantityMax={data.purchaseDetails?.quantityMax} quantity={quantityRef.current} />
        <MainLargeBtn cls="" text="Add to Cart" action={dispatchToCart} />
      </div>
    </section>
  )
}



// "https://static.wixstatic.com/media/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png/v1/fill/w_336,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png",