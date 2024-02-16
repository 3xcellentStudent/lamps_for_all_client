import { IconButton, Tooltip } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  title: string
  cls: string
  children: ReactNode
  action: () => void
}

export default function TooltipHOC({title, cls, children, action}: Props){

  return(
    <Tooltip title={title} className={cls}>
      <IconButton onClick={action}>
        {children}
      </IconButton>
    </Tooltip>
  )
}