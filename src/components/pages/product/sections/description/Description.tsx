import DescriptionContent from './parts/DescriptionContent/DescriptionContent'
import DescriptionText from './parts/DescriptionText/DescriptionText'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { ProductDataType } from '@/types/main/productData.type'
import SectionTitle from '@/components/common/SectionTitle/SectionTitle'
import styles from "./styles.module.scss"
import { GlobalDataType } from '@/types/main/globalData.type'

export default function Description(){

  const {presentable, titleContent, elementsSecondaryBg} = useSelector(({
    productData: {descriptions, mediaContent: {titleContent}}, globalData: {colors: {backgrounds}}
  }: {productData: ProductDataType, globalData: GlobalDataType}) => ({...descriptions, titleContent, ...backgrounds}))

  return(
    <Typography sx={{background: `linear-gradient(to right, ${elementsSecondaryBg.hex} 50%, transparent 50%)`}} 
    className={`w-full ${styles.section}`} component='section'>
      <div className={`${styles.wrapper}`}>
        <DescriptionText description={presentable} />
        <DescriptionContent backgroundColor={elementsSecondaryBg.hex} descriptionVideo={titleContent?.descriptionVideo} />
      </div>
      {/* <SectionTitle>Product Description</SectionTitle> */}
    </Typography>
  )
}