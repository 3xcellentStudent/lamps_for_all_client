import Quantity from "../common/Quantity/Quantity";

export default function ProductCard(){

  return(
    <li className="basket_grid_card">
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h6></h6>
          <p></p>
          <p></p>
        </div>
      </div>
      <Quantity/>
      <div>
        <p>Total Price</p>
      </div>
    </li>
  )
}