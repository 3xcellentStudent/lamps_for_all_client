import { Quantities } from "@/types/productPage.types/sectionTitle/sectionTitle";

interface Props {fill: string, stroke: string, viewBox: string, styles: {}, external: Quantities}

export default function ExternalCircleSVG({fill, stroke, viewBox, styles, external: {r, cx, cy}}: Props){
  return(
    <svg style={styles} focusable="false" viewBox={viewBox || '0 0 24 24'}>
      <circle r={r} cx={cx} cy={cy} stroke={stroke} strokeWidth={1} fill="transparent" />
      {/* <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path> */}
    </svg>
  )
}