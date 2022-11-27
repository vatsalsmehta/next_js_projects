import React, { useEffect, useState } from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


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


export const SingleListIndexPage = () => {

    const [pages, setPages] = useState<any[]>();

    useEffect(() => {
        setPages(data);
    }, [])

    const dragEndHandler = (result:any) => {
        console.log("drag Ends", result);
    }


    return(
        <>
            <DragDropContext onDragEnd = {dragEndHandler}>
                {/* We make the whole outer division as Droppable and elements inside them draggable */}
                <Droppable droppableId= "vatsal">
                    {
                        (provided, snapshot) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {data.map((item, index) => {
                                    return(
                                        <Draggable key={item.id} draggableId={item.id} index = {index}>
                                            {(provided, snapshot) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    {item.id}
                                                </div>
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
        </>
    )
};


export default SingleListIndexPage;