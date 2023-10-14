import { useSelector } from "react-redux"
import {Basket} from '@/types/storeTypes'
import Link from "next/link"

export default function BasketList(){

  const basket = useSelector(({basket}: {basket: Basket[]}) => basket)

  return(
    <ul className="px1-1 py2-2">
      {basket.map((obj, idx) => {
        const {productName, productId, fields, quantity} = obj
        return(
          <li key={idx}>
            <Link href={`https://tailwindcss.com/docs/min-width`}>{productName}</Link>
            {fields.map(({value}, idx) => <p key={idx}>{value}</p>)}
            <p>Quantity: <span>{quantity}</span></p>
          </li>
        )
      })}
    </ul>
  )
}