import {Delivery, Description} from '@/typesComp/productID.type'
import Block from './parts/Block'

export default function SectionDetails({data}: {data: [{}, {}]}){
  
  // const [packageDetail, specifications] = data

  console.log(data)
  return(
    <section className='wrapper_big'>
      <ul className="flex w-full justify-center mx-auto">
        {data?.map((array, idx) => <Block key={idx} array={array} />)}
      </ul>
    </section>
  )
}