import './style.scss'
import Button from '@/components/common/Buttons/Button'
import SpecificationsList from './parts/SpecificationsList/SpecificationsList'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { ProductIdType } from '@/types/main/product.type';
import VerticalTabsList from '@/components/pages/productPage/sections/details/parts/Tabs/VerticalTabsList';

// export default function SectionDetails({sectionData: {sx, array}}: Props){
export default function Details(){

  const {titles, properties} = useSelector(({data: {specifications}}: {data: ProductIdType}) => specifications)

  const listWrapCls = 'w-full flex justify-center items-start flex-wrap tablet:flex-col tablet:justify-center tablet:items-center'

  function handleClick(e: SyntheticEvent){
    const parent: Element | null = (e.target as HTMLElement).parentElement
    parent?.classList.toggle('active')
  }

  return(
    <section className='mt-24 px-5'>
      <div className={listWrapCls}>
        <VerticalTabsList titles={titles} properties={properties} />
      </div>
    </section>
  )
}


// return(
//   <Button disabled={false} key={idx} handleClick={handleClick} 
//   className='details_part_element rounded-2xl mb-4 py-3 px-4 relative'>
//     <div className='relative flex items-center
//     text-start font-regular whitespace-nowrap text-lg px1-1 w-full'>
//       {name}
//       <KeyboardArrowDownIcon fontSize="large"
//       className='pointer-events-none absolute object-cover block right-2' />
//     </div>
//     <SpecificationsList array={array} />
//   </Button>
// )