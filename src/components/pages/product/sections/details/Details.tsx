import './style.scss'
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { ProductIdType } from '@/types/main/product.type';
import VerticalTabsList from './parts/Tabs/VerticalTabsList';

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