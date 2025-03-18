import { useDispatch, useSelector } from "react-redux"
import { PointerEvent, useEffect } from "react"
import { Box, List, ListItem, Tooltip } from '@mui/material'
import { usePathname } from "next/navigation"
import { CartObjectType } from "@/types/cartTypes/cartObject.types"
import { enqueueSnackbar } from "notistack"
import styles from "./styles.module.scss"
import {HighlightOff} from '@mui/icons-material';
import { GlobalDataType } from "@/types/main/globalData.type"
import { ProductDataType } from "@/types/main/productData.type"
import { CART_CHANGE_QUANTITY_SAVE_CONST, CART_DELETE_ITEM_SAVE_CONST, CART_SELECT_ITEM_SAVE_CONST } from "@/redux/cart/constants"
import { actionCallCartState } from "@/redux/cart/actions"
import Quantity from "@/components/common/Quantity/Quantity"
import InternalCircleSVG from "@/components/common/Radio/InternalCircleSVG"
import Title from "@/components/common/CartList/parts/Title/Title"


export default function CartListPurchase(){

  const {elementsSecondaryBg, secondaryBg, cart, response, price} = useSelector(({
    globalData: {colors: {backgrounds}}, productData: {stockInfo: {price}}, cartObject
  }: {globalData: GlobalDataType, productData: ProductDataType, cartObject: CartObjectType}) => ({...cartObject, ...backgrounds, price}))

  const pathname = usePathname()
  const dispatch = useDispatch()
  // console.log(pathname)

  // const [cartState, setCartState] = useState(cart)
  
  // useEffect(() => {setCartState(cart)}, [cart])

  useEffect(() => {
    if(!!response?.message) enqueueSnackbar(
      response?.message, {variant: response?.severity, autoHideDuration: 1500}
    )
  }, [response])

  function selectHandleClick(event: PointerEvent<HTMLButtonElement>, value: boolean, index: number){
    // console.log(event.target.parentElement.parentElement)
    dispatch(actionCallCartState({type: CART_SELECT_ITEM_SAVE_CONST, payload: {value, index}}))
    // event.target.parentElement.parentElement.classList.toggle("checked_item")
  }

  function deleteHandleClick(index: number){
    dispatch(actionCallCartState({type: CART_DELETE_ITEM_SAVE_CONST, payload: index}))
  }

  function dispatchQuantity(quantity: number, index: number){
    const payload = {quantity: +quantity, index}
    dispatch(actionCallCartState({type: CART_CHANGE_QUANTITY_SAVE_CONST, payload}))
    // dispatch(actionChangeCartSaga({type: HANDLE_CHANGE_QUANTITY_INTO_CART, payload}))
  }

  return(
    <Box className="h-full" sx={{backgroundColor: secondaryBg.hex}}>
      <List className={`${styles.list} py-4 h-[calc(100%-49px)] overflow-y-auto relative backdrop-blur-xl`}>
        {
          cart?.length ? (
            cart?.map((obj, index) => {

              const {
                productName, productImg, productId, quantity, fields, checked
              } = obj

              return(
                  <ListItem key={index} sx={{backgroundColor: elementsSecondaryBg.hex}} 
                  className={`w-[calc(100%-16px)] rounded-xl flex flex-row justify-between items-center ${styles.container}`}>

                    <div>
                      <button onPointerUp={(e) => selectHandleClick(e, !checked, index)}>
                        X
                      </button>
                    </div>
                    
                    <div className="flex flex-row h-full">
                      <div className={`relative h-full ${styles.image_container}`}>
                        <img className="absolute w-full h-full object-scale-down" src={productImg.at(-1)?.src} alt="logo" />
                      </div>

                      <div className="h-full p-2 border-stone-500 border-r-[1px]">
                        <Title productId={productId} productName={productName} />

                        <div className="h-[50%] flex items-end">
                          <div className="w-full w-min font-bold">${price}</div>
                        </div>
                      </div>

                      <div className="h-full px-2 flex items-center">
                        <ul className="flex flex-row" key={index} >
                          {fields.map(({value, background}, idx) => {
                            if(idx === fields.length - 1){
                              return(
                                <Tooltip key={idx} title={value} placement='top' arrow disableInteractive>
                                  <div className={styles.product_options_container}>
                                    <InternalCircleSVG fill={background} />
                                  </div>
                                </Tooltip>
                              )
                            }
                            else return <li key={idx} >{value}</li>;
                          })}
                        </ul>
                      </div>
                    </div>


                    <div className="flex flex-row w-min justify-between items-center">
                      <Quantity inputProps={{disabled: true}} elemIndex={index} action={dispatchQuantity} btnSize={24} quantity={quantity} />
                      
                      <div className="ml-4">
                        <button onClick={() => deleteHandleClick(index)} ><HighlightOff/></button>
                      </div>
                    </div>
                  </ListItem>
              )
            })
          ) : 
          <li className="w-full h-full font-bold flex justify-center items-center uppercase">
            <div>Shopping cart is empty</div>
          </li>
        }
      </List>

    </Box>
  )
}