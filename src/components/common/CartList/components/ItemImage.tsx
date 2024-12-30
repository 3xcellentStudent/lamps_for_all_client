import { Grid } from "@mui/material";
import Title from "../parts/Title/Title";

interface Props {
  productId: string
  productName: string
  productImg: string
}

export default function ItemImage({productId, productName, productImg}: Props){

  return(
    <Grid className="w-[150px] text-center flex items-center">
      <div className="relative min-w-[60px] h-[60px]">
        <img className="absolute w-full h-full object-scale-down" 
        src={productImg} alt={productName} />
      </div>

      <Title productId={productId} productName={productName} />
    </Grid>
  )
}