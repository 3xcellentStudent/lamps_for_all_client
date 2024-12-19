'use client'
import { useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import DrawerComponent from '@/components/common/DrawerComponent/DrawerComponent'
import CartList from '@/components/common/CartList/CartList'
import { actionChangeOpenCart, actionDataFromDb, actionSaveDataFromDb } from '@/redux/actions'
import { SnackbarProvider } from 'notistack'
import Overview from '@/components/pages/productPage/sections/overview/Overview '
import Description from '@/components/pages/productPage/sections/description/Description'
import Details from '@/components/pages/productPage/sections/details/Details'
import Reviews from '@/components/pages/productPage/sections/reviews/Reviews'

import styles from "./styles.module.scss"
import { useEffect } from 'react'
import { actionDispatchPageCoordinates } from '@/redux/moveCoordinates/actions'

export default function Product(){

  const {id} = useParams()
  
  const dispatch = useDispatch()
  const isOpenCart = useSelector(({isOpenCart}: {isOpenCart: boolean}) => isOpenCart)

  // useEffect(() => {
  //   window.onpointerup = ({pageX, pageY, preventDefault}) => {
  //     const result = {up: {pageY, pageX, isUped: true}}
  //     console.log(result)
  //     dispatch(actionDispatchPageCoordinates(result))
  //   }
  // }, [])

  return(
    <main className={styles.main}>
      <SnackbarProvider maxSnack={3}>
        {/* <div className="relative"> */}
          <Overview productId={id}/>
          <Description />
          <Details />
          <Reviews />
          <DrawerComponent anchor='right' cartOpen={isOpenCart}
          closeCart={() => dispatch(actionChangeOpenCart())}>
            {/* <CartList sxQuantity={data.common.sxQuantity} theme={data.common.theme} /> */}
            <CartList />
          </DrawerComponent>
        {/* </div> */}
      </SnackbarProvider>
    </main>
  )
}