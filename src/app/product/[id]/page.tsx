'use client'
import { useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import DrawerComponent from '@/components/common/DrawerComponent/DrawerComponent'
import CartList from '@/components/common/CartList/CartList'
import { actionChangeOpenCart, actionDataFromDb, actionSaveDataFromDb } from '@/redux/actions'
import { SnackbarProvider } from 'notistack'

import styles from "./styles.module.scss"
import Overview from '@/components/pages/product/sections/overview/Overview '
import Description from '@/components/pages/product/sections/description/Description'
import Details from '@/components/pages/product/sections/details/Details'
import Reviews from '@/components/pages/product/sections/reviews/Reviews'

export default function Product(){

  const {id} = useParams()

  return(
    <main className={styles.main}>
      <SnackbarProvider maxSnack={3}>
        <Overview productId={id}/>
        <Description />
        <Details />
        <Reviews />
        <DrawerComponent anchor='right'>
          <CartList />
        </DrawerComponent>
      </SnackbarProvider>
    </main>
  )
}