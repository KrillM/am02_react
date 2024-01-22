import { useState, useMemo} from 'react';

export default function Ex02_useMemo() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    const computeValue = (count) => {
        console.log('임의로 큰 연산 진행 중...');
        for(let i=0;i<100000;i++){}
        return count ** 2;
    }

    const expensiveValue = useMemo(() => 
        computeValue(count), [count]);

    return(<>
        <p>임의의 큰 연산 결과: {expensiveValue}</p>
        <button onClick={() => setCount(count+1)}> count + 1 </button>
        <button onClick={() => setOther(other+1)}> other + 1 </button>
    </>)
}