
/**
 * Libraries
 */

import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose
} from "redux";

// import {
//     logger
// } from 'redux-logger';

import {
        createLogger
    } from 'redux-logger';

import thunk from 'redux-thunk';

import { 
    createBrowserHistory 
} from 'history';
import { 
    routerMiddleware 
} from 'connected-react-router';
import createRootReducer from '../reducers/reducers';

// import rootReducers from "../reducers/rootReducer";
// import counterReducer from '../reducers/counterReducer';
// import resultReducer from '../reducers/resultReducer';

/**
 * Combine Reducers
 */

// const rootReducer = combineReducers({
//     ctr: counterReducer,
//     res: resultReducer
// })

/**
 * first way to add logger
 */

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     exampleReducer,
//   storeEnhancers(applyMiddleware(logger, thunk))
// );

const middleware = [];

/**
 * actions in a collapsed view
 */

const logger = createLogger({ collapsed: true });

/**
 * own middleware
 */

// const logger = store => {
//     return next => {
//         return action => {
//             console.log('[Middleware] Dispatching', store.getState())
//             console.log('[Middleware] Dispatching', action);
//             const result = next(action);
//             console.log('[Middleware] Dispatching', store.getState())
//             return result;        
//         }
//     }
// }

/**
 * do not show in production
 */

if (process.env.ENVIRONMENT !== 'production') {
    middleware.push(logger);
}

/**
 * second way to add logger
 */

// const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
// const store = createStoreWithMiddleware(rootReducer)

// export default store;

/**
 * third way to add logger
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();
// export const history = createBrowserHistory({basename: '/my-app'});

export default createStore(
    createRootReducer(history), 
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            logger,
            thunk
            )
        )
    );
