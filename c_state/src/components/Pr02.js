import { useState } from "react";

export default function Pr02(){
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber(number+1);
    }

    const decrease = () => {
        setNumber(number-2);
    }

    return(<>
        <h2>{number}</h2>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-2</button>
    </>)
}