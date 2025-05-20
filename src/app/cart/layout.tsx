'use client'

import { CartObjectType } from "@/types/cartTypes/cartObject.types"
import { Box } from "@mui/material"
import Head from "next/head"
import { enqueueSnackbar, SnackbarProvider } from "notistack"
import { ReactNode, useEffect } from "react"
import { useSelector } from "react-redux"

export default function Layout({children}: {children: ReactNode}){

  return(
    <>
      <Head>
        <script
          src="https://www.paypal.com/sdk/js?client-id=BAAnRwhsmp5treT9syV8IHyt91Ncjw_D2idxuH6WCS3_--qqJhKZ-obC5Y1RCCjHiOA8kkBSI7ZX9iIgOk&components=hosted-buttons&disable-funding=venmo&currency=CAD" 
          crossOrigin="anonymous" 
          async>
        </script>
      </Head>
      <Box component="body">
        <SnackbarProvider maxSnack={3}>
          {children}
        </SnackbarProvider>
      </Box>
    </>
  )
}