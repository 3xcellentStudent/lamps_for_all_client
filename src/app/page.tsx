'use client'

import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
import Header from '@/components/common/Header/Header'

export default function Home(){

  const redirect = useRouter()

  useEffect(() => {redirect.push('/product/d41d8cd9-8f00-3204-a980-0998ecf8427e')}, [])

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
