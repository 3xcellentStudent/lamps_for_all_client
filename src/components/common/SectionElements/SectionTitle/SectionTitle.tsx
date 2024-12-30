import { ProductIdType } from "@/types/main/product.type"
import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"


interface Props {
  fontSize?: string
  children: string
  position?: "center" | "start" | "end" | "baseline" | "stretch"
  width?: "full" | "6/12"
}

export default function SectionTitle({fontSize, position, children, width}: Props){

  const {elementsPrimary, elementsOptional} = useSelector(({
    data: {theme: {colors: {backgrounds: {elementsPrimary, elementsOptional}}}}
  }: {data: ProductIdType}) => ({elementsPrimary, elementsOptional}))

  return(
    <div className={`relative flex justify-center flex-col ${width ? `w-${width}` : "w-full"} ${position ? `items-${position}` : "items-center"}`}>
      <Typography sx={{fontSize: fontSize || "16px"}} className="mb-3" component="h4">{children}</Typography>
      <div className="flex flex-col justyfi-center items-center">
        <Box className="w-[140px] h-[3px] mb-3" sx={{backgroundColor: elementsPrimary.hex}}></Box>
        <Box className="w-[100px] h-[3px]" sx={{backgroundColor: elementsOptional.hex}}></Box>
      </div>
    </div>
  )
}