/**
 * Libraries
 */

import React,{
    Component,
    Suspense
 } from 'react';
 
 import {
     connect
  } from 'react-redux';
 
  import {
     bindActionCreators
  } from 'redux';
 
  import {
     BrowserRouter as Router,
     Route,
     NavLink
  } from 'react-router-dom';



 /**
  * Components
  */
 

 
 /**
  * Styles
  */
 
  import './Home.scss';

  /**
  * Constants
  */
 import App from '../App';

   // const App = React.lazy(() =>  import('../App'));

  /**
  * Actions
  */
 
   /**
  * Const
  */

 /**
  *  Post component definition and export
  */

 export class WelcomePage extends Component {
 
    /**
     * Constructor
     */
   
     /**
     * Methods
     */
 
    /**
     * Markup
     */
 
    render(){
       return(
         //  <Router>
               <div>
                  <div className="header">
                  <div className="activeTab">
                           <div className="verticalDiv"/>
                           <a href="http://localhost:8084/">Welcome</a>
                           <div className="verticalDiv"/>
                        </div>
                        <div className="activeTab">
                        <div className="verticalDiv"/>
                           <NavLink 
                              to={{
                                 pathname:   '/Home/Counter'
                              }}
                              activeClassName="my-active"
                              // activeStyle={{
                              //    color: "orange",
                                 
                              // }}
                           >
                                 Counter
                           </NavLink>
                           <div className="verticalDiv"/>
                        </div>
                        <div className="activeTab">
                           <div className="verticalDiv"/>
                           <NavLink 
                              to={{
                                 pathname:   '/Home/Next'
                              }}
                              activeClassName="active"
                              activeStyle={{
                                 color: "orange"
                              }}
                           >
                              Next
                           </NavLink>
                           <div className="verticalDiv"/>
                        </div>
                        <div className="activeTab">
                           <div className="verticalDiv"/>
                           <NavLink 
                              to={{
                                 pathname:    '/Home/Next1'
                              }}
                              activeClassName="active"
                              activeStyle={{
                                 color: "orange"
                              }}
                           >
                              Next1
                           </NavLink>
                           <div className="verticalDiv"/>
                        </div>
                        <div className="activeTab">
                           <div className="verticalDiv"/>
                           <NavLink 
                              to={{
                                 pathname:    '/Home/Next2'
                              }}
                              activeClassName="active"
                              activeStyle={{
                                 color: "orange"
                              }}
                           >
                              Next2
                           </NavLink>
                           <div className="verticalDiv"/>
                        </div>
                        <div className="activeTab">
                           <div className="verticalDiv"/>
                           <NavLink 
                              to={{
                                 pathname:    '/Home/Next3'
                              }}
                              activeClassName="active"
                              activeStyle={{
                                 color: "orange"
                              }}
                           >
                              Next3
                           </NavLink>
                           <div className="verticalDiv"/>
                        </div>
                     </div>
                  <div>
                        <Route
                           exact 
                           path={   "/Home/Counter"}
                           component={App}/>
                        {/* <Route
                           exact 
                           path={  + "/Counter"}
                           component={()=>(<App/>)}/> */}
                        <Route
                           exact 
                           path={  "/Home/Next"}
                           render={()=>(<div>Hey</div>)}/>
                        <Route
                           exact 
                           path={  "/Home/Next1"}
                           render={()=>(<div>Next1</div>)}/>
                  </div>
            </div>
      //   </Router>
       );
    }
 }
 
 /**
  * Prop types
  */
  
 export default WelcomePage;