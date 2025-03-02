
import CartList from "@/components/common/CartList/CartList";

export default function CartItems(){
  
  return(
    <section id="cart-items" className="min-w-[650px] h-[calc(100%-54px)] px-2.5">
      <CartList/>
    </section>
  )
}