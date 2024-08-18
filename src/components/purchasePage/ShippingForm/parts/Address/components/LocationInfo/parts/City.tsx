import { actionShippingData } from "@/redux/payment/actions";
import { CHANGE_SHIPPING_DATA } from "@/redux/payment/constants";
import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

export default function City(){

  const dispatch = useDispatch()

  const [error, setError] = useState<boolean>(false)

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    const {value} = e.target

    if(!value.length){
      setError(true)
      dispatch(actionShippingData({
        type: CHANGE_SHIPPING_DATA, payload: {city: {value, error: true}}
      }))
    } else {
      setError(false)
      dispatch(actionShippingData({
        type: CHANGE_SHIPPING_DATA, payload: {city: {value, error: false}}
      }))
    }
  }

  return(
    <TextField size="small" className="w-[30%]" error={error} id="shipping-form-city" 
    label="City" variant="standard" onChange={handleChange} />
  )
}