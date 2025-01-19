import { actionShippingData } from "@/redux/payment/actions"
import { CHANGE_SHIPPING_DATA } from "@/redux/payment/constants"
import { Home as HomeIcon } from "@mui/icons-material"
import { Box, SvgIconOwnProps, TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux"

export default function AddressInfo(){

  const dispatch = useDispatch()

  const [error, setError] = useState<boolean>(false)
  const [iconColor, setIconColor] = useState<SvgIconOwnProps["color"]>("action")

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    const {value} = e.target
    if(!value.length){
      setError(true)
      setIconColor("error")
      dispatch(actionShippingData({
        type: CHANGE_SHIPPING_DATA, payload: {address: {value, error: true}}
      }))
    } else {
      setError(false)
      setIconColor("action")
      dispatch(actionShippingData({
        type: CHANGE_SHIPPING_DATA, payload: {address: {value, error: false}}
      }))
    }
  }

  return(
    <Box className="items-end flex w-full mt-3">
      <HomeIcon className="mr-2 my-1" color={iconColor} />
      <TextField fullWidth size="small" error={error} id="shipping-form-address" 
      label="Address *" variant="standard" onChange={handleChange} />
    </Box>
  )
}