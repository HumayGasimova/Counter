/**
 * Libraries
 */

import React,{
   Component
} from 'react';

import {
    connect
 } from 'react-redux';

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
           <ul>
              {this.props.storedResults.map((strResult)=>{
                 return(
                     <li key={strResult.id}
                        onClick={()=>this.props.deleteResult(strResult.id)}>
                        {strResult.value}
                     </li>
                 )
              })}
           </ul>
           <div>
           
           </div>
        </div>
      );
   }
}

/**
 * Prop types
 */

const mapStateToProps = state => {
    return {
       counter: state.ctr.counter,
       storedResults: state.res.results
    }
}
const mapDispatchToProps = dispatch => {
    return {
       onIncrementCounter: (num) => dispatch({type: actionTypes.INCREMENT, number: num}),
       onDecrementCounter: (num) => dispatch({type: actionTypes.DECREMENT, number: num}),
       multiplyCounter: (num) => dispatch({type: actionTypes.MULTIPLY, number: num}),
       divideCounter: (num) => dispatch({type: actionTypes.DIVIDE, number: num}),
       storeResult: (res) => dispatch({type: actionTypes.STORE_RESULT, result: res}),
       deleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);