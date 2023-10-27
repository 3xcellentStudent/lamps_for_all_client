import { Badge } from "@mui/material"
import { ReactNode } from "react"
import { useDispatch } from "react-redux"
import {actionSETOpenCart} from '@/redux/actions'

interface Props {
  count: number
  color: string
  cls: string
  children: ReactNode
}

export default function BadgeButton({count, color, cls, children}: Props){

  const dispatch = useDispatch()

  function handleClick(){dispatch(actionSETOpenCart())}

  return(
    <button onClick={handleClick}>
      <Badge className={cls} badgeContent={count} color={color}>
        {children}
      </Badge>
    </button>
  )
}