import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from 'react';
import Button from '../Buttons/Button';
import { styled } from '@mui/material';
// import { styled } from '@mui/material';

interface Props {
  sxQuantity: {}
  quantity: number
  action: any
  quantityMax: number
  text?: string
  btnSize: number
  inputProps?: {}
}

interface DisabledType {btn1: boolean, btn2: boolean}

export default function Quantity({
  btnSize, sxQuantity, quantity, action, quantityMax, text, inputProps
  }: Props){

  const btnCls = `relative duration-200 rounded-md disabled:opacity-50 
  disabled:pointer-events-none flex items-center justify-center`

  const CustomInput = styled("input")({
    fontSize: btnSize,
    width: btnSize,
    height: btnSize,
  })

  const [value, setQuantity] = useState<string>(`${quantity}`)
  const [isDisabled, setIsDisabled] = useState<DisabledType>({btn1: true, btn2: false})

  useEffect(() => setQuantity(`${quantity}`), [quantity])

  function checkValue(value: string){
    const result = +value > quantityMax ? quantityMax : +value > 0 ? value : 1
    setQuantity(`${result}`)
    action(result)
  }

  return (
    <div className='flex flex-row items-end w-[80px]'>
      <div className='flex w-min pb-0.5 flex-row items-center'>
        <Button sx={{...sxQuantity, width: btnSize, height: btnSize}} cls={btnCls} 
        disabled={+value > 1 ? false : true} handleClick={() => checkValue(`${+value - 1}`)}>
          <RemoveIcon className='pointer-events-none' 
          sx={{fontSize: btnSize / 1.25}} />
        </Button>
        <CustomInput type="number" onBlur={e => checkValue(e.target.value)} 
        onChange={e => setQuantity(e.target.value)} value={value} 
        className="bg-transparent	text-center text-sm mx-1" {...inputProps} />
        {/* <input style={{width: btnSize}} type="number" onBlur={e => checkValue(e.target.value)} 
        onChange={e => setQuantity(e.target.value)} value={value} 
        className="bg-transparent	text-center text-lg mx-1" /> */}
        <Button sx={{...sxQuantity, width: btnSize, height: btnSize}} 
        handleClick={() => checkValue(`${+value + 1}`)} 
        cls={btnCls} disabled={+value === quantityMax ? true : false} >
          {/* <AddIcon className='pointer-events-none' sx={{fontSize: btnSize / 1.5}} /> */}
          <AddIcon className='pointer-events-none' sx={{fontSize: btnSize / 1.25}} />
        </Button>
      </div>
      <span className='ml-2 text-sm w-min'>{text}</span>
    </div>
  );
}