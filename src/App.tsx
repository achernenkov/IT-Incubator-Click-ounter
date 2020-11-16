import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";
import Button from "./components/button";


function App() {

    let [state, setState] = useState<number>(0)
    let [style, setStyle] = useState<string>('')
    // Функции

    let styles = ''

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

    const counterFullPlus =  () => {
        let styles = 'colorRed'
        setStyle(styles)
        setState(5)
    }

    const counterFullMinus =  () => {
        setStyle('')
        setState(0)
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
        </div>
    );
}

export default App;
