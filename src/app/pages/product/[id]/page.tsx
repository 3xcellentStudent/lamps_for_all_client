'use client'
import {useEffect, useState, useRef} from 'react'
// import {useSelector} from 'react-redux'
import {fieldProductID} from './stateFields'
import dataDB from '../data.json'
import SectionTitle from '@/components/productPage/SectionTitle/SectionTitle'
import SectionDescr from '@/components/productPage/SectionDescr/SectionDescr'
import SectionDetails from '@/components/productPage/SectionDetails/SectionDetails'
import './styles.scss'
import SectionReviews from '@/components/productPage/SectionReviews/SectionReviews'

export default function Product(){

  // const {product} = useSelector(state => state)

  const [data, setData] = useState(fieldProductID)

  useEffect(() => {setData(dataDB)}, [])

  useEffect(() => {console.log('Updated !!!')}, [])

  return(
    <div className="product_page_wrapper">
      <SectionTitle rating={data.rating} data={data.sectionTitle}/>
      <SectionDescr data={data.sectionDescr}/>
      <SectionDetails data={data.sectionDetails} />
      <SectionReviews data={data.sectionReviews} />
    </div>
  )
}