import React from 'react';
import '../App.css';


    type ButtonType = {
        title: string
    }

const Button: React.FC<ButtonType> = (props) => {
    return(

            <button className='Button'>{props.title}</button>
    )
}

export default Button