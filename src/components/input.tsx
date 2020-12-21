import React, {ChangeEvent} from 'react';
import '../App.css';

type InputType = {
    value: number
    setValue: (value: number) => void
    error: boolean
}

const Input: React.FC<InputType> = (props) => {

    let setValue = (event: ChangeEvent<HTMLInputElement>) => {
        let value = Number(event.currentTarget.value)
        props.setValue(value)
    }

    const error = props.error

    return (
        <div>
            <input value={props.value} onChange={setValue} min={0} className={error ? 'inputRootError' : 'inputRoot'}
                   type='number'/>
        </div>
    )
}


export default Input;