import { Badge, styled} from "@mui/material"
import { ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux"
import {actionChangeOpenCart} from '@/redux/actions'
import { CartObjectType } from "@/types/cartTypes/cartObject.types"

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

  const {cart} = useSelector(({cartObject}: {cartObject: CartObjectType}) => cartObject)
  const {backgrounds: {secondary}, text: {primary: primaryText}} = useSelector(({
    data: {theme: {colors: {backgrounds, text}}}
  }: {data: ProductIdType}) => ({backgrounds, text}))

  function handleClick(){dispatch(actionChangeOpenCart())}

  return(
    <button onClick={handleClick}>
      <CustomBadge badgeContent={cart?.length} backgroundcolor={secondary.hex} color={primaryText.hex}>
        {children}
      </CustomBadge>
    </button>
  )
}