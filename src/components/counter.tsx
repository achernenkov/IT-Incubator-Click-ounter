import React from 'react';
import Display from "./display";
import Button from "./button";
import {NavLink} from "react-router-dom";
import './../App.css'
import {ButtonTitleType} from "../App";


    type CounterType = {
        buttonTitle:ButtonTitleType
        state: number | string
        disabled:boolean
        inc: () => void
    }

const Counter: React.FC<CounterType> = (props) => {
    return (
        <div className='CounterWrapper'>
            <Display state={props.state}/>
            <div className="buttonBlock">
                <Button title={props.buttonTitle.inc} disabled={props.disabled} function={props.inc}/>
                <Button title={props.buttonTitle.dec}/>
                <Button title={props.buttonTitle.fullinc}/>
                <Button title={props.buttonTitle.fullres}/>
                <NavLink to='set'><Button title={props.buttonTitle.setting}/></NavLink>
            </div>
        </div>
    )
}


export default Counter;