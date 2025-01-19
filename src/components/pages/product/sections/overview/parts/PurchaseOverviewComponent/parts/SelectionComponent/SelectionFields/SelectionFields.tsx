import {useEffect, useRef, useState} from 'react'
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import { Box, Radio, RadioGroup, Tooltip } from '@mui/material';
import SelectedIcon from '../../../../../../../../../common/Radio/SelectedIcon';
import SelectionIcon from '@/components/common/Radio/SelectionIcon';
import styles from "./styles.module.scss"
import "./styles.module.scss"
import { ProductIdType } from '@/types/main/product.type';
import { SetTotalObjType } from '@/types/pages/product/overview.types';

export interface Props {
  options: ProductIdType["productOptions"][0]
  elemIdx: number
  setTotalObj: ({elemIdx, index, background, name, type, value, stockStatus}: SetTotalObjType) => void
}

export default function SelectionFields(
  {options, elemIdx, setTotalObj}: Props
){
  const [indexS, setIndexS] = useState<number>(0)

  const handleChange = (e: SelectChangeEvent) => {
    const index = +e.target.value
    const char = options?.items[index]
    setIndexS(index);
    const {fill: background, value, stockStatus} = char
    const {name, type} = options
    setTotalObj({elemIdx, index, background, name, type, value, stockStatus})
  };

  const radioGroupRef = useRef<null | HTMLDivElement>(null)
  const prevRadioActiveState = useRef<{index: number, color: string}>({index: 0, color: options?.items[0]?.stroke})

  useEffect(() => {prevRadioActiveState.current.color = options.items[0].fill}, [options])

  return(
    <Box sx={{marginBottom: ".5rem", marginTop: ".5rem"}}>

      <div className='mb-2 text-base'>
        <span className=''>{options?.name}:</span>
        <span className='ml-1'>{options?.items[indexS]?.value}</span>
      </div>
      <FormControl className='flex flex-row items-end'>
        <RadioGroup ref={radioGroupRef} aria-labelledby="demo-controlled-radio-buttons-group" value={indexS} 
        sx={{flexDirection: "row"}} name="controlled-radio-buttons-group" onChange={handleChange}>
          {options?.items?.length && options?.items?.map(({value, fill, stroke, stockStatus}, idx) => {
            return stockStatus ? 
              <Tooltip key={idx} title={value} placement='top' arrow disableInteractive>
                <Radio contextMenu={value} size="small" key={idx} value={idx} onChange={handleChange}
                className={`${styles.radio_button}`} checkedIcon={<SelectedIcon stroke={stroke} fill={fill} />} 
                icon={<SelectionIcon fill={fill} stroke={stroke} />} />
              </Tooltip> 
              : 
              <Tooltip className={styles.radio_button_disabled} key={idx} title={value} 
              placement='top' arrow disableInteractive>
                <Radio contextMenu={value} size="small" key={idx} value={idx} onChange={handleChange}
                className={`${styles.radio_button}`} checkedIcon={<SelectedIcon stroke={stroke} fill={fill} />} 
                icon={<SelectionIcon fill={fill} stroke={stroke} />} />
              </Tooltip>
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}