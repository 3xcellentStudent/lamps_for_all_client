import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { ProductIdType } from '@/types/main/product.type';
import SpecificationsList from '../SpecificationsList/SpecificationsList';
import { useSelector } from 'react-redux';

export default function VerticalTabsList({titles, properties}: ProductIdType["specifications"]){
  const {elementsOptional} = useSelector(({data: {theme: {colors: {backgrounds}}}}: {data: ProductIdType}) => backgrounds)

  const [value, setValue] = useState(0);
  const [height, setHeight] = useState(0)

  useEffect(() => {
    let maxLength = 0
    for(let i = 0; i < properties.length; i++){
      const subArray = properties[i]
      if(subArray.array.length > maxLength) maxLength = subArray.array.length
      else continue;
    }
    setHeight(48 * maxLength)
  }, [properties])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, height }} className="flex justify-center transparent" >
      <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} 
      sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {titles.map(({name}, index) => {
          return(
            <Tab key={index} label={name} id={`vertical-tab-${index}, aria-controls: vertical-tabpanel-${index}`} 
            sx={{borderRight: `2px solid ${elementsOptional.hex}`}} />
          )
        })}
      </Tabs>
      {properties.map(({array}, index) => {
        return(
          <div key={index} role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`}>
            <SpecificationsList key={index} array={array} />
          </div>
        )
      })}
    </Box>
  );
}
