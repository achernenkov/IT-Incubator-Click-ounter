import React from 'react';
import Input from "./input";
import Button from "./button";
import {NavLink} from "react-router-dom";

    type SettingsType = {
        buttonTitle: string
    }


const Setting: React.FC<SettingsType> = (props) => {
    return (
        <div className='SetBlock'>
            <span className='span-set'>Max Value</span>
            <Input/>
            <span className='span-set'>Start Value</span>
            <Input/>
            <div>
                <NavLink to='/'><Button title={props.buttonTitle}/></NavLink>
            </div>
        </div>
    )
}


export default Setting;