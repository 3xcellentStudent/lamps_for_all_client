interface Props {
  array: {name: string, value: string}[]
}

export default function List({array}: Props){
  return(
    <ul>
      {array.map((obj, idx) => {
        const {name, value} = obj
        return(
          <li key={idx} className="flex justify-between w-full">
            <span className="w-6/12">{name}:</span>
            <span className="w-6/12 text-start">{value}</span>
          </li>
        )
      })}
    </ul>
  )
}