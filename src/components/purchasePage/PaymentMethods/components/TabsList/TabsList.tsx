import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TabsListType } from '@/types/payment/elements';
import { SyntheticEvent, useState } from 'react';

export default function TabsList({childrens}: {childrens: TabsListType[]}) {
  
  const [value, setValue] = useState("0");

  const tabsList = childrens?.map((
    {label}, idx) => <Tab label={label} value={idx + ""} key={idx} />
  )
  
  const panelsList = childrens?.map((
    {element}, idx) => <TabPanel value={idx + ""} key={idx}>{element}</TabPanel>
  )

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList aria-label="lab API tabs example" 
          onChange={(e: SyntheticEvent, newValue: string) => setValue(newValue)}>
            {tabsList}
          </TabList>
        </Box>
        {panelsList}
      </TabContext>
    </Box>
  );
}
