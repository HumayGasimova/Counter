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
    Link
   } from 'react-router-dom';

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


 /**
 * Actions
 */
import * as Actions from '../actions/index';
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
          <Link to="/App/next">Next</Link>
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
         onIncrementCounter: bindActionCreators(Actions.increment, dispatch),
         onDecrementCounter: bindActionCreators(Actions.decrement, dispatch),
         multiplyCounter: bindActionCreators(Actions.multiply, dispatch),
         divideCounter: bindActionCreators(Actions.divide, dispatch),
         storeResult: bindActionCreators(Actions.storeResult, dispatch),
         deleteResult: bindActionCreators(Actions.deleteResult, dispatch)
      };
   }
)(App);