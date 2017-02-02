import {combineReducers} from "redux";
// Reducers
import authReducer from "./auth-reducer";

// Combine Reducers
const reducers = combineReducers({
                                     authState: authReducer
                                 });

export default reducers;
