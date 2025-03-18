import SectionTitle from "@/components/common/SectionTitle/SectionTitle"
import styles from "./styles.module.scss"
import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { GlobalDataType } from "@/types/main/globalData.type"

export default function DescriptionText({description}: {description: string[]}){

  const {secondaryBg, elementsSecondaryBg, optionalText} = useSelector(({
    globalData: {colors: {backgrounds, text}}
  }: {globalData: GlobalDataType}) => ({...backgrounds, ...text}))
  
  return(
    <div className={`${styles.container}`}>

      <SectionTitle>Elevate Your Space</SectionTitle>
      <div className={`${styles.content_container}`}>
        {description?.map((text, index) => {
          if(index === description.length - 1){
            return(
              <div key={index}>
                <Typography sx={{color: optionalText.hex}} className={`${styles.text}`}>{text}</Typography>
              </div>
            )
          } else {
            return(
              <div key={index}>
                <p className={`${styles.text}`}>{text}</p>
                <div className={styles.underline}>
                  <Box className={styles.underline_childs} sx={{backgroundColor: secondaryBg.hex}} />
                  <Box className={styles.underline_childs} sx={{backgroundColor: elementsSecondaryBg.hex}} />
                </div>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}