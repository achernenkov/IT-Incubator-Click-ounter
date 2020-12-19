import {combineReducers, createStore} from "redux";
import counterReducer from "./reducer";


const rootReducer = combineReducers({
    state: counterReducer
})

export const store = createStore(rootReducer);