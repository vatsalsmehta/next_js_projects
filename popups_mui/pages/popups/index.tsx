import React, { useState } from 'react';
import { Button } from '@mui/material';
import DialogComponent from '../../Components/Dialogcomponent';
import { dialogPopupOpenAtom } from '../../RecoilAtoms/allatoms';
import {useRecoilState} from 'recoil';

const PopupIndex =()=>{
    const[dialogopenvalue,setdialogopenvalue]= useRecoilState(dialogPopupOpenAtom);

    const bikeData=[{
            productId: "a_2522",
            productName: "Suzuki Gixxer",
            productValue: 95000
        }]
    
    return(
        <div>
        <div><h1>Click below button to open Popup Dialog Component and also we'll pass some<br/> custom data via props to be displayed on popup</h1></div>
        <Button variant='contained' onClick={()=>{setdialogopenvalue(true)}}> Open Popup</Button>
        <DialogComponent id="Learning Props" data={bikeData}/>
        </div>
    )

};

export default PopupIndex;