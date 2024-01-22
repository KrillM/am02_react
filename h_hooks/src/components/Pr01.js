import { useState, useRef } from 'react';

export default function Pr01(){
    const conditionalMessage = '이름이 입력되지 않음';
    const [isName, setIsName] = useState(false);
    const inputName = useRef();
    const nameMessage = useRef(conditionalMessage);

    const changeView = () => {
        const currentName = inputName.current.value.replace(/\s/g, '');

        if(currentName.length > 4){
            alert('이름은 최대 4자까지 적을 수 있습니다.');
            inputName.current.focus()
            setIsName(false);
            nameMessage.current = conditionalMessage;
        } else {
            setIsName(true);
            nameMessage.current = inputName.current.value;
        }
    }

    return(<>
        <input type='text' placeholder='이름을 입력하세요' ref={inputName} defaultValue=''></input>
        <button onClick={changeView}>입력</button>
        <p>{ isName ? '이름을 작성' : '이름을 작성하세요' }</p>
        <p>{nameMessage.current}</p>
    </>)
}