import { GlobalDataType } from "@/types/main/globalData.type"
import { Box, SxProps, Theme, Typography } from "@mui/material"
import { useSelector } from "react-redux"


interface Props {
  fontSize?: string
  children: string
  position?: "center" | "start" | "end" | "baseline" | "stretch"
  width?: "full" | "6/12"
  containerSx?: SxProps<Theme>
}

export default function SectionTitle({fontSize, position, children, width, containerSx}: Props){

  const {elementsPrimaryBg, elementsOptionalBg} = useSelector(({
    globalData: {colors: {backgrounds}}
  }: {globalData: GlobalDataType}) => ({...backgrounds}))

  return(
    <Box className={`relative flex justify-center flex-col ${width ? `w-${width}` : "w-full"} ${position ? `items-${position}` : "items-center"}`}
    sx={containerSx}>
      <Typography sx={{fontSize: fontSize || "40px"}} className="mb-3" component="h4">{children}</Typography>
      <div className="flex flex-col justyfi-center items-center">
        <Box className="w-[140px] h-[3px] mb-3" sx={{backgroundColor: elementsPrimaryBg.hex}}></Box>
        <Box className="w-[100px] h-[3px]" sx={{backgroundColor: elementsOptionalBg.hex}}></Box>
      </div>
    </Box>
  )
}