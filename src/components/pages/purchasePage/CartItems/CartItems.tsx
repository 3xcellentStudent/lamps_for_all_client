import CartList from "@/components/common/CartList/CartList";
import { InitialState } from "@/types/storeTypes";
import { useSelector } from "react-redux";

export default function CartItems(){
  
  const {data: {common: {sxQuantity, theme}}} = useSelector((state: InitialState) => state)

  return(
    <section id="cart-items" className="min-w-[650px] h-[calc(100%-54px)] px-2.5">
      <CartList sxQuantity={sxQuantity} theme={theme} />
    </section>
  )
}