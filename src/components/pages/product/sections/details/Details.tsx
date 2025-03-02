import './style.scss'
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { ProductDataType } from '@/types/main/productData.type';
import VerticalTabsList from './parts/Tabs/VerticalTabsList';

export default function Details(){

  const {titles, properties} = useSelector(({productData: {specifications}}: {productData: ProductDataType}) => specifications)

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