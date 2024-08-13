import { SvgIcon } from "@mui/material";

// interface Props {fill: string, sx: {}}

export default function InternalCircleSVG({fill}: {fill: string}){
  return(
    <SvgIcon className="absolute w-full h-full" 
    fill={fill} focusable="false" aria-hidden="true" viewBox='0 0 24 24'>
      <circle r={8} cx={12} cy={12} stroke="transparent" fill={fill} />
    </SvgIcon>
  )
}