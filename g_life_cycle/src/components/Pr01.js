import { useState, useEffect } from 'react';

export default function Pr01(){
    const [count, setCount] = useState(0);
    const [isAction, setIsAction] = useState(false);

    useEffect(() => {
        let isValid;

        if(isAction){
            isValid = setInterval(() => {
                setCount((count) => count + 1);
            }, 1000);
        } else if(!isAction && count !== 0){
            clearInterval(isValid);
        }
        return () => clearInterval(isValid);
    }, [isAction, count])

    return (<>
        <h1>{count} Seconds</h1>
        <button onClick={() => {setIsAction(true);}}> Start </button>
        <button onClick={() => {setIsAction(false);;}}> Stop </button>
        <button onClick={() => {setCount(0); setIsAction(false)}}> Reset </button>
    </>)
}