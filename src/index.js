/**
 * Libraries
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
   Provider
} from 'react-redux';

import {
   Route,
   Switch
} from 'react-router-dom';

import {
   ConnectedRouter
} from 'connected-react-router';

import {
    history 
   } from './store/store';

import store from "./store/store";

/**
 * Components
 */

import App from './components/App';
import WelcomePage from './components/WelcomePage/welcomePage';


ReactDOM.render(
   <Provider store={store}>
      <ConnectedRouter history={history}>
         <WelcomePage>
               {/* <Route 
                  exact 
                  path="/"
                  render={()=>(<div>Hey</div>)}/> */}
               {/* <Route 
                  exact 
                  path="/"
                  component={WelcomePage}/> */}
               {/* <Route 
                  exact 
                  path="/App"
                  component={App}/> */}
         </WelcomePage>
         </ConnectedRouter>
      </Provider>,
   document.getElementById('app')
);