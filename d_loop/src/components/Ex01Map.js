import { useState } from "react";

export default function Ex01Map(){
    const [list, setList] = useState([
        {key: 1, value: "krille" },
        {key: 2, value: "yena" },
        {key: 3, value: "jisu"},
        {key: 4, value: "sooah" },
        {key: 5, value: "eden" },
    ])

    return(<>
    <h1>Team Krille</h1>
    <ol>
        {list.map((value) => (
            <li key={value.key}>{value.value}</li>
        ))}
    </ol>
    </>)
}