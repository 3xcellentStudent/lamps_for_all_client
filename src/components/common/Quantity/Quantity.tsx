import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import './Quantity.scss'

interface Props {
  quantity: number
  setQuantity: any
  purchaseDetails: {
    quantityMax: number
  }
}

export default function Quantity({
  quantity, setQuantity, purchaseDetails
}: Props){

  const [value, setValue] = useState(quantity)

  function checkValue(value: number){
    const {quantityMax} = purchaseDetails
    const result = value > quantityMax ? quantityMax : value > 0 ? value : 1
    setValue(result)
    setQuantity(result)
  }

  return (
    <div className='flex items-center mb-2'>
      <h6 className='fos-x1 mr-4'>Quantity (max {purchaseDetails?.quantityMax}):</h6>
      {/* <p>{purchaseDetails?.quantityMax ? 
      purchaseDetails?.quantityMax : null}</p> */}

      <div className="component_quantity flex flex-row items-center w-min">
        <button className="py1-03 px1-04 component_quantity_button" 
        onClick={() => checkValue(quantity - 1)}><RemoveIcon/></button>
        <input type="number" onBlur={e => checkValue(e.target.value)} 
        onChange={e => setValue(e.target.value)} value={value}
        className='text-center component_quantity_input' />
        <button className="py1-03 px1-04 component_quantity_button" 
        onClick={() => checkValue(quantity + 1)}><AddIcon/></button>
      </div>
    </div>
  );
}