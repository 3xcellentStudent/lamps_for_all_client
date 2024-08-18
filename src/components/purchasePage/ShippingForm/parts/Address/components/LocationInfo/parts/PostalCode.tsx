import { actionShippingData } from "@/redux/payment/actions";
import { CHANGE_SHIPPING_DATA } from "@/redux/payment/constants";
import { TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux";

export default function PostalCode(){

  const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

  const dispatch = useDispatch()

  const [value, setValue] = useState<string>("")
  const [error, setError] = useState<boolean>(false)

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    const value = e.target.value.toUpperCase()

    setValue(value)

    if(regex.test(value)){
      dispatch(actionShippingData({
        type: CHANGE_SHIPPING_DATA, payload: {postalCode: {value, error: false}}
      }))
    } else {
      setError(true)
      dispatch(actionShippingData({
        type: CHANGE_SHIPPING_DATA, payload: {postalCode: {value, error: true}}
      }))
    }
  }

  return(
    <TextField size="small" className="w-[30%]" value={value} label="Postal code" 
    id="shipping-form-postal-code" variant="standard" onChange={handleChange} error={error} />
  )
}