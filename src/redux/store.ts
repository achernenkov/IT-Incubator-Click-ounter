import {combineReducers, createStore} from "redux";
import counterReducer from "./reducer";


const rootReducer = combineReducers({
    counsterState: counterReducer
})

export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>