import { actionShippingData } from "@/redux/payment/actions";
import { CHANGE_SHIPPING_DATA } from "@/redux/payment/constants";
import { Business as BusinessIcon } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

export default function Company(){

  const dispatch = useDispatch()

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    const {value} = e.target
    dispatch(actionShippingData({
      type: CHANGE_SHIPPING_DATA, payload: {company: value}
    }))

  }

  return(
    <Box className="items-end flex w-full">
      <BusinessIcon className="mr-2 my-1" color="action" />
      <TextField fullWidth size="small" id="shipping-form-company" 
      label="Company (optional)" variant="standard" onChange={handleChange} />
    </Box>
  )
}