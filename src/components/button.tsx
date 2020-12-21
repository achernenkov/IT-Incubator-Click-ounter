import React from 'react';
import '../App.css';


type ButtonType = {
    title: string
    disabled?: boolean
    function?: () => void
    setApply?: () => void
}

const Button: React.FC<ButtonType> = (props) => {

    let onClickFunction = () => {
        props.function && props.function()
        props.setApply && props.setApply()
    }


    return (

        <button onClick={onClickFunction} disabled={props.disabled} className='Button'>{props.title}</button>
    )
}

export default Button