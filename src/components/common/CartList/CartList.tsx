import { useDispatch, useSelector } from "react-redux"
import ImgWrapper from "../ImgWrapper"
import Quantity from "@/components/common/Quantity/Quantity"
import { Fragment, useState, useEffect, useRef } from "react"
import {
  CheckCircle as CheckCircleIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  CloseOutlined as CloseOutlinedIcon
} from '@mui/icons-material';
import {Checkbox, Grid, List, Typography} from '@mui/material'
import Title from "./parts/Title/Title"
import SpecificationsList from "./parts/Specifications/SpecificationsList"
import { CommonType } from "@/types/productPage.types/sectionTitle/sectionTitle"
import Button from "../Buttons/Button"
import ViewCartButton from "./parts/ViewCartButton/ViewCartButton"
import { usePathname } from "next/navigation"
import { CartObjectType } from "@/types/cartTypes/cartObject.types"
import { enqueueSnackbar } from "notistack"
import { DELETE_CART_ELEMENT, HANDLE_CHANGE_QUANTITY_INTO_CART, SELECT_CART_ITEM } from "@/redux/cart/constants"
import { actionCartSelectedReducer, actionChangeCartSaga } from "@/redux/cart/actions"
import "./styles.scss"
import ItemSelectionButtom from "./components/ItemSelectionButton";
import ItemImage from "./components/ItemImage";
import ItemSpecificationsList from "./components/ItemSpecificationsList";
import { ProductIdType } from "@/types/productPage.types/mainTypes";


interface Props {
  sxQuantity: CommonType["sxQuantity"]
  theme: CommonType["theme"]
}

// interface FieldsLocalType {
//   type: string
//   value: string
//   cartInfo: {border: string, bg: string}
// }

const quantityCls = "flex w-min flex-col justify-between items-end ml-2 pl-2 border-l border-black"

// export default function CartList({sxQuantity, theme}: Props){
export default function CartList(){

  const {
    sxQuantity, theme, cart, response
  } = useSelector(({data: {common}, cartObject}: {data: ProductIdType, cartObject: CartObjectType}) => ({...common, ...cartObject}));

  const pathname = usePathname()
  const dispatch = useDispatch()

  // const {cart, response} = useSelector(({cartObject}: CartObjectType) => cartObject)

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
    <div className="h-full">
      {/* <Grid container className="p-2 text-xs font-bold border-b border-slate-400">
        <Grid className="py-2 w-[150px]">
          <div>Product</div>
        </Grid>
        <Grid className="py-2 w-[240px]">
          <div>Options</div>
        </Grid>
        <Grid className="py-2 w-[100px] text-center">
          <div>Quantity</div>
        </Grid>
        <Grid className="py-2 w-[100px] text-center">
          <div>Price</div>
        </Grid>
        <Grid className="py-2 w-[24px]">
        </Grid>
      </Grid> */}

      <List className="cart_list py-4 h-[calc(100%-49px)] overflow-y-auto relative backdrop-blur-xl">
        {
          cartState?.length ? (
            cartState?.map((obj, idx) => {

              function dispatchQuantity(quantity: number){
                const payload = {quantity: +quantity, idx}
                dispatch(actionChangeCartSaga({type: HANDLE_CHANGE_QUANTITY_INTO_CART, payload}))
              }
              const {
                productName, productImg, productId, quantity, quantityMax, fields, checked
              } = obj

              return(
                <Fragment key={idx}>
                  <li ref={itemRef} className="w-full p-2" key={idx}>

                    <Grid container className="text-xs font-bold h-full flex">
                      <ItemSelectionButtom action={() => selectHandleClick(!checked, idx)} 
                      boxShadow={theme.shadows.sxCircle?.boxShadow}/>
                      
                      <ItemImage productId={productId} productImg={productImg} productName={productName} />

                      <ItemSpecificationsList fields={fields} />

                      <Grid className="w-[100px] text-center flex items-center justify-center">
                        <Quantity inputProps={{disabled: true}} action={dispatchQuantity} btnSize={24} 
                        quantity={quantity} sxQuantity={{fontSize: 20}} quantityMax={quantityMax} />
                      </Grid>

                      <Grid className="w-[100px] text-center flex items-center">
                        <div className="w-full">$109.99</div>
                      </Grid>

                      <Grid className="w-[24px] flex items-center">
                        <Button cls="flex items-center justify-center rounded-full 
                          w-[24px] h-[24px] relative p-0.5 group-hover:fill-white" sx={{}} 
                          disabled={false} handleClick={() => deleteHandleClick(idx)}>
                          <CloseOutlinedIcon className="w-[20px] h-[20px] absolute 
                          pointer-events-none"/>
                        </Button>
                      </Grid>
                    </Grid>
                  </li>

                  {pathname.includes("product") && <ViewCartButton/>}
                </Fragment>
              )
            })
          ) : 
          <li className="w-full h-full font-bold flex justify-center items-center uppercase">
            <div>Shopping cart is empty</div>
          </li>
        }
      </List>
    </div>
  )
}