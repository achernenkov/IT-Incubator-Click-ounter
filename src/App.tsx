import React, {useState} from 'react';
import './App.css';
import Setting from "./components/settings";
import Counter from "./components/counter";
import {Route, BrowserRouter} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {StateType} from "./redux/reducer";


// disabled and error


export type ButtonTitleType = {
    inc: string
    dec: string
    fullinc: string
    fulldec: string
    set: string
    setting: string
}

export function restoreState() {
    let obj = localStorage.getItem('counter')
    return obj ? JSON.parse(obj) : {'max': null, 'min': null}
}

function App() {

///////////////// new logic //////////////////////////


    const dispatch = useDispatch()
    const {
        maxNumber,
        startNumber,
        disabledSeetting,
        disabledInc,
        disabledDec,
        error,
        errorCounter,
        counterState,
        buttonTitle
    } = useSelector<AppRootStateType, StateType>(state => state.counsterState)
///////////////// end new logic ///////////////////////


    // // Стейте Max/Min
    // let [maxNumber, setMaxNumber] = useState<number>(restoreState().max)
    // let [startNumber, setStartNumber] = useState<number>(restoreState().min)


    const setMaxValue = (value: number) => {
        dispatch(
            {
                type: 'SET-MAX-VALUE',
                payload: {
                    maxNumber: value,
                    disabledSeetting: false
                }
            }
        )

        // setLogic(value, startNumber)
        // if (value < 0) {
        //     setMaxNumber(0)
        // } else {
        //     setMaxNumber(value)
        // }
    }

    const setStartValue = (value: number) => {
        dispatch(
            {
                type: 'SET-START-VALUE',
                payload: {
                    startNumber: value,
                    disabledSeetting: false
                }
            }
        )

        // setLogic(maxNumber, value)
        // if (value < 0) {
        //     setStartNumber(0)
        // } else {
        //     setStartNumber(value)
        // }
    }

    // // Error and Disabled
    //
    // let [disabledSeetting, setDisabledSeetting] = useState<boolean>(false)
    // let [disabledInc, setDisabledInc] = useState<boolean>(false)
    // let [disabledDec, setDisabledDec] = useState<boolean>(false)
    // let [error, setError] = useState<boolean>(false)
    // let [errorCounter, setErrorCounter] = useState<boolean>(false)
    //
    // // Logic
    //
    // function setLogic(maxNumber: number, startNumber: number) {
    //     if (maxNumber <= 0 && startNumber <= 0) {
    //         setDisabledSeetting(true)
    //         setError(true)
    //     } else if (startNumber >= maxNumber) {
    //         setDisabledSeetting(true)
    //         setError(true)
    //     } else {
    //         setDisabledSeetting(false)
    //         setError(false)
    //     }
    // }

    // state

    // let [state, setState] = useState<number | string>('Setting please')

    const setApply = () => {


        // setState(startNumber)
        // setDisabledDec(true)
        // setDisabledInc(false)
        // saveLocalState(maxNumber, startNumber)
        // setErrorCounter(false)
    }

    let inc = () => {
        dispatch({
            type: "SET-INC-VALUE"
        })


        // if (typeof state === 'number') {
        //     setDisabledDec(false)
        //     let result = state
        //     result = result + 1
        //     if (result === maxNumber) {
        //         setDisabledInc(true)
        //         setErrorCounter(true)
        //         setState(result)
        //     } else {
        //         setDisabledInc(false)
        //         setState(result)
        //     }
        // }
    }

    let dec = () => {
        dispatch({
            type: "SET-DEC-VALUE"
        })


        // if (typeof state === 'number') {
        //
        //     setDisabledInc(false)
        //     setErrorCounter(false)
        //
        //     let result = state
        //     result = result - 1
        //
        //     if (result === startNumber) {
        //         setDisabledDec(true)
        //         setState(result)
        //     } else {
        //         setDisabledDec(false)
        //         setState(result)
        //     }
        // }
    }

    let fullInc = () => {

        dispatch({
            type: "SET-FULL-INC-VALUE"
        })

        // setState(maxNumber)
        // setDisabledInc(true)
        // setDisabledDec(false)
        // setErrorCounter(true)
    }

    let fullDec = () => {

        dispatch({
            type: "SET-FULL-DEC-VALUE"
        })

        // setState(startNumber)
        // setDisabledInc(false)
        // setDisabledDec(true)
        // setErrorCounter(false)
    }

    // // local storage
    // function saveLocalState(maxNumber: number, startNumber: number) {
    //     let obj = {
    //         'max': maxNumber,
    //         'min': startNumber
    //     }
    //     localStorage.setItem('counter', JSON.stringify(obj));
    // }


    return (
        <BrowserRouter>
            <div className="App">
                <span className='title'>Click counter V2 </span>
                <Route exact path="/" render={() => <Counter
                    buttonTitle={buttonTitle}
                    state={counterState}
                    disabledInc={disabledInc}
                    disabledDec={disabledDec}
                    inc={inc}
                    dec={dec}
                    fullInc={fullInc}
                    fullDec={fullDec}
                    errorCounter={errorCounter}
                />}/>
                <Route path='/set' render={() => <Setting
                    buttonTitle={buttonTitle.set}
                    maxNumber={maxNumber}
                    startNumber={startNumber}
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    disabled={disabledSeetting}
                    error={error}
                    setApply={setApply}
                />}/>
            </div>
        </BrowserRouter>);
}

export default App;
