import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { styled } from '@mui/material';

interface Props {
  btnProps?: {}
}

const CustomButton = styled("button")({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  position: "relative",
})

export default function ContinueShoppingButton({btnProps}: Props){

  return(
    <CustomButton sx={{":hover > div": {left: "-15px", opacity: 1}}} 
    onClick={() => history.back()} {...btnProps} >
      <div className='absolute left-10 opacity-0 duration-200 pointer-events-none'>
        <ArrowCircleLeftOutlinedIcon/>
      </div>
      <div className='ml-4 font-bold'>Continue shopping</div>
    </CustomButton>
  )
}