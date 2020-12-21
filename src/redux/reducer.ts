export function restoreState() {
    let obj = localStorage.getItem('counter')
    return obj ? JSON.parse(obj) : {'max': null, 'min': null}
}

const saveLocalState = (maxNumber: number, startNumber: number) => {
    let obj = {
        'max': maxNumber,
        'min': startNumber
    }
    localStorage.setItem('counter', JSON.stringify(obj));
}


export type ButtonTitleType = {
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
    buttonTitle: {
        inc: 'Inc',
        dec: 'Dec',
        fullinc: 'Full-Inc',
        fulldec: 'Full-Dec',
        set: 'Set',
        setting: 'Setting'
    },
    maxNumber: restoreState().max,
    startNumber: restoreState().min,
    disabledSeetting: true,
    disabledInc: true,
    disabledDec: true,
    error: false,
    errorCounter: false,
    counterState: 'Setting please'
}


const counterReducer = (state: StateType = initialState, action: TotalTypeAC) => {
    switch (action.type) {
        case 'SET-MAX-VALUE': {

            let disabledSeetting
            let error

            if (action.payload.maxNumber > state.startNumber) {
                disabledSeetting = false
                error = false
            } else {
                disabledSeetting = true
                error = true
            }
            return {...state, ...action.payload, disabledSeetting, error}
        }
        case 'SET-START-VALUE': {
            let disabledSeetting
            let error
            if (action.payload.startNumber >= state.maxNumber) {
                disabledSeetting = true
                error = true
            } else {
                disabledSeetting = false
                error = false
            }

            return {...state, ...action.payload, disabledSeetting, error}
        }
        case
        "INC-VALUE" : {
            let counterState
            let disabledDec
            let disabledInc
            let errorCounter

            if (typeof state.counterState === 'string') {
                counterState = 1
            } else {
                if (state.counterState === state.maxNumber) {
                    counterState = state.maxNumber
                } else {
                    if (state.counterState === state.maxNumber - 1) {
                        disabledInc = true
                        errorCounter = true
                    }
                    counterState = state.counterState + 1
                    disabledDec = false
                }
            }
            return {...state, counterState, disabledDec, disabledInc, errorCounter}
        }
        case
        "DEC-VALUE" : {
            {
                debugger
                let counterState
                let disabledDec
                let disabledInc
                let errorCounter

                if (typeof state.counterState === 'string') {
                    counterState = 0
                } else {
                    if (state.counterState === state.startNumber) {
                        counterState = state.startNumber
                    } else {
                        if (state.counterState === state.startNumber + 1) {
                            disabledDec = true
                        }
                        disabledInc = false
                        errorCounter = false
                        counterState = state.counterState - 1
                    }
                }
                return {...state, counterState, disabledDec, disabledInc, errorCounter}
            }
        }
        case
        "FULL-INC-VALUE" : {
            let counterState = state.maxNumber
            let disabledDec = false
            let disabledInc = true
            let errorCounter = true
            return {...state, counterState, disabledDec, disabledInc, errorCounter}
        }
        case
        "FULL-DEC-VALUE" : {
            {
                let counterState = state.startNumber
                let disabledDec = true
                let disabledInc = false
                let errorCounter = false
                return {...state, counterState, disabledDec, disabledInc, errorCounter}
            }
        }
        case
        "SET-APPLY" : {
            let disabledInc = false
            let disabledDec = true
            let counterState = state.startNumber

            saveLocalState(state.maxNumber, state.startNumber)

            return {...state, counterState, disabledInc, disabledDec}
        }
        case "SETTING-CLICK": {
            debugger
            let disabledSeetting = false
            if (state.maxNumber === null && state.startNumber === null) {
                disabledSeetting = true
            }
            return {...state, disabledSeetting}
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
    | SettingClickAction

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
    type: 'INC-VALUE'
}

type SetDecValueAction = {
    type: 'DEC-VALUE'
}

type SetFullIncValueAction = {
    type: 'FULL-INC-VALUE'
}

type SetFullDecValueAction = {
    type: 'FULL-DEC-VALUE'
}

type SetApplyAction = {
    type: 'SET-APPLY'
}

type SettingClickAction = {
    type: 'SETTING-CLICK'
}