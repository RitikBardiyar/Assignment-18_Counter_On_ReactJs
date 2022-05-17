import { useState, useEffect } from "react";

export const StopWatch=()=>{


    const [sec, setSecond] = useState(0);


    const calledInsideTimeout=()=>{
    }

    useEffect(()=>{

        setTimeout(()=>{
            setSecond(sec+1)
        },1000);

    });

    return(
        <>
        <h1>0:0:{sec}</h1>
        
        </>


    );
}