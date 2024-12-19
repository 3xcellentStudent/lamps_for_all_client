import { Badge, styled} from "@mui/material"
import { ReactNode, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {actionChangeOpenCart} from '@/redux/actions'
import { CartObjectType } from "@/types/cartTypes/cartObject.types"

import model from "@/data.models/pages/productId.model.json"
import { ProductIdType } from "@/types/main/product.type"

interface Props {
  color: string
  cls?: string
  children: ReactNode
}

interface CustomBadgeThemeType {color: string, backgroundcolor: string}

const CustomBadge = styled(Badge)(({backgroundcolor, color}: CustomBadgeThemeType) => ({
  "& .MuiBadge-badge": {
    backgroundColor: backgroundcolor,
    color: color,
  },
}));

export default function BadgeButton({cls, children}: Props){

  const dispatch = useDispatch()

  const [cartState, setCartState] = useState<CartObjectType["cart"]>([])
  // const [themeState, setThemeState] = useState<ProductIdType["theme"]["colors"]["backgrounds"]>(model.theme.colors.backgrounds)


  const {cart} = useSelector(({cartObject}: {cartObject: CartObjectType}) => cartObject)
  const {backgrounds: {secondary}, text: {primary: primaryText}} = useSelector(({data: {theme: {colors: {backgrounds, text}}}}: {data: ProductIdType}) => ({backgrounds, text}))

  // useEffect(() => {setCartState(cart)}, [cart])

//   useEffect(() => {
//     const {optionalColor, textColor: color} = common.theme.colors
//     const backgroundcolor = `rgb(${optionalColor})`
//     setThemeState({backgroundcolor, color})
// }, [common])

  function handleClick(){dispatch(actionChangeOpenCart())}

  return(
    <button onClick={handleClick}>
      <CustomBadge badgeContent={cartState?.length} backgroundcolor={secondary.hex} color={primaryText.hex}>
        {children}
      </CustomBadge>
      {/* <Badge className={cls} badgeContent={cartState?.length} > */}
        {/* {children} */}
      {/* </Badge> */}
    </button>
  )
}