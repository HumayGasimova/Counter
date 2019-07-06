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

 import Button from '../Button/button';
 
 /**
  * Styles
  */
 
  /**
  * Constants
  */
 
 
  /**
  * Actions
  */
 import * as Actions from '../../actions/index';
 
 /**
  *  Result component definition and export
  */
 export class Result extends Component {
 
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
            <div>
                  <Button 
                         onClick={() => this.props.storeResult(this.props.counter)}
                         >
                             Result
                 </Button>
            </div>
            <div>
            <ul>
               {this.props.storedResults.map((strResult)=>{
                  return(
                      <li key={strResult.id}
                         onClick={()=>this.props.deleteResult(strResult.id)}
                         >
                         {strResult.value}
                      </li>
                  )
               })}
            </ul>
            <div>
            {console.log(this.props)}
            </div>
            </div>
         </div>
       );
    }
 }
 
 /**
  * Prop types
  */
  
 export default connect(
    (state) => {
       return {
          counter: state.ctr.counter,
          storedResults: state.res.results
       };
    },
    (dispatch) => {
       return {
          storeResult: bindActionCreators(Actions.storeResult, dispatch),
          deleteResult: bindActionCreators(Actions.deleteResult, dispatch)
       };
    }
 )(Result);
 