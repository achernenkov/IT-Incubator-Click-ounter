import React from 'react';
import './App.css';
import Setting from "./components/settings";
import Counter from "./components/counter";
import {Route, BrowserRouter} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {StateType} from "./redux/reducer";

function App() {

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
    }

    const setApply = () => {dispatch({type: 'SET-APPLY'})}
    const inc = () => {dispatch({type: "SET-INC-VALUE"})}
    const dec = () => {dispatch({type: "SET-DEC-VALUE"})}
    const fullInc = () => {dispatch({type: "SET-FULL-INC-VALUE"})}
    const fullDec = () => {dispatch({type: "SET-FULL-DEC-VALUE"})}
    const settingClick = () => {dispatch({type: 'SETTING-CLICK'})}

    return (
        <BrowserRouter>
            <div className="App">
                <span className='title'>Click counter V3 </span>
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
                    settingClick={settingClick}
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
