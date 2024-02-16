import { Quantities } from "@/types/productPage.types/sectionTitle/sectionTitle";

interface Props {fill: string, viewBox: string, styles: {}, internal: Quantities}

export default function InternalCircleSVG({fill, viewBox, styles, internal: {r, cx, cy}}: Props){
  return(
    <svg 
    fill={fill} style={styles} focusable="false" aria-hidden="true" viewBox={viewBox || '0 0 24 24'}>
      {/* <circle r={r} cx={cx} cy={cy} stroke="transparent" fill={fill} /> */}
      <circle r={r} cx={cx} cy={cy} stroke="transparent" fill={fill} />
      {/* <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path> */}
    </svg>
  )
}