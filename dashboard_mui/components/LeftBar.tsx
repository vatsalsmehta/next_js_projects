import React from 'react';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { Home } from '@mui/icons-material';

const useStyles=makeStyles((theme:any)=>{

    item: {

    }
})

const LeftNavBar=()=>{

    const classes=useStyles();

    return(
        <Container>
            <div className={classes.item}>
                <Home className={classes.icons}/>
                <Typography className={classes.text}>HomePage</Typography>
            </div>
        </Container>
    )
};

export default LeftNavBar;
