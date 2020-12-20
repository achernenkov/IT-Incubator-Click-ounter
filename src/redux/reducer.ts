import {restoreState} from "../App";

type ButtonTitleType = {
    inc: string
    dec: string
    fullinc: string
    fulldec: string
    set: string
    setting: string
}

type StateType = {
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

let initialState: StateType = {
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
    counterState: 'Setting please'
}

const counterReducer = ( state: StateType = initialState, action: TotalTypeAC) => {
    switch (action.type){
        case 'SET-MAX-VALUE':
            return {...state, ...action.payload}
        default:
           return state
    }
}

export default counterReducer


/// action type

type TotalTypeAC = SetMaxValueAC

type SetMaxValueAC = {
    type: 'SET-MAX-VALUE'
    payload: {
        maxNumber: number
    }
}