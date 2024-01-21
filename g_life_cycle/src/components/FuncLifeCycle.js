import { useState, useEffect } from 'react';

export default function FuncLifeCycle() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('컴포넌트 Mount됨 = componentDidMount');
    }, []);

    // useEffect(() => {
    //     console.log('컴포넌트 Mount되거나 Update됨 = render');
    // }, [count]);

    // useEffect(() => {
    //     if (count > 0) {
    //         console.log(`컴포넌트 Update됨 = componentDidUpdate`);
    //     }
    // }, [count]);

    useEffect(() => {
        console.log('컴포넌트 Mount됨 = componentDidMount');
    
        return () => {
            console.log('컴포넌트 Unmount됨 = componentWillUnmount');
        };
    }, []);
    

    return (<>
        <h1>{count}</h1>
        <button onClick={() => {setCount(count + 1);}}> + </button>
    </>)
}