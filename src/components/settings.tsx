import React from 'react';
import Input from "./input";
import Button from "./button";
import {NavLink} from "react-router-dom";


const Setting: React.FC<any> = () => {
    return (
        <div className='SetBlock'>
            <span className='span-set'>Max Value</span>
            <Input/>
            <span className='span-set'>Start Value</span>
            <Input/>
            <div>
                <NavLink className='Button-Link-Set' to='/'>SET</NavLink>
            </div>
        </div>
    )
}


export default Setting;