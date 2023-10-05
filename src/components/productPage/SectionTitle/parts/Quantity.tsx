import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

interface Props {
  quantity: number
  setQuantity: any
  purchaseDetails: {
    quantityMax: number
    fields: []
  }
}

export default function Quantity({quantity, setQuantity, purchaseDetails}: Props){

  const [value, setValue] = useState(quantity)

  function checkValue(value: number){
    const {quantityMax} = purchaseDetails
    const result = value > quantityMax ? quantityMax : value > 0 ? value : 1
    setValue(result)
    setQuantity(result)
  }

  return (
    <div>
      <h6 className='mb-3 fos-x1'>Quantity:</h6>

      <div className="section_quantity flex flex-row items-center w-min">
        <button className="p-2 section_quantity__button" 
        onClick={() => checkValue(quantity - 1)}><RemoveIcon/></button>
        <input type="number" onBlur={e => checkValue(e.target.value)} 
        onChange={e => setValue(e.target.value)} value={value}
        className='section_quantity__input' />
        <button  className="p-2 section_quantity__button" 
        onClick={() => checkValue(quantity + 1)}><AddIcon/></button>
      </div>
    </div>
  );
}