import { ProductIdType } from "@/types/main/product.type";
import { AccountCircle } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

interface Props {
  name: string
}

export default function UserName({name}: Props){

  const {elementsPrimary, elementsSecondary} = useSelector(({
    data: {theme: {colors: {backgrounds: {elementsPrimary, elementsSecondary}}}}
  }: {data: ProductIdType}) => ({elementsPrimary, elementsSecondary}))

  return(
    <div className="flex items-center relative">
      <div className="w-[30px] h-[30px] mr-2 relative" >
        <AccountCircle htmlColor={elementsPrimary.hex} className="absolute w-full h-full"/>
      </div>

      <h3 className="font-bold">{name}</h3>
      <Typography sx={{backgroundColor: elementsPrimary.hex}} className="absolute w-full h-[2px] left-0 bottom-[-5px]"/>
    </div>
  )
}