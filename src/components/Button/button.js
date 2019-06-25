/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 /**
  * Styles
  */

 import './button.scss';
 
 /**
  *  Button component definition and export
  */

 export class Button extends Component {

 
    render(){
       return(
         <div className={this.props.pressed ? "buttonPressed":"button"}
            onClick={this.props.onClick}
            >
          {this.props.children}
       </div>
       );
    }
 }
 
 /**
  * Prop types
  */
 
 export default Button;