import { Box, ListItem } from "@mui/material";
import {
  FormatQuote as FormatQuoteIcon, Star as StarIcon
} from '@mui/icons-material';
import { useSelector } from "react-redux";
import UserInformation from "./parts/UserInformation/UserInformation";
import { GlobalDataType } from "@/types/main/globalData.type";

interface Props {
  productName: string
  rating: string
  content: string
  attachments: string[]
}

export default function UserReviewCard({content, rating, productName, attachments}: Props){

  const {elementsPrimaryBg} = useSelector(({
    globalData: {colors: {backgrounds}}
  }: {globalData: GlobalDataType}) => ({...backgrounds}))

  return(
    <ListItem className={'relative p-4 duration-200 flex flex-col max-w-[750px] mb-6'}>
      <div className="flex items-center w-full">
        <UserInformation name={content} />

        <Box sx={{backgroundColor: elementsPrimaryBg.hex}} className="flex items-center rounded-full ml-8 py-1 px-2 relative z[1]">
          <div className="text-[16px] font-bold leading-4 mr-1">
            {rating}
          </div>
          <div className="w-[16px] h-[16px] relative">
            <StarIcon className="absolute w-full h-full"/>
          </div>
        </Box>
      </div>
      <div className="relative w-[30px] h-[30px] mt-6">
        <FormatQuoteIcon htmlColor={elementsPrimaryBg.hex} />
      </div>
      {/* <p className="text-start w-full h-max relative z-[1]">{productName}</p> */}
      <ul className="inline-block w-full mt-6">
        {attachments.map((item, idx) => {
          return <img key={idx} src={item} alt="Attachment" />
        })}
      </ul>
    </ListItem>
  )
}