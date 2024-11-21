import { ProductIdType } from "@/types/productPage.types/mainTypes"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styles from "./styles.module.scss"

interface Props {fill: string, stroke: string}

export default function ExternalCircleSVG({fill, stroke}: Props){

  const [{mainBg}, setTheme] = useState<{mainBg: string}>({mainBg: ""})

  const data = useSelector(({data}: {data: ProductIdType}) => data)

  useEffect(() => {
    if(data.common){
      const {mainBg} = data.common.theme.colors
      setTheme({mainBg})
    }
  }, [data])

  return(
    <svg focusable="false" className={`absolute w-full h-full flex ${styles.external_svg}`} viewBox='0 0 24 24'>
      <circle r={12} cx={12} cy={12} stroke={fill} strokeWidth={1} fill="transparent" className="block " />
    </svg>
  )
}