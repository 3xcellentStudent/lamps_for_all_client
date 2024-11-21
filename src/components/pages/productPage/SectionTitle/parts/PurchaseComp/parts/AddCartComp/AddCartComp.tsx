import Button from "@/components/common/Buttons/Button";
import { ProductIdType } from "@/types/productPage.types/mainTypes";
import { AddCartType } from "@/types/productPage.types/sectionTitle/purchasePart/purchaseComp";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import styles from "./styles.scss";

interface Props {
  action: () => void
  addCartC: AddCartType
}

export default function AddCartComp({addCartC, action}: Props){

  const btnCls = `relative duration-200 rounded-md px-5 py-2 uppercase whitespace-nowrap overflow-hidden
  before:absolute before:block before:left-[-175%] before:top-0 before:h-full before:w-[200%] 
  before:duration-300 before:z-[0] hover:before:left-0`

  const [{mainBg, secondaryBg}, setColors] = useState<{mainBg: string, secondaryBg: string}>({mainBg: "", secondaryBg: ""})

  const data = useSelector(({data}: {data: ProductIdType}) => data)

  useEffect(() => {
    const {mainBg, secondaryBg} = data.common.theme.colors
    setColors({mainBg: `rgb(${mainBg})`, secondaryBg: `rgb(${secondaryBg})`})
  }, [data])
  
  return(
    <div className="flex items-center justify-between w-min mt-3" >
      <Button sx={{backgroundColor: mainBg, color: secondaryBg}} cls={btnCls} handleClick={action}>
        <span className="relative z-[2]">Add to cart</span>
      </Button>
      <Button sx={{backgroundColor: mainBg, color: secondaryBg}} cls={`${btnCls} ml-2`} handleClick={action}>
        <span className="relative z-[2]">Buy Now</span>
      </Button>
    </div>
  )
}