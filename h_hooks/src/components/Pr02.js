import { useState, useMemo } from 'react';

export default function Pr02(){
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')
    
    const countWord = useMemo(() => {
        // 찾고자 하는 단어가 있을 경우
        if(input.trim() && search.trim()) {
            const words = input.split('');
            return words.filter((word) => word.includes(search)).length
        }
        // 아닐 경우
        return 0;
    }, [input, search])

    return(<>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='문장을 입력하시오.'></input><br/>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='찾을 단어를 입력하시오.'></input>
        <p>'{search}'의 빈도수: {countWord}</p>
    </>)
}