import React from 'react';
import '../App.css';

    type DisplayType = {
        state: number | string
    }

const Display: React.FC<DisplayType> = (props) =>{
    return(
        <div className='counter'>
            <span>{props.state}</span>
        </div>
    )
}


export default Display;