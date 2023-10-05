import './BuyButton.scss'
import {useEffect} from 'react'
import {usePathname} from 'next/navigation'
// import {useDispatch, useSelector} from 'react-redux'
// import {actionGETProductID} from '@/redux/actions/actions'

export default function BuyButton(){

  // const pathname = usePathname()
  // const dispatch = useDispatch()

  async function handleClick(e: any){
    // e.preventDefault()
    // const [, , collection, productID] = pathname.split('/')
    // dispatch(actionGETProductID({collection, productID}))
  }


  return(
    <div className="btn__container">
      <button onClick={e => handleClick(e)} className="btn__buy-button">Buy Now</button>
    </div>
  )
}