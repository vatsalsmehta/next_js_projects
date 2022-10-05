import React, { useEffect } from 'react';
import {Dialog, DialogTitle, Box} from '@mui/material/';
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

    return(
        //open={isdialogopen} is the logic of opening and closing of of popup as popup will open when isdialogopen is true and close when isdialogopen is false
        //if we add onclose any click outside the popup will result in closing of popup
       <Dialog id={id} classes={{ paper: css.dialogBoxStyles }} open={isdialogopen} onClose={() => setisdialogopen(false)} >
            <Box className={css.dialogHeader}>
                <DialogTitle className={css.dialogTitle}>Popup Opened</DialogTitle>
            </Box>
            
            <Box style={{ display: "flex", flexDirection: "column" }}>
                {data.length!=0 && data.map((product,index)=>{  
                    return(
                    <div key={index}>      
                        <><p>Product Number {index+1} Details:</p></>
                        <><p>Product ID is {product.productId}</p></>
                        <><p>Product Name is {product.productName}</p></>
                        <><p>Product Price is {product.productValue}</p></>
                    </div>
                    )
                })}
            </Box>
       </Dialog>
    )
};

export default DialogComponent;