import { Badge, styled} from "@mui/material"
import { ReactNode, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {actionChangeOpenCart} from '@/redux/actions'
import { CartObjectType } from "@/types/cartTypes/cartObject.types"
import { ProductIdType } from "@/types/productPage.types/mainTypes"

import badgeTemplate from "@/data.models/components/badge/badge.model.json"

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
  const [themeState, setThemeState] = useState<CustomBadgeThemeType>(badgeTemplate.theme.colors)


  const {cart} = useSelector(({cartObject}: {cartObject: CartObjectType}) => cartObject)
  const {common} = useSelector(({data}: {data: ProductIdType}) => data)

  useEffect(() => {setCartState(cart)}, [cart])

  useEffect(() => {
    const {optionalColor, textColor: color} = common.theme.colors
    const backgroundcolor = `rgb(${optionalColor})`
    setThemeState({backgroundcolor, color})
}, [common])

  function handleClick(){dispatch(actionChangeOpenCart())}

  return(
    <button onClick={handleClick}>
      <CustomBadge badgeContent={cartState?.length} backgroundcolor={themeState?.backgroundcolor} color={themeState?.color}>
        {children}
      </CustomBadge>
      {/* <Badge className={cls} badgeContent={cartState?.length} > */}
        {/* {children} */}
      {/* </Badge> */}
    </button>
  )
}