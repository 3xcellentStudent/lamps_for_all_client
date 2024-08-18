import Quantity from "@/components/common/Quantity/Quantity"
import TypographyComp from "@/components/common/TypographyComp"
import { FieldsRefType } from "@/types/productPage.types/sectionTitle/purchasePart/fieldComp"
import { Props } from "@/types/productPage.types/sectionTitle/purchasePart/purchaseComp"
import { SetTotalObjType } from "@/types/productPage.types/sectionTitle/purchasePart/selectionComp"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import SelectionComp from "./parts/SelectionComp"
import TitleComp from "./parts/TitleComp"
import AddCartComp from "./parts/AddCartComp"
import { actionChangeCartSaga } from "@/redux/cart/actions"
import { PUT_CART_ITEM } from "@/redux/cart/constants"
import { CartProduct } from "@/types/storeTypes"

export default function PurchaseComp({
  common: {title, rating, category, productLogo, sxQuantity, theme},
  purchasePart: {sxCont, components}, 
  description, quantityMax, price, productId
}: Props){

  function fieldsRefFunction(){
    return components?.selectionC?.fieldC.length ? 
    components?.selectionC?.fieldC?.map((obj) => {
      const {boxShadow} = theme?.shadows?.sxCircle
      const {name, items, type} = obj
      const {fill, value} = items[0]
      const result = {boxShadow, background: fill, index: 0, name, type, value}
      return result;
    }) : []
  }
  
  const dispatch = useDispatch()
  const quantityRef = useRef<number>(1)
  const fieldsRef = useRef<FieldsRefType[]>([])

  useEffect(() => {fieldsRef.current = fieldsRefFunction();}, [])

  function setTotalObj({
    elemIdx, index, data: {background, boxShadow, name, type, value}
  }: SetTotalObjType){
    fieldsRef.current[elemIdx].background = background
    fieldsRef.current[elemIdx].boxShadow = boxShadow
    fieldsRef.current[elemIdx].index = index
    fieldsRef.current[elemIdx].name = name
    fieldsRef.current[elemIdx].type = type
    fieldsRef.current[elemIdx].value = value
  }

  const createFieldsArray = () => {
    const fields: FieldsRefType[] = []
    for(let i = 0; i < fieldsRef.current.length; i++){
      const char = fieldsRef.current[i]
      const copyObj = Object.assign({}, char)
      fields.push(copyObj)
    }
    return fields
  }

  function dispatchToCart(){
    const {name, value} = fieldsRef.current[0]
    
    const fields = createFieldsArray();

    const resultObj: CartProduct = {
      productName: title,
      productId,
      productImg: productLogo,
      quantity: quantityRef.current,
      quantityMax: quantityMax,
      fields: fields[0].value ? fields : fieldsRefFunction(),
      displayedField: {name, value},
      checked: true,
    }

    dispatch(actionChangeCartSaga({type: PUT_CART_ITEM, payload: resultObj}))
  }

  return(
    <TypographyComp sx={sxCont} comp='div' cls="px-11 section_title__purchase_part">
      <div>
        <TitleComp titleC={components?.titleC} title={title} 
        category={category} rating={rating} />

        <p className="section_title__short_descr text-sm mt-3">{description}</p>

        <SelectionComp boxShadow={theme.shadows.sxCircle.boxShadow} 
        selectionC={components?.selectionC} fieldsRef={fieldsRef} setTotalObj={setTotalObj} />
      </div>
      <div className="mt-3">
        <Quantity action={(result: number) => quantityRef.current = result} 
        quantityMax={quantityMax} text="amt." btnSize={30} 
        quantity={quantityRef.current} sxQuantity={sxQuantity} />
      </div>
      <h5 className="uppercase mt-3 text-3xl" >{price}</h5>

      <AddCartComp addCartC={components?.addCartC} action={dispatchToCart} />
    </TypographyComp>
  )
}