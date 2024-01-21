import { useState } from 'react';

export default function Pr01(){
    const [title, setTitle] = useState('검정색');
    const [style, setStyle] = useState('black');

    const changeStyle = (newColor) => {
        setStyle(newColor);

        if(newColor === 'red'){
            setTitle('빨간색')
        } else if(newColor === 'blue'){
            setTitle('파란색')
        } 
    }

    return(<>
        <h1 style={{color: style}}>{title} 글자</h1>
        <button onClick={() => {changeStyle('red')}}>빨간색</button>
        <button onClick={() => {changeStyle('blue')}}>파란색</button>
    </>)
}