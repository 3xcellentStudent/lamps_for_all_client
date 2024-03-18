import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  cls: string
  sx: {}
  comp: string
  children: string | ReactNode
}

export default function TypographyComp({cls, sx, children, comp}: Props){
  return <Typography className={cls} component={comp} sx={sx} >{children}</Typography>
}