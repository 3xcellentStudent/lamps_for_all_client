import {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  name: string
  items: string[]
  elemIdx: number
  setTotalObj: (idx: number, index: number, value: string) => void
}

export default function SelectField({name, items, elemIdx, setTotalObj}: Props){

  const [state, setState] = useState('')

  const handleChange = (e: SelectChangeEvent) => {
    const {value: index} = e.target
    setState(index);
    const value = items[index]
    setTotalObj(elemIdx, index, value)
  };
  
  const $index = (innerWidth + innerHeight) / 155

  return(
    <FormControl className='m-0 mr-2 mb-6' size="small" 
    sx={{ m: 1, minWidth: name.length * $index }}>
      <InputLabel className='font-bold' 
      id="demo-select-small-label">{name}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={state || 0}
        label={name}
        onChange={handleChange}
      >
        {items.map((value, idx) => {
          return <MenuItem key={idx} value={idx}>{value}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}