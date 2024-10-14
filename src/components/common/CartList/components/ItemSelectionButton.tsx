import { Checkbox, Typography } from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
} from '@mui/icons-material';

interface Props {
  action: (checked: boolean, idx: number) => void
  boxShadow: string
}

const label = {inputProps: {'aria-label': 'Checkbox demo'}}

export default function ItemSelectionButtom({action, boxShadow}: Props){

  return(
    <Typography component="div" className="flex items-center mr-2">
      <Checkbox onClick={() => action} 
      sx={{boxShadow}} 
      className="w-[30px] h-[30px]" {...label} 
      icon={<CheckCircleOutlineIcon color="success"/>} 
      checkedIcon={<CheckCircleIcon 
      className="text-emerald-500 border-2 border-emerald-500 rounded-full"/>} />
    </Typography>
  )
}