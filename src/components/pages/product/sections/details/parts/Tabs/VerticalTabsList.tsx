import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { ProductDataType } from '@/types/main/productData.type';
import SpecificationsList from '../SpecificationsList/SpecificationsList';
import { useSelector } from 'react-redux';
import { GlobalDataType } from '@/types/main/globalData.type';

export default function VerticalTabsList({titles, properties}: ProductDataType["specifications"]){

  const {elementsOptionalBg} = useSelector(({globalData: {colors: {backgrounds}}}: {globalData: GlobalDataType}) => ({...backgrounds}))

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
        {titles.map((title, index) => {
          return(
            <Tab key={index} label={title} id={`vertical-tab-${index}, aria-controls: vertical-tabpanel-${index}`} 
            sx={{borderRight: `2px solid ${elementsOptionalBg.hex}`}} />
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
