import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './rootReducer';

const middlewares = [];
let composeEnhancers = compose;

if (process.env.NODE_ENV === `development`) {
    const createLogger = require(`redux-logger`);
    const logger = createLogger();
    middlewares.push(logger);

    composeEnhancers = composeWithDevTools;
}


const persistedState = {}//localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(...middlewares)));

store.subscribe(() => {
    console.log("State change, about to save")
    persistState()

})

// @debounce
function persistState()
{
    console.log("saving")
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
}

export default store;