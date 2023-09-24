export default function Block({array}: {array: string[]}){
  
  console.log(array)
  return(
    <div className="w-3/12 bg-gray-950 x1-1">
      {array?.map((string, idx) => {
        return <p className="text-white" key={idx}>{string}</p>
      })}
    </div>
  )
}