import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";
import Button from "./components/button";
import Input from "./components/input";


function App() {

    let [state, setState] = useState<number>(0)
    let [style, setStyle] = useState<string>('')
    let [error, setError] = useState<boolean>(false)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    // Функции

    let styles = ''
    let errors = false

    const counterPlus = () => {
        let countPlus = state + 1
        if (countPlus >= 5) {
            countPlus = 5
            styles = 'colorRed'
            setStyle(styles)
        }
        setState(countPlus)
    }

    const counterMinus = () => {
        setStyle('')
        let countMinus = state
        countMinus--
        if (countMinus <= 0) {
            countMinus = 0
        }
        setState(countMinus)
    }

    const counterFullPlus = () => {
        let styles = 'colorRed'
        setStyle(styles)
        setState(5)
    }

    const counterFullMinus = () => {
        setStyle('')
        setState(0)
    }

    const maxValueSet = (value: string) => {
        let numberValue = Number(value)
        if (numberValue < 0) {
            setMaxValue(0)
            errors = true
            setError(errors)
        }else{
            errors = false
            setError(errors)
            setMaxValue(numberValue)
        }
    }

    const startValueSet = (value: string) => {
        debugger
        let numberValue = Number(value)
        if (numberValue < 0) {
            setStartValue(0)
            errors = true
            setError(errors)
        }else if(startValue+1 === maxValue){
            errors = true
            setError(errors)
            setStartValue(maxValue-1)
        }
        else{
            errors = false
            setError(errors)
            setStartValue(numberValue)
        }
    }

    const counterSetSetting = () => {

    }

    return (
        <div className="App">

            <span className='title'>Click counter</span>
            <div className='CounterWrapper'>
                <Counter
                    states={state}
                    styles={style}
                />
                <div className="buttonBlock">
                    <Button
                        title='Inc'
                        counter={counterPlus}
                    />
                    <Button
                        title='Reset'
                        counter={counterMinus}
                        states={state}
                    />
                    <span className='span'>Additional features</span>
                    <Button
                        title='FullInc'
                        counter={counterFullPlus}
                    />
                    <Button
                        title='FullReset'
                        counter={counterFullMinus}
                        states={state}
                    />
                </div>
            </div>
            <div className='SetBlock'>
                <span className='span-set'>Max Value</span>
                <Input value={maxValue} changeValue={maxValueSet} error={error}/>
                <span className='span-set'>Start Value</span>
                <Input value={startValue} changeValue={startValueSet} error={error}/>
                <Button title='Set' counter={counterSetSetting}/>
            </div>
        </div>
    );
}

export default App;
