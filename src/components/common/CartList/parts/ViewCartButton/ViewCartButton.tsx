import { PURCHASE_PAGE_ROUTE } from "@/constats/pageRoutes";
import Button from "@/components/common/Buttons/Button";
import Link from "next/link";
import { MAIN_BUTTON_CLS } from "@/constats/tailwindClasses";

export default function ViewCartButton(){

  return(
    <div className="cart_list__btn_buy fixed h-[80px] right-0 
      bottom-0">
        <Link href={PURCHASE_PAGE_ROUTE} 
        className="flex items-center justify-center h-full">
          <Button cls={MAIN_BUTTON_CLS + " fixed"} disabled={false} handleClick={() => {}}
            sx={{"background": "linear-gradient(45deg , #060b17 10%, transparent 10%)", "boxShadow":"2px 2px 4px #909497, -1px -1px 3px 2px #fff", ":before": {"background": "linear-gradient(45deg , #060b17 70%, transparent 30%)", "left": "-100%"}, "color": "#060b17", ":hover": {"color": "#fff"}}}>
            <span className="relative z-10">View Cart</span>
          </Button>
        </Link>
      </div>
  )
}