/**
 * Libraries
 */

import React, {
   // Suspense
} from 'react';
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

// import asyncComponent from './components/hoc/hoc'; 
// const AsyncHome = asyncComponent(() => { 
//    return  import('./components/Home/Home'); 
// }); 

// const Home = React.lazy(() =>  import('./components/Home/Home'));

ReactDOM.render(
   <Provider store={store}>
      <ConnectedRouter history={history}>
            <Switch>
            <Route 
                  // exact 
                  path="/Home"
                  component={Home}/>
               <Route 
                  exact 
                  path="/Welcome"
                  component={WelcomePage}/>
             
               {/* <Redirect from="/" to="/Welcome"/> */}
               
               {/* <Route 
                  // exact 
                  path="/Home"
                  component={AsyncHome}/> */}
               {/* <Route 
                  render={()=>(<h1>404</h1>)}/> */}
               {/* <Route 
                  exact 
                  path="/"
                  render={()=>(<div>Hey</div>)}/> */}

               {/* <Route
                  // exact 
                  path="/Home"
                  render={() => (
                     <Suspense fallback={<div>Loading...</div>}>
                        <Home />
                     </Suspense>
                  )}/> */}
            </Switch>
         </ConnectedRouter>
      </Provider>,
   document.getElementById('app')
);