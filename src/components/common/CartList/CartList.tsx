import { useDispatch, useSelector } from "react-redux"
import { Fragment, useState, useEffect, useRef } from "react"
import { Box, List, ListItem } from '@mui/material'
import Title from "./parts/Title/Title"
import ViewCartButton from "./parts/ViewCartButton/ViewCartButton"
import { usePathname } from "next/navigation"
import { CartObjectType } from "@/types/cartTypes/cartObject.types"
import { enqueueSnackbar } from "notistack"
import { DELETE_CART_ELEMENT, HANDLE_CHANGE_QUANTITY_INTO_CART, SELECT_CART_ITEM } from "@/redux/cart/constants"
import { actionChangeCartSaga } from "@/redux/cart/actions"
import { ProductIdType } from "@/types/main/product.type";
import styles from "./styles.module.scss"
import "./styles.scss"
import Quantity from "../Quantity/Quantity"
import {HighlightOff} from '@mui/icons-material';


// export default function CartList({sxQuantity, theme}: Props){
export default function CartList(){

  const {elementsSecondary, primary, cart, response, price} = useSelector(({
    data: {theme: {colors: {backgrounds}}, stockInfo: {price}}, cartObject
  }: {data: ProductIdType, cartObject: CartObjectType}) => ({...cartObject, ...backgrounds, price}));

  const pathname = usePathname()
  const dispatch = useDispatch()

  const itemRef = useRef(null)

  const [cartState, setCartState] = useState(cart)
  
  useEffect(() => {setCartState(cart)}, [cart])

  useEffect(() => {
    if(!!response?.message) enqueueSnackbar(
      response?.message, {variant: response?.severity, autoHideDuration: 1500}
    )
  }, [response])

  function selectHandleClick(value: boolean, idx: number){
    dispatch(actionChangeCartSaga({type: SELECT_CART_ITEM, payload: {value, idx}}))
    // itemRef.current?.classList.toggle("backdrop-brightness-90")
  }

  function deleteHandleClick(idx: number){
    dispatch(actionChangeCartSaga({type: DELETE_CART_ELEMENT, payload: idx}))
  }

  return(
    <Box className="h-full" sx={{backgroundColor: primary.hex}}>
      <List className={`${styles.cart_list} py-4 h-[calc(100%-49px)] overflow-y-auto relative backdrop-blur-xl`}>
        {
          cartState?.length ? (
            cartState?.map((obj, idx) => {

              function dispatchQuantity(quantity: number){
                const payload = {quantity: +quantity, idx}
                dispatch(actionChangeCartSaga({type: HANDLE_CHANGE_QUANTITY_INTO_CART, payload}))
              }

              const {
                productName, productImg, productId, quantity, fields, checked
              } = obj

              return(
                  <ListItem ref={itemRef} key={idx} sx={{backgroundColor: elementsSecondary.hex}} 
                  className={`w-[calc(100%-16px)] rounded-xl flex flex-row justify-between items-center m-2 p-2 pr-4 ${styles.container}`}>
                    
                    <div className="flex flex-row h-full">
                      <div className={`relative h-full ${styles.image_container}`}>
                        <img className="absolute w-full h-full object-scale-down" src={productImg.at(-1)?.src} alt="logo" />
                      </div>

                      <div className="h-full px-2 border-stone-500 border-r-[1px]">
                        <Title productId={productId} productName={productName} />

                        <div className="w-full text-end w-min font-bold">${price}</div>
                      </div>

                      <div className="h-[50%] px-2 flex items-center">
                        <ul className="flex flex-row" key={idx} >
                          {fields.map(({value}, index) => {
                            if(index === fields.length - 1) return <li key={index} >{value}</li>;
                            else return <li key={index} >{value}</li>;
                          })}
                        </ul>
                      </div>
                    </div>


                    <div className="flex flex-row w-min justify-between items-center">
                      <Quantity inputProps={{disabled: true}} action={dispatchQuantity} btnSize={24} quantity={quantity} />
                      
                      <div className="ml-4">
                        <button><HighlightOff/></button>
                      </div>
                    </div>
                    
                    {/* <Grid container className="text-xs font-bold h-full flex"> */}
                      {/* <ItemSelectionButtom action={() => selectHandleClick(!checked, idx)} /> */}
                      
                      {/* <ItemImage productId={productId} productImg={productImg} productName={productName} />

                      <ItemSpecificationsList fields={fields} />

                      <Grid className="w-[100px] text-center flex items-center justify-center">
                        <Quantity inputProps={{disabled: true}} action={dispatchQuantity} btnSize={24} 
                        quantity={quantity} />
                      </Grid>

                      <Grid className="w-[100px] text-center flex items-center">
                        <div className="w-full">$109.99</div>
                      </Grid>

                      <Grid className="w-[24px] flex items-center">
                        <Button className="flex items-center justify-center rounded-full 
                          w-[24px] h-[24px] relative p-0.5 group-hover:fill-white" sx={{}} 
                          disabled={false} handleClick={() => deleteHandleClick(idx)}>
                          <CloseOutlinedIcon className="w-[20px] h-[20px] absolute 
                          pointer-events-none"/>
                        </Button>
                      </Grid> */}
                    {/* </Grid> */}
                  </ListItem>

                  // {pathname.includes("product") && <ViewCartButton/>}
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