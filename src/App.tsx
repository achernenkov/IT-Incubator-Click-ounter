import React, {useState} from 'react';
import './App.css';
import Setting from "./components/settings";
import Counter from "./components/counter";
import {Route, BrowserRouter} from 'react-router-dom';

// disabled and error

export type ButtonTitleType = {
    inc: string
    dec: string
    fullinc: string
    fulldec: string
    set: string
    setting: string
}



function App() {

    // Название кнопок.
    const buttonTitle: ButtonTitleType = {
        inc: 'Inc',
        dec: 'Dec',
        fullinc: 'Full-Inc',
        fulldec: 'Full-Dec',
        set: 'Set',
        setting: 'Setting'
    }

    // Стейте Max/Min
    let [maxNumber, setMaxNumber] = useState<number>(0)
    let [startNumber, setStartNumber] = useState<number>(0)


    const setMaxValue = (value:number) =>{
        setLogic(value, startNumber)
        if(value < 0){
            setMaxNumber(0)
        }else{
            setMaxNumber(value)
        }
    }

    const setStartValue = (value:number) =>{
        setLogic(maxNumber, value)
        if(value < 0){
            setStartNumber(0)
        }else {
            setStartNumber(value)
        }
    }

    // Error and Disabled

    let [disabledSeetting, setDisabledSeetting] = useState<boolean>(false)
    let [disabledInc, setDisabledInc] = useState<boolean>(false)
    let [disabledDec, setDisabledDec] = useState<boolean>(false)
    let [error, setError] = useState<boolean>(false)

    // Logic

    function setLogic(maxNumber: number, startNumber:number ){
        if(maxNumber <= 0 && startNumber <= 0){
            setDisabledSeetting(true)
            setError(true)
        }else if (startNumber >= maxNumber){
            setDisabledSeetting(true)
            setError(true)
        }else {
            setDisabledSeetting(false)
            setError(false)
        }
    }

    // state

    let [state, setState] = useState<number | string>('Setting please')

    const setApply = () => {
        setState(startNumber)
    }

    let inc = () => {
        if (typeof state === 'number'){
            let result = state
            result = result + 1
            if(result === maxNumber){
                setDisabledInc(true)
                setState(result)
            }else {
                setDisabledInc(false)
                setDisabledDec(false)
                setState(result)
            }
        }
    }

    let dec = () => {
        if (typeof state === 'number'){
            let result = state
            result = result - 1
            if(result === startNumber){
                setDisabledDec(true)
                setState(result)
            }else {
                setDisabledInc(false)
                setDisabledDec(false)
                setState(result)
            }
        }
    }

    let fullInc = () => {
            setState(maxNumber)
            setDisabledInc(true)
            setDisabledDec(false)
    }

    let fullDec = () => {
        setState(startNumber)
        setDisabledInc(false)
        setDisabledDec(true)
    }

    return (
        <BrowserRouter>
            <div className="App">
                <span className='title'>Click counter</span>
                <Route path='/' exact render={() => <Counter
                    buttonTitle={buttonTitle}
                    state={state}
                    disabledInc={disabledInc}
                    disabledDec={disabledDec}
                    inc={inc}
                    dec={dec}
                    fullInc={fullInc}
                    fullDec={fullDec}
                />} />
                <Route path='/set' render={() => <Setting
                    buttonTitle={buttonTitle.set}
                    maxNumber={maxNumber}
                    startNumber={startNumber}
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    disabled={disabledSeetting}
                    error={error}
                    setApply={setApply}
                />} />
            </div>
        </BrowserRouter>);
}

export default App;
