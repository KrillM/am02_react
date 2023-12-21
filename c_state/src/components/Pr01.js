import { useState } from "react";

export default function Pr01() {
    const [num, setNum] = useState(0);

    return (<>
        <h2>{num}</h2>
        <button onClick={() => setNum(num + 1)}>+</button>
        <button onClick={() => setNum(num - 1)}>-</button>
    </>)
}
  