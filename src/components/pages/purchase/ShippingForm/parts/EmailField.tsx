import { Box, Checkbox, SvgIconOwnProps, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import { useDispatch } from "react-redux";
import { actionShippingData } from "@/redux/payment/actions";
import { CHANGE_SHIPPING_DATA } from "@/redux/payment/constants";

export default function EmailField(){

  const dispatch = useDispatch()

  const [error, setError] = useState<boolean>(false)
  const [iconColor, setIconColor] = useState<SvgIconOwnProps["color"]>("action")
  const [emailNotifications, setEmailNotifications] = useState<boolean>(true)

  function validation(e: ChangeEvent<HTMLInputElement>){
    const {value} = e.target
    if(!value.length || value.length < 6 || !value.includes("@")){
      setError(true)
      setIconColor("action")
      dispatch(actionShippingData({
        type: CHANGE_SHIPPING_DATA, payload: {email: {value, error: true}}
      }))
    } else {
      setError(false)
      setIconColor("success")
      dispatch(actionShippingData({
        type: CHANGE_SHIPPING_DATA, payload: {email: {value, error: false}}
      }))
    }
  }

  function checkBoxHandleChange(){
    dispatch(actionShippingData({type: CHANGE_SHIPPING_DATA, payload: {emailNotifications}}))
    setEmailNotifications(prev => !prev)
  }

  return(
    <div className="mb-8">
      <h3 className="font-bold text-2xl">Contact</h3>

      <Box className="items-end flex">
        <EmailIcon sx={{mr: 1, my: 0.5}} color={iconColor} />
        <TextField size="small" error={error} id="shipping-form-email" 
        label="Email" fullWidth variant="standard" onChange={validation} />
      </Box>

      <div className="flex items-center mt-2">
        <Checkbox className="p-0 mr-2"
          sx={{ '& .MuiSvgIcon-root': { fontSize: 12 }}}
          checked={emailNotifications}
          onChange={checkBoxHandleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <p className="text-xs">Recieve news and offers</p>
      </div>
    </div>
  )
}