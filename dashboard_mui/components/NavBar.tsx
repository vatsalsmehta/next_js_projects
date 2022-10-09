import React, { useEffect, useState } from 'react';
import { Toolbar, AppBar, Typography, InputBase, alpha, Badge, Avatar, Tooltip } from '@mui/material';
import { Mail, Search, Notifications } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core';
import { deepPurple, red } from '@mui/material/colors';

//search mui breakpoints to get idea of this
const useStyles = makeStyles(theme=>({
//using this css classname would not display anything wherever its used except where the width of screen is above 800 or equal to 800
    DesktopScreen: {
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

    toolbar: {
        display: "flex"//space-evenly also looks good
    },

    searchBox: {
        display: "flex",
        alignItems: "center",
        marginLeft:"18px",
        //Inspect element and get css element Name then style it
        "& .MuiInputBase-input": {
			backgroundColor: "#ffffff",
            '&:hover': {
                cursor: "crosshair",
            },
		},
        backgroundColor: alpha("#ffffff",0.15), //less intensity white color without hover
        '&:hover': {
            backgroundColor: alpha("#ffffff",0.45) //high intensity white on hover
        },
    },

    searchIcon: {
        padding: "2.5px",
        //pointer on hovering on search icon 
        '&:hover': {
            cursor: "pointer",
        },
    },

    commonIcons: {
        padding: "2.5px",
        '&:hover': {
            cursor: "pointer",
        },
    },

    avatarStyle:{ 
        backgroundColor: (props:any)=>(props?.customTheme ? red[900] :deepPurple[800]),
        fontSize: "13px",
        '&.hover': {
            cursor: "pointer",
        }
    }

}));

const NavBar=()=>{

    const [customTheme,setcustomTheme]=useState<boolean>(false);
    const classes= useStyles({customTheme});//passing this as prop to UseStyles
    
//you could also make a css style for Input base and use it.

    return(
        <AppBar>
            <Toolbar >
                 <Typography variant='h6' className={classes.DesktopScreen}>Will be Visible Only on Desktop </Typography>
                 <Typography variant='h6' className={classes.MobileScreen}>Vatsal Phone </Typography>
                 
                  <div className={classes.searchBox}>
                    <div className={classes.searchIcon}><Search/> </div>
                    <InputBase placeholder='Search...'/>
                  </div>

                  <div className={classes.commonIcons}>
                    <Badge>
                        <Mail/>
                    </Badge>
                    <Badge>
                        <Notifications/>
                    </Badge>
                    
                  </div>

                  <div>
                    {/* Now an Example of passing Props to makeStyles */}
                       <Tooltip title='Change Theme by passing props to useStyles'>
                            <Avatar className={classes.avatarStyle} onClick={()=>setcustomTheme(prev=>!prev)}>VM</Avatar>
                        </Tooltip>
                        
                  </div>

            </Toolbar> 
        </AppBar>
    )
};

export default NavBar;
