import {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import { Props } from '@/types/productPage.types/sectionTitle/purchasePart/fieldComp';
import { Box, FormLabel, Radio, RadioGroup, Tooltip } from '@mui/material';
import SelectIcon from './SelectedIcon';
import FilledCircleSVG from '@/components/common/Radio/FilledCircleSVG';

export default function SelectionField(
  // {name, items, elemIdx, sxField: {colorLabel}, setTotalObj, boxShadow}: Props
  {data, elemIdx, setTotalObj}: Props
){
  const [indexS, setIndexS] = useState<number>(0)

  const handleChange = (e: SelectChangeEvent) => {
    const index = +e.target.value
    const char = data?.items[index]
    setIndexS(index);
    const {fill: background, value} = char
    // const data = items[index].
    // const data = {boxShadow, background: fill, index, name, type, value}
    setTotalObj({elemIdx, index, data: {...data, background, value}})
  };

  return(
    // <FormControl className='m-0 mr-2 mb-6' size="small" 
    // sx={{ m: 1, minWidth: name.length * $index }}>
    //   <InputLabel className='font-bold' id="demo-select-small-label">{name}</InputLabel>
    //   <Select
    //     labelId="demo-select-small-label"
    //     id="demo-select-small"
    //     value={state || '0'}
    //     label={name}
    //     onChange={handleChange}
    //   >
        // {items.map(({value}, idx) => {
        //   return <MenuItem key={idx} value={idx}>{value}</MenuItem>
        // })}
    //   </Select>
    // </FormControl>

    <Box sx={{marginBottom: ".5rem", marginTop: ".5rem"}}>

      <div className='mb-4 text-base'>
        <span className=''>{data?.name}:</span>
        <span className='ml-1'>{data?.items[indexS]?.value}</span>
      </div>
      {/* <FormLabel id="demo-controlled-radio-buttons-group" focused={false} className='text-base' sx={{color: data?.sxField?.colorLabel}}> */}
      {/* </FormLabel> */}

      <FormControl className='flex flex-row items-end'>
        <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" value={indexS} 
        sx={{flexDirection: "row"}} name="controlled-radio-buttons-group" onChange={handleChange}>
          {data?.items?.length && data?.items?.map(({value, fill, stroke}, idx) => {
            return(
              <Tooltip key={idx} title={value} placement='top' arrow disableInteractive>
                <Radio sx={{boxShadow: data?.boxShadow}} contextMenu={value} size='small' 
                key={idx} value={idx} onChange={handleChange}
                className='relative w-[28px] h-[28px] mr-4 duartion-100'
                checkedIcon={<FilledCircleSVG props={{fill, stroke}} />} 
                icon={<SelectIcon props={{fill, stroke}} />} />
              </Tooltip>
            )
          })}
        </RadioGroup>
        {/* <FormLabel id="demo-controlled-radio-buttons-group" 
        focused={false} sx={{color: data?.sxField?.colorLabel}}>
          <span className='ml-2 text-sm'>{data?.name}:</span>
          <span className='ml-1 text-sm'>{data?.items[indexS]?.value}</span>
        </FormLabel> */}
      </FormControl>
    </Box>
  )
}