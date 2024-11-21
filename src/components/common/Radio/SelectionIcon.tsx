import { styled, SvgIcon } from "@mui/material"
import styles from "./styles.module.scss"
import ExternalCircleSVG from "./ExternalCircleSVG"

interface Props {
  fill: string
  stroke: string
}

export default function SelectionIcon({fill, stroke}: Props){

  const CustomCircle = styled("circle")({})

  return(
    <>
    <SvgIcon className={`absolute w-full h-full ${styles.selection_icon_svg}`} viewBox='0 0 24 24' >
      <CustomCircle r={12} cx={12} cy={12} fill={fill} stroke={stroke} sx={{boxShadow: `inset 0 0 2px ${fill}`}} />
    </SvgIcon>
    </>
  )
}