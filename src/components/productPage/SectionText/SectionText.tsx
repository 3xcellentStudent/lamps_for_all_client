import './SectionText.scss'

interface Props {
  data: {
    rubric: string
    text: string
  }
}

export default function SectionText({data}: Props){

  return(
    <section className='wrapper_big'>
        <h2 className='text-center'>{data.rubric}</h2>
        <p>{data.text}</p>
      </section>
  )
}