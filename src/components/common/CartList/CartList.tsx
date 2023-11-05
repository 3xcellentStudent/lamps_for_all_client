import { useDispatch, useSelector } from "react-redux"
import {Cart} from '@/types/storeTypes'
import Link from "next/link"
import ImgWrapper from "../ImgWrapper"
import Quantity from "@/components/common/Quantity/Quantity"
import { Fragment, } from "react"
import MainLargeBtn from "../MainLargeBtn/MainLargeBtn"
import { actionCartReducer } from "@/redux/actions"
import { PUT_CART_QUANTITY } from "@/redux/constants/cartConst"

export default function CartList(){

  const dispatch = useDispatch()
  const cart = useSelector(({cart}: {cart: Cart[]}) => cart)

  return(
    <ul className="cart_list px-2.5 py-4 h-full">
      {
        cart.length ? (
          cart.map((obj, idx) => {
            
          function dispatchQuantity(quantity: number){
            dispatch(actionCartReducer({type: PUT_CART_QUANTITY, payload: {quantity, idx}}))
          }

          const {productName, productImg, productId, quantity, quantityMax, displayedField} = obj
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
                    {/* {fields.map(({value}, idx) => <p key={idx}>{value}</p>)} */}
                    <p>{displayedField.name}: {displayedField.value}</p>
                  </div>
                  <Quantity text="" quantity={quantity} 
                  quantityMax={quantityMax} action={dispatchQuantity} />
                </div>
              </li>
              <MainLargeBtn text="Buy Now" cls="absolute --cart" action={() => {}} />
            </Fragment>
          )
        })
        ) : 
        <li className="w-full h-full font-bold flex justify-center items-center uppercase">
          <div>Shopping cart is empty</div>
        </li>
      }
    </ul>
  )
}