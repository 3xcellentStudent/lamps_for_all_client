import ExternalCircleSVG from "@/components/common/Radio/ExternalCircleSVG";
import InternalCircleSVG from "@/components/common/Radio/InternalCircleSVG";
import { ProductIdType } from "@/types/productPage.types/mainTypes";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Props {
  fill: string
  stroke: string
}

export default function SelectedIcon({fill, stroke}: Props){

  const [{mainBg, secondaryBg}, setTheme] = useState<{mainBg: string, secondaryBg: string}>({mainBg: "", secondaryBg: ""})

  const data = useSelector(({data}: {data: ProductIdType}) => data)

  useEffect(() => {
    if(data.common){
      const {mainBg, secondaryBg} = data?.common?.theme?.colors
      setTheme({mainBg, secondaryBg})
    }
  }, [data])

  return(
    <>
      <InternalCircleSVG fill={fill} />
      <div className="absolute w-[44px] h-[44px] flex">
        <div className="relative w-[44px] h-[44px] items-center justify-center">
          <ExternalCircleSVG fill={fill} stroke={stroke} />
        </div>
      </div>
    </>
  )
}