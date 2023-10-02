interface Props {
  array: string[]
}

export default function Text({array}: Props){
  return(
    <ul className="px1-1">
      {array.map((text, idx) => <li key={idx}>{text}</li>)}
    </ul>
  )
}