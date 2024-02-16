import ExternalCircleSVG from "@/components/common/Radio/ExternalCircleSVG";
import InternalCircleSVG from "@/components/common/Radio/InternalCircleSVG";
import { Quantities } from "@/types/productPage.types/sectionTitle/sectionTitle";
import { useEffect, useState } from "react";

interface Props {
  props: {
    fill: string
    stroke: string
    viewBox: string
    styles: {width: string, height: string}
    properties: {internal: Quantities, external: Quantities}
  }
}

export default function SelectIcon({props}: Props){

  const template = {
    fill: '', stroke: '', viewBox: '', styles: {}, properties: {
      internal: {r: 0, cx: 0, cy: 0}, external: {r: 0, cx: 0, cy: 0}}
    }

  const [{fill, stroke, viewBox, styles, properties: {internal, external}}, setState] = useState(template)
  useEffect(() => setState(props), [props])

  return(
    <>
      <InternalCircleSVG fill={fill} viewBox={viewBox} styles={styles} internal={internal} />
      <ExternalCircleSVG fill={stroke} stroke={stroke} viewBox={viewBox} styles={styles} external={external} />
    </>
  )
} 
// <div style={{position: 'relative', width: '24px', height: '24px'}}>
    {/* </div> */}