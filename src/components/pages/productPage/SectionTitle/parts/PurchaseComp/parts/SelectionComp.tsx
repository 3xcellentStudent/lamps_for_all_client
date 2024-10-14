import { useEffect } from "react"
import SelectionField from "../../SelectField/SelectionField"
import { Props } from "@/types/productPage.types/sectionTitle/purchasePart/selectionComp"

export default function SelectionComp({
  boxShadow, selectionC: {fieldC}, fieldsRef, setTotalObj
}: Props){

  return(
    <ul className='w-full mt-3' >
      {fieldC.map((obj, idx, array) => {

        return(
          // <SelectionField boxShadow={boxShadow} key={idx} sxField={sxField} items={items} 
          // setTotalObj={setTotalObj} elemIdx={idx} name={name} />
          <SelectionField data={{...obj, boxShadow}} key={idx} 
          setTotalObj={setTotalObj} elemIdx={idx} />
        )
      })}
    </ul>
  )
}