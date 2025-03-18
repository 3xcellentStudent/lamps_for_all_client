import { GlobalDataType } from "@/types/main/globalData.type";
import { AccountCircle } from "@mui/icons-material";
import { useSelector } from "react-redux";

interface Props {
  firstName: string
  lastName: string
  createdAt: number
}

export default function UserInformation({firstName, lastName, createdAt}: Props){

  const {elementsPrimaryBg} = useSelector(({
    globalData: {colors: {backgrounds}}
  }: {globalData: GlobalDataType}) => ({...backgrounds}))

  return(
    <div>
      <div className="flex items-center relative">
        <div className="w-[30px] h-[30px] mr-2 relative" >
          <AccountCircle htmlColor={elementsPrimaryBg.hex} className="absolute w-full h-full"/>
        </div>

        <h3 className="font-bold whitespace-nowrap">{firstName} {lastName.length && lastName[0]}.</h3>

      </div>
      <h4 className="mt-2 ml-[38px]">
        <span>{new Date(createdAt).getMonth() < 10 ? "0" + new Date(createdAt).getMonth() : new Date(createdAt).getMonth()}/</span>
        <span>{new Date(createdAt).getDate() < 10 ? "0" + new Date(createdAt).getDate() : new Date(createdAt).getDate()}/</span>
        <span>{new Date(createdAt).getFullYear()}</span>
      </h4>
    </div>
  )
}