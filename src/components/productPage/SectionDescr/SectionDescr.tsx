import ImgWrapper from '../common/ImgWrapper'
import './SectionDescr.scss'

interface Props {
  data: {
    description: string[]
    img: string
  }
}

export default function SectionDescr({data}: Props){

  return(
    <section className='wrapper_big P_product_common section_descr flex'>
      <div className='section_descr__content_left w-6/12 my-auto'>
        <h2 className='text-center fos-x1_5 font-bold line_title_center 
        w-min mx-auto whitespace-nowrap'>Product Description</h2>
        {data.description?.map((text, idx) => {
          return(
            <div key={idx}>
              <p className='fos-x1'>{text}</p>
              <br />
            </div>
          )
        })}
      </div>
      <ImgWrapper cls='w-6/12'>
        <img className='object-cover w-full h-full block' src={data.img} alt="" />
      </ImgWrapper>
    </section>
  )
}