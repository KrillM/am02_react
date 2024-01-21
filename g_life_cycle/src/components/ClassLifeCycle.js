import React, { Component } from 'react';

export default class ClassLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        console.log('constructor');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log(
                `componentDidUpdate 실행 count state : ${prevState.count} -> ${this.state.count}`
            );
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return(<>
            {console.log('render')}
            <h1>{this.state.count}</h1>
            <button onClick={()=>{this.setState({
                count: this.state.count + 1 
            });}}> +1 </button>
        </>)
    }
}