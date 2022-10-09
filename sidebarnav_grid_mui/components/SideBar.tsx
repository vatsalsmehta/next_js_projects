import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { ScheduleIcon, LibraryIcon } from '../Icons/AllIcons';
import LibraryComponent from './LibraryComponent';
import ScheduleComponent from './ScheduleComponent';

//new way of defining css and we pass this object in sx
const rootgridContainerCss = {
  height: "600px",
}

const sidebarCss = {
  display: "flex",
  flexDirection: "column",
  background: "#FFFFFF",
  height: "100%",
  borderRight: "1px solid #E2E8F0",
}

const menuItem= {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
  color: "#334155",
  fontSize: "15px",
  cursor: "pointer",
  marginTop: "-10px"
}



const SideBar = () =>{
  const[currentComponentToRender, setcurrentComponentToRender]= useState<string>("Schedule");

  const renderComponent = ()=>{
    switch(currentComponentToRender){
      case "Schedule":
        return <ScheduleComponent/>;
      case "Library":
        return <LibraryComponent/>;
    }
  };



    return(
        <Grid container spacing={2} sx={rootgridContainerCss} >
 
          <Grid item sm={1} sx={sidebarCss}>
            
            <Box sx={menuItem} onClick={()=>{setcurrentComponentToRender("Schedule")}} >
              <ScheduleIcon/>
              <span style={{ marginTop: "5px" }}>Schedule</span>
            </Box>

            <Box sx={menuItem} onClick={()=>{setcurrentComponentToRender("Library")}} >
              <LibraryIcon/>
              <span style={{ marginTop: "5px" }}>Library</span>
            </Box>
            
          </Grid>
  
          <Grid item sm={11} >
          {renderComponent()}
          </Grid>

        </Grid>

      )
}

export default SideBar;