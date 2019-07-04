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
   Switch,
   Redirect
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

import WelcomePage from './components/WelcomePage/welcomePage';
import Home from './components/Home/Home';
import App from './components/App';

ReactDOM.render(
   <Provider store={store}>
      <ConnectedRouter history={history}>
            <Switch>
                  {/* <Route 
                     exact 
                     path="/"
                     render={()=>(<div>Hey</div>)}/> */}
                  <Route 
                     exact 
                     path="/WelcomePage"
                     component={WelcomePage}/>
                     {/* <Redirect from="/" to="/welcomePage"/> */}
                  <Route 
                     // exact 
                     path="/Home"
                     component={Home}/>
                  <Route 
                     render={()=>(<h1>404</h1>)}/>
                     {/*  render={
                         props => <Home {...props}/>
                      }/> */}
               </Switch>
         </ConnectedRouter>
      </Provider>,
   document.getElementById('app')
);