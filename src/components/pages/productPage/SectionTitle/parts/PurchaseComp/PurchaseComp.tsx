import Quantity from "@/components/common/Quantity/Quantity"
import TypographyComp from "@/components/common/TypographyComp"
import { FieldsRefType } from "@/types/productPage.types/sectionTitle/purchasePart/fieldComp"
import { SetTotalObjType } from "@/types/productPage.types/sectionTitle/purchasePart/selectionComp"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SelectionComp from "./parts/SelectionComp"
import TitleComp from "./parts/TitleComp"
import AddCartComp from "./parts/AddCartComp/AddCartComp"
import { actionChangeCartSaga } from "@/redux/cart/actions"
import { PUT_CART_ITEM } from "@/redux/cart/constants"
import { CartProduct } from "@/types/storeTypes"
import { ProductIdType } from "@/types/productPage.types/mainTypes"
import dataJson from "@/app/product/data.json"
import { AddCartType, ComponentsType, SelectionComponentType, TitleCompType } from "@/types/productPage.types/sectionTitle/purchasePart/purchaseComp"
import { CommonType } from "@/types/productPage.types/sectionTitle/sectionTitle"
import { Typography } from "@mui/material"
import styles from "../../styles.module.scss"

interface Props {
  productId: string
}

interface DataModel {
  description: string
  price: string
  quantityMax: number
  components: {
    titleC?: TitleCompType
    addCartC?: AddCartType
    selectionC?: SelectionComponentType
  }
  sxCont: {}
  title: string
  rating: number
  category: {id: string, name: string}
  productLogo: string
  sxQuantity: {}
  theme: CommonType["theme"]
}
// export default function PurchaseComp({
//   common: {title, rating, category, productLogo, sxQuantity, theme},
//   purchasePart: {sxCont, components}, 
//   description, quantityMax, price, productId
// }: Props){
export default function PurchaseComp({productId}: Props){

  const dataModel: DataModel = {
    description: "", 
    price: "", 
    quantityMax: 0, 
    components: {}, 
    sxCont: {}, 
    title: "", 
    rating: 0, 
    category: {id: "", name: ""}, 
    productLogo: "", 
    sxQuantity: {}, 
    theme: {
      shadows: {sxCircle: {boxShadow: ""}}
    }
  }

  const [state, setState] = useState(dataModel);

  const {
    sectionTitle: {description, price, quantityMax, purchasePart: {components, sxCont}}, common: {title, rating, category, productLogo, sxQuantity, theme}
  } = useSelector(({data}: {data: ProductIdType}) => data)

  useEffect(() => {
    setState({description, price, quantityMax, components, sxCont, title, rating, category, productLogo, sxQuantity, theme})
  }, [description])

  function fieldsRefFunction(){
    return components?.selectionC?.fieldC.length ? 
    components?.selectionC?.fieldC?.map((obj) => {
      const {boxShadow} = state?.theme?.shadows?.sxCircle
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

  function createFieldsArray(){
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
      productName: state?.title,
      productId,
      productImg: state?.productLogo,
      quantity: quantityRef.current,
      quantityMax: quantityMax,
      price,
      fields: fields[0].value ? fields : fieldsRefFunction(),
      displayedField: {name, value},
      checked: true,
    }

    dispatch(actionChangeCartSaga({type: PUT_CART_ITEM, payload: resultObj}))
  }

  return(
    // <Typography sx={state?.sxCont} comp='div' cls="px-11 section_title__purchase_part">
    <Typography component='div' className={`px-11 ${styles.section_title__purchase_part}`}>
      <div>
        <TitleComp titleC={components?.titleC} title={state?.title} 
        category={state?.category} rating={state?.rating} price={state?.price} />

        <p className="section_title__short_descr text-sm mt-3">{state?.description}</p>

        <SelectionComp boxShadow={state?.theme?.shadows?.sxCircle.boxShadow} 
        selectionC={state?.components?.selectionC} fieldsRef={state?.fieldsRef} setTotalObj={setTotalObj} />
      </div>
      <div className="mt-3">
        <Quantity action={(result: number) => quantityRef.current = result} 
        quantityMax={state?.quantityMax} text="amt." btnSize={30} theme={theme} 
        quantity={quantityRef?.current} sxQuantity={state?.sxQuantity} />
      </div>

      <AddCartComp addCartC={state?.components?.addCartC} action={dispatchToCart} />
    </Typography>
  )
}