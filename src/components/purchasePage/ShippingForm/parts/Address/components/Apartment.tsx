import { Box, SvgIconOwnProps, TextField } from "@mui/material";
import { Apartment as ApartmentIcon } from "@mui/icons-material"
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { actionShippingData } from "@/redux/reducers/payment/actions";
import { CHANGE_SHIPPING_DATA } from "@/redux/reducers/payment/constants";

export default function Apartment(){

  const dispatch = useDispatch()

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    const {value} = e.target
    dispatch(actionShippingData({
      type: CHANGE_SHIPPING_DATA, payload: {apartment: value}
    }))
  }

  return(
    <Box className="items-end flex w-full mt-3">
      <ApartmentIcon className="mr-2 my-1" />
      <TextField fullWidth size="small" id="shipping-form-apartment" 
      label="Apartment, suite, etc. (optional)" variant="standard" onChange={handleChange} />
    </Box>
  )
}