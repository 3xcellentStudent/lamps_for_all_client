'use client'

import Header from '@/components/common/Header/Header'
import { actionDataFromDb } from '@/redux/actions'
import { ProductIdType } from '@/types/productPage.types/mainTypes'
// import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import model from "@/data.models/pages/productPage.model.json"
import { Typography } from '@mui/material'

// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children,}: {children: React.ReactNode}){
  
  const dispatch = useDispatch()
  
  const [state, setState] = useState<{
    colors: ProductIdType["common"]["theme"]["colors"], title: string
  }>({colors: model.common.theme.colors, title: ""})

  function setBodyStyles(common: ProductIdType["common"]){
    const {colors} = common.theme
    const {title} = common
    
    const object = {colors, title}

    setState(object);
    return;
  }

  async function getDataFromDB(){
    try{
      const url = "http://localhost:5000/mongodb-products/get/lRfAcb2l6dJ1NPP8PF2R";
      const request = await fetch(url, {})
      const data: ProductIdType = await request.json()
      dispatch(actionDataFromDb(data));
      setBodyStyles(data.common)
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
      <Typography component="body" sx={{backgroundColor: state.colors?.pageBg, color: state.colors?.textColor}}>
        <Header/>
        {children}
      </Typography>
    </>
  )
}
