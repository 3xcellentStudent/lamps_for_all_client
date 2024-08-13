import { Box, TextField } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from "react-redux";
import { actionShippingData } from "@/redux/reducers/payment/actions";
import { CHANGE_SHIPPING_DATA } from "@/redux/reducers/payment/constants";
import { ChangeEvent, useState } from "react";

export default function FullName(){

  const dispatch = useDispatch()

  const [firstNameError, setFirstNameError] = useState<boolean>(false)
  const [lastNameError, setLastNameError] = useState<boolean>(false)

  function firstNameHandleChange(e: ChangeEvent<HTMLInputElement>){
    const {value} = e.target
    dispatch(actionShippingData({
      type: CHANGE_SHIPPING_DATA, payload: {firstName: {value, error: false}}
    }))
  }
  function lastNameHandleChange(e: ChangeEvent<HTMLInputElement>){
    const {value} = e.target
    if(!value.length){
      setFirstNameError(true)
      dispatch(actionShippingData({
        type: CHANGE_SHIPPING_DATA, payload: {firstName: {value, error: true}}
      }))
    } else {
      setLastNameError(false)
      dispatch(actionShippingData({
        type: CHANGE_SHIPPING_DATA, payload: {lastName: {value, error: false}}
      }))
    }
  }

  return(
    <Box className="items-end flex w-full mt-3">
      <AccountCircleIcon className="mr-2 my-1" color="action" />
      <Box className="items-end flex w-full">
        <TextField className="w-[45%] mr-16" id="shipping-form-name" variant="standard" 
        label="First name" onChange={firstNameHandleChange} error={firstNameError} size="small" />
        <TextField className="w-[45%]" id="shipping-form-sername" variant="standard" 
        label="Last name" onChange={lastNameHandleChange} error={lastNameError} size="small" />
        {/* <TextField ref={secondNameRef} size="small" error={error} id="input-with-sx" 
        label="Email *" variant="standard" onChange={secondNameValidation} /> */}
      </Box>
    </Box>
  )
}