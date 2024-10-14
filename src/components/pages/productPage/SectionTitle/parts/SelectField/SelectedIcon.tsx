import ExternalCircleSVG from "@/components/common/Radio/ExternalCircleSVG";
import InternalCircleSVG from "@/components/common/Radio/InternalCircleSVG";

interface Props {
  props: {
    fill: string
    stroke: string
  }
}

export default function SelectIcon({props: {fill, stroke}}: Props){

  return(
    <>
      <InternalCircleSVG fill={fill} />
      <ExternalCircleSVG fill={stroke} stroke={stroke} />
    </>
  )
}