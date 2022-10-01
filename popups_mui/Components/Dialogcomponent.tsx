import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


export interface DialogTitleProps{
    id: string,
    isdialogopen: boolean
}

const DialogComponent=(props: DialogTitleProps)=>{
    return(
       <Dialog open={props.isdialogopen} >

       </Dialog>
    )
};

export default DialogComponent;