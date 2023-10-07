import {useEffect, useRef} from 'react'
import SVGArrowDown from '@/components/SVG/SVGArrowDown'
import './SectionDetails.scss'

interface Props {
  data: {
    title: string 
    items: {
      name: string
      value: string
    }[]
  }[]
}

export default function SectionDetails({data}: Props){

  const listRef = useRef(null)

  function handleClick(e){
    const parent = e.target.parentElement
    parent.classList.toggle('active')
  }

  useEffect(() => {
    listRef.current = document.querySelectorAll('.details_part_element_accordion')
    listRef.current.forEach(item => {
      const childs = Array.from(item.children)
      const maxHeight = childs.reduce((acc, value) => acc + value.clientHeight, 0)
      item.style = `--maxHeight: ${maxHeight}px`
    })
  }, [data])

  return(
    <section className='wrapper_big mt-24 details_part line_section_divider'>
      <div className='w-full flex flex-col items-end'>
        {data.map((obj, idx) => {
          return(
            <div key={idx} className='details_part_element bg-gray-300 rounded-2xl py1-05 my1-05 w-4/12 relative'>
              <button className='details_part_element_button relative text-start font-regular whitespace-nowrap text-lg 
              px1-1 w-full' onClick={e => handleClick(e)}>
                {obj.title}
                <SVGArrowDown cls='pointer-events-none absolute 
                w-8 h-8 object-cover block top-0 right-3' />
              </button>
              <ul className="details_part_element_accordion w-full px1-1">
                {obj.items?.map((obj, idx) => {
                  const {name, value} = obj
                  return(
                    <li className='flex w-full py1-03 border-b-gray-400' key={idx}>
                      <div className='flex-1'>{name}:</div>
                      <div className='flex-1'>{value}</div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}