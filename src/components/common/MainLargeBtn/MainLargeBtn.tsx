import './MainLargeBtn.scss'
import {useEffect} from 'react'
import {usePathname, useRouter, } from 'next/navigation'
import Link from 'next/link'
// import {actionGETProductID} from '@/redux/actions/actions'

interface Props {
  text: string 
  data: {}
  action: () => void
}

interface Response {
  id: string
  intent: string
  state: string
  payer: {payment_method: string}
  transactions: {
    amount: {
      currency: string
      total: string
    }
  }[]
  links: {
    href: string
    method: string
    rel: string
  }[]
  httpStatusCode: number
  create_time: string
}

export default function MainLargeBtn({text, data, action}: Props){

  // const pathname = usePathname()

  const router = useRouter()

  // async function handleClick(){
  //   console.log(data)
  // }


  return(
    <div className="btn__container">
      <button className="btn__buy-button btn_black_hover" 
      onClick={action}>{text}</button>
      {/* onClick={e => router.replace('/pages/cart')}>{text}</button> */}
    </div>
  )
}

















// async function handleClick(e: any){
//   e.preventDefault()
//   const [, , collection, productID] = pathname.split('/')
//   dispatch(actionGETPro0ductID({collection, productID}))
//   const url = "http://localhost:5000/create-payment"
//   const data = {
//     intent: 'sale',
//     payer: {
//       payment_method: 'paypal'
//     },
//     redirect_urls: {
//       return_url: 'http://localhost:5000/interceptor',
//       cancel_url: 'https://example.com/cancel'
//     },
//     transactions: [
//       {
//         amount: {
//           total: '10.00',
//           currency: 'USD'
//         }
//       }
//     ]
//   };
//   const response: Response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data)
//   }).then(res => res.json())
//   router.push(response.links[1].href)
// }
