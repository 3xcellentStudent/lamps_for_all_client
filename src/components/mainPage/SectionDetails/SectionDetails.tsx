import './style.scss'
import { Props } from '@/types/productPage.types/sectionDetails'
import Button from '@/components/common/Button/Button'
import SpecificationsList from './parts/SpecificationsList/SpecificationsList'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SyntheticEvent } from 'react';

export default function SectionDetails({sectionData: {sx, array}}: Props){

  const listWrapCls = 'w-full flex justify-center items-start flex-wrap tablet:flex-col tablet:justify-center tablet:items-center'

  function handleClick(e: SyntheticEvent){
    const parent: Element | null = (e.target as HTMLElement).parentElement
    parent?.classList.toggle('active')
  }

  return(
    <section className='mt-24 px-5'>
      <div className={listWrapCls}>
        {array.map(({title, items}, idx) => {
          return(
            <Button disabled={false} key={idx} sx={sx?.sxBtn} handleClick={handleClick} 
            cls='details_part_element rounded-2xl mb-4 py-3 px-4 relative'>
              <div className='relative flex items-center
              text-start font-regular whitespace-nowrap text-lg px1-1 w-full'>
                {title}
                <KeyboardArrowDownIcon sx={sx?.sxIcon} fontSize="large"
                className='pointer-events-none absolute object-cover block right-2' />
              </div>
              <SpecificationsList sx={sx} items={items} />
            </Button>
          )
        })}
      </div>
    </section>
  )
}