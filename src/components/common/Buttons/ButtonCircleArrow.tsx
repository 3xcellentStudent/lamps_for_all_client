// import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import {ArrowCircleLeftOutlined, ArrowCircleRightOutlined} from '@mui/icons-material';
import { styled } from '@mui/material';

interface Props {
  btnProps?: {}
  text: any
  action: () => any
  iconPos?: "right"
}

const CustomButton = styled("button")({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  position: "relative",
})

export default function ButtonCircleArrow({btnProps, text, action, iconPos}: Props){

  const continueShoppingButtonCls = `w-min whitespace-nowrap hover:text-emerald-500 duration-200 mb-4 min-h-[40px] ${iconPos === "right" ? "mr-10" : "ml-10"}`;
  const buttonIconPos = iconPos === "right" ? {right: "-30px"} : {left: "-15px"}

  return(
    <CustomButton onClick={action} className={continueShoppingButtonCls} {...btnProps} 
    sx={{":hover > div": {...buttonIconPos, opacity: 1}}}>
      <div className={`absolute ${iconPos === "right" ? "right-10" : "left-10"} 
      opacity-0 duration-200 pointer-events-none`}>
        {iconPos === "right" ? <ArrowCircleRightOutlined/> : <ArrowCircleLeftOutlined/>}
      </div>
      <div className='ml-4 font-bold'>{text}</div>
    </CustomButton>
  )
}