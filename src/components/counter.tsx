import React from 'react';
import Display from "./display";
import Button from "./button";


const Counter: React.FC<any> = () => {
    return (
        <div className='CounterWrapper'>
            <Display/>
            <div className="buttonBlock">
                <Button/>
                <Button/>
                <Button/>
                <Button/>
            </div>
        </div>
    )
}


export default Counter;