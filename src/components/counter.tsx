import React from 'react';
import Display from "./display";
import Button from "./button";
import {NavLink} from "react-router-dom";
import './../App.css'


const Counter: React.FC<any> = () => {
    return (
        <div className='CounterWrapper'>
            <Display/>
            <div className="buttonBlock">
                <Button/>
                <Button/>
                <Button/>
                <Button/>
                <NavLink className='Button-Link' to='set'>Setting</NavLink>
            </div>
        </div>
    )
}


export default Counter;