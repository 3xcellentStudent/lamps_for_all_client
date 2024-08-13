import Head from "next/head"
import { ReactNode } from "react"

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
      {/* <body> */}
        {children}
      {/* </body> */}
    </>
  )
}