import React from 'react';
import '../App.css';

type DisplayType = {
    state: number | string
    error: boolean
}

const Display: React.FC<DisplayType> = (props) => {

    const error = props.error

    return (
        <div className={error ? 'counterError' : 'counter'}>
            <span>{props.state}</span>
        </div>
    )
}


export default Display;