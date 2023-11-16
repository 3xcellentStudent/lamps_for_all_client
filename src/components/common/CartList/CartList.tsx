import { useDispatch, useSelector } from "react-redux"
import {Cart} from '@/types/storeTypes'
import Link from "next/link"
import ImgWrapper from "../ImgWrapper"
import Quantity from "@/components/common/Quantity/Quantity"
import { Fragment, useState, useEffect } from "react"
import { actionCartReducer, actionSETOpenCart } from "@/redux/actions"
import { PUT_CART_QUANTITY, DELETE_CART } from "@/redux/constants/cartConst"
import { Delete as DeleteIcon, OpenInNew as OpenInNewIcon } from '@mui/icons-material';
import { IconButton, Tooltip } from "@mui/material"
import ModalComp from "./parts/ModalComp/ModalComp"

interface FieldsLocalType {
  type: string
  value: string
  cartInfo: {border: string, bg: string}
}

export default function CartList(){
  
  
  const dispatch = useDispatch()
  const cart = useSelector(({cart}: {cart: Cart[]}) => cart)

  const [cartState, setCartState] = useState(cart)
  const [modalOpen, setModalOpen] = useState(false)
  
  useEffect(() => {setCartState(cart)}, [cart])
  
  const specificationsCls = "border-solid border border-black rounded-md font-bold mr-1 text-xs w-min whitespace-nowrap px-1 py-0.5 h-min"
  const quantityCls = "flex flex-col justify-between items-end ml-2 pl-2 border-l border-black py-1"

  return(
    <ul className="cart_list py-4 h-full">
      {
        cartState.length ? (
          cartState.map((obj, idx) => {
          function dispatchQuantity(quantity: number){
            dispatch(actionCartReducer({type: PUT_CART_QUANTITY, payload: {quantity, idx}}))
          }
          const {productName, productImg, productId, quantity, quantityMax, fields} = obj
          return(
            <Fragment key={idx}>
              <li className="w-full mb-4 px-2" key={idx}>
                <h6 className="w-min">
                  <Link href={`http://localhost:3000/pages/product/${productId}`}
                  className="truncate hover:text-blue-600 duration-200 font-bold">
                    {productName}
                    <OpenInNewIcon className="ml-2 w-4 h-4"/>
                  </Link>
                  <div className="mb-2 w-full h-[2px] bg-blue-600"></div>
                </h6>
                <div className="flex h-full">
                  <ImgWrapper cls="relative w-[80px] h-[80px]">
                    <img className="absolute w-full h-full" 
                    src={productImg} alt={productName} />
                  </ImgWrapper>
                  <ul className="inline-flex flex-wrap ml-4 py-1 w-[313px]">
                    {fields.map(({type, value, cartInfo}: FieldsLocalType, idx) => {
                      if(type === 'color'){
                        const {border: borderColor, bg} = cartInfo
                        const styles = 'w-[21px] h-[21px] mr-2 border rounded-full'
                        return <li key={idx} style={{background: bg, borderColor}} className={styles}></li>
                      }
                      else return <li key={idx} className={specificationsCls}>{value}</li>
                    })}
                  </ul>
                  <div className={quantityCls}>
                    <Quantity text="" clsBtn="w-5 h-5" cls="h-min" 
                    clsInput="text-sm font-bold" clsIcons="absolute w-full h-full left-0 top-0"
                    quantityMax={quantityMax} action={dispatchQuantity} quantity={quantity} />
                    <Tooltip title="Delete">
                      <IconButton onClick={() => setModalOpen(true)}>
                        <DeleteIcon className="text-rose-600" />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
              </li>
              <div className="cart_list__btn_buy fixed h-[80px] right-0 
              bottom-0 bg-gradient-to-t from-zinc-50 to-transparent">
                <div className="flex items-center justify-center h-full">
                  <Link onClick={() => dispatch(actionSETOpenCart())} href="http://localhost:3000/pages/cart" 
                  className="btn__buy-button btn_black_hover" >Buy Now</Link>
                </div>
              </div>
              <ModalComp open={modalOpen} action={setModalOpen} idx={idx} />
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