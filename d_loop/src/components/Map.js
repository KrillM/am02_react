import { useState } from "react";

export default function Map(){
    const [list, setList] = useState([
        { id: 1, alpha: 'a' },
        { id: 2, alpha: 'b' },
        { id: 3, alpha: 'c' },
        { id: 4, alpha: 'd' },
        { id: 5, alpha: 'e' },
    ]);

    const [input, setInput] = useState('');

    const add = () => {
        if(!input){
            alert("알파벳을 입력해주세요")
            return
        }
        else if (input.trim().length === 0){
            alert("빈 칸이나 띄어쓰기는 입력이 되지 않습니다.")
            return
        }

        const addNew = list.concat({
            id: list.length + 1,
            alpha: input
        })
    
        setInput("")
        setList(addNew);
    }

    return(<>
    <input type="text" placeholder="알파벳 입력" value={input} onChange={(e) => {setInput(e.target.value)}}/>
    <button onClick={add}>ADD</button>
    <ol>
        {list.map((value)=> (
            <li key={value.id}>{value.alpha}</li>   
        ))}
    </ol>
    </>);
}