import { List } from "@mui/material"
import SelectionField from "../../SelectField/SelectionField"
import { Props } from "@/types/productPage.types/sectionTitle/purchasePart/selectionComp"

export default function SelectionComp({selectionC: {sxList, fieldC}, fieldsRef, setTotalObj}: Props){

  const newSxList = {padding: 0, ...sxList}

  return(
    <List sx={newSxList} className='flex mt-3' >
      {fieldC.map((obj, idx, array) => {
        const {sxField, sxSVG, name, type, viewBox, items} = obj
        const {value, properties} = items[0]
        const fieldsCompr = fieldsRef.current.length + 1 <= array.length
        if(fieldsCompr){fieldsRef.current.push({name, type, value, properties, index: 0})}

        if(idx === 1){
          sxField.sxBox = {...sxField.sxBox, marginLeft: "20px"}
          return <SelectionField sxField={sxField} sxSVG={sxSVG} items={items}
          key={idx} setTotalObj={setTotalObj} elemIdx={idx} viewBox={viewBox} name={name} />
        } 
        return <SelectionField sxField={sxField} sxSVG={sxSVG} items={items}
        key={idx} setTotalObj={setTotalObj} elemIdx={idx} viewBox={viewBox} name={name} />
      })}
    </List>
  )
}