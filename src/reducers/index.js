import {combineReducers} from "redux";
// Reducers
import authReducer from "reducers/auth-reducer";
import searchReducer from "reducers/search-reducer";

// Combine Reducers
const reducers = combineReducers({
                                     authState: authReducer,
                                     searchState: searchReducer
                                 });

export default reducers;
