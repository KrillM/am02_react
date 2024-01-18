import { useState } from 'react'

export default function Pr01(){
    const [list, setList] = useState([
        {key: 1, value: "a"},
        {key: 2, value: "b"},
        {key: 3, value: "c"},
        {key: 4, value: "d"},
        {key: 5, value: "e"}
    ])

    const [input, setInput] = useState('');

    const add = () => {
        if(!input){
            alert("알파벳을 입력하세요.");
            return;
        } else if (input.trim().length === 0) {
            alert("빈 칸이나 띄어쓰기는 허용되지 않습니다.");
            return;
        }

        const addNew = list.concat({
            key: list.length+1,
            value: input
        })

        setInput('');
        setList(addNew);
    }

    return(<>
        <input type="text" placeholder="알파벳을 입력하세요" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={add}>ADD</button>
        <ol>
            {list.map((value)=>(
                <li key={value.key}>{value.value}</li>
            ))}
        </ol>
    </>)
}