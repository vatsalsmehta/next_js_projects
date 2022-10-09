import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { Home } from '@mui/icons-material';

const useStyles=makeStyles((theme:any)=>{

    item: {

    }
})

const LeftNavBar=()=>{
    const classes=useStyles();

    return(
     <Grid container>
        <Grid item sm={2}>
            <div>
                HEllo
            </div>
        </Grid>
        <Grid item sm={10}>
            <div>
                HEllozcx kcbb kldcbkldbclk kbdllc lnclkadclkdlkckndlkkncldasnclkdnclndlc
            </div>
        </Grid>
     </Grid>
    )
};

export default LeftNavBar;
