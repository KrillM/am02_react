import { useState } from "react";

export default function Pr02(){
    const [view, setView] = useState(true);

    const changeCondition = () => {
        setView(!view)
    }

    return(<>
        {view && <h1>Hello World</h1>}
        {view ? (<button onClick={changeCondition}>사라지기</button>) : (<button onClick={changeCondition}>보여지기</button>)}
    </>)
}