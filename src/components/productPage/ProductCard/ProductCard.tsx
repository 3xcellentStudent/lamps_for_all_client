import './ProductCard.scss'
import List from './parts/List'
import Reviews from './parts/Reviews'
import Text from './parts/Text'

interface Props {
  data: {
    title: string
    type: string
    items: []
    img: string
    stars: number
    reviews: []
  }
}

export default function ProductCard({data}: Props){

  return(
    // <li className='product_page_card flex h-screen my2-2'>
    <li className='product_page_card flex'>
      <div className="relative w-6/12">
        <img className='object-cover w-full h-full block' src={data.img} alt="" />
      </div>
      <div className='w-6/12'>
        <h3 className='fos-x1_5 font-bold text-center'>{data.title}</h3>
        {
          data.type === 'text' ? <Text array={data.items} /> :
          data.type === 'list' ? <List array={data.items} /> :
          <Reviews stars={data.stars} reviews={data.reviews} />
        }
      </div>
    </li>
  )
}