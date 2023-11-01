import { useSelector } from "react-redux"
import {Cart} from '@/types/storeTypes'
import Link from "next/link"
import ImgWrapper from "../ImgWrapper"
import Quantity from "@/components/common/Quantity/Quantity"
import { Fragment, useState } from "react"
import MainLargeBtn from "../MainLargeBtn/MainLargeBtn"

export default function CartList(){

  const cart = useSelector(({cart}: {cart: Cart[]}) => cart)

  const [quantity, setQuantity] = useState(0)

  function changeQuantity(num){
    console.log(num)
  }

  return(
    <ul className="cart_list px-2.5 py-4 h-full">
      {
        cart.length ? (
          cart.map((obj, idx) => {
          const {productName, productImg, productId, fields, quantity: storeQuantity, quantityMax} = obj
          return(
            <Fragment key={idx}>
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
                  <Quantity text="" quantity={quantity > 0 ? quantity : storeQuantity} 
                  quantityMax={quantityMax} action={changeQuantity} />
                </div>
              </li>
              <MainLargeBtn text="Buy Now" cls="absolute --cart" action={() => undefined} />
            </Fragment>
          )
        })
        ) : 
        <li className="w-full h-full font-bold flex justify-center items-center">
          <div>Shopping cart is empty</div>
        </li>
      }
    </ul>
  )
}