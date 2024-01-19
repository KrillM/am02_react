import { useState } from 'react';

export default function Pr02(){
    const [list, setList] = useState([
        { id: 1, word: "Apple" },
        { id: 2, word: "Banana" },
        { id: 3, word: "Canada" },
        { id: 4, word: "Delta" },
        { id: 5, word: "Energy" }
    ])
    
    const [inputWord, setInputWord] = useState('');

    const addList = () => {
        if(!inputWord){
            alert("단어를 입력해주세요.")
            return;
        }

        const addNewWord = list.concat({
            id: list.length+1,
            word: inputWord
        })

        setInputWord('')
        setList(addNewWord)
    }

    const deleteWord = (id) => {
        const updateWord = list.filter((noshow) => id !== noshow.id)
        setList(updateWord)
    }

    return(<>
        <input type="text" placeholder='단어를 입력하세요.' value={inputWord} onChange={(e) => setInputWord(e.target.value)}></input>
        <button onClick={addList}>ADD</button>
        <ol>
            {list.map((show) => (
                <li key={show.id} onDoubleClick={()=>{deleteWord(show.id)}}>{show.word}</li>
            ))}
        </ol>
    </>)
}