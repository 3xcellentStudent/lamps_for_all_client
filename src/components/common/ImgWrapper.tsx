import { ReactNode } from "react"

interface Props {
  cls: string
  children: ReactNode
}

export default function ImgWrapper({cls, children}: Props){
  return(
    <div className={`img_wrap relative w-full ${cls}`}>
      {children}
    </div>
  )
}