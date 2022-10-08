import { Toolbar, AppBar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import React from 'react';

//search mui breakpoints to get idea of this
const useStyles = makeStyles((theme:any)=>({
//using this css classname would not display anything wherever its used except where the width of screen is above 800 or equal to 800
    DesktopScreen:{
        display:"none",
        [theme.breakpoints.up(800)]:{
            display: "block"
    },
},
//using this css classname would not display wherever its used except where the width of screen is less than 401
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
