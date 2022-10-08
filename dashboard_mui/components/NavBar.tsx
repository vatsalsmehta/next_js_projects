import { Toolbar, AppBar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme:any)=>({
    //search mui breakpoints to get idea of this
    DesktopScreen:{
        display:"none",
        [theme.breakpoints.up(800)]:{
            display: "block"
    },
},
    MobileScreen:  {
        display:"none",
        [theme.breakpoints.down(401)]:{
            display: "block"
        },
    },
}));

const NavBar=()=>{

const classes= useStyles();


    return(
        <AppBar>
            <Toolbar>
                 <Typography variant='h6' className={classes.DesktopScreen}>Will be Visible Only on Desktop </Typography>
                 <Typography variant='h6' className={classes.MobileScreen}>Vatsal Phone </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default NavBar;
