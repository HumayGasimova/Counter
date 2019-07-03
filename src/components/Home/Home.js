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
     BrowserRouter as Router,
     Route,
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
 import App from '../App';
 
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
          <Router>
               <div>
                  <div className="header">
                        <a href="http://localhost:8084/">Welcome</a>
                        <div className="verticalDiv"/>
                        <Link to={{
                           pathname: this.props.match.url + '/Counter'
                        }}>Conter</Link>
                        <Link to={{
                           pathname: this.props.match.url + '/Next'
                        }}>Next</Link>
                     </div>
                  <div>
                        <Route
                           exact 
                           path={this.props.match.url + "/Counter"}
                           component={App}/>
                            <Route
                           exact 
                           path={this.props.match.url + "/Next"}
                           render={()=>(<div>Hey</div>)}/>
                  </div>
            </div>
        </Router>
       );
    }
 }
 
 /**
  * Prop types
  */
  
 export default WelcomePage;