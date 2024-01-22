import {useReducer} from 'react';

export default function Ex03_useReducer(){
    const initState = {value: 0};

    const reducer = (prevState, action) => {
        switch(action.type) {
            case 'plus':
                return {value: prevState.value + 1};
            case 'minus':
                return {value: prevState.value - 1};
            case 'reset':
                return initState;
            default:
                return {value: prevState.value}
        }
    }

    const [state, dispatch] = useReducer(reducer, initState);
    
    return(<>
        <h2>{state.value}</h2>
        <button onClick={()=> dispatch({type: 'plus'})}> + </button>
        <button onClick={()=> dispatch({type: 'minus'})}> - </button>
        <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
    </>)
}