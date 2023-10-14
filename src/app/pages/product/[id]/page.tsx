'use client'
import {useEffect, useState, useRef} from 'react'
import {fieldProductID} from './stateFields'
import dataDB from '../data.json'
import SectionTitle from '@/components/productPage/SectionTitle/SectionTitle'
import SectionDescr from '@/components/productPage/SectionDescr/SectionDescr'
import SectionDetails from '@/components/productPage/SectionDetails/SectionDetails'
import './styles.scss'
import SectionReviews from '@/components/productPage/SectionReviews/SectionReviews'
import { useParams } from 'next/navigation'
import DrawerComponent from '@/components/common/DrawerComponent/DrawerComponent'
import BasketList from '@/components/productPage/BasketList/BasketList'
import { useDispatch, useSelector } from 'react-redux'
import {actionSETOpenCart} from '@/redux/actions/actions'

export default function Product(){

  const {id} = useParams()
  const isOpenCart = useSelector(({isOpenCart}: {isOpenCart: boolean}) => isOpenCart)
  const dispatch = useDispatch()

  const [data, setData] = useState(fieldProductID)

  useEffect(() => {setData(dataDB)}, [])

  return(
    <div className="product_page_wrapper">
      <SectionTitle pageId={id} rating={data.rating} data={data.sectionTitle}/>
      <SectionDescr data={data.sectionDescr}/>
      <SectionDetails data={data.sectionDetails} />
      <SectionReviews data={data.sectionReviews} />
      <DrawerComponent closeCart={() => dispatch(actionSETOpenCart())} 
      anchor='right' cartOpen={isOpenCart}>
        <BasketList/>
      </DrawerComponent>
    </div>
  )
}