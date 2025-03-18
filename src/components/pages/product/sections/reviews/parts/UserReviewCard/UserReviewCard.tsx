import { useSelector } from "react-redux";
import UserInformation from "./parts/UserInformation/UserInformation";
import { GlobalDataType } from "@/types/main/globalData.type";
import { ReviewsType } from "@/types/main/reviews.type";
import RatingComp from "@/components/pages/product/common/RatingComp/RatingComp";
import styles from "./styles.module.scss"

// interface Props {
//   productName: string
//   rating: string
//   content: string
//   attachments: string[]
// }

export default function UserReviewCard({
  props: {firstName, lastName, content, rating, createAt, attachments, title}
}: {props: ReviewsType}){

  const {elementsPrimaryBg} = useSelector(({
    globalData: {colors: {backgrounds}}
  }: {globalData: GlobalDataType}) => ({...backgrounds}))

  return(
    <li className={'relative p-4 duration-200 flex flex-col max-w-[750px] mb-6'}>
      <div className="flex justify-between w-full">
        <div className="w-min">
          <UserInformation firstName={firstName} lastName={lastName} createdAt={createAt} />
        </div>

        <div className="flex flex-row justify-end h-min w-full">
          <RatingComp rating={rating} />
          {/* <div className="w-[2px] h-full bg-slate-950"></div> */}
          <div className={`${styles.rating_title}`}>{title}</div>
        </div>
      </div>

      <div className="flex flex-row">
        <ul className={`${styles.attachments_ul}`}>
            {attachments.map((src, index) => {
              return(
                <div key={index} className="w-[70px] h-[70px] p-2">
                  <img src={src} alt="" />
                </div>
              )
            })}
        </ul>
        <div className="w-full ml-3 flex justify-end">
          <p>{content}</p>
        </div>
      </div>
    </li>
  )
}