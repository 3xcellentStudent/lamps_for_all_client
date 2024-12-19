import styles from "./styles.module.scss"

interface Props {fill: string, stroke: string, circleCls: "external_svg" | "change_opacity_external_svg"}

export default function ExternalCircleSVG({fill, stroke, circleCls}: Props){

  return(
    <svg focusable="false" className={`absolute w-full h-full flex ${styles[circleCls]}`} viewBox='0 0 24 24'>
      <circle r={12} cx={12} cy={12} stroke={fill} strokeWidth={1} fill="transparent" className="block " />
    </svg>
  )
}