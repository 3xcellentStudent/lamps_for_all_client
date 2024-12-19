import Button from "@/components/common/Buttons/Button";
import { ProductIdType } from "@/types/main/product.type";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Props {
  action: () => void
  inStockStatus: boolean
}

export default function AddCartComp({action, inStockStatus}: Props){

  const btnCls = `relative duration-200 rounded-md px-5 py-3 uppercase whitespace-nowrap overflow-hidden
  before:absolute before:block before:left-[-175%] before:top-0 before:h-full before:w-[200%] 
  before:duration-300 before:z-[0] hover:before:left-0 w-[45%]`

  // const [{mainBg, secondaryBg}, setColors] = useState<{mainBg: string, secondaryBg: string}>({mainBg: "", secondaryBg: ""})

  const {
    backgrounds: {elementsPrimary, elementsOptional}, text: {optional, secondary}
  } = useSelector(({data: {theme: {colors: {backgrounds, text}}}}: {data: ProductIdType}) => ({backgrounds, text}))

  // useEffect(() => {
  //   const {mainBg, secondaryBg} = data.common.theme.colors
  //   setColors({mainBg: `rgb(${mainBg})`, secondaryBg: `rgb(${secondaryBg})`})
  // }, [data])

  
  return(
    <Typography component="div" sx={{pointerEvents: inStockStatus ? "auto" : "none"}} className="flex items-center justify-between w-[90%] mt-3" >
      <Button disabled={!inStockStatus} sx={{backgroundColor: elementsPrimary.hex, color: optional.hex, 
      ":hover": inStockStatus && {backgroundColor: elementsOptional.hex, color: secondary.hex}}} 
      cls={btnCls} handleClick={action}>
        <span className="relative z-[2]">Add to cart</span>
      </Button>
      <Button disabled={!inStockStatus} sx={{backgroundColor: elementsPrimary.hex, color: optional.hex, 
      ":hover": inStockStatus && {backgroundColor: elementsOptional.hex, color: secondary.hex}}} 
      cls={`${btnCls} ml-2`} handleClick={action}>
        <span className="relative z-[2]">Buy Now</span>
      </Button>
    </Typography>
  )
}