import Button from "@/components/common/Button/Button";
import { AddCartType } from "@/types/productPage.types/sectionTitle/purchasePart/purchaseComp";

interface Props {
  action: () => void
  addCartC: AddCartType
}

export default function AddCartComp({addCartC: {sxBtn}, action}: Props){

  const btnCls = `relative duration-200 rounded-md px-5 py-2 uppercase whitespace-nowrap overflow-hidden
  before:absolute before:block before:left-[-175%] before:top-0 before:h-full before:w-[200%] 
  before:duration-300 before:z-[0] hover:before:left-0`

  return(
    <div className="flex items-center justify-between w-min mt-3" >
      <Button sx={sxBtn} cls={btnCls} disabled={false} handleClick={action}>
        <span className="relative z-10">Add to cart</span>
      </Button>
      <Button sx={sxBtn} cls={`${btnCls} ml-2`} disabled={false} handleClick={action}>
        <span className="relative z-10">Buy Now</span>
      </Button>
    </div>
  )
}