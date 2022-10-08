import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InfoComponent1 from './InfoComponent1';
import InfoComponent2 from './InfoComponent2';
import InfoComponent3 from './InfoComponent3';


//tab panel has 3 props index, value and children, children here would be the different components we'll render on different tabs
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  currentlypressedTab: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, currentlypressedTab, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      //only the tab that is pressed has its value set in state rest all the other components in diff tabs will stay hidden.
      hidden={currentlypressedTab !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
        {/* //the children below is actually the value/component we get from Tabpanel don't put this inside typogrpahy*/}
        {children}  
      </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabComponent() {
  const [currentopenTabValue, setcurrentopenTabValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setcurrentopenTabValue(newValue);
  };
  
  const allcomponents=[<InfoComponent1 data='Isme props se data bheja'/>,<InfoComponent2/>,<InfoComponent3/>]; //all the imported components to render on different tabs
  const alllabels=["component1","component2","component3"]

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currentopenTabValue} onChange={handleChange} aria-label="basic tabs example">
          {/* here we generate the labels for each tab and the functionality where we can change them on click */}
          {alllabels.map((label,index)=>{
            return(
              <Tab label={label} key={index} {...a11yProps(index)} />
            )
          })};
        </Tabs>

      </Box>

      {/* here we'll generate our tab panel  one that contains the content or component to be displayed on each screen */}
      {allcomponents.map((component,index)=>{
        return(
        <TabPanel currentlypressedTab={currentopenTabValue} key={index} index={index}>
          {component}
        </TabPanel>)
      })}
    </Box>
  );
}
