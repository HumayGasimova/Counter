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
 

 
 /**
  * Styles
  */
 
  import './Home.scss';

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
        <div className="header">
              <a href="http://localhost:8084/">Welcome</a>
              <div className="verticalDiv"/>
              <Link to="/Home/Counter">Conter</Link>
         </div>
       );
    }
 }
 
 /**
  * Prop types
  */
  
 export default WelcomePage;