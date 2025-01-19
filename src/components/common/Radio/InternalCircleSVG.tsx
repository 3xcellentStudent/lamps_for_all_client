import { SvgIcon } from "@mui/material";
import styles from "./styles.module.scss"

interface Props {
  fill: string
}

export default function InternalCircleSVG({fill}: Props){
  
  return(
    <SvgIcon className={`absolute w-full h-full ${styles.internal_svg}`} 
    fill={fill} focusable="false" aria-hidden="true" viewBox='0 0 24 24'>
      <circle className="duration-[400ms]" r={12} cx={12} cy={12} stroke="transparent" fill={fill} />
    </SvgIcon>
  )
}