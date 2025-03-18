import { LinearProgress, LinearProgressProps, styled, } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import styles from "./styles.module.scss"
import { useSelector } from "react-redux";
import { GlobalDataType } from "@/types/main/globalData.type";
import { ReactNode, useRef } from "react";

interface Props {
  max: number
  value: number
  // variant?: LinearProgressProps["variant"]
  rating: number
}

const CustomSpan = styled("span")({
  width: "100%",
})

export default function Scale({max, value, rating}: Props){

  const {elementsOptionalBg, elementsSecondaryBg} = useSelector(({globalData: {colors: {backgrounds}}}: {globalData: GlobalDataType}) => (backgrounds))

  const spanContainerWidth = useRef<HTMLDivElement | null>(null)

  return(
    <div className={`flex flex-row items-center ${styles.container}`} >
      <div className="font-bold text-2xl mr-1">{rating}</div>
      <StarRoundedIcon sx={{color: elementsOptionalBg.hex, fontSize: 32}} />
      <div ref={spanContainerWidth} className="w-full ml-2 overflow-hidden h-[6px] relative flex items-center rounded-md">
        <CustomSpan sx={{backgroundColor: elementsSecondaryBg.hex}} className={`${styles.big_bar}`}/>
        <CustomSpan sx={{
          backgroundColor: elementsOptionalBg.hex, left: `-${100 - (value * 100 / max)}%`, transform: `translateY(-50%)`
        }} className={`${styles.small_bar}`}/>
      </div>
      <div className="ml-3 font-bold text-2xl underline min-w-[54px]">{value}</div>
    </div>
  )
}