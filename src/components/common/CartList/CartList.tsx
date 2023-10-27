import { useSelector } from "react-redux"
import {Cart} from '@/types/storeTypes'
import Link from "next/link"
import ImgWrapper from "../ImgWrapper"
import Quantity from "@/components/common/Quantity/Quantity"
import { useState } from "react"

export default function CartList(){

  const basket = useSelector(({basket}: {basket: Cart[]}) => basket)

  const [quantity, setQuantity] = useState(1)

  return(
    <ul className="cart_list px-2.5 py-4 h-full">
      {
        basket.length ? (
          basket.map((obj, idx) => {
          const {productName, productImg, productId, fields, quantity, quantityMax} = obj
          return(
            <li className="w-full flex" key={idx}>
              <div className="flex items-center">
                <ImgWrapper cls="relative w-[80px] h-[80px]">
                  <img className="absolute w-full h-full" 
                  src={productImg} alt={productName} />
                </ImgWrapper>
                <div>
                  <Link href={`http://localhost:3000/pages/product/${productId}`}
                  className="truncate" >{productName}</Link>
                  {fields.map(({value}, idx) => <p key={idx}>{value}</p>)}
                </div>
                <Quantity text="" setQuantity={setQuantity} 
                quantityMax={quantityMax} quantity={quantity} />
              </div>
            </li>
          )
        })
        ) : 
        <li className="w-full flex justify-center items-center h-full font-bold">
          <div>Shopping cart is empty</div>
        </li>
      }
    </ul>
  )
}