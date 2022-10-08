import React, { useEffect } from 'react';

interface InfoProps{
    data: string;
}

const InfoComponent1=(props: InfoProps)=>{
    const data =props.data;
    return(
        <div><h1>{data}</h1></div>
    )
};

export default InfoComponent1;