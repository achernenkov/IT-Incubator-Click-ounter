import React from 'react';
import '../App.css';


    type ButtonType = {
        title: string
        disabled?:boolean
    }

const Button: React.FC<ButtonType> = (props) => {
    return(

            <button disabled={props.disabled} className='Button'>{props.title}</button>
    )
}

export default Button