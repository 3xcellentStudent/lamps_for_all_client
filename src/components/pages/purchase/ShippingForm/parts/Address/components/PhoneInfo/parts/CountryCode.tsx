import CanadaSVG from "@/components/SVG/countryFlag/CanadaSVG";
import { Box, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

interface CountriesCodesType {code: string, countryName: string}

export default function CountryCode(){

  const countriesCodes: CountriesCodesType[] = [
    {code: "+1", countryName: "Canada"}, 
    {code: "+1", countryName: "USA"},
    {code: "+1", countryName: "USA"},
  ]

  const dispatch = useDispatch()

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    const {value} = e.target

    console.log(value)
  }

  return(
    <Box className="w-[80px] mr-4">
      <TextField fullWidth id="shipping-form-country-code" select
      variant="standard" defaultValue="+1" className="flex flex-row" >
        {countriesCodes?.map(({code, countryName}, idx) => {
          return(
            <li key={idx} value={code} className="text-sm py-0.5 px-1 flex justify-center">
              <div className="flex flex-row">
                {/* <div className="relative w-[20px] h-[20px] mr-4">
                  <CanadaSVG className="absolute left-0 top-0 w-full h-full" />
                </div> */}
                <div>{code}</div>
              </div>
            </li>
          )
        })}
      </TextField>
    </Box>
  )
}