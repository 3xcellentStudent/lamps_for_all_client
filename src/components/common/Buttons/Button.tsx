import { styled } from "@mui/material";
import { ReactNode, SyntheticEvent } from "react";

interface Props {
  children: ReactNode
  cls: string
  sx: {}
  handleClick: (e: SyntheticEvent) => SyntheticEvent | any
  disabled: boolean
}

const CustomButton = styled("button")({cursor: "pointer",});

export default function Button({handleClick, disabled, children, cls, sx}: Props){
  return(
    // <CustomButton disabled={disabled} onClick={e => handleClick(e)} sx={sx} className={cls}>
    <CustomButton disabled={disabled} onClick={handleClick} sx={sx} className={cls}>
      {children}
    </CustomButton>
  )
}