import './SectionDescr.scss'
import CarouselImages from './parts/CarouselImages/CarouselImages'
import DescriptionText from './parts/Description'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { ProductIdType } from '@/types/main/product.type'

export default function Description(){

  const {presentable: description, descriptionVideo} = useSelector(({
    data: {descriptions: {presentable}, mediaContent: {images, titleContent: {descriptionVideo}}}
  }: {data: ProductIdType}) => ({presentable, images, descriptionVideo}))

  return(
    <Typography component='section' className='P_product_common 
    section_descr flex'>
      <DescriptionText description={description} />
      <CarouselImages descriptionVideo={descriptionVideo} />
    </Typography>
  )
}