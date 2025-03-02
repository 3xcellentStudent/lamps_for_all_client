import { LinearProgress, LinearProgressProps, } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import styles from "./styles.module.scss"
import { useSelector } from "react-redux";
import { GlobalDataType } from "@/types/main/globalData.type";

interface Props {
  max: number
  value: number
  variant?: LinearProgressProps["variant"]
  // sx?: SxProps<Theme>
  rating: number
}

export default function Scale({max, value, variant, rating}: Props){

  const {elementsOptionalBg, elementsSecondaryBg} = useSelector(({globalData: {colors: {backgrounds}}}: {globalData: GlobalDataType}) => (backgrounds))

  return(
    <div className={`flex flex-row items-center ${styles.container}`} >
      <div className="font-bold text-2xl mr-1">{rating}</div>
      <StarRoundedIcon sx={{color: elementsOptionalBg.hex, fontSize: 32}} />
      <div className="w-full ml-2">
        <LinearProgress sx={{backgroundColor: elementsSecondaryBg.hex, ".css-1kjriw0-MuiLinearProgress-bar1": {backgroundColor: elementsOptionalBg.hex}}} 
        variant={!variant ? "determinate" : variant} value={value * 100 / max} />
      </div>
      <div className="ml-3 font-bold text-2xl underline">{value}</div>
    </div>
  )
}