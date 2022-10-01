import React, { useState } from 'react';
import { Button } from '@mui/material';
import DialogComponent from '../../Components/Dialogcomponent';

const PopupIndex =()=>{
    const[dialogopenvalue,setdialogopenvalue]= useState<boolean>(false);
    return(
        <div>
        <div><h1>Click below button to open Popup Dialog Component</h1></div>
        <Button variant='contained' onClick={()=>{setdialogopenvalue(true)}}> Open Popup</Button>
        <DialogComponent
        id='learningdialogs'
        isdialogopen= {dialogopenvalue} 
        />
            
        </div>
    )

};

export default PopupIndex;