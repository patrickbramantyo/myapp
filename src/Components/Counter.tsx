import React from 'react';
import Image from './Image';

interface IState{
    counter: number;
}

class Counter extends React.Component<{}, IState> {

    state = {
        counter: 0
       
        }
        handleClick =()=> {
            const {counter} = this.state
            console.log ({counter})
            this.setState ({counter: counter +1})}
    
    render() {
        const {counter} = this.state
        return(
            <div className='App'>
            <h1>{counter}</h1>
            <button type='button' onClick={this.handleClick}>
                Click me
            </button>
            <div>
            {
                counter%3 === 0 && counter!=0 ? <Image/>:null
            }</div>
            </div>
        )
    }
}
        
    
    
    
export default Counter;