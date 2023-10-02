import '../SectionDetails.scss'

interface Props {
  array: {name: string, value: string}[]
}

export default function Block({array}: Props){
  
  console.log(array)
  return(
    <div className="block_detail py1-05 mx2-11 bg-gray-950">
      {array?.map((obj, idx) => {
        return(
          <div className="block_flex flex" key={idx}>
            <span className='block_flex__text whitespace-nowrap w-6/12 block'>{obj.name}:</span>
            <span className='block_flex__text'>{obj.value}</span>
          </div>
        )
      })}
    </div>
  )
}