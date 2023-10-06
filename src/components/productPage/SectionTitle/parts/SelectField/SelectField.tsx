import {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  name: string
  items: {text: string, color: string}[]
}

export default function SelectField({name, items}: Props){

  const [state, setState] = useState('');

  const handleChange = (e: SelectChangeEvent) => {
    setState(e.target.value as string);
  };
  
  const $index = (innerWidth + innerHeight) / 170

  return(
    <FormControl className='m-0 mr-2' size="small" 
    sx={{ m: 1, minWidth: name.length * $index }}>
      <InputLabel className='font-bold' id="demo-select-small-label">{name}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={state}
        label={name}
        onChange={handleChange}
      >
        {items.map((obj, idx) => {
          const {text} = obj
          return <MenuItem key={idx} value={10}>{text}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}