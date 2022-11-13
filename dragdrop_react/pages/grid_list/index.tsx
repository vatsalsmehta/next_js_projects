import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import {Box, Button} from '@mui/material';
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles<CreateCSSProperties>(() => ({
    fruitsContainer: {
        textAlign: "center",
        maxWidth: "500px",
        margin: "100px",
    },
    addPageBtn: {
        width: "150px",
        height:"50px"
    },
    listContainer: {
        width: "500px",
        height: "500px",
        backgroundColor: "#ADD8E6",
        marginTop: "40px",
        padding: "15px"
    },
    listItem: {
        backgroundColor: "#CF9FFF",
        padding: "10px",
        margin: "15px",
        cursor: "move"
    },
    draggingItem: {
        cursor: "move"
    }
}))


const ListComponent = () => {
    const classes = useStyles();

    const [pageData, setPageData] = useState(["Page1", "Page2", "Page3", "Page5"]);
    const dragItem = useRef<any>(null);
    const dragDestination = useRef<any>(null);

    const addPageFn = () => {
        let newPageName = (Math.random() + 1).toString(36).substring(7);
        let currentPageNames = [...pageData];
        currentPageNames.push(newPageName);
        console.log(currentPageNames);
        setPageData(currentPageNames);
    }

    const handlePageSort = (event: React.DragEvent<HTMLDivElement>) => {

            console.log("inside if ", event.currentTarget.parentNode?.parentElement?.id);
            let _pageItems = [...pageData];

            // get the item details/content user dragged from the index we have
            const draggedItemContent = _pageItems[dragItem.current];

            //remove the item user dragged from array and we'll add it to our target destination
            _pageItems.splice(dragItem.current, 1);

            // replace without removing anything
            // add draggedItemContent to index where user finished drag and shift rest of everything ahead
            _pageItems.splice(dragDestination.current, 0, draggedItemContent);
            
            // reset the position ref
            dragItem.current = null;
            dragDestination.current = null;

            // update the array for rendering
            setPageData(_pageItems);
        
    }
 
    return(
        <Box id="Box-Container" className = {classes.fruitsContainer}>
            <h2>Add Page</h2>

            <Button className={classes.addPageBtn} onClick={() => {addPageFn()}} variant='contained'> Add Page </Button>

            <div className= {classes.listContainer}>
                {
                    pageData.map((data, index) => {
                        return(
                            <div key={index}
                            className = {classes.listItem}
                            draggable
                            onDragStart = {(e) => (dragItem.current = index)}
                            onDragOver = {(e) => {dragDestination.current = index; e.preventDefault();}}
                            onDrop = {(e) => handlePageSort(e)}>
                                <h3> {data} </h3>
                            </div>
                        )
                    })
                }
            </div>


        </Box>
    )
};

export default ListComponent;