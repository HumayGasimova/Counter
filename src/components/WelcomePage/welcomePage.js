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
           </ul>
         </div>
       );
    }
 }
 
 /**
  * Prop types
  */
  
 export default WelcomePage;