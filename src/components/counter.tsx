import React from 'react';
import '../App.css';

type CounterTypeProps = {
    states: number
    styles: string
}

function Counter(props:CounterTypeProps){
    return(
        <div className='counter'>
            <span className={props.styles}>{props.states}</span>
        </div>
    )
}


export default Counter;