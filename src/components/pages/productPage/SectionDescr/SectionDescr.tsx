import TypographyComp from '@/components/common/TypographyComp'
// import ImgWrapper from '../../common/ImgWrapper'
import './SectionDescr.scss'
import CarouselImages from './parts/CarouselImages/CarouselImages'
import { ImagesType, SectionDescrType } from '@/types/productPage.types/sectionDescr'
import Description from './parts/Description'
import { useSelector } from 'react-redux'
import { ProductIdType } from '@/types/productPage.types/mainTypes'

// export default function SectionDescr({sectionData: {images, description, sx}}: Props){
export default function SectionDescr(){

  const {
    sectionDescr: {sx, images, description}
  } = useSelector(({data}: {data: ProductIdType}) => data)

  return(
    <TypographyComp sx={sx?.sxSection} comp='section' cls='P_product_common 
    section_descr flex'>
      <Description description={description} />
      <CarouselImages images={images} sx={sx} />
    </TypographyComp>
  )
}
// line_section_divider