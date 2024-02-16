import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useEffect } from 'react';
import './Quantity.scss'

interface Props {
  props: {text: string, clsCont: string, clsHead: string, clsBtn: string, clsInput: string, clsIcons: string}
  quantity: number
  action: any
  quantityMax: number
}

export default function Quantity({props, quantity, action, quantityMax}: Props){

  const [value, setValue] = useState(quantity)

  // useEffect(() => {setValue(quantity)}, [])

  function checkValue(value: number){
    const result = value > quantityMax ? quantityMax : value > 0 ? value : 1
    setValue(result)
    action(result)
  }

  return (
    <div className={props?.clsCont}>
      <h6 className={props?.clsHead} >{props?.text}</h6>
      <div className="component_quantity flex flex-row items-center w-min">
        <button disabled={value > 1 ? false : true} className={`${props?.clsBtn} component_quantity_button`} 
        onClick={() => checkValue(value - 1)}><RemoveIcon className={props?.clsIcons} /></button>
        <input type="number" onBlur={e => checkValue(+e.target.value)} 
        onChange={e => setValue(+e.target.value)} value={value}
        className={`${props?.clsInput} text-center component_quantity_input font-bold`} />
        <button className={`${props?.clsBtn} component_quantity_button`} 
        onClick={() => checkValue(value + 1)}><AddIcon className={props?.clsIcons} /></button>
      </div>
    </div>
  );
}