interface Props {fill: string, stroke: string}

export default function ExternalCircleSVG({fill, stroke}: Props){
  return(
    <svg focusable="false" viewBox='0 0 24 24'>
      <circle r={12} cx={12} cy={12} stroke={stroke} strokeWidth={1} fill="transparent" />
      {/* <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path> */}
    </svg>
  )
}