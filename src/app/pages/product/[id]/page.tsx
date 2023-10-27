'use client'
import {useEffect, useState, useRef} from 'react'
import {fieldProductID} from './stateFields'
import dataDB from '../data.json'
import SectionTitle from '@/components/productPage/SectionTitle/SectionTitle'
import SectionDescr from '@/components/productPage/SectionDescr/SectionDescr'
import SectionDetails from '@/components/productPage/SectionDetails/SectionDetails'
import './styles.scss'
import SectionReviews from '@/components/productPage/SectionReviews/SectionReviews'
import { useParams } from 'next/navigation'
import DrawerComponent from '@/components/common/DrawerComponent/DrawerComponent'
import { useDispatch, useSelector } from 'react-redux'
import {actionSETOpenCart} from '@/redux/actions'
import CartList from '@/components/common/CartList/CartList'

export default function Product(){

  const {id} = useParams()
  const isOpenCart = useSelector(({isOpenCart}: {isOpenCart: boolean}) => isOpenCart)
  const dispatch = useDispatch()

  const [data, setData] = useState(fieldProductID)

  useEffect(() => {
    const secondId = "F2R2l6dJ1NlRfAcbPP8P"
    setData(dataDB[id])
  }, [])

  return(
    <div className="product_page_wrapper">
      <SectionTitle images={data.images} pageId={id} rating={data.rating} data={data.sectionTitle}/>
      <SectionDescr data={data.sectionDescr}/>
      <SectionDetails data={data.sectionDetails} />
      <SectionReviews data={data.sectionReviews} />
      <DrawerComponent closeCart={() => dispatch(actionSETOpenCart())} 
      anchor='right' cartOpen={isOpenCart}>
        <CartList/>
      </DrawerComponent>
    </div>
  )
}










// {
//   "settings": {
//     "status": 200
//   },
//   "rating": 4.7,
//   "sectionTitle": {
//     "title": "Lamp For Cabinet",
//     "price": 20,
//     "images": [
//       "https://static.wixstatic.com/media/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png/v1/fill/w_336,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png",
//       "https://static.wixstatic.com/media/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png/v1/fill/w_336,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png",
//       "https://static.wixstatic.com/media/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png/v1/fill/w_336,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png"
//     ],
//     "purchaseDetails": {
//       "quantityMax": 5,
//       "fields": [
//         {"name": "Colors & Sizes", "items": [
//           {"value": "Black 20cm", "color": "#000"},
//           {"value": "White 20cm", "color": "#fff"}]
//         },
//         {"name": "Colors & Sizes", "items": [
//           {"value": "Black 20cm", "color": "#000"},
//           {"value": "White 20cm", "color": "#fff"}]
//         },
//         {"name": "Colors & Sizes", "items": [
//           {"value": "Black 20cm", "color": "#000"},
//           {"value": "White 20cm", "color": "#fff"}]
//         }
//       ]  
//     }
//   },
//   "sectionDescr": {
//     "img": "https://static.wixstatic.com/media/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png/v1/fill/w_336,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24fdcf_5ffb83f114b240a881eb09ae019bbfaf~mv2.png",
//     "description": [
//       "There is nothing to confuse with a one-touch control function. Simply tap the switch once it turns on and hold down a second to adjust the desired mood of brightness.", "Tap more to switch the turn-OFF. The ultimate user-friendly lighting solution.", "There is nothing to confuse with a one-touch control function. Simply tap the switch once it turns on and hold down a second to adjust the desired mood of brightness. Tap more to switch the turn-OFF. The ultimate user-friendly lighting solution."
//     ]
//   },
//   "sectionDetails": [
//     {
//       "title": "Specifications",
//       "items": [
//         {"name": "Model", "value": "Motion Sensor Light"},
//         {"name": "Voltage", "value": "5V"},
//         {"name": "Light Source", "value": "LED Bulbs"},
//         {"name": "Body Material", "value": "Aluminum"},
//         {"name": "Battery Type", "value": "Lithium Metal"},
//         {"name": "Power Source", "value": "Rechargeable Battery"},
//         {"name": "Wattage", "value": "0-5W"}
//       ]
//     },
//     {
//       "title": "Size & Weight",
//       "items": [
//         {"name": "Width", "value": "2cm"},
//         {"name": "Height", "value": "2cm"},
//         {"name": "Length", "value": "20cm"},
//         {"name": "Weight", "value": "1kg"}
//       ]
//     }
//   ],
//   "sectionReviews": {
//     "reviewsCount": 33,
//     "reviewsList": [
//       {"name": "Alina H.", "text": "Very good", "rating": 5},
//       {"name": "Andrew P.", "text": "Very bed", "rating": 1}
//     ]
//   },
//   "items": [
//     {
//       "title": "Lamp For Cabinet",
//       "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagr36gyunasvcvWE1_bvPaET4XXHj4r6OpB8uytS9JuXhLpgODF0jXqaEKj9ru8HKe1I&usqp=CAU",
//       "type": "text",
//       "items": [
//         "Constructed from high-quality aluminum painted in silver, Inoleds perform a constant flash with a color temperature of 3200K and 550LM which allows you to adjust light based on your mood.", "Either light for studying or creating a softer ambiance. A perfect choice for casual, contemporary, or meditative environments."
//       ]
//     },
//     {
//       "title": "Something 2",
//       "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagr36gyunasvcvWE1_bvPaET4XXHj4r6OpB8uytS9JuXhLpgODF0jXqaEKj9ru8HKe1I&usqp=CAU",
//       "type": "text",
//       "items": [
//         "There is nothing to confuse with a one-touch control function. Simply tap the switch once it turns on and hold down a second to adjust the desired mood of brightness.", "Tap more to switch the turn-OFF. The ultimate user-friendly lighting solution."
//       ]
//     },
//     {
//       "title": "Something List",
//       "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagr36gyunasvcvWE1_bvPaET4XXHj4r6OpB8uytS9JuXhLpgODF0jXqaEKj9ru8HKe1I&usqp=CAU",
//       "type": "list",
//       "items": [
//         {"name": "Model", "value": "Motion Sensor Light"},
//         {"name": "Voltage", "value": "5V"},
//         {"name": "Light Source", "value": "LED Bulbs"},
//         {"name": "Body Material", "value": "Aluminum"},
//         {"name": "Battery Type", "value": "Lithium Metal"},
//         {"name": "Power Source", "value": "Rechargeable Battery"},
//         {"name": "Wattage", "value": "0-5W"}
//       ]
//     },
//     {
//       "title": "Product reviews",
//       "type": "rews",
//       "stars": 4.7,
//       "count": 20,
//       "reviews": [
//         {"name": "Andrew", "stars": 5, "text": "So beautiful lamp and nice package !"},
//         {"name": "Alina", "stars": 4.5, "text": "Very beautiful lamp and good package !"}
//       ]
//     }
//   ]
// }