'use client'
import { useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import DrawerComponent from '@/components/common/DrawerComponent/DrawerComponent'
import CartList from '@/components/common/CartList/CartList'
import { actionChangeOpenCart, actionDataFromDb, actionSaveDataFromDb } from '@/redux/actions'
import { SnackbarProvider } from 'notistack'
import SectionTitle from '@/components/pages/productPage/SectionTitle/SectionTitle'
import SectionDescr from '@/components/pages/productPage/SectionDescr/SectionDescr'
import SectionDetails from '@/components/pages/productPage/SectionDetails/SectionDetails'
import SectionReviews from '@/components/pages/productPage/SectionReviews/SectionReviews'

import styles from "./styles.module.scss"

export default function Product(){

  // const dataTemplate: ProductIdType = {
  //   common: {
  //     rating: 5,
  //     title: "",
  //     category: {id: "", name: ""},
  //     theme: {
  //       colors: {
  //         textColor: "#fff",
  //         elementsBg: "#fff",
  //         pageBg: "fff",
  //       },
  //       shadows: {
  //         sxCircle: {boxShadow: "none"}
  //       }
  //     },
  //     productLogo: "",
  //     sxQuantity: {},
  //   },
  //   sectionTitle: {
  //     description: "",
  //     price: "",
  //     quantityMax: 0,
  //     sx: {},
  //     purchasePart: {
  //       sxCont: {},
  //       components: {
  //         titleC: {
  //           ratingC: {content: "", sxText: {}, sxRating: {}, sxBox: {}},
  //         },
  //         addCartC: {sxBtn: {}},
  //         selectionC: {
  //           sxBox: {},
  //           // sxQuantity: {},
  //           fieldC: [
  //             {
  //               sxField: {colorLabel: ""},
  //               name: "", type: "", items: [
  //               {value: "", fill: "", stroke: "",},
  //               ]
  //             }
  //           ]
  //         }
  //       }
  //     },
  //   },
  //   sectionDescr: {
  //     sx: {sxBtn: {}, sxIcon: {}, sxSection: {}},
  //     images: [[{media: "", src: ""}]],
  //     description: [],
  //   },
  //   sectionDetails: {
  //     sx: {sxBtn: {}, sxItem: {}, sxList: {}, sxText: {}, sxIcon: {}},
  //     array: []
  //   },
  //   sectionReviews: {
  //     reviewsSnaphot: {five: 0, four: 0, three: 0, two: 0, one: 0},
  //     sxFilter: {sxBtn: {}, sxIcon: {}},
  //     sxRating: {},
  //     sxText: {},
  //     userReviews: {
  //       reviewsArray: [],
  //       theme: {
  //         elementsBg: "",
  //         cardSx: {},
  //       }
  //     },
  //   },
  //   images: [],
  // }

  const {id} = useParams()
  
  const dispatch = useDispatch()
  const isOpenCart = useSelector(({isOpenCart}: {isOpenCart: boolean}) => isOpenCart)
  // const statusCode = useSelector(({statusCode}: {statusCode: number}) => statusCode)
  
  // const {enqueueSnackbar} = useSnackbar()

  // useEffect(() => {
  //   getDataFromDB()
  //   dispatch(actionSaveDataFromDb({data: dataDB[id]}));
  //   // const secondId = "F2R2l6dJ1NlRfAcbPP8P"
  //   setData(dataDB[id])
  // }, [])

  // useEffect(() => {
  //   enqueueSnackbar(response?.message, {variant: response?.severity, autoHideDuration: 1500})
  // }, [])

  return(
    <main className={styles.main}>
      <SnackbarProvider maxSnack={3}>
        <div className="relative">
          <SectionTitle productId={id}/>
          <SectionDescr />
          <SectionDetails />
          <SectionReviews />
          <DrawerComponent anchor='right' cartOpen={isOpenCart}
          closeCart={() => dispatch(actionChangeOpenCart())}>
            {/* <CartList sxQuantity={data.common.sxQuantity} theme={data.common.theme} /> */}
            <CartList />
          </DrawerComponent>
        </div>
      </SnackbarProvider>
    </main>
  )
}