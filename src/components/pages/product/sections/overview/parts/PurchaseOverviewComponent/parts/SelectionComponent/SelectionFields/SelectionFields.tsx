import {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react'
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import { Box, Radio, RadioGroup, Tooltip } from '@mui/material';
import SelectedIcon from '../../../../../../../../../common/Radio/SelectedIcon';
import SelectionIcon from '@/components/common/Radio/SelectionIcon';
import styles from "./styles.module.scss"
import "./styles.module.scss"
import { ProductDataType } from '@/types/main/productData.type';
import { SetTotalObjType } from '@/types/pages/product/overview.types';

export interface Props {
  options: ProductDataType["productOptions"][0]
  elemIdx: number
  setTotalObj: ({elemIdx, index, background, name, type, value, stockStatus}: SetTotalObjType) => void
  carouselState: {
    state: number
    action: Dispatch<SetStateAction<number>>
  }
}

export default function SelectionFields(
  {options, elemIdx, setTotalObj, carouselState}: Props
){
  // const [indexS, setIndexS] = useState<number>(0)

  // useEffect(() => {
  //   changeTypeOfProduct(carouselState.state)
  // }, [carouselState.state])

  // const handleChange = (e: SelectChangeEvent) => {
  //   const index = +e.target.value
  //   const char = options?.items[index]
  //   carouselState.action(index);
  //   const {fill: background, value, stockStatus} = char
  //   const {name, type} = options
  //   setTotalObj({elemIdx, index, background, name, type, value, stockStatus})
  // };

  const handleChange = (e: SelectChangeEvent) => {
    const index = +e.target.value
    changeTypeOfProduct(index)
    console.log(carouselState.state)
  };

  function changeTypeOfProduct(index: number){
    const char = options?.items[index]
    carouselState.action(index);
    const {fill: background, value, stockStatus} = char
    const {name, type} = options
    setTotalObj({elemIdx, index, background, name, type, value, stockStatus})
  }

  const radioGroupRef = useRef<null | HTMLDivElement>(null)
  const prevRadioActiveState = useRef<{index: number, color: string}>({index: 0, color: options?.items[0]?.stroke})

  useEffect(() => {prevRadioActiveState.current.color = options.items[0].fill}, [options])

  return(
    <Box sx={{marginBottom: ".5rem", marginTop: ".5rem"}}>

      <div className='mb-2 text-base'>
        <span className=''>{options?.name}:</span>
        <span className='ml-1'>{options?.items[carouselState.state]?.value}</span>
      </div>
      <FormControl className='flex flex-row items-end'>
        {/* <RadioGroup ref={radioGroupRef} aria-labelledby="demo-controlled-radio-buttons-group" value={
          options.items.filter((option, index) => {
            console.log(option.mediaIndex === carouselState.state)
            return option.mediaIndex === carouselState.state;
          }).length ? carouselState.state : 0
        }  */}
        <RadioGroup ref={radioGroupRef} aria-labelledby="demo-controlled-radio-buttons-group" value={
          carouselState.state
        } 
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