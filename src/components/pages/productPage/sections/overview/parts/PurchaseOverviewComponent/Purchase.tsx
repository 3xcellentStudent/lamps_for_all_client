import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SelectionComp from "./parts/SelectionComponent/SelectionComp"
import TitleComp from "./parts/TitleComponent/TitleComp"
import AddCartComp from "./parts/AddCartComp/AddCartComp"
import { actionChangeCartSaga } from "@/redux/cart/actions"
import { PUT_CART_ITEM } from "@/redux/cart/constants"
import { CartProduct } from "@/types/storeTypes"
import { Box, Typography } from "@mui/material"
import styles from "./styles.module.scss"
import { ProductIdType } from "@/types/main/product.type"
import { FieldsRefType, SetTotalObjType } from "@/types/pages/product/overview.types"

interface Props {
  productId: string
}

export default function Purchase({productId}: Props){

  const [inStockStatus, setInstockStatus] = useState<boolean>(true)

  const {title, productLogo, price, quantityMax, productOptions, colors, summary} = useSelector(({
  data: {
    title, 
    mediaContent: {
      titleContent: {
        productLogo
      }
    }, 
    stockInfo: {
      price,
      quantityMax
    }, 
    productOptions,
    theme: {colors},
    descriptions: {summary}
  }}: {data: ProductIdType}) => ({title, productLogo, price, quantityMax, productOptions, colors, summary}))

  function fieldsRefFunction(){
    return productOptions.length ? 
    productOptions?.map((options) => {
      const {name, items, type} = options
      const {fill: background, value, stockStatus} = items[0]
      const result = {background, index: 0, name, type, value, stockStatus}
      return result;
    }) : []
  }
  
  const dispatch = useDispatch()
  const quantityRef = useRef<number>(1)
  const fieldsRef = useRef<FieldsRefType[]>([])

  useEffect(() => {fieldsRef.current = fieldsRefFunction();}, [])

  function setTotalObj({
    elemIdx, index, background, name, type, value, stockStatus
  }: SetTotalObjType){
    fieldsRef.current[elemIdx].background = background
    fieldsRef.current[elemIdx].index = index
    fieldsRef.current[elemIdx].name = name
    fieldsRef.current[elemIdx].type = type
    fieldsRef.current[elemIdx].value = value
    fieldsRef.current[elemIdx].stockStatus = stockStatus
    setInstockStatus(stockStatus)
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
      productName: title,
      productId,
      productImg: productLogo || "",
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
    <Typography component='div' className={`px-11 ${styles.container}`}>
      <div>
        <TitleComp />

        <SelectionComp setTotalObj={setTotalObj} />
      </div>
      {/* <div className="mt-3"> */}
        {/* <Quantity action={(result: number) => quantityRef.current = result} 
        quantityMax={quantityMax} text="amt." btnSize={30} theme={colors} 
        quantity={quantityRef?.current} /> */}
      {/* </div> */}

      <div id="in-stock-status" className="flex items-center font-bold">
        {
          inStockStatus ? 
          <>
            <Box className={`${styles.instock_status}`} sx={{
              backgroundColor: colors.backgrounds.elementsPrimary.hex,"&:before": {border: "2px solid " + colors.backgrounds.elementsOptional.hex},
            }} ></Box>
            <div>In stock: All orders shipping with UPS</div>
          </>
          :
          <>
            <Box className={`${styles.not_instock_status}`} sx={{
              backgroundColor: colors.backgrounds.elementsPrimary.hex, 
            }} ></Box>
            <div>Not in stock</div>
          </>
        }
      </div>

      <AddCartComp inStockStatus={inStockStatus} action={dispatchToCart} />

      <Typography sx={{color: colors.text.primary.hex}} className="text-lg mt-10">{summary}</Typography>
    </Typography>
  )
}