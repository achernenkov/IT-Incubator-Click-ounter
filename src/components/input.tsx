import React from 'react';
import '../App.css';

type InputType = {
    value: number
    changeValue: (value:string) => void
    error: boolean
}


function Input(props:InputType){
    return(
        <div>
            <input value={props.value} type='number' className={props.error ? 'inputRootError' : 'inputRoot'} onChange={(e)=> props.changeValue(e.currentTarget.value)}/>
        </div>
    )
}


export default Input;