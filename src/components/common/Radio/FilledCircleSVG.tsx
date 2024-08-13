import { SvgIcon } from "@mui/material"

interface Props {
  props: {
    fill: string
    stroke: string
  }
}

export default function FilledCircleSVG({props: {fill, stroke}}: Props){

  return(
    <SvgIcon className="absolute w-full h-full" viewBox='0 0 24 24' >
      <circle r={12} cx={12} cy={12} fill={fill} stroke={stroke} />
    </SvgIcon>
  )
}