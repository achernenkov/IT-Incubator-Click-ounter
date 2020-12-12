import React, {useState} from 'react';
import './App.css';
import Setting from "./components/settings";
import Counter from "./components/counter";


function App() {


    return (
        <div className="App">
            <span className='title'>Click counter</span>
            <Counter />
            <Setting />
        </div>
    );
}

export default App;
