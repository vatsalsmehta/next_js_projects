import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InfoComponent1 from './InfoComponent1';
import InfoComponent2 from './InfoComponent2';
import InfoComponent3 from './InfoComponent3';




const TabComponent2 = ()=> {
  const [currentopenTabValue, setcurrentopenTabValue] = useState<number>(0);
  const [currentComponentToRender, setcurrentComponentToRender] = useState<string | null >("Tab1");

  const handletabChange = (event: React.SyntheticEvent, newValue: number) => {
    //here we render component from Content of Tab Label that we get from react event instead of Tab Index
    const component=event.currentTarget.textContent;
    console.log("component is ", component);
    setcurrentComponentToRender(component);
    setcurrentopenTabValue(newValue);
  };
  
  const alllabels=["Tab1","Tab2","Tab3"];
  
  const renderComponent = () =>{
    switch(currentComponentToRender){
      case "Tab1":
        return <InfoComponent1 data="Hi ji"/>;
      case "Tab2":
        return <InfoComponent2/>;
      case "Tab3":
        return <InfoComponent3/>;
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

        {/* In below line the value property requires an integer through which it points/highlights the current tab */}
        {/* The onChange method passes in two things : a react SyntheticEvent as well as a integer value that 
        corresponds to the index of new tab clicked or the  index of child tab clicked/changed*/}
        <Tabs value={currentopenTabValue} onChange={handletabChange} aria-label="basic tabs example">

          {/* here we generate the labels for each tab */}
          {alllabels.map((label,index)=>{
            return(
              <Tab label={label} key={index} />
            )
          })};

        </Tabs>

      </Box>

      {/* render component on base of tab currently open */}
      {renderComponent()}
      
    </Box>
  );
}

export default TabComponent2;
