import { useState } from "react";

export default function Pr01(){
    const [list, setList] = useState([
        {id: 1, alpha:"a"},
        {id: 2, alpha:"b"},
        {id: 3, alpha:"c"},
        {id: 4, alpha:"d"},
        {id: 5, alpha:"e"}
    ])

    return(<>
        <ol>
            {list.map((value) => (
                <li key={value.id}>{value.alpha}</li>
            ))}
        </ol>
    </>)
}