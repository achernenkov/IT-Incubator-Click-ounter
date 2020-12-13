import React from 'react';
import Input from "./input";
import Button from "./button";
import {NavLink} from "react-router-dom";

    type SettingsType = {
        buttonTitle: string
        maxNumber:number
        startNumber:number
        setMaxValue: (value:number) => void
        setStartValue: (value:number) => void
    }


const Setting: React.FC<SettingsType> = (props) => {
    return (
        <div className='SetBlock'>
            <span className='span-set'>Max Value</span>
            <Input
                value={props.maxNumber}
                setValue={props.setMaxValue}
            />
            <span className='span-set'>Start Value</span>
            <Input
                value={props.startNumber}
                setValue={props.setStartValue}
            />
            <div>
                <NavLink to='/'><Button title={props.buttonTitle}/></NavLink>
            </div>
        </div>
    )
}


export default Setting;