import Button from "@/components/common/Buttons/Button";
import { GlobalDataType } from "@/types/main/globalData.type";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

interface Props {
  action: () => void
  inStockStatus: boolean
}

export default function AddCartComp({action, inStockStatus}: Props){

  const btnCls = `relative duration-200 rounded-md px-5 py-3 uppercase whitespace-nowrap overflow-hidden
  before:absolute before:block before:left-[-175%] before:top-0 before:h-full before:w-[200%] 
  before:duration-300 before:z-[0] hover:before:left-0 w-[45%]`

  const {elementsPrimaryBg, elementsOptionalBg, secondaryText} = useSelector(
    ({globalData: {colors: {backgrounds, text}}}: {globalData: GlobalDataType}) => ({...backgrounds, ...text})
  )

  return(
    <Typography component="div" sx={{pointerEvents: inStockStatus ? "auto" : "none"}} className="flex items-center justify-between w-[100%] mt-3" >
      <Button disabled={!inStockStatus} sx={{backgroundColor: elementsPrimaryBg.hex, color: secondaryText.hex, 
      "&:hover": inStockStatus && {backgroundColor: elementsOptionalBg.hex, color: secondaryText.hex}}} 
      className={btnCls} handleClick={action}>
        <span className="relative z-[2]">Add to cart</span>
      </Button>
      <Button disabled={!inStockStatus} sx={{backgroundColor: elementsPrimaryBg.hex, color: secondaryText.hex, 
      "&:hover": inStockStatus && {backgroundColor: elementsOptionalBg.hex, color: secondaryText.hex}}} 
      className={`${btnCls} ml-2`} handleClick={action}>
        <span className="relative z-[2]">Buy Now</span>
      </Button>
    </Typography>
  )
}