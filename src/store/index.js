import {
    // applyMiddleware,
    // compose,
    createStore
} from 'redux';
import reducers from '../reducers';

// const middlewares = [];
//
// if (process.env.NODE_ENV === `development`) {
//   const createLogger = require(`redux-logger`);
//   const logger = createLogger();
//   middlewares.push(logger);
//   middlewares.push( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// }
//
// const composeEnhancers =
//    process.env.NODE_ENV !== 'production' &&
//    typeof window === 'object' &&
//    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//        // Specify extension’s options like name, actionsBlacklist, actionsCreators or immutablejs support if needed
//      }) : compose;
//
// const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;