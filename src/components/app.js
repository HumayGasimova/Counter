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

import Header from './Header/header';
import Button from './Button/button';
import InputField from './InputField/inputField';

/**
 * Styles
 */

import './app.scss';

 /**
 * Constants
 */

import * as actionTypes from '../constants/action-types';

 /**
 * Actions
 */

import * as counterActions from '../actions/counterAction';
import * as resultActions from '../actions/resultActions';

/**
 *  Post component definition and export
 */
export class App extends Component {

   /**
    * Constructor
    */
   constructor(props){
    super(props);
    this.state={
      inputValue: 0
    }
   }
  
    /**
    * Methods
    */

   inputNumber = (x) => {
      return this.manageState(x)
   }

   manageState = (x) => {
    this.setState({
      inputValue: x
    })
   }

   /**
    * Markup
    */

   render(){
      return(
       <div>
           <Header value={this.props.counter}/>
           
           <div>
             <InputField
               onIncrementCounter={this.props.onIncrementCounter}
               onDecrementCounter={this.props.onDecrementCounter}
               multiplyCounter={this.props.multiplyCounter}
               divideCounter={this.props.divideCounter}
             />
           </div>
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
         onIncrementCounter: bindActionCreators(counterActions.onIncrementCounter, dispatch),
         onDecrementCounter: bindActionCreators(counterActions.onDecrementCounter, dispatch),
         multiplyCounter: bindActionCreators(counterActions.multiplyCounter, dispatch),
         divideCounter: bindActionCreators(counterActions.divideCounter, dispatch),
         storeResult: bindActionCreators(resultActions.storeResult, dispatch),
         deleteResult: bindActionCreators(resultActions.deleteResult, dispatch)
      };
   }
)(App);