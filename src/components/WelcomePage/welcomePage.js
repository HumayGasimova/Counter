/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 import {
     connect
  } from 'react-redux';
 
  import {
     bindActionCreators
  } from 'redux';
 
  import {
     Route
  } from 'react-router-dom';

  import App from '../App';
 /**
  * Components
  */
 

 
 /**
  * Styles
  */
 

  /**
  * Constants
  */
 
 
  /**
  * Actions
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
        <div>
           <ul>
              <li>Home</li>
              <a href="http://localhost:8084/App">App</a>

              <Route 
                  exact 
                  path="/App"
                  component={App}/>
           </ul>
         </div>
       );
    }
 }
 
 /**
  * Prop types
  */
  
 export default WelcomePage;