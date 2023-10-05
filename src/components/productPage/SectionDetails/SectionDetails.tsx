import {useEffect, useRef} from 'react'
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

  function handleClick(idx: number){
    const result = listRef.current[idx].classList.toggle('active')
  }

  useEffect(() => {
    listRef.current = Array.from(document.querySelectorAll('.details_part_accordion'))
    listRef.current.forEach(item => {
      const childs = Array.from(item.children)
      const maxHeight = childs.reduce((acc, value) => acc + value.clientHeight, 0)
      item.style = `--maxHeight: ${maxHeight}px`
    })
  }, [data])

  return(
    <section className='wrapper_big P_product_common details_part'>
      <div className='w-full flex flex-wrap items-start justify-start'>
        {data.map((obj, idx) => {
          return(
            <div key={idx} className='w-4/12 relative'>
              <h4 className='font-medium whitespace-nowrap mx-auto fos-x1_25 px1-1 mb-6' 
              onClick={() => handleClick(idx)}>{obj.title}</h4>
              <ul className="details_part_accordion w-full px1-1">
                {obj.items?.map((obj, idx) => {
                  const {name, value} = obj
                  return(
                    <li className='flex w-full' key={idx}>
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