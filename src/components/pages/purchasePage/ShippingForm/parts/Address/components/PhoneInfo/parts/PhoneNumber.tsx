import { Box, FormControl, Input, InputLabel, Tooltip } from "@mui/material";
import { ContactSupport as ContactSupportIcon } from "@mui/icons-material";
import TextMaskCustom from "../../TextMaskCustom";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { actionShippingData } from "@/redux/payment/actions";
import { CHANGE_SHIPPING_DATA } from "@/redux/payment/constants";

export default function PhoneNumber(){

  const [number, setNumber] = useState<string>("")

  const dispatch = useDispatch()

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    const {value} = e.target
    setNumber(value)
    dispatch(actionShippingData({type: CHANGE_SHIPPING_DATA, payload: {phoneNumber: value}}))
  }

  return(
    <Box>
      <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">Phone Number</InputLabel>
        <Input onChange={handleChange} value={number} name="textmask" 
        id="formatted-text-mask-input" inputComponent={TextMaskCustom as any} endAdornment={
          <Tooltip color="action" arrow disableInteractive
          className="cursor-pointer" title="Contact you about your order">
            <ContactSupportIcon/>
          </Tooltip>
        }
        />
      </FormControl>
    </Box>
  )
}