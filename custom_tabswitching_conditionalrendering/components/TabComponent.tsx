import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InfoComponent1 from './InfoComponent1';
import InfoComponent2 from './InfoComponent2';
import InfoComponent3 from './InfoComponent3';




const TabComponent = ()=> {
  const [currentopenTabValue, setcurrentopenTabValue] = useState(0);

  const handletabChange = (event: React.SyntheticEvent, newValue: number) => {
    //console.log(event.currentTarget.textContent); this has exact value/label through which also you can make a switch case to render some component by taking another currentcomponent state in string.
    setcurrentopenTabValue(newValue);
  };
  
  const alllabels=["component1","component2","component3"]
  
  const renderComponent = () =>{
    switch(currentopenTabValue){
      case 0:
        return <InfoComponent1 data="Hi"/>;
      case 1:
        return <InfoComponent2/>;
      case 2:
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

export default TabComponent;
