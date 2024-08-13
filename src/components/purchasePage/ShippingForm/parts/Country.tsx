import { Box, FormControl, InputLabel, MenuItem, Select, SvgIconOwnProps, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import PublicIcon from '@mui/icons-material/Public';
import { actionShippingData } from "@/redux/reducers/payment/actions";
import { CHANGE_SHIPPING_DATA } from "@/redux/reducers/payment/constants";
import { useDispatch } from "react-redux";

export default function Country(){

  const dispatch = useDispatch()

  const [selected, setSelect] = useState<number>(0)

  const regions = ["Canada", "USA"]

  return(
    <Box className="flex items-end mt-5" component="div">
      <PublicIcon className="mr-2 my-1" color="action" />
      <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-standard-label">Region/Country</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="shipping-form-country"
          value={selected}
          onChange={(e) => {
            const {value} = e.target
            setSelect(+value)
            dispatch(actionShippingData({
              type: CHANGE_SHIPPING_DATA, payload: {country: regions[+value]}
            }))
          }}
          label="Region/Country"
        >
          {regions.map((region, idx) => <MenuItem key={idx} value={idx}>{region}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  )
}