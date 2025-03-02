import { GlobalDataType } from "@/types/main/globalData.type";
import { AccountCircle } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

interface Props {
  name: string
}

export default function UserInformation({name}: Props){

  const {elementsPrimaryBg} = useSelector(({
    globalData: {colors: {backgrounds}}
  }: {globalData: GlobalDataType}) => ({...backgrounds}))

  return(
    <div className="flex items-center relative">
      <div className="w-[30px] h-[30px] mr-2 relative" >
        <AccountCircle htmlColor={elementsPrimaryBg.hex} className="absolute w-full h-full"/>
      </div>

      <h3 className="font-bold">{name}</h3>
      <Typography sx={{backgroundColor: elementsPrimaryBg.hex}} className="absolute w-full h-[2px] left-0 bottom-[-5px]"/>
    </div>
  )
}