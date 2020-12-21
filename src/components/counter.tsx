import React from 'react';
import Display from "./display";
import Button from "./button";
import {NavLink} from "react-router-dom";
import './../App.css'
import {ButtonTitleType} from "../redux/reducer";


    type CounterType = {
        buttonTitle:ButtonTitleType
        state: number | string
        disabledInc:boolean
        disabledDec:boolean
        inc: () => void
        dec: () => void
        fullInc: () => void
        fullDec: () => void
        errorCounter: boolean
        settingClick: () => void
    }

const Counter: React.FC<CounterType> = (props) => {
    return (
        <div className='CounterWrapper'>
            <Display state={props.state} error={props.errorCounter}/>
            <div className="buttonBlock">
                <Button title={props.buttonTitle.inc} disabled={props.disabledInc} function={props.inc}/>
                <Button title={props.buttonTitle.dec} disabled={props.disabledDec} function={props.dec}/>
                <Button title={props.buttonTitle.fullinc} disabled={props.disabledInc} function={props.fullInc}/>
                <Button title={props.buttonTitle.fulldec} disabled={props.disabledDec} function={props.fullDec}/>
                <NavLink to='set'><Button title={props.buttonTitle.setting} function={props.settingClick}/></NavLink>
            </div>
        </div>
    )
}


export default Counter;