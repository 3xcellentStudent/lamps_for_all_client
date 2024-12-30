import { Box, ListItem, Typography } from "@mui/material";
import {
  FormatQuote as FormatQuoteIcon, AccountCircle as AccountCircleIcon, Star as StarIcon
} from '@mui/icons-material';
import { useSelector } from "react-redux";
import { ProductIdType } from "@/types/main/product.type";
import UserName from "./parts/UserName/UserName";

interface Props {
  name: string
  rating: string
  text: string
  attachments: string[]
}

export default function UserReviewCard({name, rating, text, attachments}: Props){

  const {elementsPrimary, elementsSecondary} = useSelector(({
    data: {theme: {colors: {backgrounds: {elementsPrimary, elementsSecondary}}}}
  }: {data: ProductIdType}) => ({elementsPrimary, elementsSecondary}))

  return(
    <ListItem className={'relative p-4 duration-200 flex flex-col max-w-[750px] mb-6'}>
      <div className="flex items-center w-full">
        <UserName name={name} />

        <Box sx={{backgroundColor: elementsPrimary.hex}} className="flex items-center rounded-full ml-8 py-1 px-2 relative z[1]">
          <div className="text-[16px] font-bold leading-4 mr-1">
            {rating}
          </div>
          <div className="w-[16px] h-[16px] relative">
            <StarIcon className="absolute w-full h-full"/>
          </div>
        </Box>
      </div>
      <div className="relative w-[30px] h-[30px] mt-6">
        <FormatQuoteIcon htmlColor={elementsPrimary.hex} />
      </div>
      <p className="text-start w-full h-max relative z-[1]">{text}</p>
      <ul className="inline-block w-full mt-6">
        {attachments.map((item, idx) => {
          return <img key={idx} src={item} alt="Attachment" />
        })}
      </ul>
    </ListItem>
  )
}