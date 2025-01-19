import { PURCHASE_PAGE_ROUTE } from "@/constats/pageRoutes";
import Button from "@/components/common/Buttons/Button";
import Link from "next/link";
import { useSelector } from "react-redux";
import { ProductIdType } from "@/types/main/product.type";
import styles from "./styles.module.scss"

export default function ViewCartButton(){

  const {backgrounds, text} = useSelector(({data: {theme: {colors: {backgrounds, text}}}}: {data: ProductIdType}) => ({backgrounds, text}))

  return(
    <div className={`${styles.button_container} fixed w-full right-0 
      bottom-0`}>
        <Link href={PURCHASE_PAGE_ROUTE} className="flex items-center justify-center h-full">
          <Button className={styles.button} disabled={false} 
          sx={{backgroundColor: backgrounds.elementsPrimary.hex, color: text.secondary.hex}}>
            <span className="relative z-10">View Cart</span>
          </Button>
        </Link>
      </div>
  )
}