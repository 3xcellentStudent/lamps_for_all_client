import { Box } from "@mui/material";
import CountryCode from "./parts/CountryCode";
import PhoneNumber from "./parts/PhoneNumber";
import { LocalPhone as LocalPhoneIcon} from "@mui/icons-material";

export default function PhoneInfo(){

  return(
    <Box className="items-end flex w-full mt-3">
      <LocalPhoneIcon sx={{mr: 1, my: 0.5}} color="action" />
      <CountryCode/>
      <PhoneNumber/>
    </Box>
  )
}