import {useEffect, useState} from 'react'
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import { Props, SvgPropsType, FieldPropsType } from '@/types/productPage.types/sectionTitle/parts/SelectField';
import { FormLabel, Radio, RadioGroup } from '@mui/material';
import SelectIcon from './SelectedIcon';
import FilledCircleSVG from '@/components/common/Radio/FilledCircleSVG';

export default function SelectionField(
  {name, viewBox, svgProps, fieldProps, items, elemIdx, setTotalObj}: Props
){

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

    <div className={fieldProps?.clsCont}>
      <FormControl>
        <FormLabel className={fieldProps?.formLabel} id="demo-controlled-radio-buttons-group">{name}</FormLabel>
        <RadioGroup sx={fieldProps?.radioGroup}
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={indexS}
          onChange={handleChange}
        >
          {items.length && items.map(({value, fill, stroke, properties}, idx) => {
            const {checkedProps, uncheckedProps} = properties
            return <Radio sx={fieldProps?.radio} 
            size='small' key={idx} value={idx} onChange={handleChange}
            checkedIcon={<FilledCircleSVG props={{fill, stroke, viewBox, styles: svgProps, properties: checkedProps}} />} 
            icon={<SelectIcon props={{fill, stroke, viewBox, styles: svgProps, properties: uncheckedProps}} />} />
          })}
        </RadioGroup>
      </FormControl>
    </div>
  )
}