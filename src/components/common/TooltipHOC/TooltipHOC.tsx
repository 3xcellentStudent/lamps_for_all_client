import { IconButton, Tooltip, TooltipProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  title: string
  cls: string
  children: ReactNode
  action: () => void
  placement: TooltipProps["placement"]
}

export default function TooltipHOC({title, cls, children, action, placement}: Props){

  return(
    <Tooltip placement={placement} title={title} className={cls}>
      <IconButton onClick={action}>
        {children}
      </IconButton>
    </Tooltip>
  )
}