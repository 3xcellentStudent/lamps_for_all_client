import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useEffect } from 'react';
import './Quantity.scss'

interface Props {
  text: string
  cls: string
  clsBtn: string
  clsInput: string
  clsIcons: string
  quantity: number
  action: any
  quantityMax: number
}

export default function Quantity({
  text, cls, clsBtn, clsInput, clsIcons, quantity, action, quantityMax
}: Props){

  const [value, setValue] = useState(quantity)

  useEffect(() => {setValue(quantity)}, [])

  function checkValue(value: number){
    const result = value > quantityMax ? quantityMax : value > 0 ? value : 1
    setValue(result)
    action(result)
  }

  return (
    <div className={cls}>
      <h6 className='fos-x1 mr-4'>{text}</h6>
      <div className="component_quantity flex flex-row items-center w-min">
        <button className={`${clsBtn} component_quantity_button`} 
        onClick={() => checkValue(value - 1)}><RemoveIcon className={clsIcons} /></button>
        <input type="number" onBlur={e => checkValue(e.target.value)} 
        onChange={e => setValue(e.target.value)} value={value}
        className={`${clsInput} text-center component_quantity_input`} />
        <button className={`${clsBtn} component_quantity_button`} 
        onClick={() => checkValue(value + 1)}><AddIcon className={clsIcons} /></button>
      </div>
    </div>
  );
}