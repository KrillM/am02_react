import { useState } from "react";

export default function Greeting() {
    const [hello, setHello] = useState("Hello");

    return (<>
        <h2>Greeting 컴포넌트</h2>
        <div>{hello}</div>

        <button onClick={() => setHello("おはよう")}>click here</button>
    </>)
}
  