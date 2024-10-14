import { Grid } from "@mui/material";
import ImgWrapper from "../../ImgWrapper";
import Title from "../parts/Title/Title";

interface Props {
  productId: string
  productName: string
  productImg: string
}

export default function ItemImage({productId, productName, productImg}: Props){

  return(
    <Grid className="w-[150px] text-center flex items-center">
      <ImgWrapper cls="relative min-w-[60px] h-[60px]">
        <img className="absolute w-full h-full object-scale-down" 
        src={productImg} alt={productName} />
      </ImgWrapper>

      <Title productId={productId} productName={productName} />
    </Grid>
  )
}