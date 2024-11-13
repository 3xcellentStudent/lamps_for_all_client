import { Typography } from '@mui/material'
import "./style.scss";
import PurchaseComp from './parts/PurchaseComp/PurchaseComp';
import { useSelector } from 'react-redux';
import { ProductIdType } from '@/types/productPage.types/mainTypes';

interface Props {
  productId: string | string[]
}

export default function SectionTitle({productId}: Props){

  const {productLogo} = useSelector(({data: {common}}: {data: ProductIdType}) => common);

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
    <Typography sx={{}} component="section" className='section_title flex'>
      <div className='w-[45%] h-svh relative flex items-center'>
        <img className='w-full h-[60%] absolute left-0 top-0 object-scale-down' 
        src={productLogo || ""} alt="" />
      </div>
      <PurchaseComp productId={productId as string} />
    </Typography>
  )
}

      // <TypographyComp sx={purchasePart?.sx} comp='div' cls="section_title__purchase_part">
      //   <div className="flex items-start flex-col justify-between w-min">
      //     <TypographyComp cls="" sx={subtitle?.sx} comp="h3">{subtitle?.text}</TypographyComp>
      //     <TypographyComp cls="" sx={title?.sx} comp="h2">{title?.text}</TypographyComp>
      //     <Rating rating={settings?.rating} props={purchasePart.components?.ratingC}/>
      //   </div>

      //   <Typography className="section_title__short_descr" sx={shortDescription?.sx}>{shortDescription?.text}</Typography>

      //   <div className='flex'>
      //     <ul className='flex flex-wrap w-full'>
      //       {purchasePart.components?.selectionC.map((obj, idx, array) => {
      //         const {sxFieldProps, sxSVG, name, type, viewBox, items} = obj
      //         const {value, properties} = items[0]
      //         const fieldsCompr = fieldsRef.current.length + 1 <= array.length
      //         if(fieldsCompr){
      //           fieldsRef.current.push({name, type, value, properties, index: 0})
      //         }
      //         return <SelectionField sxFieldProps={sxFieldProps} sxSVG={sxSVG} items={items}
      //         key={idx} setTotalObj={setTotalObj} elemIdx={idx} viewBox={viewBox} name={name} />
      //       })}
      //     </ul>
      //     <Quantity action={(result: number) => quantityRef.current = result} 
      //     props={purchasePart.components?.quantityC} quantity={quantityRef.current}
      //     quantityMax={quantityMax} />
      //   </div>
        
      //   <TypographyComp sx={{}} comp='div' cls='' >
      //     <TypographyComp sx={{}} comp='h5' cls='' >{}</TypographyComp>
      //     <MainLargeBtn cls="" text="Add to Cart" action={dispatchToCart} />
      //   </TypographyComp>
      // </TypographyComp>


// "https://static.wixstatic.com/media/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png/v1/fill/w_336,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png",