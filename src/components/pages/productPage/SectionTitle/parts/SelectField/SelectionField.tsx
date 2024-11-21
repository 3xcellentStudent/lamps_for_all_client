import {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import { Props } from '@/types/productPage.types/sectionTitle/purchasePart/fieldComp';
import { Box, FormLabel, Radio, RadioGroup, Tooltip } from '@mui/material';
import SelectedIcon from '../../../../../common/Radio/SelectedIcon';
import SelectionIcon from '@/components/common/Radio/SelectionIcon';
import styles from "./styles.module.scss"

export default function SelectionField(
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

  console.log(data?.boxShadow)

  return(
    <Box sx={{marginBottom: ".5rem", marginTop: ".5rem"}}>

      <div className='mb-4 text-base'>
        <span className=''>{data?.name}:</span>
        <span className='ml-1'>{data?.items[indexS]?.value}</span>
      </div>
      <FormControl className='flex flex-row items-end'>
        <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" value={indexS} 
        sx={{flexDirection: "row"}} name="controlled-radio-buttons-group" onChange={handleChange}>
          {data?.items?.length && data?.items?.map(({value, fill, stroke}, idx) => {
            return(
              <Tooltip key={idx} title={value} placement='top' arrow disableInteractive>
                <Radio sx={{}} contextMenu={value} size="small" 
                key={idx} value={idx} onChange={handleChange}
                className={`${styles.radio_button}`}
                checkedIcon={<SelectedIcon stroke={stroke} fill={fill} />} 
                icon={<SelectionIcon fill={fill} stroke={stroke} />} />
              </Tooltip>
            )
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}