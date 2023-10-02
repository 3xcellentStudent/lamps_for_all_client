'use client'
import {useEffect, useState, useRef} from 'react'
// import {useSelector} from 'react-redux'
// import SelectField from '@/components/SelectField'
// import BuyButton from '@/components/productPage/BuyButton/BuyButton'
import {fieldProductID} from './stateFields'
// import SectionText from '@/components/productPage/SectionText/SectionText'
// import SectionDetails from '@/components/productPage/SectionDetails/SectionDetails'
import dataDB from '../data.json'
import ProductCard from '@/components/productPage/ProductCard/ProductCard'
// import CardTop from '@/components/ProductCard/parts/CardTop'
import SVGArrowUp from '@/components/SVG/SVGArrowUp'
import SVGArrowDown from '@/components/SVG/SVGArrowDown'
import './styles.scss'

export default function Product(){

  // const {product} = useSelector(state => state)

  const [data, setData] = useState(fieldProductID)
  const [position, setPosition] = useState(0)

  const $slideHeight = useRef(0)
  const carouselRef = useRef(null)
  const menuItemRef = useRef(null)

  useEffect(() => {setData(dataDB)}, [])

  useEffect(() => {console.log('Updated !!!')}, [])

  function menuClick(e, itemIdx: number){
    console.log(e.target)
    e.target.classList.add('active')
    menuItemRef.current = {node: e.target, idx: itemIdx}
  }
  
  return(
    <div className="product_page_wrapper">
      <ul>
        {data.items?.map((obj, idx) => 
        <ProductCard key={idx} data={obj} />)}
      </ul>
      <menu className="product_page_menu fixed">
        {data.menuInfo.map((item, idx) => {
          return(
            <li className='my1-05' key={idx} onClick={e => menuClick(e, idx)}>
              <button className='product_page_menu_item'></button>
            </li>
          )
        })}
      </menu>
    </div>
  )
}


// return(
//   <>
//     <section className="flex justify-between h-96 wrapper_big">
//       <div className="relative w-6/12">
//         <img src="https://cdn-60c13ad2c1ac185aa47dad63.closte.com/wp-content/uploads/2021/09/Inoleds-Curve-Table-Lamp-6.jpg" alt="" className="absolute object-scale-down w-full h-full" />
//       </div>
//       <div className="w-6/12">
//         <h1 className='mb-4'>{settings.title}</h1>
//         <p className='mb-4'>
//           <span className="mr-3">4500</span>
//           <span className="line-through">3500</span>
//         </p>
//         {fieldsInfo.map((obj, idx) => {
//           return <SelectField key={idx} data={obj} cls='mb-4' />
//         })}
//         <BuyButton/>
//       </div>
//     </section>
//     {description.map((data, idx) => {
//       return <SectionText key={idx} data={data} />
//     })}
//     <SectionDetails data={[delivery.packageDetail, specifications]} />
//   </>
// )



// const [
//   {
//     status,
//     localization, 
//     settings, 
//     fieldsInfo, 
//     images, 
//     video,
//     description,
//     service,
//     reviews,
//     delivery,
//     seller,
//     specifications,
//   }, 
//   setData
// ] = useState(fieldProductID)