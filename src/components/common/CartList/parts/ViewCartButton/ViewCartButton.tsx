// import { PURCHASE_PAGE_ROUTE } from "@/api/routes/routes";
import Button from "@/components/common/Buttons/Button";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss"
import { GlobalDataType } from "@/types/main/globalData.type";

export default function ViewCartButton(){

  const {elementsPrimaryBg, secondaryText} = useSelector(({
    globalData: {colors: {backgrounds, text}}
  }: {globalData: GlobalDataType}) => ({...backgrounds, ...text}))

  return(
    <div className={`${styles.button_container} fixed w-full right-0 
      bottom-0`}>
        <Link href="/purchase" className="flex items-center justify-center h-full">
          <Button className={styles.button} disabled={false} 
          sx={{backgroundColor: elementsPrimaryBg.hex, color: secondaryText.hex}}>
            <span className="relative z-10">View Cart</span>
          </Button>
        </Link>
      </div>
  )
}