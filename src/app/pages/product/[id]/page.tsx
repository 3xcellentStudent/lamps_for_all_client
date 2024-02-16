'use client'
import {useEffect, useState} from 'react'
import dataDB from '../data.json'
import SectionTitle from '@/components/productPage/SectionTitle/SectionTitle'
import SectionDescr from '@/components/productPage/SectionDescr/SectionDescr'
import SectionDetails from '@/components/productPage/SectionDetails/SectionDetails'
import './styles.scss'
import SectionReviews from '@/components/productPage/SectionReviews/SectionReviews'
import { useParams } from 'next/navigation'
// import DrawerComponent from '@/components/common/DrawerComponent/DrawerComponent'
import { useDispatch, useSelector } from 'react-redux'
// import {actionSETOpenCart} from '@/redux/actions'
// import CartList from '@/components/common/CartList/CartList'
import { ProductIdType } from '@/types/productPage.types/mainTypes'
// import SnackbarComp from '@/components/common/SnackbarComp/SnackbarComp'

export default function Product(){

  const dataTemplate: ProductIdType = {
    sectionTitle: {
      subtitle: {cls: "", text: ""},
      title: {cls: "", text: ""},
      shortDescription: {cls: "", text: ""},
      price: 0,
      quantityMax: 0,
      purchasePartStyles: "",
      components: {
        quantityC: {text: "", clsCont: "", clsHead: "", clsIcons: "", clsInput: "", clsBtn: ""},
        ratingC: {color: "", text: "", size: "small", textCls: "", ratingCls: "", clsCont: ""},
        selectionC: [{
            fieldProps: {clsCont: "", formLabel: "", radioGroup: {}, radio: {}},
            svgProps: {position: "", width: "", height: "", left: 0, top: 0},
            name: "", type: "", viewBox: "", items: [
              {value: "", fill: "", stroke: "", properties: {
                uncheckedProps: {internal: {r: 0, cx: 0, cy: 0}, external: {r: 0, cx: 0, cy: 0}},
                checkedProps: {r: 0, cx: 0, cy: 0}
              }}
            ]}
        ]
      }
    },
    sectionDescr: {
      img: "",
      description: [],
    },
    sectionDetails: [],
    sectionReviews: {
      reviewsCount: 0,
      reviewsList: [],
    },
    settings: {
      rating: 0,
      title: "",
      textColor: "#fff",
      img: "",
    },
    images: [],
  }

  const {id} = useParams()
  
  const dispatch = useDispatch()
  // const isOpenCart = useSelector(({isOpenCart}: {isOpenCart: boolean}) => isOpenCart)
  // const statusCode = useSelector(({statusCode}: {statusCode: number}) => statusCode)
  
  const [data, setData] = useState<ProductIdType>(dataTemplate)
  
  useEffect(() => {
    const secondId = "F2R2l6dJ1NlRfAcbPP8P"
    setData(dataDB[id])
  }, [])
  
  return(
    <div className="product_page_wrapper">
      <SectionTitle images={data.images} pageId={id} settings={data.settings} sectionData={data.sectionTitle}/>
      <SectionDescr sectionData={data.sectionDescr}/>
      <SectionDetails sectionData={data.sectionDetails} />
      <SectionReviews sectionData={data.sectionReviews} />
      {/* <DrawerComponent closeCart={() => dispatch(actionSETOpenCart())} 
      anchor='right' cartOpen={isOpenCart}>
        <CartList/>
      </DrawerComponent> */}
      {/* <SnackbarComp status={statusCode} /> */}
    </div>
  )
}