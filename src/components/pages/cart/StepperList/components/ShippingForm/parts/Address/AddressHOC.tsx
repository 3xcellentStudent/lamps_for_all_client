import { Box } from "@mui/material";
import PhoneInfo from "./components/PhoneInfo/PhoneInfo";
import Company from "./components/Company";
import AddressInfo from "./components/AddressInfo";
import Apartment from "./components/Apartment";
import LocationInfo from "./components/LocationInfo/LocationInfo";

export default function Address(){

  return(
    <Box className="w-full mt-3">
      <Company/>
      <AddressInfo/>
      <Apartment/>
      <LocationInfo/>
      <PhoneInfo/>
    </Box>
  )
}