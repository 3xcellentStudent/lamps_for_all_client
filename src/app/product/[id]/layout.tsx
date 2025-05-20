'use client'

import Header from '@/components/common/Header/Header'
import { ProductDataType } from '@/types/main/productData.type'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import globalData from "@/data.models/global/globalData.model.json"
import productDataModel from "@/data.models/product/productData.model.json"
import { Box, Typography } from '@mui/material'
import { GLOBAL_DATA_ROUTE, PRODUCT_DATA_ROUTE } from '@/api/routes/routes'
import { GlobalDataType } from '@/types/main/globalData.type'
import { actionCallProductData, actionCallGlobalData } from '@/redux/database/actions'
import { enqueueSnackbar, SnackbarProvider } from 'notistack'
import { CartObjectType } from '@/types/cartTypes/cartObject.types'

export default function RootLayout({children,}: {children: React.ReactNode}){
  
  const dispatch = useDispatch()

  // const [themeState, setThemeState] = useState<{
  //   text: ColorsType["text"], backgrounds: ColorsType["backgrounds"], title: string
  // }>({...model.theme.colors, title: ""})
  const [themeState, setThemeState] = useState<GlobalDataType>(globalData)
  const [productState, setProductState] = useState<ProductDataType>(productDataModel)

  // function setBodyStyles({theme, title}: ProductIdType){
  //   const {text, backgrounds} = theme.colors
  //   const object = {text, backgrounds, title}

  //   setState(object);
  //   return;
  // }

  const getGlobalData = useCallback(async () => {
    try{
      const url = GLOBAL_DATA_ROUTE;
      const request = await fetch(url, {})
      const data: GlobalDataType = await request.json()

      dispatch(actionCallGlobalData(data))
      setThemeState(data)
      return data;
    } catch(error){
      console.error(error);
      return;
    }
  }, [themeState])

  const getProductDataRecursive = useCallback(async () => {
    try{
      const url = PRODUCT_DATA_ROUTE;
      const request = await fetch(url, {})
      const [data]: ProductDataType[] = await request.json()

      dispatch(actionCallProductData(data))
      setProductState(data)
      return data;
    } catch(error){
      console.error(error);
      return;
    }
  }, [productState])
  
  useEffect(() => {
    getProductDataRecursive();
    getGlobalData();
  }, [])

  // const response = useSelector(({
  //   cartObject: {response}
  // }: {cartObject: CartObjectType}) => (response))

  // useEffect(() => {
  //   if(!!response?.message) enqueueSnackbar(
  //     response?.message, {variant: response?.severity, autoHideDuration: 1500}
  //   )
  // }, [response])

  return (
    <>
      <head>
        <title>{productState.title}</title>
      </head>
      <Box component="body" sx={{backgroundColor: themeState.colors.backgrounds.primaryBg.hex, color: themeState.colors.text.primaryText.hex}}>
        <SnackbarProvider maxSnack={3}>
          <Header/>
          {children}
        </SnackbarProvider>
      </Box>
    </>
  )
}
