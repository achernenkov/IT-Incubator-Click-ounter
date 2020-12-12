import React, {useState} from 'react';
import './App.css';
import Setting from "./components/settings";
import Counter from "./components/counter";
import {Route, BrowserRouter} from 'react-router-dom';


function App() {


    return (
        <BrowserRouter>
            <div className="App">
                <span className='title'>Click counter</span>
                <Route path='/' exact render={() => <Counter />} />
                <Route path='/set' render={() => <Setting />} />
            </div>
        </BrowserRouter>);
}

export default App;
