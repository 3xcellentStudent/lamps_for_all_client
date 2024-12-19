import { Typography } from '@mui/material'
import styles from "./styles.module.scss";
import Purchase from './parts/PurchaseOverviewComponent/Purchase';
import BigSlider from './parts/CarouselOverviewComponent/BigSlider';
import SmallSlider from './parts/CarouselOverviewComponent/SmallSlider';

interface Props {
  productId: string | string[]
}

export default function Overview({productId}: Props){

  // const dispatch = useDispatch()
  // const quantityRef = useRef<number>(1)
  // const fieldsRef = useRef<FieldsRefType[]>([])

  // function setTotalObj({elemIdx, index, data}: SetTotalObjType){
  //   const {value, properties} = data
  //   console.log(fieldsRef.current[elemIdx])
  //   console.log(value, properties, index)
  //   fieldsRef.current[elemIdx].value = value
  //   fieldsRef.current[elemIdx].properties = properties
  //   fieldsRef.current[elemIdx].index = index
  // }

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
  //     productId: pageId,
  //     productImg: images[0][0].src,
  //     quantity: quantityRef.current,
  //     quantityMax: quantityMax,
  //     fields: createFieldsArray(),
  //     displayedField: {name, value}
  //   }
  //   dispatch(actionCartSaga({type: PUT_CART_ALL, payload: resultObj}))
  // }

  return(
    <Typography sx={{}} component="section" className={`${styles.section}`}>
      <div className='flex flex-row w-[50%]'>
        <SmallSlider/>
        <BigSlider/>
      </div>
      <Purchase productId={productId as string} />
    </Typography>
  )
}