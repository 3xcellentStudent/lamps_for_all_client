import { Info as InfoIcon } from "@mui/icons-material";
import { Box } from "@mui/material";
import City from "./parts/City";
import Province from "./parts/Province";
import PostalCode from "./parts/PostalCode";

export default function LocationInfo(){

  return(
    <Box className="items-end justify-between flex w-full mt-3">
      <InfoIcon className="mr-2 my-1" color="action" />
      <Box className="items-end justify-between flex w-full">
        <City/>
        <Province/>
        <PostalCode/>
      </Box>
    </Box>
  )
}