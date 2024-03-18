import { QuantitiesType } from "@/types/productPage.types/sectionTitle/sectionTitle"
import { ViewWeek } from "@mui/icons-material"
import { SvgIcon } from "@mui/material"
import { useEffect, useState } from "react"

interface Props {
  props: {
    fill: string
    stroke: string
    viewBox: string
    sx: {}
    properties: QuantitiesType
  }
}

// export default function FilledCircleSVG({props}: Props){
export default function FilledCircleSVG(
  {props: {fill, stroke, viewBox, sx, properties: {r, cx, cy}}}: Props
){

  // const template = {fill: '', stroke: '', viewBox: '', sx: {}, properties: {r: 0, cx: 0, cy: 0}}

  // const [{fill, stroke, viewBox, sx, properties: {r, cx, cy}}, setState] = useState(template)
  // useEffect(() => setState(props), [props])

  return(
    <SvgIcon viewBox={viewBox || '0 0 24 24'} sx={sx} >
      <circle r={r} cx={cx} cy={cy} fill={fill} stroke={stroke} />
    </SvgIcon>
    // <svg viewBox={viewBox || '0 0 24 24'} style={styles} focusable="false">
    // </svg>
  )
}