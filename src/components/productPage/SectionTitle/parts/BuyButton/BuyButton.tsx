import './BuyButton.scss'
import {useEffect} from 'react'
import {usePathname} from 'next/navigation'
// import {useDispatch, useSelector} from 'react-redux'
// import {actionGETProductID} from '@/redux/actions/actions'

const clientId = "AVn0ULKoBMaRcvml-G9PxmNuWtPj8bDYJvtbyxHDHjyi6XuJFSYZN6B-B7ZKBEW4n2LlyjiFlwx9cBBt"
const secretId = "EHsON8KCADYDTAW2B_2F6Yr8K2TfWmF-EBSFigd8l7nypz0Wk5Hzqap_5nJejQkNKoud9jFY8o8M98rx"

export default function BuyButton(){

  // const pathname = usePathname()
  // const dispatch = useDispatch()

  async function handleClick(e: any){
    // e.preventDefault()
    // const [, , collection, productID] = pathname.split('/')
    // dispatch(actionGETPro0ductID({collection, productID}))
    const url = "http://localhost:5000/create-payment"
    const data = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      redirect_urls: {
        return_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel'
      },
      transactions: [
        {
          amount: {
            total: '10.00',
            currency: 'USD'
          }
        }
      ]
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(res => console.log(res))
  }


  return(
    <div className="btn__container">
      <button className="btn__buy-button btn_black_hover" 
      onClick={e => handleClick(e)}>Buy Now</button>
    </div>
  )
}