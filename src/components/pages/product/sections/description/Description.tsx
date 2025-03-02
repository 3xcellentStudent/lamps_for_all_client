import './SectionDescr.scss'
import CarouselImages from './parts/CarouselImages/CarouselImages'
import DescriptionText from './parts/Description'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { ProductDataType } from '@/types/main/productData.type'

export default function Description(){

  const {presentable, titleContent} = useSelector(({
    productData: {descriptions, mediaContent: {titleContent}}
  }: {productData: ProductDataType}) => ({...descriptions, titleContent}))

  return(
    <Typography component='section' className='P_product_common 
    section_descr flex'>
      <DescriptionText description={presentable} />
      <CarouselImages descriptionVideo={titleContent?.descriptionVideo} />
    </Typography>
  )
}