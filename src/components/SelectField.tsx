'use client'

import {useState, useEffect} from 'react'
import {Box, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent} from '@mui/material'

interface DataStateType {title: string, values: []}

interface Props {
  cls: string
  data: DataStateType
}

export default function SelectField({cls, data}: Props){

  const [selectState, setSelectState] = useState('');
  const [dataState, setDataState] = useState<DataStateType>({title: '', values: []});

  const handleChange = (event: SelectChangeEvent) => {
    setSelectState(event.target.value as string);
  };

  useEffect(() => {setDataState(data)}, [data])

  return(
    <Box sx={{ minWidth: 120 }}>
      <FormControl className={cls} fullWidth>
        <InputLabel id="demo-simple-select-label">{dataState.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectState}
          label={dataState.title}
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