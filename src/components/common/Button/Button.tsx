import { styled } from "@mui/material";
import { ReactNode, SyntheticEvent } from "react";

interface Props {
  children: ReactNode
  cls: string
  sx: {}
  handleClick: (e: SyntheticEvent) => SyntheticEvent | any
  disabled: boolean
}

const CustomButton = styled("button")({});

export default function Button({handleClick, disabled, children, cls, sx}: Props){
  return(
    <CustomButton disabled={disabled} onClick={e => handleClick(e)} sx={sx} className={cls}>
      {children}
    </CustomButton>
  )
}