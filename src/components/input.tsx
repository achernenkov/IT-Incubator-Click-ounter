import React, {ChangeEvent} from 'react';
import '../App.css';

type InputType = {
    value: number
    setValue: (value:number) => void
}

const Input: React.FC<InputType> = (props) => {

    let setValue = (event:ChangeEvent<HTMLInputElement>) =>{
        let value = Number(event.currentTarget.value)
        props.setValue(value)
    }

    return(
        <div>
            <input value={props.value} onChange={setValue} className='inputRoot' type='number'/>
        </div>
    )
}


export default Input;