import { Badge, styled} from "@mui/material"
import { ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CartObjectType } from "@/types/cartTypes/cartObject.types"

import { actionCallIsOpenCart } from "@/redux/cart/isOpenCart/actions"
import { GlobalDataType } from "@/types/main/globalData.type"

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

  function handleClick(){dispatch(actionCallIsOpenCart())}

  return(
    <button onClick={handleClick}>
      <CustomBadge badgeContent={length} backgroundcolor={secondaryBg.hex} color={primaryText.hex}>
        {children}
      </CustomBadge>
    </button>
  )
}