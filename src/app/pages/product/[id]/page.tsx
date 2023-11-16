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
import { useDispatch, useSelector } from 'react-redux'
import {actionSETOpenCart} from '@/redux/actions'
import CartList from '@/components/common/CartList/CartList'
// import SnackbarComp from '@/components/common/SnackbarComp/SnackbarComp'

export default function Product(){

  const {id} = useParams()

  const dispatch = useDispatch()
  // const isOpenCart = useSelector(({isOpenCart}: {isOpenCart: boolean}) => isOpenCart)
  // const statusCode = useSelector(({statusCode}: {statusCode: number}) => statusCode)

  const [data, setData] = useState(fieldProductID)

  useEffect(() => {
    const secondId = "F2R2l6dJ1NlRfAcbPP8P"
    setData(dataDB[id])
  }, [])

  return(
    <div className="product_page_wrapper">
      <SectionTitle images={data.images} pageId={id} rating={data.rating} data={data.sectionTitle}/>
      <SectionDescr data={data.sectionDescr}/>
      <SectionDetails data={data.sectionDetails} />
      <SectionReviews data={data.sectionReviews} />
      {/* <DrawerComponent closeCart={() => dispatch(actionSETOpenCart())} 
      anchor='right' cartOpen={isOpenCart}>
        <CartList/>
      </DrawerComponent> */}
      {/* <SnackbarComp status={statusCode} /> */}
    </div>
  )
}