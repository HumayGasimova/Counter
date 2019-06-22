
/**
 * Libraries
 */

import {
    createStore,
    applyMiddleware,
    compose
} from "redux";

import {
    combineReducers
} from 'redux';
// import {
//     logger
// } from 'redux-logger';
import {
        createLogger
    } from 'redux-logger';

import thunk from 'redux-thunk';

// import rootReducers from "../reducers/rootReducer";
import counterReducer from '../reducers/counterReducer';

/**
 * first way to add logger
 */

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     exampleReducer,
//   storeEnhancers(applyMiddleware(logger, thunk))
// );


/**
 * second way to add logger
 */

const middleware = [thunk];

/**
 * actions in a collapsed view
 */

const logger = createLogger({ collapsed: true });

/**
 * do not show in production
 */

if (process.env.ENVIRONMENT !== 'production') {
    middleware.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
const store = createStoreWithMiddleware(counterReducer)

export default store;