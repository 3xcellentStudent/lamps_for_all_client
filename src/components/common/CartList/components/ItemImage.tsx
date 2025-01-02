import { Grid } from "@mui/material";
import Title from "../parts/Title/Title";

interface Props {
  productName: string
  productImg: string
}

export default function ItemImage({productName, productImg}: Props){

  return(
    <div className="w-[150px] text-center flex items-center">
      <div className="relative min-w-[60px] h-[60px]">
        <img className="absolute w-full h-full object-scale-down" 
        src={productImg} alt={productName} />
      </div>
    </div>
  )
}