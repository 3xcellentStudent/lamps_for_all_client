'use client'
import {useRouter} from 'next/navigation'
import {useLayoutEffect} from 'react'

export default function Home(){

  const redirect = useRouter();

  useLayoutEffect(() => {redirect.push('product/2')}, [])

  return(
    <h1>Main Page</h1>
  )
}
