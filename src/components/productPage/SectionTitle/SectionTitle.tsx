import Rating from '../common/Rating'
import MainLargeBtn from '../../common/MainLargeBtn/MainLargeBtn'
import './SectionTitle.scss'
import { useEffect, useRef, useState } from 'react'
import Quantity from '../../common/Quantity/Quantity'
import SelectionField from './parts/SelectField/SelectionField'
import CarouselImages from './parts/CarouselImages/CarouselImages'
import { useDispatch } from 'react-redux'
import {actionCartSaga} from '@/redux/actions'
import {PUT_CART_ALL} from '@/redux/constants/cartConst'
import {Props, FieldsRefType, SetTotalObjType, ComponentsType} from '@/types/productPage.types/sectionTitle/sectionTitle'

export default function SectionTitle({pageId, settings, sectionData, images}: Props){

  const dispatch = useDispatch()
  const quantityRef = useRef<number>(1)
  const fieldsRef = useRef<FieldsRefType[]>([])

  const [sectionDataS, setSectionDataS] = useState(sectionData)
  useEffect(() => setSectionDataS(sectionData), [sectionData])

  function setTotalObj({elemIdx, index, data}: SetTotalObjType){
    const {value, properties} = data
    console.log(fieldsRef.current[elemIdx])
    console.log(value, properties, index)
    fieldsRef.current[elemIdx].value = value
    fieldsRef.current[elemIdx].properties = properties
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
      productName: sectionData?.title,
      productId: pageId,
      productImg: images[0][0].src,
      quantity: quantityRef.current,
      quantityMax: sectionData?.quantityMax,
      fields: createFieldsArray(),
      displayedField: {name, value}
    }
    dispatch(actionCartSaga({type: PUT_CART_ALL, payload: resultObj}))
  }

  return(
    <section className='section_title P_product_common flex'>
      <div className={`section_title__purchase_part ${sectionDataS?.purchasePartStyles}`}>
        <div className="flex items-start flex-col justify-between w-min">
          <h5 className={`section_title__subtitle ${sectionData?.subtitle?.cls}`} >{sectionData?.subtitle?.text}</h5>
          <h3 className={`section_title__title ${sectionData?.title?.cls}`} >{sectionData?.title?.text}</h3>
          <Rating rating={settings?.rating} props={sectionData?.components?.ratingC}/>
        </div>

        <p className={`section_title__short_descr ${sectionData?.shortDescription?.cls}`}>{sectionData?.shortDescription?.text}</p>

        <div className='flex'>
          <ul className='flex flex-wrap w-full'>
            {sectionData?.components?.selectionC.map((obj, idx, array) => {
              const {fieldProps, svgProps, name, type, viewBox, items} = obj
              const {value, properties} = items[0]
              const fieldsCompr = fieldsRef.current.length + 1 <= array.length
              if(fieldsCompr){
                fieldsRef.current.push({name, type, value, properties, index: 0})
              }
              return <SelectionField fieldProps={fieldProps} svgProps={svgProps} items={items}
              key={idx} setTotalObj={setTotalObj} elemIdx={idx} viewBox={viewBox} name={name} />
            })}
          </ul>
          <Quantity action={(result: number) => quantityRef.current = result} 
          props={sectionData?.components?.quantityC} quantity={quantityRef.current}
          quantityMax={sectionData?.quantityMax} />
        </div>
        

        <MainLargeBtn cls="" text="Add to Cart" action={dispatchToCart} />
      </div>
      <CarouselImages images={images} clsWrap='w-full h-full'/>
    </section>
  )
}



// "https://static.wixstatic.com/media/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png/v1/fill/w_336,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png",