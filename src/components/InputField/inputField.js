/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
/**
 * Components
 */

 import Button from '../Button/button';
 
/**
 * Styles
 */

import './input.scss';
 

 
 /**
  *  InputField component definition and export
  */

 export class InputField extends Component {

    constructor(props){
       super(props);
          this.state = {
              inputNumber: 0
        }
    }
    

    numberAddHandler = (event) => {
        let num = parseInt(event.target.value,10)

        this.setState({
            inputNumber: num
        })
    }

    // changeToNumber = () => {
    //     parseInt(this.state.inputNumber,10)
    // }
    
 
    render(){
       return(
           <div>
               <div className="inputField">
                    <input
                        
                        type="number"
                        placeholder="Insert Number"
                        onChange={this.numberAddHandler}
                    />
                </div>
                <div className="buttonOrder">
                    <Button 
                           
                            onClick={() => this.props.onIncrementCounter(this.state.inputNumber)}
                    >
                                Increment
                    </Button>
                    <Button 
                           
                            onClick={() => this.props. onDecrementCounter(this.state.inputNumber)}
                            >
                                Decrement
                    </Button>
                    <Button 
                            
                            onClick={() => this.props.multiplyCounter(this.state.inputNumber)}
                            >
                                Multiply
                    </Button>
                    <Button
                            onClick={() => this.props.divideCounter(this.state.inputNumber)}
                            >
                                Divide
                    </Button>
                </div>
           </div>
       );
    }
 }
 
/**
 * Prop types
 */ 
 
 export default InputField;