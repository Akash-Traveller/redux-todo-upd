import { combineReducers } from "redux";
import { operationsReducer } from "./todofunct/reducers/reducers";

export const rootReducer = combineReducers({
    operationsReducer
})
    