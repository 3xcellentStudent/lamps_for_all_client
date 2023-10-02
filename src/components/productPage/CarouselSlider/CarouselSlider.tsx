import ProductCard from "../ProductCard/ProductCard"

interface Props {
  items: []
  position: number
}

export default function CarouselSlider({items, position}: Props){
  return(
    <ul className='carousel_slider absolute w-full h-full' style={{top: position}}>
      {items?.map((obj, idx) => 
      <ProductCard key={idx} data={obj} />)}
    </ul>
  )
}