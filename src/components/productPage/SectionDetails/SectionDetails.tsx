import './SectionDetails.scss'
import { Props } from '@/types/productPage.types/sectionDetails'
import Button from '@/components/common/Button/Button'
import SpecificationsList from './parts/SpecificationsList/SpecificationsList'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function SectionDetails({sectionData: {sx, array}}: Props){

  function handleClick(e: any){
    const parent = e.target.parentElement
    parent.classList.toggle('active')
  }

  return(
    <section className='wrapper_big mt-24 details_part line_section_divider'>
      <div className='w-full flex flex-col items-end'>
        {array.map(({title, items}, idx) => {
          return(
            <Button key={idx} sx={{}} handleClick={handleClick} cls='details_part_element rounded-2xl mb-4 py-3 px-4 relative'>
              <div className='details_part_element_button relative flex items-center
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