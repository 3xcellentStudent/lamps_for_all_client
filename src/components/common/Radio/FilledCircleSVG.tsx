import { Quantities } from "@/types/productPage.types/sectionTitle/sectionTitle"
import { ViewWeek } from "@mui/icons-material"
import { useEffect, useState } from "react"

interface Props {
  props: {
    fill: string
    stroke: string
    viewBox: string
    styles: {}
    properties: Quantities
  }
}

export default function FilledCircleSVG({props}: Props){

  const template = {fill: '', stroke: '', viewBox: '', styles: {}, properties: {r: 0, cx: 0, cy: 0}}

  const [{fill, stroke, viewBox, styles, properties: {r, cx, cy}}, setState] = useState(template)
  useEffect(() => setState(props), [props])

  return(
    <svg viewBox={viewBox || '0 0 24 24'} style={styles} focusable="false">
      {/* <circle r={r} cx={cx} cy={cy} fill={color} /> */}
      <circle r={r} cx={cx} cy={cy} fill={fill} stroke={stroke} />
      {/* <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path> */}
    </svg>
  )
}