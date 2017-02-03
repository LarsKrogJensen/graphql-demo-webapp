import {combineReducers} from "redux";
// Reducers
import authReducer from "reducers/auth-reducer";
import searchReducer from "reducers/search-reducer";
import graphiql from "reducers/graphiql-reducer"

// Combine Reducers
const reducers = combineReducers({
    authState: authReducer,
    searchState: searchReducer,
    graphiqlState: graphiql
});

export default reducers;
