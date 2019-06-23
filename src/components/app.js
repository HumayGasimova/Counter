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
 *  Post component definition and export
 */
export class App extends Component {

   /**
    * Constructor
    */
   constructor(props){
    super(props);
    this.state = {
        counter: 0
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
           <Header value={this.state.counter}/>
           <div className="buttonOrder">
                <Button 
                        value={this.state.counter}
                        label={'Inc'}
                        state={this.state}
                        counter={this.counter}
                >
                            Increment
                </Button>
                <Button value={this.state.counter}
                        label={'Dec'}
                        state={this.state}
                        counter={this.counter}>
                            Decrement
                </Button>
                <Button value={this.state.counter}
                        label={'Add5'}
                        state={this.state}
                        counter={this.counter}>
                            Add 5
                </Button>
                <Button value={this.state.counter}
                        label={'Sub5'}
                        state={this.state}
                        counter={this.counter}>
                            Substract 5
                </Button>
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
       counter: state.counter
    }
}
const mapDispatchToProps = state => {
    return {
       onIncrementCounter: () => dispatch({type: 'INCREMENT'})
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);