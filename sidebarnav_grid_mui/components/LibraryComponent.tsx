import React, { useEffect } from 'react';

const LibraryComponent = () =>{

    useEffect(()=>{
     console.log(" Library renderred");   
    })

    return(
        <>
        <h3>Renderring Library Component</h3>
        </>
    );
};

export default LibraryComponent