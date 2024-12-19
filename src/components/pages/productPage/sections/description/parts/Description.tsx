export default function DescriptionText({description}: {description: string[]}){
  return(
    <div className='w-[45%] my-auto px-5'>
      <h2 className='text-center text-2xl font-bold line_title_center 
      w-min mx-auto whitespace-nowrap'>Product Description</h2>
      {description?.map((text, idx) => {
        return(
          <div key={idx}>
            <p className='text-base'>{text}</p>
            <br />
          </div>
        )
      })}
    </div>
  )
}