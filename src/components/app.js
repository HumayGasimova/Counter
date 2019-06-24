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
    this.state = {
        counter: 0,
        pressed: false
    }
   }
  
    /**
    * Methods
    */

   counter = (x) => {
      return this.manageState(x)
   }

   manageState = (x) => {
    this.setState({
        counter: x
    })
   }

   /**
    * Markup
    */

   render(){
      return(
       <div>
           <Header value={this.props.counter}/>
           <div className="buttonOrder">
                <Button 
                        // value={this.state.counter}
                        // label={'Inc'}
                        // state={this.state}
                        // counter={this.counter}
                        onClick={this.props.onIncrementCounter}
                >
                            Increment
                </Button>
                <Button 
                        // value={this.state.counter}
                        // label={'Dec'}
                        // state={this.state}
                        // counter={this.counter}
                        onClick={this.props.onDecrementCounter}
                        >
                            Decrement
                </Button>
                <Button 
                        // value={this.state.counter}
                        // label={'Add5'}
                        // state={this.state}
                        // counter={this.counter}
                        onClick={this.props.add5ToCounter}
                        >
                            Add 5
                </Button>
                <Button 
                        // value={this.state.counter}
                        // label={'Sub5'}
                        // state={this.state}
                        // counter={this.counter}
                        onClick={this.props.subtract5FromCounter}
                        >
                            Subtract 5
                </Button>
           </div>
           <div>
                 <Button 
                        onClick={this.props.storeResult}
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
        </div>
      );
   }
}

/**
 * Prop types
 */

const mapStateToProps = state => {
    return {
       counter: state.counter,
       storedResults: state.results
    }
}
const mapDispatchToProps = dispatch => {
    return {
       onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
       onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
       add5ToCounter: () => dispatch({type: actionTypes.ADD_5, val: 5}),
       subtract5FromCounter: () => dispatch({type: actionTypes.SUBTRACT_5, val: 5}),
       storeResult: () => dispatch({type: actionTypes.STORE_RESULT}),
       deleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);