import { useSelector } from "react-redux"
import { ProductIdType } from "@/types/main/product.type"
import { SetTotalObjType } from "@/types/pages/product/overview.types"
import SelectionFields from "./SelectionFields/SelectionFields"

export interface Props {
  setTotalObj: ({}: SetTotalObjType) => void
}

export default function SelectionComp({setTotalObj}: Props){

  const productOptions = useSelector(({data: {productOptions}}: {data: ProductIdType}) => (productOptions))

  return(
    <ul className='w-full mt-10' >
      {productOptions?.map((options, idx) => {
        return(
          <SelectionFields options={options} key={idx} setTotalObj={setTotalObj} elemIdx={idx} />
        )
      })}
    </ul>
  )
}