'use client'

import Header from '@/components/common/Header/Header'
import { actionDataFromDb } from '@/redux/actions'
// import { ProductIdType } from '@/types/productPage.types/mainTypes'
import { ProductIdType } from '@/types/main/product.type'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import model from "@/data.models/pages/productId.model.json"
import { Typography } from '@mui/material'

// const inter = Inter({ subsets: ['latin'] })

type ProductIdColors = ProductIdType["theme"]["colors"]

export default function RootLayout({children,}: {children: React.ReactNode}){
  
  const dispatch = useDispatch()
  
  const [state, setState] = useState<{
    text: ProductIdColors["text"], backgrounds: ProductIdColors["backgrounds"], title: string
  }>({...model.theme.colors, title: ""})

  function setBodyStyles({theme, title}: ProductIdType){
    const {text, backgrounds} = theme.colors
    const object = {text, backgrounds, title}

    setState(object);
    return;
  }

  async function getDataFromDB(){
    try{
      const url = "http://localhost:5000/mongodb-products/get/lRfAcb2l6dJ1NPP8PF2R";
      const request = await fetch(url, {})
      const data: ProductIdType = await request.json()
      dispatch(actionDataFromDb(data));
      setBodyStyles(data)
      return data;
    } catch(error){
      console.error(error);
      return;
    }
  }
  
  let lock = true;
  useEffect(() => {
    if(lock){
      lock = false;
      getDataFromDB();
    }
  }, [])

  return (
    <>
      <head>
        <title>{state.title}</title>
      </head>
      <Typography component="body" sx={{backgroundColor: state.backgrounds.primary.hex, color: state.text.primary.hex}}>
        <Header/>
        {children}
      </Typography>
    </>
  )
}
