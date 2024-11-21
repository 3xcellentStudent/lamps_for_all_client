'use client'

import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
import Header from '@/components/common/Header/Header'

export default function Home(){

  const redirect = useRouter()

  useEffect(() => {redirect.push('/product/lRfAcb2l6dJ1NPP8PF2R')}, [])

  return(
    <body>
      <Header/>
      <main>
        <section id='main-page-title-section'>
          
        </section>
      </main>
      <footer></footer>
    </body>
  )
}
