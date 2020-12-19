import {restoreState} from "../App";

type ButtonTitleType = {
    inc: string
    dec: string
    fullinc: string
    fulldec: string
    set: string
    setting: string
}

type stateType = {
    buttonTitle: ButtonTitleType
    maxNumber: number
    startNumber: number
    disabledSeetting: boolean
    disabledInc: boolean
    disabledDec: boolean
    error: boolean
    errorCounter: boolean
    counterState: string | number
}

let initialState = {
    buttonTitle:{
        inc: 'Inc',
        dec: 'Dec',
        fullinc: 'Full-Inc',
        fulldec: 'Full-Dec',
        set: 'Set',
        setting: 'Setting'
    },
    maxNumber: restoreState().max,
    startNumber: restoreState().min,
    disabledSeetting: false,
    disabledInc: false,
    disabledDec: false,
    error: false,
    errorCounter: false,
    counterState: 'Setting please',
}

const counterReducer = ( state: stateType = initialState, action: any) => {
    switch (action.type){
        default:
           return state
    }
}

export default counterReducer