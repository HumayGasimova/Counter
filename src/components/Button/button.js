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

    /**
     * Methods
     */

   handleOnClick = (x) => {
      let state = this.props.value

      switch(x){
         case 'Inc':
            let inc = state + 1;
            return this.props.counter(inc)
         case 'Dec':
            let dec = state - 1;
            return this.props.counter(dec)
         case 'Add5':
            let add5 = state + 5;
               return this.props.counter(add5)
         case 'Sub5': 
            let sub5 = state - 5
            return this.props.counter(sub5)
      }
   }
 
    /**
     * Markup
     */
 
    render(){
       return(
         <div className="button"
            onClick={()=>this.handleOnClick(this.props.label)}
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