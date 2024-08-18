import { ListItem, Typography } from "@mui/material";
import {
  FormatQuote as FormatQuoteIcon, AccountCircle as AccountCircleIcon, Star as StarIcon
} from '@mui/icons-material';
import ImgWrapper from "@/components/common/ImgWrapper";
import { ReviewsObject, SectionReviewsType } from "@/types/productPage.types/sectionReviews";

type ThemeType = SectionReviewsType["userReviews"]["theme"]
type Props = {props: {theme: ThemeType} & ReviewsObject};

export default function UserReviewCard({
  props: {theme: {elementsBg, cardSx}, name, rating, text, attachments}
}: Props){

  const listItemCls = 'relative p-4 duration-200 flex flex-col max-w-[750px] mb-6'

  return(
    <ListItem sx={{...cardSx}} className={listItemCls}>
      <div className="flex items-center w-full">
        <div className="flex items-center relative">
          <ImgWrapper cls="w-[30px] h-[30px] mr-2">
            <AccountCircleIcon htmlColor={elementsBg} className="absolute w-full h-full"/>
          </ImgWrapper>
          <h3 className="font-bold">{name}</h3>
          <Typography sx={{backgroundColor: elementsBg}} 
          className="absolute w-full h-[2px] left-0 bottom-[-5px]"></Typography>
        </div>

        <Typography sx={{backgroundColor: elementsBg}} 
        className="flex items-center rounded-full ml-8 py-1 px-2 relative z[1]" component="div">
          <Typography sx={{}} 
          className="text-[16px] font-bold leading-4 mr-1">
            {rating}
          </Typography>
          <ImgWrapper cls="w-[16px] h-[16px]">
            <StarIcon className="absolute w-full h-full"/>
          </ImgWrapper>
        </Typography>
      </div>
      <ImgWrapper cls="w-[30px] h-[30px] mt-6">
        <FormatQuoteIcon htmlColor={elementsBg} />
      </ImgWrapper>
      <p className="text-start w-full h-max relative z-[1]">{text}</p>
      <ul className="inline-block w-full mt-6">
        {attachments.map((item, idx) => {
          return(
            <ImgWrapper key={idx} cls="w-[30px] h-[30px]">
              <img src={item} alt="Attachment" />
            </ImgWrapper>
          )
        })}
      </ul>
    </ListItem>
  )
}