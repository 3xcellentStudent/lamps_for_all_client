import ExternalCircleSVG from "@/components/common/Radio/ExternalCircleSVG";
import InternalCircleSVG from "@/components/common/Radio/InternalCircleSVG";
import { QuantitiesType } from "@/types/productPage.types/sectionTitle/sectionTitle";
import { useEffect, useState } from "react";

interface Props {
  props: {
    fill: string
    stroke: string
    viewBox: string
    sx: {width: string, height: string}
    properties: {internal: QuantitiesType, external: QuantitiesType}
  }
}

export default function SelectIcon({
  props: {fill, stroke, viewBox, sx, properties: {internal, external}}}: Props
){

  // const template = {
  //   fill: '', stroke: '', viewBox: '', styles: {}, properties: {
  //     internal: {r: 0, cx: 0, cy: 0}, external: {r: 0, cx: 0, cy: 0}}
  //   }

  // const [{fill, stroke, viewBox, styles, properties: {internal, external}}, setState] = useState(template)
  // useEffect(() => setState(props), [props])

  return(
    <>
      <InternalCircleSVG fill={fill} viewBox={viewBox} styles={sx} internal={internal} />
      <ExternalCircleSVG fill={stroke} stroke={stroke} viewBox={viewBox} styles={sx} external={external} />
    </>
  )
}