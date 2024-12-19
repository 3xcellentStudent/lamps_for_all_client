import { styled } from "@mui/material";
import { ReactNode, SyntheticEvent } from "react";

interface Props {
  children: ReactNode
  cls?: string
  handleClick: (e: SyntheticEvent) => SyntheticEvent | any
  disabled?: boolean
  sx: {}
}

const CustomButton = styled("button")({cursor: "pointer",});

export default function Button({handleClick, disabled, children, cls, sx}: Props){

  return(
    <CustomButton sx={sx} disabled={disabled || false} onClick={handleClick} className={cls}>
      {children}
    </CustomButton>
  )
}