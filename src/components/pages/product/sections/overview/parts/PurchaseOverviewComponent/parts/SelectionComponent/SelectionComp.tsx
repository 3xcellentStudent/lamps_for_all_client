import { useSelector } from "react-redux"
import { ProductDataType } from "@/types/main/productData.type"
import { SetTotalObjType } from "@/types/pages/product/overview.types"
import SelectionFields from "./SelectionFields/SelectionFields"
import { Dispatch, SetStateAction } from "react"

export interface Props {
  setTotalObj: ({}: SetTotalObjType) => void
  carouselState: {
    state: number
    action: Dispatch<SetStateAction<number>>
  }
}

export default function SelectionComp({setTotalObj, carouselState}: Props){

  const {productOptions} = useSelector(({productData}: {productData: ProductDataType}) => ({...productData}))

  return(
    <ul className='w-full mt-10' >
      {productOptions?.map((options, idx) => {
        return(
          <SelectionFields carouselState={carouselState} options={options} key={idx} 
          setTotalObj={setTotalObj} elemIdx={idx} />
        )
      })}
    </ul>
  )
}