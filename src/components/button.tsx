import React from 'react';
import '../App.css';

type ButtonPropsType = {
    title: string
    counter: () => void
    states?:number
}


function Button(props:ButtonPropsType){
    return(

            <button className={'Button'} onClick={() => props.counter() } disabled={props.states === 0? true : false}>{props.title} </button>
    )
}

export default Button