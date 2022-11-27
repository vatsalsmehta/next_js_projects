import React, { useEffect, useState } from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {Box} from '@mui/material';
import { makeStyles } from '@material-ui/core';

export interface pageData {
    id: string;
}

const data = [
    {
        "id": "C3_Page1"
    },
    {
        "id": "C3_Page2"
    },
    {
        "id": "C3_Page3"
    },
    {
        "id": "C3_Page4"
    },
    {
        "id": "C3_Page5"
    },
    {
        "id": "C3_Page6"
    }
]

const useStyles = makeStyles(() => ({

    listContainer: {
        width: "700px",
        height: "400px",
        padding: "10px",
        backgroundColor: "#ADD8E6",
        // the below three will center content inside this to center like the list boxes
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto", // this will center the whole container to center of page
        marginTop: "100px"
    },
    listItems: {
        width: "130px",
        height: "30px",
        margin: "5px",
        color: "#fff",
        backgroundColor: "#DBA39A",
        // the below three will center content inside list boxes to center like the text of c3_page
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

}));

export const SingleListIndexPage = () => {

    const [pages, setPages] = useState<any[]>([]);
    const classes = useStyles();
    useEffect(() => {
        setPages(data);
    }, [])

    const dragEndHandler = (event:any) => {
        if (!event.destination) {
            console.log("returning");
            return;
        }

        const _pageItems = [...pages];
        // get the item details/content user dragged from the event , its there as source index
        const draggedItemContent = _pageItems[event.source.index];
        console.log("user tried to Drag: ", draggedItemContent);

        //remove the item user dragged from array and we'll add it to our target destination
        _pageItems.splice(event.source.index, 1);

        // replace without removing anything
        // add draggedItemContent to index where user finished drag and shift rest of everything ahead
        _pageItems.splice(event.destination.index, 0, draggedItemContent);

        console.log("After dropping items are: ", _pageItems);

        setPages(_pageItems);
        console.log("drag Ends");
    }


    return(
        <Box className={classes.listContainer}>
            <DragDropContext onDragEnd = {dragEndHandler}>
                {/* We make the whole outer division as Droppable and elements/listitems inside them draggable */}
                <Droppable droppableId= "pages-reodering">
                    {
                        (provided, snapshot) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {pages.map((item, index) => {
                                    return(
                                        <Draggable key={item.id} draggableId={item.id} index = {index}>
                                            {(provided, snapshot) => (
                                                <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={classes.listItems}>
                                                    {item.id}
                                                </Box>
                                            )
                                            }
                                        </Draggable>
                                    );
                                })}
                            </div>
                        )
                    }
                </Droppable>
            </DragDropContext>
        </Box>
    )
};


export default SingleListIndexPage;