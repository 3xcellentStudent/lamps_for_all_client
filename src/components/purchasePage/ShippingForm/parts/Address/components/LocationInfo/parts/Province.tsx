import { actionShippingData } from "@/redux/reducers/payment/actions";
import { CHANGE_SHIPPING_DATA } from "@/redux/reducers/payment/constants";
import { MenuItem, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

export default function Province(){

  const dispatch = useDispatch()

  const provinces: string[] | [] = ["AB", "BC", "SK", "MB", "ON", "QC", "NB", "PE", "NS", "NL", "NU", "NT", "YT"]

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    const {value} = e.target
    dispatch(actionShippingData({type: CHANGE_SHIPPING_DATA, payload: {province: value}}))
  }

  return(
    <TextField id="shipping-form-select-currency" select label="Province" 
    variant="standard" defaultValue="AB" helperText="" className="min-w-[70px]"
    onChange={handleChange} >
      {provinces.map((province, idx) => (
        <MenuItem key={idx} value={province} 
        className="text-sm py-0.5 px-1 flex justify-center">
          {province}
        </MenuItem>
      ))}
    </TextField>
  )
}