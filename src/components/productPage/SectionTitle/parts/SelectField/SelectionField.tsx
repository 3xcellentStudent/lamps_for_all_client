import {useEffect, useState} from 'react'
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import { Props } from '@/types/productPage.types/sectionTitle/purchasePart/fieldComp';
import { Box, FormLabel, Radio, RadioGroup } from '@mui/material';
import SelectIcon from './SelectedIcon';
import FilledCircleSVG from '@/components/common/Radio/FilledCircleSVG';
import TypographyComp from '@/components/common/TypographyComp';

export default function SelectionField(
  {name, viewBox, sxSVG, sxField: {sxBox, sxFormLabel, sxRadio, sxRadioGroup}, items, elemIdx, setTotalObj}: Props
){

  const newSxSpan = {margin: "0 6px 0 0", ...sxFormLabel}

  const [indexS, setIndexS] = useState<number>(0)

  const handleChange = (e: SelectChangeEvent) => {
    const index = +e.target.value
    setIndexS(index);
    const data = items[index]
    setTotalObj({elemIdx, index, data})
  };

  // const styles = {position: 'absolute', width: '32px', height: '32px', left: '0', top: '0'}

  // const $index = (innerWidth + innerHeight) / 155

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

    <Box sx={sxBox}>
      <FormControl>
        <FormLabel className='mb-2' sx={sxFormLabel} id="demo-controlled-radio-buttons-group" focused={false}>
          <TypographyComp cls='' comp='span' sx={newSxSpan}>{name}:</TypographyComp>
          <TypographyComp cls='' comp='span' sx={sxFormLabel?.sxSpan}>{items[indexS].value}</TypographyComp>
        </FormLabel>
        <RadioGroup sx={sxRadioGroup} aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group" value={indexS} onChange={handleChange} >
          {items.length && items.map(({value, fill, stroke, properties}, idx) => {
            const {checkedProps, uncheckedProps} = properties
            return <Radio sx={sxRadio} 
            size='small' key={idx} value={idx} onChange={handleChange}
            checkedIcon={<FilledCircleSVG props={{fill, stroke, viewBox, sx: sxSVG, properties: checkedProps}} />} 
            icon={<SelectIcon props={{fill, stroke, viewBox, sx: sxSVG, properties: uncheckedProps}} />} />
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}