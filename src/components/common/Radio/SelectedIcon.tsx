import ExternalCircleSVG from "@/components/common/Radio/ExternalCircleSVG";
import InternalCircleSVG from "@/components/common/Radio/InternalCircleSVG";

interface Props {
  fill: string
  stroke: string
}

export default function SelectedIcon({fill, stroke}: Props){

  return(
    <>
      <InternalCircleSVG fill={fill} />
      <div className="absolute w-[44px] h-[44px] flex">
        <div className="relative w-[44px] h-[44px] items-center justify-center">
          <ExternalCircleSVG circleCls="external_svg" fill={fill} stroke={stroke} />
        </div>
      </div>
    </>
  )
}