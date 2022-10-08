import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Person } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core';

const ButtonIndex=()=>{
    const [loadIcon,setloadIcon]=useState<boolean>(false);
    return(
        <>
        <Button 
            variant='contained' 
            startIcon={loadIcon?<Person/>:""} 
            onClick={()=>{setloadIcon(prev=>!prev)}} >
                Click to Toggle Icon
        </Button>
        </>
    )

};

export default ButtonIndex;