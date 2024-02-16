import ImgWrapper from '../../common/ImgWrapper'
import './SectionDescr.scss'

interface Props {
  sectionData: {
    description: string[]
    img: string
  }
}

export default function SectionDescr({sectionData}: Props){

  return(
    <section className='wrapper_big P_product_common 
    section_descr flex line_section_divider' style={{'--pseudoColor': '#d1d5db'}}>
      <div className='section_descr__content_left w-6/12 my-auto'>
        <h2 className='text-center fos-x1_5 font-bold line_title_center 
        w-min mx-auto whitespace-nowrap'>Product Description</h2>
        {sectionData.description?.map((text, idx) => {
          return(
            <div key={idx}>
              <p className='fos-x1'>{text}</p>
              <br />
            </div>
          )
        })}
      </div>
      <ImgWrapper cls='w-6/12'>
        <img className='object-cover w-full h-full block' src={sectionData.img} alt="" />
      </ImgWrapper>
    </section>
  )
}