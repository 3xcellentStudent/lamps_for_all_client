import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SelectionComp from "./parts/SelectionComponent/SelectionComp"
import TitleComp from "./parts/TitleComponent/TitleComp"
import AddCartComp from "./parts/AddCartComp/AddCartComp"
// import { actionChangeCartSaga } from "@/redux/cart/isOpenCart/actions"
// import { PUT_CART_ITEM } from "@/redux/cart/isOpenCart/constants"
import { CartProduct } from "@/types/storeTypes"
import { Box, Typography } from "@mui/material"
import styles from "./styles.module.scss"
import { ProductDataType } from "@/types/main/productData.type"
import { FieldsRefType, SetTotalObjType } from "@/types/pages/product/overview.types"
import { GlobalDataType } from "@/types/main/globalData.type"
import { actionCallCartState } from "@/redux/cart/actions"
import { CART_ADD_ITEM_SAVE_CONST } from "@/redux/cart/constants"

interface Props {
  productId: string
  carouselState: {
    state: number
    action: Dispatch<SetStateAction<number>>
  }
}

export default function Purchase({productId, carouselState}: Props){

  const [inStockStatus, setInstockStatus] = useState<boolean>(true)

  const {productData, elementsPrimaryBg, elementsOptionalBg, primaryText} = useSelector(({
    productData, 
    globalData: {colors: {backgrounds, text: {primaryText}}}
  }: {productData: ProductDataType, globalData: GlobalDataType}) => ({
    productData, ...backgrounds, primaryText
  }))

  function fieldsRefFunction(){
    return productData?.productOptions.length ? 
    productData?.productOptions?.map((options) => {
      const {name, items, type} = options
      const {fill: background, value, stockStatus} = items[0]
      setInstockStatus(stockStatus)
      const result = {background, index: 0, name, type, value, stockStatus}
      return result;
    }) : []
  }
  
  const dispatch = useDispatch()
  const quantityRef = useRef<number>(1)
  const fieldsRef = useRef<FieldsRefType[]>([])

  useEffect(() => {
    fieldsRef.current = fieldsRefFunction();
  }, [productData.productOptions])

  function setTotalObj({
    elemIdx, index, background, name, type, value, stockStatus
  }: SetTotalObjType){
    if(fieldsRef.current.length){
      fieldsRef.current[elemIdx].background = background
      fieldsRef.current[elemIdx].index = index
      fieldsRef.current[elemIdx].name = name
      fieldsRef.current[elemIdx].type = type
      fieldsRef.current[elemIdx].value = value
      fieldsRef.current[elemIdx].stockStatus = stockStatus
      setInstockStatus(stockStatus)
    } else {
      return;
    }
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
    const {name, value, index} = fieldsRef.current[0]
    
    const fields = createFieldsArray();
    
    const resultObj: CartProduct = {
      productName: productData?.title,
      productId,
      productImg: productData?.mediaContent?.images[index],
      quantity: quantityRef.current,
      quantityMax: productData.stockInfo?.quantityMax,
      price: productData?.stockInfo?.price,
      fields: fields[0].value ? fields : fieldsRefFunction(),
      displayedField: {name, value},
      checked: false,
    }

    dispatch(actionCallCartState({type: CART_ADD_ITEM_SAVE_CONST, payload: resultObj}))
  }

  return(
    <Typography component='div' className={`${styles.container}`}>
      <div>
        <TitleComp />

        <SelectionComp carouselState={carouselState} setTotalObj={setTotalObj} />
      </div>
      {/* <div clasclsName="mt-3"> */}
        {/* <Quantity action={(result: number) => quantityRef.current = result} 
        quantityMax={quantityMax} text="amt." btnSize={30} theme={colors} 
        quantity={quantityRef?.current} /> */}
      {/* </div> */}

      <div id="in-stock-status" className="flex items-center font-bold">
        {
          inStockStatus ? 
          <>
            <Box className={`${styles.instock_status}`} sx={{
              backgroundColor: elementsPrimaryBg.hex,"&:before": {border: "2px solid " + elementsOptionalBg.hex},
            }} ></Box>
            <div>In stock: All orders shipping with UPS</div>
          </>
          :
          <>
            <Box className={`${styles.not_instock_status}`} sx={{
              backgroundColor: elementsPrimaryBg.hex, 
            }}></Box>
            <div>Not in stock</div>
          </>
        }
      </div>

      <AddCartComp inStockStatus={inStockStatus} action={dispatchToCart} />

      <Typography sx={{color: primaryText.hex}} className="text-lg mt-10">{productData?.descriptions?.summary}</Typography>
    </Typography>
  )
}



// [
//   {
//     "media": "(max-width: 480px)",
//     "src": "https://static.wixstatic.com/media/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png/v1/fill/w_336,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png"
//   },
//   {
//     "media": "(max-width: 768px)",
//     "src": "https://www.simplelighting.co.uk/media/webp_image/catalog/product/cache/716cb71e4a7f1a549f7cc6339f6037ad/t/b/tbar-led-lifestyle-compressed.effectsresult-scene-4.webp"
//   },
//   {
//     "media": "",
//     "src": "https://vitruvi.ca/cdn/shop/files/pdp_stone-diffuser_front_charcoal_gallery_1_v9_image_a067dcd6-ad3c-4cdc-ae86-2284973f5822.png?v=1719457697&width=713"
//   }
// ],
// [
//   {
//     "media": "(max-width: 480px)",
//     "src": "https://static.wixstatic.com/media/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png/v1/fill/w_336,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png"
//   },
//   {
//     "media": "(max-width: 768px)",
//     "src": "https://www.simplelighting.co.uk/media/webp_image/catalog/product/cache/716cb71e4a7f1a549f7cc6339f6037ad/t/b/tbar-led-lifestyle-compressed.effectsresult-scene-4.webp"
//   },
//   {
//     "media": "",
//     "src": "https://vitruvi.ca/cdn/shop/files/pdp_stone-diffuser_front_terracotta_gallery_1_v9_image_9e9dcb8f-d542-46e6-85e9-2c27e595547d.png?v=1719457697&width=713"
//   }
// ],
// [
//   {
//     "media": "(max-width: 480px)",
//     "src": "https://static.wixstatic.com/media/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png/v1/fill/w_336,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png"
//   },
//   {
//     "media": "(max-width: 768px)",
//     "src": "https://www.simplelighting.co.uk/media/webp_image/catalog/product/cache/716cb71e4a7f1a549f7cc6339f6037ad/t/b/tbar-led-lifestyle-compressed.effectsresult-scene-4.webp"
//   },
//   {
//     "media": "",
//     "src": "https://vitruvi.ca/cdn/shop/files/pdp_stone-diffuser_front_charcoal_gallery_1_v9_image_a067dcd6-ad3c-4cdc-ae86-2284973f5822.png?v=1719457697&width=713"
//   }
// ],
// [
//   {
//     "media": "(max-width: 480px)",
//     "src": "https://static.wixstatic.com/media/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png/v1/fill/w_336,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png"
//   },
//   {
//     "media": "(max-width: 768px)",
//     "src": "https://www.simplelighting.co.uk/media/webp_image/catalog/product/cache/716cb71e4a7f1a549f7cc6339f6037ad/t/b/tbar-led-lifestyle-compressed.effectsresult-scene-4.webp"
//   },
//   {
//     "media": "",
//     "src": "https://vitruvi.ca/cdn/shop/files/pdp_stone-diffuser_front_sea_gallery_1_v9_image_843aee0e-353f-441c-b6f8-26c956b28d57.png?v=1719457697&width=713"
//   }
// ],
// [
//   {
//     "media": "(max-width: 480px)",
//     "src": "https://static.wixstatic.com/media/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png/v1/fill/w_336,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png"
//   },
//   {
//     "media": "(max-width: 768px)",
//     "src": "https://www.simplelighting.co.uk/media/webp_image/catalog/product/cache/716cb71e4a7f1a549f7cc6339f6037ad/t/b/tbar-led-lifestyle-compressed.effectsresult-scene-4.webp"
//   },
//   {
//     "media": "",
//     "src": "https://vitruvi.ca/cdn/shop/files/pdp_stone-diffuser_front_Suede_gallery_1_v9_image_80ffad4d-2678-49ce-962e-17615e85b620.png?v=1719457697&width=713"
//   }
// ]
// ]