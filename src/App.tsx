import React, {useState} from 'react';
import './App.css';
import Setting from "./components/settings";
import Counter from "./components/counter";
import {Route, BrowserRouter} from 'react-router-dom';

// disabled and error

export type ButtonTitleType = {
    inc: string
    reset: string
    fullinc: string
    fullres: string
    set: string
    setting: string
}



function App() {

    const buttonTitle: ButtonTitleType = {
        inc: 'Inc',
        reset: 'Reset',
        fullinc: 'Full-Inc',
        fullres: 'Full-Res',
        set: 'Set',
        setting: 'Setting'
    }

    return (
        <BrowserRouter>
            <div className="App">
                <span className='title'>Click counter</span>
                <Route path='/' exact render={() => <Counter
                    buttonTitle={buttonTitle}
                />} />
                <Route path='/set' render={() => <Setting
                    buttonTitle={buttonTitle.set}
                />} />
            </div>
        </BrowserRouter>);
}

export default App;
