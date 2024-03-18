import Quantity from "@/components/common/Quantity/Quantity"
import TypographyComp from "@/components/common/TypographyComp"
import { FieldsRefType } from "@/types/productPage.types/sectionTitle/purchasePart/fieldComp"
import { Props } from "@/types/productPage.types/sectionTitle/purchasePart/purchaseComp"
import { SetTotalObjType } from "@/types/productPage.types/sectionTitle/purchasePart/selectionComp"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import SelectionComp from "./parts/SelectionComp"
import TitleComp from "./parts/TitleComp"
import { Box } from "@mui/material"
import AddCartComp from "./parts/AddCartComp"

export default function PurchaseComp({
  common: {title, rating, category}, purchasePart: {sxCont, sxBox, components}, description, quantityMax, price, productId
}: Props){

  const dispatch = useDispatch()
  const quantityRef = useRef<number>(1)
  const fieldsRef = useRef<FieldsRefType[]>([])

  function setTotalObj({elemIdx, index, data}: SetTotalObjType){
    const {value, properties} = data
    fieldsRef.current[elemIdx].value = value
    fieldsRef.current[elemIdx].properties = properties
    fieldsRef.current[elemIdx].index = index
  }

  // const createFieldsArray = () => {
  //   const fields: {}[] = []
  //   for(let i = 0; i < fieldsRef.current.length; i++){
  //     const copyObj = Object.assign({}, fieldsRef.current[i])
  //     fields.push(copyObj)
  //   }
  //   return fields
  // }

  // function dispatchToCart(){
  //   const {name, value} = fieldsRef.current[0]
    
  //   const resultObj = {
  //     productName: title,
  //     productId,
  //     productImg: img,
  //     quantity: quantityRef.current,
  //     quantityMax: quantityMax,
  //     fields: createFieldsArray(),
  //     displayedField: {name, value}
  //   }
  //   dispatch(actionCartSaga({type: PUT_CART_ALL, payload: resultObj}))
  // }

  return(
    <TypographyComp sx={sxCont} comp='div' cls="section_title__purchase_part">
      <Box sx={sxBox}>
        <TitleComp titleC={components?.titleC} title={title} category={category} rating={rating} />

        <p className="section_title__short_descr text-sm mt-3">{description}</p>

        <TypographyComp cls='flex py-2' comp='div' sx={components.selectionC?.sxBox} >
          <SelectionComp selectionC={components?.selectionC} fieldsRef={fieldsRef} setTotalObj={setTotalObj} />
          <Quantity action={(result: number) => quantityRef.current = result} quantityMax={quantityMax} 
          props={components.selectionC?.quantityC} text="quantity" quantity={quantityRef.current} />
        </TypographyComp>
      </Box>
        
      <AddCartComp addCartC={components?.addCartC} price={price} action={() => {}} />
    </TypographyComp>
  )
}

// "backdropFilter": "blur(10px) brightness(200%)"