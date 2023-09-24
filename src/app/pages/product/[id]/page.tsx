'use client'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import SelectField from '@/components/SelectField'
import BuyButton from '@/components/productPage/BuyButton/BuyButton'
import {fieldProductID} from './stateFields'
import SectionText from '@/components/productPage/SectionText/SectionText'
import SectionDetails from '@/components/productPage/SectionDetails/SectionDetails'
import dataDB from '../data.json'

export default function Product(){
  // const product = useSelector(state => state.product)

  const [
    {
      status,
      localization, 
      settings, 
      fieldsInfo, 
      images, 
      video,
      description,
      service,
      reviews,
      delivery,
      seller,
      specifications,
    }, 
    setData
  ] = useState(fieldProductID)

  useEffect(() => {setData(dataDB)}, [])

  return(
    <>
      <section className="flex justify-between h-96 wrapper_big">
        <div className="relative w-6/12">
          <img src="https://cdn-60c13ad2c1ac185aa47dad63.closte.com/wp-content/uploads/2021/09/Inoleds-Curve-Table-Lamp-6.jpg" alt="" className="absolute object-scale-down w-full h-full" />
        </div>
        <div className="w-6/12">
          <h1 className='mb-4'>{settings.title}</h1>
          <p className='mb-4'>
            <span className="mr-3">4500</span>
            <span className="line-through">3500</span>
          </p>
          {fieldsInfo.map((obj, idx) => {
            return <SelectField key={idx} data={obj} cls='mb-4' />
          })}
          <BuyButton/>
        </div>
      </section>
      {description.map((data, idx) => {
        return <SectionText key={idx} data={data} />
      })}
      <SectionDetails data={[delivery.packageDetail, specifications]} />
    </>
  )
}