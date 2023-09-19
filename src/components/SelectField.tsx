'use client'

import {useState, useEffect} from 'react'
import {Box, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent} from '@mui/material'

interface Props {
  cls: string
  data: {name: string, values: []}
}
interface DataStateType {name: string, values: []}

export default function SelectField({cls, data}: Props){

  const [selectState, setSelectState] = useState('');
  const [dataState, setDataState] = useState<DataStateType>({name: '', values: []});

  const handleChange = (event: SelectChangeEvent) => {
    setSelectState(event.target.value as string);
  };

  useEffect(() => {setDataState(data)}, [data])

  return(
    <Box sx={{ minWidth: 120 }}>
      <FormControl className={cls} fullWidth>
        <InputLabel id="demo-simple-select-label">{dataState.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectState}
          label={dataState.name}
          onChange={handleChange}
        >
          {dataState.values.map(({name}, idx) => {
            return <MenuItem key={idx} value={name}>{name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  )
}