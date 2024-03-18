import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import TypographyComp from '../TypographyComp';
import Button from '../Button/Button';

interface Props {
  props: {sxBox: {}, sxIcon: {}, sxBtn: {}}
  quantity: number
  action: any
  quantityMax: number
  text: string
}

export default function Quantity({props, quantity, action, quantityMax, text}: Props){

  const btnCls = 'relative duration-100 rounded w-[30px] h-[30px] disabled:opacity-50'
  const boxCls = 'justify-between flex flex-row h-min items-end'

  const [value, setValue] = useState<string>(`${quantity}`)

  function checkValue(value: string){
    const result = +value > quantityMax ? quantityMax : +value > 0 ? value : 1
    setValue(`${result}`)
    action(result)
  }
  return (
    <TypographyComp cls={boxCls} comp='div' sx={props?.sxBox}>
      
      <div className='flex w-min pb-0.5 flex-row items-center'>
        <Button sx={props?.sxBtn} cls={btnCls} disabled={+value > 1 ? false : true} 
        handleClick={() => checkValue(`${+value - 1}`)}>
          <RemoveIcon className='pointer-events-none' fontSize="small" sx={props?.sxIcon} />
        </Button>
        <input type="number" onBlur={e => checkValue(e.target.value)} onChange={e => setValue(e.target.value)}
        value={value} className="bg-transparent	text-center	w-[30px] text-lg mx-1" />
        <Button cls={btnCls} handleClick={() => checkValue(`${+value + 1}`)} sx={props?.sxBtn} 
        disabled={+value === quantityMax ? true : false} >
          <AddIcon className='pointer-events-none mb-0.5' fontSize="small" sx={props?.sxIcon} />
        </Button>
      </div>
      <span className='ml-2 text-sm'>{text}</span>
    </TypographyComp>
  );
}