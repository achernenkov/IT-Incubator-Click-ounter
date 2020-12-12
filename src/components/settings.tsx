import React from 'react';
import Input from "./input";
import Button from "./button";


const Setting: React.FC<any> = () => {
    return(
        <div className='SetBlock'>
            <span className='span-set'>Max Value</span>
            <Input/>
            <span className='span-set'>Start Value</span>
            <Input/>
            <Button/>
        </div>
    )
}


export default Setting;