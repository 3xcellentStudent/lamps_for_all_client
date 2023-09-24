'use client'

import {useLayoutEffect} from 'react'
import {useRouter} from 'next/navigation'

export default function Home(){

  const redirect = useRouter()

  useLayoutEffect(() => {redirect.push('pages/product/lRfAcb2l6dJ1NPP8PF2R')}, [])

  return(
    <h1>Main Page</h1>
  )
}
