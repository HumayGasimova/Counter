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

  import {
   Link
} from 'react-router-dom';


 /**
  * Components
  */

 import './welcomePage.scss';
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
              <div className="welcomePage">Welcome</div>
              <Link to="/Home">Press to visit home page</Link>
         </div>
       );
    }
 }
 
 /**
  * Prop types
  */
  
 export default WelcomePage;


 