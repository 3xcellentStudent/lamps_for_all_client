import { Badge, styled} from "@mui/material"
import { ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CartObjectType } from "@/types/cartTypes/cartObject.types"

import { actionCallCartState } from "@/redux/cart/actions"
import { GlobalDataType } from "@/types/main/globalData.type"
import { CALL_CART_STATE_CONST, CART_IS_OPEN_SAVE_CONST } from "@/redux/cart/constants"

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

  const {cart: {length}} = useSelector(({cartObject}: {cartObject: CartObjectType}) => cartObject)

  const {secondaryBg, primaryText} = useSelector(({
    globalData: {colors: {backgrounds, text}}
  }: {globalData: GlobalDataType}) => ({...backgrounds, ...text}))

  function handleClick(){
    dispatch(actionCallCartState({type: CART_IS_OPEN_SAVE_CONST, payload: null}))
  }

  return(
    <button onClick={handleClick}>
      <CustomBadge badgeContent={length} backgroundcolor={secondaryBg.hex} color={primaryText.hex}>
        {children}
      </CustomBadge>
    </button>
  )
}