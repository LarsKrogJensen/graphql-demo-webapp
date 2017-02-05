import {combineReducers} from "redux";
// Reducers
import auth from "auth";
import search from "search";
import console from "queryConsole"

// Combine Reducers
const reducers = combineReducers({
    [auth.constants.NAME]: auth.reducer,
    [search.constants.NAME]: search.reducer,
    [console.constants.NAME]: console.reducer
});

export default reducers;
