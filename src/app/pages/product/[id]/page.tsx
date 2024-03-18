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
    common: {
      rating: 0,
      title: "",
      category: {id: "", name: ""},
      textColor: "#fff",
    },
    sectionTitle: {
      description: "",
      price: "",
      quantityMax: 0,
      sx: {},
      purchasePart: {
        sxCont: {},
        sxBox: {},
        components: {
          titleC: {
            sxBox: {},
            ratingC: {content: "", sxText: {}, sxRating: {}, sxBox: {}},
          },
          addCartC: {sxBox: {}, btnC: {sx: {}, sxWrap: {}}, sxPrice: {}},
          selectionC: {
            sxBox: {},
            sxList: {},
            quantityC: {sxBox: {}, sxIcon: {}, sxBtn: {}},
            fieldC: [
              {
                sxField: {sxBox: {}, sxFormLabel: {sxSpan: {}}, sxRadioGroup: {}, sxRadio: {}},
                sxSVG: {position: "", width: "", height: "", left: 0, top: 0},
                name: "", type: "", viewBox: "", items: [
                {value: "", fill: "", stroke: "", properties: {checkedProps: {r: 0, cx: 0, cy: 0}, uncheckedProps: {
                  internal: {r: 0, cx: 0, cy: 0}, external: {r: 0, cx: 0, cy: 0}
                }}},
                ]
              }
            ]
          }
        }
      },
    },
    sectionDescr: {
      sx: {sxImgWraper: {}, sxBtn: {}, sxIcon: {}, sxSection: {}},
      images: [[{media: "", src: ""}]],
      description: [],
    },
    sectionDetails: {
      sx: {sxItem: {}, sxList: {}, sxText: {}, sxIcon: {}},
      array: []
    },
    sectionReviews: {
      reviewsCount: 0,
      reviewsList: [],
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
      <SectionTitle images={data.images} productId={id} common={data.common} sectionData={data.sectionTitle}/>
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