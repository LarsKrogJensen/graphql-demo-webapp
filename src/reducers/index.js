import {combineReducers} from "redux";
// Reducers
import authReducer from "reducers/auth-reducer";
import search from "search";
import graphiql from "reducers/graphiql-reducer"

// Combine Reducers
const reducers = combineReducers({
    authState: authReducer,
    [search.constants.NAME]: search.reducer,
    graphiqlState: graphiql
});

export default reducers;
