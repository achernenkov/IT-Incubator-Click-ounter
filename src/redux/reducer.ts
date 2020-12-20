import {restoreState} from "../App";

type ButtonTitleType = {
    inc: string
    dec: string
    fullinc: string
    fulldec: string
    set: string
    setting: string
}

export type StateType = {
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
    maxNumber: 0,
    startNumber: 0,
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
        case 'SET-START-VALUE':
            return {...state, ...action.payload}
        case "SET-INC-VALUE":{
            let newValue
            if(typeof state.counterState === 'string' ){
                newValue = 1
            }else {
                newValue = state.counterState + 1
            }
            return {...state, counterState: newValue }
        }
        case "SET-DEC-VALUE":{
            {
                let newValue
                if(typeof state.counterState === 'string' ){
                    newValue = 0
                }else {
                    newValue = state.counterState - 1
                }
                return {...state, counterState: newValue }
            }
        }
        case "SET-FULL-INC-VALUE":{
            let newValue = state.maxNumber
            return {...state, counterState: newValue}
        }
        case "SET-FULL-DEC-VALUE":{
            {
                let newValue = state.startNumber
                return {...state, counterState: newValue}
            }
        }
        case "SET-APPLY":{
            return {...state}
        }
        default:
           return state
    }
}

export default counterReducer


/// action type

type TotalTypeAC = SetMaxValueAction
    | SetStartValueAction
    | SetIncValueAction
    | SetDecValueAction
    | SetFullIncValueAction
    | SetFullDecValueAction
    | SetApplyAction

type SetMaxValueAction = {
    type: 'SET-MAX-VALUE'
    payload: {
        maxNumber: number
    }
}

type SetStartValueAction = {
    type: 'SET-START-VALUE'
    payload: {
        startNumber: number
    }
}

type SetIncValueAction = {
    type: 'SET-INC-VALUE'
}

type SetDecValueAction = {
    type: 'SET-DEC-VALUE'
}


type SetFullIncValueAction = {
    type: 'SET-FULL-INC-VALUE'
}

type SetFullDecValueAction = {
    type: 'SET-FULL-DEC-VALUE'
}

type SetApplyAction = {
    type: 'SET-APPLY'
}