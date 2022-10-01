import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { dialogPopupOpenAtom } from '../RecoilAtoms/allatoms';
import {useRecoilState} from 'recoil';
import { customCss } from './CssDialogComponent';

export interface DialogTitleProps{
    id: string,
    data:productData[]
}

export interface productData{
    productId: string,
    productName: string,
    productValue: number
}

const DialogComponent=(props: DialogTitleProps)=>{
    const {id, data } = props;
    const[isdialogopen,setisdialogopen] = useRecoilState(dialogPopupOpenAtom);

    const css=customCss();

    useEffect(()=>{
        console.log("renderred");   
       });

    return(
        //open={isdialogopen} is the logic of opening and closing of of popup as popup will open when isdialogopen is true and close when isdialogopen is false
        //if we add onclose any click outside the popup will result in closing of popup
       <Dialog  classes={{ paper: css.dialogBoxStyles }}open={isdialogopen} onClose={() => setisdialogopen(false)} >
            <DialogTitle>Popup Opened</DialogTitle>
            <Box style={{ display: "flex", flexDirection: "column" }}>
                {data.length!=0 && data.map((product,index)=>{  
                    return(
                    <div key={index}>      
                        <><p>Product Number {index} Details:</p></>
                        <><p>Product Name is {product.productId}</p></>
                        <><p>Product Name is {product.productName}</p></>
                        <><p>Product Name is {product.productValue}</p></>
                    </div>
                    )
                })}
            

            </Box>
       </Dialog>
       
    )
};

export default DialogComponent;