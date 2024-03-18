import TypographyComp from "@/components/common/TypographyComp";
import { AddCartType } from "@/types/productPage.types/sectionTitle/purchasePart/purchaseComp";
import { ButtonBase } from "@mui/material";

interface Props {
  price: string
  action: () => void
  addCartC: AddCartType
}

export default function AddCartComp({addCartC: {boxC, btnC, priceC}, price, action}: Props){

  const newBtnCSx = {padding: "5px 15px", ...btnC?.sx}

  return(
    <TypographyComp sx={boxC?.sx} comp='div' cls={boxC?.cls} >
      <TypographyComp sx={priceC?.sx} comp='h5' cls={priceC?.cls} >{price}</TypographyComp>
      <ButtonBase sx={newBtnCSx} className={`${btnC?.cls} duration-200 rounded-md`} onClick={action}>Add to cart</ButtonBase>
    </TypographyComp>
  )
}